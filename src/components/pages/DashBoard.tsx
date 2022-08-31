import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSuccess } from '../../state/action-creators/authAction';
import Message from '../UI/Message';
import { RootState } from '../../state';
import { AnyAction } from 'redux';

const DashBoard: FC = () => {
    const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (success) {
            dispatch(setSuccess('') as unknown as AnyAction);
        }
    }, [success, dispatch]);
    

    return (
        <section className="section">
            <div className="container">
                {needVerification && <Message type='success' msg='Please Verify Your Email' />}
                <div className="is-sized-1">
                    Welcome { user?.firstName }
                </div>
            </div>
        </section>
    )
}

export default DashBoard;