import React from "react";
import countries from "../data/countries";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            repeatPassword: "",
            country: "",
            gender: "female",
            agree: true,
            avatar: ""
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
    onChangeAgree = e => {
        console.log(e.target.name, e.target.checked);
        this.setState(
            {[e.target.name]: !e.target.value}
        )
    }

    getOptionsItems = (items) => {
        return (
            items.map((item) => {
                return <option key={item.id} value={item.name}>{item.name}</option>;
            })
        )
    }

    onChangeAvatar = e => {
        // e.preventDefault();
        const reader = new FileReader();
        reader.onload = e => {
            // console.log(e.target.result);
            this.setState({
                avatar: e.target.result
            })
        }
        //console.log(e.target.files[0]);
        reader.readAsDataURL(e.target.files[0]);
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
                    <fieldset className="form-group">
                        <div>Gender</div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                checked={this.state.gender === "male"}
                                onChange={this.onChangeInput}
                            />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                checked={this.state.gender === "female"}
                                onChange={this.onChangeInput}
                            />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <label htmlFor="avatar">Avatar</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="avatar"
                            name="avatar"
                            // value={this.state.avatar}
                            onChange={this.onChangeAvatar}
                        />
                    </div>
                    <div className="form-check mb-2">
                        <input className="form-check-input"
                               type="checkbox"
                               id="agree"
                               name="agree"
                               value={this.state.agree}
                               onChange={this.onChangeAgree}
                               checked={this.state.agree}
                        />
                        <label className="form-check-label" htmlFor="agree">Agree</label>
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
