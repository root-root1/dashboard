import React, { FC, useState, FormEvent } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Select from 'react-select';
import { ActionMeta } from 'react-select';
import { useHistory } from 'react-router-dom';
import { createCustomer } from '../../state/action-creators/customerAction';
import {
  BankGroupedOption,
  CompanyOption,
  CustomerTypeGroupedOption,
  CustomerTypeOption,
  GenderGroupedOption,
  GenderOption,
  GroupedOption,
  groupedOptions,
  TerritoryTypeGroupedOption,
  TerritoryTypeOption
} from '../../utils';
import {v4 as uuidv4} from 'uuid';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';

const CustomerForm: FC = () => {
  const [representation_company, setRepresentCom] = useState('');
  const [gender, setGender] = useState('');
  const [bank_type, setBank] = useState('');
  const [territory, setTerritory] = useState('');
  const [customer_type, setCustomerType] = useState('');
  const [address, setAddress] = useState('');
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNo] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const onChange = (option: CompanyOption | null, actionMeta: ActionMeta<CompanyOption>) => {
    if (option) {
      setRepresentCom(option?.value);
    }
  }

  const onGenderChange = (option: CompanyOption | null, actionMeta: ActionMeta<CompanyOption>) => {
    if (option) {
      setGender(option?.value);
    }
  }
  const onBankChange = (option: CompanyOption | null, actionMeta: ActionMeta<CompanyOption>) => {
    if (option) {
      setBank(option?.value);
    }
  }
  const onCustomerChange = (option: CompanyOption | null, actionMeta: ActionMeta<CompanyOption>) => {
    if (option) {
      setCustomerType(option?.value);
    }
  }
  const onTerritoryChange = (option: CompanyOption | null, actionMeta: ActionMeta<CompanyOption>) => {
    if (option) {
      setTerritory(option?.value);
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createCustomer({
      id: uuidv4(),
      representation_company,
      full_name,
      email,
      gender,
      address,
      phone_number,
      bank_type,
      customer_type,
      territory,
    }, () => console.log("Error Creating customer")) as unknown as AnyAction);
    history.push('/dashboard');
  }

  // console.log(customers);

  return (
    <div className="section">
      <form className='form' onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="represents_company">Represents Company</label>
          <Select<CompanyOption, false, GroupedOption>
            options={groupedOptions}
            className='mb-3 mt-3'
            name='represents_company'
            onChange={onChange}
          />

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <Input
                className="input is-success"
                type="text"
                placeholder="FullName"
                label='FullName'
                value={full_name}
                onChange={(e) => setFullName(e.target.value)}
                name='fullname'
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <Input
                className="input is-success"
                type="email"
                placeholder="Email"
                label='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name='first_name'
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>

          <div className="field mb-3 mt-3">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select">
                <Select<GenderOption, false, GenderGroupedOption>
                  options={GenderGroupedOption}
                  name='represents_company'
                  onChange={onGenderChange}
                />
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label ">Address</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Textarea"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="field mb-3 mt-3">
            <label className="label">Bank</label>
            <div className="control">
              <div className="select">
                <Select<GenderOption, false, GenderGroupedOption>
                  options={BankGroupedOption}
                  name='represents_company'
                  onChange={onBankChange}
                />
              </div>
            </div>
          </div>

          <div className="field mb-3 mt-3">
            <label className="label">Customer Type</label>
            <div className="control">
              <div className="select">
                <Select<CustomerTypeOption, false, CustomerTypeGroupedOption>
                  options={CustomerTypeGroupedOption}
                  name='represents_company'
                  onChange={onCustomerChange}
                />
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <Input
                className="input is-success"
                type="text"
                placeholder="8888888888"
                label='Phone Number'
                value={phone_number}
                onChange={(e) => setPhoneNo(parseInt(e.target.value))}
                name='phone-no'
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field mb-3 mt-3">
            <label className="label">Territory</label>
            <div className="control">
              <div className="select">
                <Select<TerritoryTypeOption, false, TerritoryTypeGroupedOption>
                  options={TerritoryTypeGroupedOption}
                  name='represents_company'
                  onChange={onTerritoryChange}
                />
              </div>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <Button className="button is-link" text='Submit' />
            </div>
          </div> 
        </div>
      </form>
    </div>
  )
}


{/*  */}

export default CustomerForm;