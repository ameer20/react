import React from "react";

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            // title: "My Initial Val",
            firstName: "",
            lastName: "",
            address: "",
            email: "",
            rose: false,
            gender: "male",
            Area_Delivery: "",
        };
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    titleChangeHandler = (e) => {
        this.setState({ title: e.target.value });
    };

    titleChangeHandler = (e) => {
        this.setState({ rose: true });
    };

    render() {
        return (
            <div>
                <div>
                    FirstName: <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={(e) => {
                            this.inputChangeHandler(e);
                        }}
                    />
                    <br />
                    LastName: <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={(e) => {
                            this.inputChangeHandler(e);
                        }}
                    />
                    <br />
                     Email ID:
                      <input
                        type="email"
                        name="Email"
                        value={this.state.Email}
                        onChange={(e) => {
                            this.inputChangeHandler(e);
                        }}
                    />
                    <br />
                    Address: 
                    <input
                        type="text"
                        name="address"
                        value={this.state.address}
                        onChange={(e) => {
                            this.inputChangeHandler(e);
                        }}
                    />
                    <br />
                    <div onChange={(e) => {
                        this.inputChangeHandler(e);
                    }}>
                        Gender:
<input type="radio" value="Male" name="gender" /> Male
<input type="radio" value="Female" name="gender" /> Female
<input type="radio" value="Other" name="gender" /> Other
</div>



                    <div name ="Area_Delivery" onChange={(e) => {
                        this.inputChangeHandler(e);
                    }}>
                        Area of Dilevery:
<select >

                            <option value="Faridabad NCR">Faridabad NCR</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                        </select>

                    </div>


Do You Want to add a Rose : <input
                        type="checkbox"
                        name="rose"
                        value={this.state.rose}
                        onChange={(e) => {

                            this.titleChangeHandler(e);
                        }}
                    />
                    <br />

                </div>
  
                <div>
                    <button onClick={() => { alert(JSON.stringify(this.state)) }}>
                        Submit
</button>
                </div>
            </div>
        );
    }
}
