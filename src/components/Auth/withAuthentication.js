import React from 'react';

import UserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: null
            };
        }

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                async (authUser) => {
                    if (authUser) {
                        this.setState({ authUser })
                    }
                    else {
                        this.setState({ authUser: null });
                    }
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <UserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </UserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;