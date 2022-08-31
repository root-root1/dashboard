import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Button from '../UI/Button';
import { signOut } from '../../state/action-creators/authAction';
import { AnyAction } from 'redux';

const Header: FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { authenticated } = useTypeSelector((state:any) => state.auth);

    // if error in sign out their it come here is error dispatch
    const logOutClickHandler = () => {
        dispatch(signOut() as unknown as AnyAction);
    }
    
    return (
        <div className="navbar is-spaced has-shadow">
            <div className="container">
                <div className="navbar-brand">
                    <Link to={!authenticated ? '/' : '/dashboard'} className='navbar-item'>
                        DashBoard
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        {
                            !authenticated ? 
                                (
                                    <div className='button'>
                                        <Button
                                            text="Sign up"
                                            onClick={() => history.push('/signup')}
                                            className='is-primary'
                                        />
                                        <Button
                                            text="Sign in"
                                            onClick={() => history.push('/signin')}
                                        />
                                    </div>
                                ) : (
                                    <Button
                                        text="log Out"
                                        onClick={logOutClickHandler}
                                    />
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header;
