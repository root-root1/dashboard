export interface CompanyOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

// company data collection
export const CompanyOption: readonly CompanyOption[] = [
  { value: '8848 Digital LLP', label: '8848 Digital LLP', color: '#00B8D9'},
  { value: 'Wayne Enterprises', label: 'Wayne Enterprises', color: '#0052CC'},
  { value: 'Showbiz Pizza Place', label: 'Showbiz Pizza Place', color: '#5243AA' },
  { value: 'Pro Garden Management', label: 'Pro Garden Management', color: '#FF5630'},
  { value: 'The Lawn Guru', label: 'The Lawn Guru', color: '#FF8B00' }
];

export interface GroupedOption {
  readonly label: string;
  readonly options: readonly CompanyOption[];
}

export const groupedOptions: readonly GroupedOption[] = [
  {
    label: 'Represents Company',
    options: CompanyOption,
  }
]

// gender

export interface GenderOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export const GenderOption: readonly GenderOption[] = [
  { value: 'Male', label: 'Male', color: '#00B8D9'},
  { value: 'Female', label: 'Female', color: '#0052CC'}
];

export interface GenderGroupedOption {
  readonly label: string;
  readonly options: readonly GenderOption[];
}

export const GenderGroupedOption: readonly GenderGroupedOption[] = [
  {
    label: 'Gender',
    options: GenderOption,
  }
];

// bank type

export interface BankOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export const BankOption: readonly BankOption[] = [
  { value: 'Goldman Sachs', label: 'Goldman Sachs', color: '#00B8D9'},
  { value: 'Citigroup Inc', label: 'Citigroup Inc', color: '#0052CC'},
  { value: 'Wells Fargo', label: 'Wells Fargo', color: '#0052CC'},
  { value: 'Bank of America', label: 'Bank of America', color: '#0052CC'},
  { value: 'HDFC', label: 'HDFC', color: '#0052CC'},
];

export interface BankGroupedOption {
  readonly label: string;
  readonly options: readonly BankOption[];
}

export const BankGroupedOption: readonly BankGroupedOption[] = [
  {
    label: 'Bank',
    options: BankOption,
  }
];

// customer type
export interface CustomerTypeOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export const CustomerTypeOption: readonly CustomerTypeOption[] = [
  { value: 'Company', label: 'Company', color: '#00B8D9'},
  { value: 'Individual', label: 'Individual', color: '#0052CC'}
];

export interface CustomerTypeGroupedOption {
  readonly label: string;
  readonly options: readonly CustomerTypeOption[];
}

export const CustomerTypeGroupedOption: readonly CustomerTypeGroupedOption[] = [
  {
    label: 'Customer Type',
    options: CustomerTypeOption,
  }
];


// teritory

export interface TerritoryTypeOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export const TerritoryTypeOption: readonly TerritoryTypeOption[] = [
  { value: 'East', label: 'East', color: '#00B8D9'},
  { value: 'West', label: 'West', color: '#0052CC'},
  { value: 'North', label: 'North', color: '#0052CC'},
  { value: 'South', label: 'South', color: '#0052CC'},
];

export interface TerritoryTypeGroupedOption {
  readonly label: string;
  readonly options: readonly TerritoryTypeOption[];
}

export const TerritoryTypeGroupedOption: readonly TerritoryTypeGroupedOption[] = [
  {
    label: 'Territory',
    options: TerritoryTypeOption,
  }
];
