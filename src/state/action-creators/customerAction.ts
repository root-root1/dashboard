import { CreateCustomerData } from "../action-types";
import { Dispatch } from "redux";
import { SetNewCustomer } from "../actions";
import { doc } from 'firebase/firestore';

export const createCustomer = (data: CreateCustomerData, onError: () => void) => {
    return async (dispatch: Dispatch<SetNewCustomer>) => {
        try {
            
        } catch (err:any) {
            console.log(err.message);
        }
    }
}
