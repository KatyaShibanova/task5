import React from "react";

class Tests extends React.Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
        this.Counter = this.Counter.bind(this);
        this.ButtonBlock = this.ButtonBlock.bind(this);
    }

    Counter() {
        this.setState(prevState => ({
            score: prevState.score + 1
        }))
    }
    
    ButtonBlock() {
        this.refs.btn.setAttribute("disabled", "disabled");
    }

    render() {
        return <div className="p-5">
            <div><p class="font-weight-bold">Q1</p>
                <div><p class="font-weight-normal">Text</p>
                    <button type="button" id="1" class="btn btn-primary btn-lg btn-block">Block level button</button>
                    <button ref="btn" type="button" id="2" class="btn btn-primary btn-lg btn-block" onClick={() => { this.Counter(); this.ButtonBlock()}}>Block level button</button>
                    <button type="button" id="3" class="btn btn-primary btn-lg btn-block">Block level button</button>
                    <button type="button" id="4" class="btn btn-primary btn-lg btn-block">Block level button</button>
                </div>
            </div>
            <p class="font-weight-bold">Результат: {this.state.score}</p>
        </div>;
    }
}

export default Tests;