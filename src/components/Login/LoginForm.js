import React, { Component } from 'react';
import { FirebaseContext, withFirebase } from '../Firebase';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
};

class LoginFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    render() {
        const { email, password, error } = this.state;
        const isInvalid = false;
        return (
            <FirebaseContext.Consumer>
                {(firebase) => (
                    <div className="flex justify-center w-full max-w-xs m-4">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <p className="title text-xl text-blue-600 mb-2">Welcome back, Noob</p>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={email}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="example@email.com"

                                />
                            </div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={this.handleChange}
                                    value={password}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password"
                                />
                            </div>
                            <div className="mb-4">
                                <button
                                    type="submit"
                                    onClick={this.login}
                                    disabled={isInvalid}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Login
                                </button>
                            </div>
                            {error && <p>{error.message}</p>}
                            <p>
                                Don't have an account?{' '}
                                <Link to={'/register'}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >Register</Link>
                            </p>
                        </form>
                    </div>
                )}
            </FirebaseContext.Consumer>
        );
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    login = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then((authUser) => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push('/');
            })
            .catch((error) => {
                this.setState({ error });
            });
    };
}

export const LoginForm = compose(
    withRouter,
    withFirebase
)(LoginFormBase);
