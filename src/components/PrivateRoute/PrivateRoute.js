import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, user: user, ...rest }) {
  return (
    <Route {...rest}
      render={ props =>
				user ? <Component {...props} /> : <Redirect to={{ pathname: '/login'}} /> 
			}
		/>
  )
}

export default PrivateRoute;