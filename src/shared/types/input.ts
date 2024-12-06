export type TInputValidateOptions<T> = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  repeatField?: keyof T;
  email?: boolean;
};
