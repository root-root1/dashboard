import { CustomerAction, CreateCustomerData } from "../action-types";
import { SetNewCustomer } from '../actions'

const initialState: CreateCustomerData = {
    representation_company: '',
    full_name: '',
    email: '',
    gender: '',
    address: '',
    phone_number: 0,
    bank_type: '',
    customer_type: '',
    territory: '',
}

export default (state = initialState, action: SetNewCustomer) => {
    switch (action.type) {
        case CustomerAction.CREATE_CUSTOMER:
            return {
                ...state,
                representation_company: action.payload.representation_company,
                full_name: action.payload.full_name,
                email: action.payload.email,
                gender: action.payload.gender,
                address: action.payload.address,
                phone_number: action.payload.phone_number,
                bank_type: action.payload.bank_type,
                customer_type: action.payload.customer_type,
                territory: action.payload.territory,
            }
        default:
            return state;
    }
}
