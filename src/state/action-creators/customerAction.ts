import { CreateCustomerData, CustomerAction } from "../action-types";
import {  Dispatch } from "redux";
import {v4 as uuidv4} from 'uuid';

import { CustomAction } from "../actions";

export const createCustomer = (
    {
        representation_company,
        full_name,
        email,
        gender,
        address,
        phone_number,
        bank_type,
        customer_type,
        territory
    }: CreateCustomerData, onError: () => void) => {
    return async (dispatch: Dispatch<CustomAction>) => {
        try {
            const customerObject: CreateCustomerData = {
                id: uuidv4(),
                representation_company: representation_company,
                full_name: full_name,
                email: email,
                gender: gender,
                address: address,
                phone_number: phone_number,
                bank_type: bank_type,
                customer_type: customer_type,
                territory: territory,
            };
            dispatch({
                type: CustomerAction.CREATE_CUSTOMER,
                payload: customerObject,
            });
        } catch (err:any) {
            console.log(err.message);
            onError();
            dispatch({
                type: CustomerAction.SET_CUSTMER_ERROR,
                payload: err.message,
            });
        }
    }
}
