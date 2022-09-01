import { CustomerAction, CreateCustomerData } from "../action-types";
import { CustomAction } from '../actions';
import {v4 as uuidv4} from 'uuid';


const initialState: CreateCustomerData[] = [
    {
        id: uuidv4(),
        representation_company: '8848 Digital LLP',
        full_name: 'harsh',
        email: 'harsh@gmail.com',
        gender: 'male',
        address: 'Sion koliwada mumbai 400-037',
        phone_number: 72546982315,
        bank_type: 'HDFC',
        customer_type: 'Individual',
        territory: 'East',
    }
];

export default (state = initialState, action: CustomAction) => {
    switch (action.type) {
        case CustomerAction.CREATE_CUSTOMER:
            return [...state,{
                id: action.payload.id,
                representation_company: action.payload.representation_company,
                full_name: action.payload.full_name,
                email: action.payload.email,
                gender: action.payload.gender,
                address: action.payload.address,
                phone_number: action.payload.phone_number,
                bank_type: action.payload.bank_type,
                customer_type: action.payload.customer_type,
                territory: action.payload.territory,
            }]
        case CustomerAction.SET_CUSTMER_ERROR: 
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}
