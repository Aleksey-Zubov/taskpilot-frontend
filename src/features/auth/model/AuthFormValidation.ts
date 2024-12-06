import { TAuthForm } from 'src/features/auth/model/AuthForm.types';

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const formValidation = (
  fieldName: keyof TAuthForm,
  fieldValue: string,
  formData: TAuthForm,
) => {
  const { validation } = formData[fieldName] || {};

  if (validation?.required && !fieldValue) {
    return 'Это обязательное поле';
  }

  if (validation?.minLength && fieldValue.length < validation.minLength) {
    return `Минимальное кол-во символов ${validation.minLength}`;
  }

  if (validation?.maxLength && fieldValue.length > validation.maxLength) {
    return `Максимальное кол-во символов ${validation.maxLength}`;
  }

  if (validation?.email && !emailRegExp.test(fieldValue)) {
    return 'Некорректный формат email';
  }

  if (
    validation?.repeatField &&
    fieldValue !== formData[validation.repeatField]?.value
  ) {
    return 'Пароли не совпадают';
  }

  return '';
};
