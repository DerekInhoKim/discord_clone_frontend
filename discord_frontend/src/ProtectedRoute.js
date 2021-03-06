import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({component: Component, ...rest}) => {
  return (<Route
    {...rest}
    render={(props) => {
    return (
      rest.needLogin === true
      ? <Redirect to='/login' />
      : <Component {...props } socket={rest.socket} />
    )
  }}/>)
}

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.needLogin !== true ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);
