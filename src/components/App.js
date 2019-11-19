import React from "react";

export default class App extends React.Component {
    constructor() {
      super();
        this.state = {
          username: "",
          password: "",
          repeatPassword: ""
        }
    }


    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.password, this.state.username);
    }
  onChangeUserName = (e) => {
      console.log(e.target.value);
      this.setState({username: e.target.value}

      )
  }

  onChangePassword = (e) => {
      this.setState({
        password:e.target.value
      })
  }

  onChangeRepeatPassword = (e) => {
      this.setState(
          {
            repeatPassword: e.target.value
          }
      )
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
                            ref={node => {
                                this.username = node
                            }}
                            value={this.state.username}
                            onChange={this.onChangeUserName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter password"
                            ref={node => {
                                this.password = node
                            }}
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>Repeat password</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter repeat password"
                            ref={node => {
                                this.repeatPassword = node
                            }}
                            value={this.state.repeatPassword}
                            onChange={this.onChangeRepeatPassword}
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
