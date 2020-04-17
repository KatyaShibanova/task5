import React from "react";

const visible = {
    visibility:"visible"
}

const hidden = {
    visibility:"hidden"
}


class Tests extends React.Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
        this.Counter = this.Counter.bind(this);
        this.ButtonBlock = this.ButtonBlock.bind(this);
        this.Result = this.Result.bind(this);
    }

    Counter() {
        this.setState(prevState => ({
            score: prevState.score + 1
        }))
    }
    
    ButtonBlock() {
        this.refs.btn.setAttribute("disabled", "disabled");
    }

    Result(){
        let styleName = (document.getElementById("result-string"))?style={visible}:style={visible};
        this.setState({style: styleName});
    }

    render() {
        return <div className="p-5">
            <div><p class="font-weight-bold">Q1</p>
                <div><p class="font-weight-normal">Text</p>
                    <button type="button" id="1" class="btn btn-primary btn-lg btn-block">Block level button</button>
                    <button ref="btn" type="button" id="2" class="btn btn-primary btn-lg btn-block" onClick={() => {this.Counter(); this.ButtonBlock()}}>Block level button</button>
                    <button type="button" id="3" class="btn btn-primary btn-lg btn-block">Block level button</button>
                    <button type="button" id="4" class="btn btn-primary btn-lg btn-block">Block level button</button>
                </div>
            </div>
            <div> 
                <button type="button" id="finish" class="btn btn-primary btn-lg btn-block mt-3" onClick={() => {this.Result()}}>Завершить тест</button>
                <p id="result-string" class="font-weight-bold" style={hidden} >Результат: {this.state.score}</p>
            </div>
            
        </div>;
    }

    
    
}

export default Tests;