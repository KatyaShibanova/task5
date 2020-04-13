CREATE TABLE IF NOT EXISTS test_user(
    id int(10) PRIMARY KEY AUTO_INCREMENT,
    Email varchar(255),
    Password varchar(255)    
);

CREATE TABLE IF NOT EXISTS question(
    id int(10) PRIMARY KEY AUTO_INCREMENT,
    value varchar(255)
);

CREATE TABLE IF NOT EXISTS answer(
    id int(10) PRIMARY KEY AUTO_INCREMENT,
    value varchar(255),
    questionId int(10),
    answer_order int(1),
    isCorrect bit,
    FOREIGN KEY (questionId) REFERENCES question(id)
    
);

CREATE TABLE IF NOT EXISTS user_answer(
    id int(10) PRIMARY KEY AUTO_INCREMENT,
    questionId int(10),
    answerId int(10),
    userId int(10),
    FOREIGN KEY (questionId) REFERENCES question(id),
    FOREIGN KEY (answerId) REFERENCES answer(id),
    FOREIGN KEY (userId) REFERENCES test_user(id)
);
