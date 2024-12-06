import { TInputValidateOptions } from 'src/shared/types/input';

export type TAuthFormType = 'signin' | 'signup';

export type TAuthFormField = {
  name: keyof TAuthForm;
  type: string;
  placeholder: string;
};

export type TAuthFormFieldState = {
  value: string;
  isTouched: boolean;
  error: string;
  validation?: TInputValidateOptions<TAuthForm>;
};

export type TAuthForm = {
  email: TAuthFormFieldState;
  password: TAuthFormFieldState;
  firstName?: TAuthFormFieldState;
  lastName?: TAuthFormFieldState;
  repeatPassword?: TAuthFormFieldState;
};
