export enum ActionType {
    SET_USER = 'SET_USER',
    SIGN_OUT = 'SIGN_OUT',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
    NEED_VERIFICATION = 'NEED_VERIFICATION',
    SET_SUCCESS = 'SET_SUCCESS',
}

export enum CustomerAction {
  CREATE_CUSTOMER = 'CREACT_CUSTOMER'
}

export interface User {
    firstName: string;
    email: string;
    id: string;
    createdAt: any;
}

export interface AuthState {
    user: User | null;
    authenticated: boolean;
    loading: boolean;
    error: string;
    needVerification: boolean;
    success: string;
}

export interface SignUpData {
  firstName: string;
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface CreateCustomerData {
  representation_company: string;
  full_name: string;
  email: string;
  gender: string;
  address: string;
  phone_number: number;
  bank_type: string;
  customer_type: string;
  territory: string;
}
