import React from "react";

export default class App extends React.Component {
    onSubmit = (e) => {
      e.preventDefault();
    console.log(this.refs.username.value, this.refs.password.value)
    }

    render() {
        //console.log(this);
        return (
            <div className="form-container card">
                <form className="form card-body">
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            ref="username"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter password"
                            ref="password"
                        />
                    </div>
                    <div className="form-group">
                        <label>Repeat password</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter repeat password"
                            ref="repeatPassword"
                        />
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
