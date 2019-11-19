import React from "react";
import countries from "../data/countries";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            repeatPassword: "",
            country: ""
        }
    }


    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.password, this.state.username);
    }
    onChangeInput = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({[e.target.name]: e.target.value}
        )
    }

  getOptionsItems = (items) => {
    return(
        items.map((item) => {
          return <option key={item.id} value={item.name}>{item.name}</option>;
        })
    )
  }

    render() {
        return (
            <div className="form-container card">
                <form className="form card-body">
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            value={this.state.username}
                            name="username"
                            onChange={this.onChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter password"
                            value={this.state.password}
                            name="password"
                            onChange={this.onChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label>Repeat password</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter repeat password"
                            value={this.state.repeatPassword}
                            name="repeatPassword"
                            onChange={this.onChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">select country</label>
                        <select className="form-control"
                                id="country"
                                value={this.state.country}
                                name="country"
                                onChange={this.onChangeInput}>
                          {this.getOptionsItems(countries)}
                        </select>
                    </div>
                    <button type="submit"
                            className="btn btn-primary w-100"
                            onClick={this.onSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
