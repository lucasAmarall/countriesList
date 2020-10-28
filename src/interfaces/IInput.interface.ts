import { InputHTMLAttributes } from "react";

type Weaken<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? any : T[P];
};

export interface IInput extends Weaken<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  iconName?: string,
  isLoading?: boolean,
  onChange: (value: string) => void;
}
