import React from "react";

class Tests extends React.Component {
    constructor(props) {
        super(props);
        this.counter = this.counter.bind(this);
    }
    render() {
        return <div className="p-5">
        <div><p class="font-weight-bold">Q1</p>
        <div><p class="font-weight-normal">Text</p>
        <button type="button" id="1" class="btn btn-primary btn-lg btn-block" onClick={()=>{this.counter()}}>Block level button</button>
        <button type="button" id="2" class="btn btn-primary btn-lg btn-block" onClick={()=>{this.counter()}}>Block level button</button>
        <button type="button" id="3" class="btn btn-primary btn-lg btn-block" onClick={()=>{this.counter()}}>Block level button</button>
        <button type="button" id="4" class="btn btn-primary btn-lg btn-block" onClick={()=>{this.counter()}}>Block level button</button>
            </div>
            </div>
            </div>;
    }
    counter() {
        // let score = 0;
        // let count = this.props.button.id="2"?score+1:score;
        // console.log(count);
    }
}

export default Tests;