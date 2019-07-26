import React, { Component } from 'react';
import { FirebaseContext, withFirebase } from '../Firebase';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const INITIAL_STATE = {
    email: '',
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
        const { email, password, passwordTwo, error } = this.state;
        const isInvalid =
            password !== passwordTwo ||
            password === '' ||
            email === '';

        return (
            <FirebaseContext.Consumer>
                {(firebase) => (
                    <form>
                        <h1 className="title">Register</h1>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            onChange={this.handleChange}
                            value={email}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={password}
                        />
                        <label htmlFor="password">Password Again</label>
                        <input
                            type="password"
                            name="passwordTwo"
                            onChange={this.handleChange}
                            value={passwordTwo}
                        />
                        <button
                            type="submit"
                            onClick={this.register}
                            disabled={isInvalid}
                        >
                            Register
                        </button>
                        {error && <p>{error.message}</p>}
                        <p>
                            Already have an account?{' '}
                            <Link to={'/login'}>Login</Link>
                        </p>
                    </form>
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
            const authUser = await this.props.firebase.doCreateUserWithEmailAndPassword(
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
