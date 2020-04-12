import React from "react";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.enter = this.enter.bind(this);
    }
    render() {
        return <div className="p-5">
            <p class="font-weight-bold">Пройти тест</p>
            <button type="button" class="btn btn-primary" onClick={()=>{this.enter()}}>Тест 1</button>
            <p class="font-weight-bold">Результаты</p>
        </div>;

    }
    enter() {
        this.props.history.push("/tests");
    }
}
export default Welcome;