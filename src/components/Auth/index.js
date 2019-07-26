import UserContext from './context';
import withAuthentication from './withAuthentication';
import withAuthorization, { conditions } from './withAuthorization';
import React from 'react';

export { UserContext, withAuthentication, withAuthorization, conditions };

export const withAuthenticatedUser = Component => props => (
    <UserContext.Consumer>
        {user => <Component {...props} user={user} />}
    </UserContext.Consumer>
);