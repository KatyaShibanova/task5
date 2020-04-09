import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.enter = this.enter.bind(this);
    }
    render() {
        return <form className="w-50 p-5">
            <div class="form-group">
                <label for="exampleInputEmail1">E-mail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" class="btn btn-primary" onClick={()=>{this.enter()}}>Submit</button>
        </form>;
    }
    enter() {
        this.props.history.push("/tests");
    }
}

export default Home;