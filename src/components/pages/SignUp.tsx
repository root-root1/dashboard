import React, { FC, FormEvent, useState, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Message from '../UI/Message';
import { signUp, setError } from '../../state/action-creators/authAction';
import { AnyAction } from 'redux';

const SignUp: FC = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const { error } = useTypeSelector(state => state.auth);
    useEffect(() => {
        return () => {
            if (error) {
                dispatch(setError('') as unknown as AnyAction);
            }
        }
    }, [error, dispatch]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        dispatch(signUp({ email, password, firstName }, () => setLoading(false)) as unknown as AnyAction);
    }

    return (
        <div className="section">
            <div className="container">
                <div className="has-text-centered is-size-3 mb-3">
                    Sign up
                </div>
                <form className='form' onSubmit={handleSubmit}>
                    {error && <Message type='danger' msg={error} />}
                    <Input
                        value={firstName}
                        name="firstName"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                        placeholder='First Name'
                        label='First Name'
                    />
                    <Input
                        type='email'
                        value={email}
                        name="email"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        placeholder='Email'
                        label="Email"
                    />
                    <Input
                        type='password'
                        label='Password'
                        value={password}
                        name="password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        placeholder='...'
                    />
                    <Button text={loading ? 'loading...' : 'Sign Up'} className='is-primary is-fullwidth mt-5' disabled={loading} />
                </form>
            </div>
        </div>
    )
}

export default SignUp;