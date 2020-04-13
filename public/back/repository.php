<?php
    //обработка запросов
    include_once './database.php';
    include_once 'models.php';
    class Repository{
        private $database;

        public function __construct()
        {
            $this->database = new DataBase();
        }

        public function Enter($login, $password){
            if($login){
                try{
                    $user = $this->GetUser($login, $password);
                    if($user){
                        return $user;
                    }
                    $s = $this->database->db->prepare("INSERT INTO test_user (email, password) VALUES (?,?)");
                    $s->execute(array($login, $password));
                    $fullUser = $this->GetUser($login,$password);
                    return $fullUser;
                } catch(Exception $e) {
                    http_response_code(400);
                    return array("message" => "Ошибка добавления пользователя", "error" => $e->getMessage());
                }
                
            } else {
                http_response_code(500);
                return array("message" => "Введите логин");
            }
            
        }

        private function GetUser($login, $password){
            $query = "SELECT id, email FROM test_user WHERE email = ? AND password = ?";
 
            // подготовка запроса 
            $stmt = $this->database->db->prepare( $query );
            $stmt->setFetchMode(PDO::FETCH_CLASS, 'User');
            // инъекция 
            $login=htmlspecialchars(strip_tags($login));
            // выполняем запрос 
            $stmt->execute(array($login, $password));

            $user = $stmt->fetch();
            if($user){
                $user->tests = $this->GetUserTests($user->id);
            }
            return $user;
        }

        private function GetUserAnswers($userId){
            if(!$userId){
                http_response_code(400);
                return array("message" => "Укажите id пользователя");
            }
            try{
                $sth = $this->database->db->prepare("SELECT ua.id, q.id as questionId, ua.userId, q.value as question, a.value as answer, a.is_correct FROM user_answer ua JOIN question q ON ua.questionId = q.id JOIN answer a ON ua.answerId = a.id WHERE ua.userId = ?");
                $sth->setFetchMode(PDO::FETCH_CLASS, 'Answer');
                $sth->execute(array($userId));
                return $sth->fetchAll();
            } catch (Exception $e){
    
                // код ответа 
                http_response_code(500);
            
                // сообщение об ошибке 
                echo json_encode(array(
                    "message" => "Ошибка загрузк ответов",
                    "error" => $e->getMessage()
                ));
            }
        }

        public function GetUserTests($userId){
            if(!$userId){
                http_response_code(400);
                return array("message" => "Укажите id пользователя");
            }
            try{
                $sth = $this->database->db->prepare("SELECT * FROM test WHERE userId = ?");
                $sth->setFetchMode(PDO::FETCH_CLASS, 'Test');
                $sth->execute(array($userId));
                $tests=array();
                foreach ($sth->fetchAll() as $test){
                    $test->answers=$this->GetUserAnswers($test->userId);
                    $tests[]=$test;
                }
                return $tests;
            } catch (Exception $e){
    
                // код ответа 
                http_response_code(500);
            
                // сообщение об ошибке 
                echo json_encode(array(
                    "message" => "Ошибка загрузк ответов",
                    "error" => $e->getMessage()
                ));
            }
        }

        public function GetQuestions(){
            $sth = $this->database->db->query("SELECT * FROM questions");
            $sth->setFetchMode(PDO::FETCH_CLASS, 'Question');
            $questions=array();
            foreach ($sth->fetchAll() as $question){
                $question->answers=$this->GetQuestionAnswers($question->id);
                $questions[]=$question;
            }
            return $questions;
        }

        private function GetQuestionAnswers($questionId){
            if(!$questionId){
                http_response_code(400);
                return array("message" => "Укажите id вопроса");
            }
            try{
                $sth = $this->database->db->prepare("SELECT * FROM answer WHERE questionId = ?");
                $sth->setFetchMode(PDO::FETCH_CLASS, 'Answer');
                $sth->execute(array($questionId));
                return $sth->fetchAll();
            } catch (Exception $e){
    
                // код ответа 
                http_response_code(500);
            
                // сообщение об ошибке 
                echo json_encode(array(
                    "message" => "Ошибка загрузк ответов",
                    "error" => $e->getMessage()
                ));
            }
        }

        
        public function SaveAnswers($answers, $userId){
            $query = $this->database->db->prepare("INSERT test (userId) VALUES (?)");
            $query->execute(array($userId));
            $testId = $this->database->db->lastInsertId();
            foreach ($answers as $answer) {
                $query = $this->database->db->prepare("INSERT user_answer (questionId, testId, answerId, userId) VALUES (?,?,?,?)");
                $query->execute(array($answer->questionId, $testId, $answer->answerId, $userId));
            }
            return true;            
        }
    }
?>