import react from "react";

class Counter extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
        <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold mr-2">{this.state.count}</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => this.setState({count: this.state.count + 1})}>+</button>
        </div>
        );
    }
}

export default Counter;