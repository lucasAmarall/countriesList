import { IDropdownOptionInterface } from "@interfaces/IDropdownOption.interface";

export interface IDropdown<T> {
  options: IDropdownOptionInterface<T>[];
  onChange: (options: IDropdownOptionInterface<T>[]) => void
}