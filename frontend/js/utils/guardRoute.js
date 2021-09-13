import React, { Component } from 'react';

export const GuardedRoute = ({ component: Component, ...rest }) => {
  const { data, error, isPending } = useAsync(retrieveToken);
  if (isPending) return <LoadingIndicator />;
  if (error) return <NotFoundPage />;
  return (
    <Route
      {...rest}
      render={(props) => (data ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};
