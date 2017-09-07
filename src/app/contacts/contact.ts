export interface IAddress {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface IContact {
  id: number;
  firstname: string;
  lastname: string;
  address: IAddress;
  email: string;
  phone: string;
  cell: string;
  kinship: string;
}
