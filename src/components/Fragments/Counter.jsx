import react from "react";

class Counter extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log("constructor");
    }

    // ComponentDidMount
    componentDidMount() {
        this.setState({count : 1});
        console.log("componentDidMount");
    }

    // ComponentDidUpdate
    componentDidUpdate(prevProps, prevState) {
        if (this.state.count === 10) {
            this.setState({count: 0});
        }
        console.log("componentDidUpdate");
    }

    render() {
        return (
        <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold mr-2">{this.state.count}</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => this.setState({count: this.state.count + 1})}>+</button>
        {console.log("render")}
        </div>
        );
    }
}

export default Counter;