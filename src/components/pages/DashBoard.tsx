import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSuccess } from '../../state/action-creators/authAction';
import Message from '../UI/Message';
import Button from '../UI/Button';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../state';
import { AnyAction } from 'redux';
import CustomerForm from './CustomerForm';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const DashBoard: FC = () => {
    const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();
    const customers = useTypeSelector(state => state.customers);


    useEffect(() => {
        if (success) {
            dispatch(setSuccess('') as unknown as AnyAction);
        }
    }, [success, dispatch]);

    const handleClick = () => {
        history.push('/add-customer')
    }

    // customers.map(customer => console.log(customer));
    console.log(customers.map(customer => customer.full_name));

    return (
        <section className="section">
            <div className="container">
                {needVerification && <Message type='success' msg='Please Verify Your Email' />}
                <div className="is-sized-1">
                    Welcome { user?.firstName }
                </div>
                <section className="section">
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                <th><abbr title="Represents Company">Represents Company</abbr></th>
                                <th><abbr title="FullName">FullName</abbr></th>
                                <th><abbr title="Email">Email</abbr></th>
                                <th><abbr title="Gender">Gender</abbr></th>
                                <th><abbr title="Address">Address</abbr></th>
                                <th><abbr title="Phone No">Phone No</abbr></th>
                                <th><abbr title="Customer Type">Customer Type</abbr></th>
                                <th><abbr title="Territory">Territory</abbr></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customers.map(customer => (
                                        <tr key={customer.id}>
                                            <td>{customer.representation_company}</td>
                                            <td>{customer.full_name}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.gender}</td>
                                            <td>{customer.address}</td>
                                            <td>{customer.phone_number}</td>
                                            <td>{ customer.customer_type}</td>
                                            <td>{ customer.territory}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
                <Button
                    text='Add Customer'
                    className='is-primary mt-2'
                    data-target="modal-js-example"
                    onClick={handleClick}
                />
            </div>
        </section>
    )
}

export default DashBoard;

{/* <div className='tabs is-centered'>
                            <ul>
                                <li><a href="">Represents Company</a></li>
                                <li><a href="">FullName</a></li>
                                <li><a href="">Email</a></li>
                                <li><a href="">Gender</a></li>
                                <li><a href="">Address</a></li>
                                <li><a href="">Phone No</a></li>
                                <li><a href="">Customer Type</a></li>
                                <li><a href="">Territory</a></li>
                            </ul>
                            <div className="table-container">
                                <table className="table">
                                    {
                                        customers.map(customer => (
                                            <div className="is-centered" key={customer.id}>
                                                <li><a href="">{ customer.representation_company }</a></li>
                                                <li><a href="">{ customer.full_name }</a></li>
                                                <li><a href="">{ customer.email }</a></li>
                                                <li><a href="">{ customer.address }</a></li>
                                                <li><a href="">{ customer.phone_number }</a></li>
                                                <li><a href="">{ customer.customer_type }</a></li>
                                                <li><a href="">{ customer.territory }</a></li>
                                            </div>
                                        ))
                                    }
                                </table>
                            </div>
                        </div> */}
