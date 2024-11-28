export type TAuthFormType = 'signin' | 'signup';

export type TAuthFormField = {
  name: keyof ISignInFormData | keyof ISignUpFormData;
  type: string;
  placeholder: string;
};

export interface ISignInFormData {
  email: string;
  password: string;
}

export interface ISignUpFormData extends ISignInFormData {
  firstName: string;
  lastName: string;
  repeatPassword: string;
}
