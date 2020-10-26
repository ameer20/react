import React from 'react';



class State extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }

    addition = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));

    };

    substraction = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1
        }));
    };

    reset = () => {
        this.setState(() => ({
            counter: 0
        }));
    };


    render() {
        return (
        
                <div class="state">
                    COUNTER: <input
                        type="text"
                        name="counter"
                        value={this.state.counter}
                    />
                    <div class="btn">
                        <button onClick={(this.addition)}>
                            PLUSE (+)
                </button>

                        <button onClick={(this.substraction)}>
                            MINUS (-)
                </button>
                    </div>

                    <div>
                        <button class="Rbtn" onClick={(this.reset)}>
                            RESET
                </button>
                    </div>

                </div>
            
        );
    }
}

export default State;