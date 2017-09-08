import { IContact } from '../../contact';
export interface IContactForm {
  onSave: (IContact) => void;
}
