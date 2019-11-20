import React from "react";
import countries from "../data/countries";
import Field from "./field";

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
            avatar: "",
            age: 0,
            errors: {
                username: false,
                password: false,
                repeatPassword: false,
                age: false
            }
        }
    }


    onSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (this.state.username.length < 5) {
            errors.username = "Must be 5 characters or more";
        }
        if (!this.state.password.length) {
            errors.password = "Required";
        }
        if (this.state.password !== this.state.repeatPassword) {
            errors.repeatPassword = "The password and confirmation password do not match";
        }

        if (Object.keys(errors).length > 0) {
            this.setState(
                {errors: errors}
            )
        } else {
            this.setState(
                {errors: {}}
            )
            console.log("submit", this.state.password, this.state.username);
        }

    }
    onChangeInput = (e) => {
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

    decrementAge = e => {
        this.setState(
            {
                age: this.state.age - 1
            },
            () => {
                console.log("callback", this.state.age);
                this.setState({
                    errors: {
                        age: this.state.age > 18 ? false : "Must be more 18"
                    }
                });
            }
        );
    }

    incrementAge = () => {
        this.setState(
            (prevState, prevProps) => ({
                age: prevState.age + 1
            }),
            () => {
                console.log("+ age is ", this.state.age);
                this.setState({
                    errors: {
                        age: this.state.age > 18 ? false : "Must be more 18"
                    }
                });
            }
        );
    };

    render() {
        return (
            <div className="form-container card">
                <form className="form card-body">
                    <Field labelText="Username"  type="text"  placeholder="Enter username"  name="username"  value={this.state.username} onChange={this.onChangeInput}  id="username"  error={this.state.errors.username}/>
                    <Field labelText="Password"  type="text"  placeholder="Enter password"  name="password"  value={this.state.password} onChange={this.onChangeInput}  id="password"  error={this.state.errors.password}/>
                    <Field labelText="Repeat password"  type="text"  placeholder="Enter confirm password"  name="repeatPassword"  value={this.state.repeatPassword} onChange={this.onChangeInput}  id="repeatPassword"  error={this.state.errors.repeatPassword}/>
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
                            onChange={this.onChangeAvatar}
                        />
                    </div>
                    <div className="form-group">
                        <div>
                            <label>Age</label>
                        </div>
                        <div className="btn-group">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                onClick={this.decrementAge}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter age"
                                name="age"
                                value={this.state.age}
                                onChange={this.onChangeInput}
                            />
                            <button
                                className="btn btn-secondary"
                                type="button"
                                onClick={this.incrementAge}
                            >
                                +
                            </button>
                        </div>
                        {this.state.errors.age ? (
                            <div className="invalid-feedback">{this.state.errors.age}</div>
                        ) : null}
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
