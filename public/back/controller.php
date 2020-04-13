<?php
//прием запросов с клиента
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");

include_once 'repository.php';

$repository = new Repository();

if(isset($_GET['key'])){
    switch($_GET['key']){
        case 'enter':
            echo json_encode($repository->Enter($_GET['login'],$_GET['password']));
            return;
        case 'get-questions':
            echo json_encode($repository->GetQuestions());
            return;
        case 'save-answers':
            $data = json_decode(file_get_contents("php://input"));
            
            echo json_encode($repository->SaveAnswers($data, $_GET['userId']));
            return;
        default: 
            echo json_encode(array("message" => "Ключ запроса не найден"));
            return;
    }


} else {
    http_response_code(500);
    echo json_encode(array("message" => "Отсутствует ключ запроса."));
}
?>