<?php
    class User{
        public $id;
        public $email;
        public $tests;
    }

    class Test{
        public $id;
        public $userId;
        public $answers;
    }

    class Answer{
        public $id;
        public $value;
        public $questionId;
        public $answer_order;
        public $is_correct;
    }

    class Question{
        public $id;
        public $value;
    }

    class UserAnswer{
        public $id;
        public $questionId;
        public $testId;
        public $answerId;
        public $userId;
    }
?>