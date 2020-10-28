export interface IDropdownOptionInterface<T = string> {
  uid: T;
  label: string;
  active?: boolean;
}