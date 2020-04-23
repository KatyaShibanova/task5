import React from "react";
import TestService from "../TestService";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.enter = this.enter.bind(this);
        this.service = new TestService();
    }
    render() {
        return <form className="w-50 p-5" id="userForm">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">E-mail</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="button" className="btn btn-primary" onClick={()=>{this.enter()}}>Submit</button>
        </form>;
    }
    enter() {
        const { email: {value: emailValue}, password: {value: passwordValue} } = window.userForm.elements;
        console.log([emailValue, passwordValue]);
        this.service.Enter(emailValue, passwordValue).then(data => {
            console.log(data);
            this.props.history.push("/welcome");
        }).catch(error => {
            //ошибка
        })
        
    }
}

export default Home;