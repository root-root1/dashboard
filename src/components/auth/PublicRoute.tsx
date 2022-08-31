import React, { FC } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { RouteProps, Route, Redirect } from 'react-router-dom';

interface Props extends RouteProps {
    component: any
}

const PublicRoute: FC<Props> = ({ component: Component, ...rest }) => {
    const { authenticated } = useTypeSelector(state => state.auth);

    return (<Route {...rest} render={(props: any) => !authenticated ? <Component {...props} /> : <Redirect to='/dashboard' />} />)
}

export default PublicRoute;
