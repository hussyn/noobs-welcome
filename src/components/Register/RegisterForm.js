import React, { Component } from 'react';
import { FirebaseContext, withFirebase } from '../Firebase';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const INITIAL_STATE = {
    email: '',
    username: '',
    password: '',
    passwordTwo: '',
    error: null
};

class RegisterFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    render() {
        const { email, username, password, passwordTwo, error } = this.state;
        const isInvalid =
            password !== passwordTwo ||
            password === '' ||
            username == '' ||
            email === '';


        return (
            <FirebaseContext.Consumer>
                {(firebase) => (
                    <div className="flex justify-center w-xl m-4">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={email}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="example@email.com"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={this.handleChange}
                                    value={username}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Username"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={this.handleChange}
                                    value={password}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="password"

                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordTwo">Password Again</label>
                                <input
                                    type="password"
                                    name="passwordTwo"
                                    onChange={this.handleChange}
                                    value={passwordTwo}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="passwordTwo" placeholder="password"

                                />
                            </div>
                            <div className="mb-4">
                                <button
                                    type="submit"
                                    onClick={this.register}
                                    disabled={isInvalid}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Register
                        </button>
                            </div>
                            {error && <p>{error.message}</p>}
                            <p>
                                Already have an account?{' '}
                                <Link className="hover:text-blue-400" to={'/login'}>Login</Link>
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

    register = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        console.log('registering');
        //Check that username does not exist first

        try {
            await this.props.firebase.doCreateUserWithEmailAndPassword(
                email,
                password
            );

            this.setState({ ...INITIAL_STATE });
            this.props.history.push('/');
        } catch (error) {
            this.setState({ error });
        }
    };
}

export const RegisterForm = compose(
    withRouter,
    withFirebase
)(RegisterFormBase);
