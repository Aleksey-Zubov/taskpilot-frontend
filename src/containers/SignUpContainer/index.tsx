import SignUpForm from '../../components/forms/SignUpForm';
import FormLayout from '../../components/layouts/FormLayout';

import './styles.scss';

const SignUpContainer = () => {
  return (
    <div className="sign-up">
      <h1 className="sign-up__header">Создайте аккаунт</h1>
      <div className="sign-up__content">
        <FormLayout>
          <SignUpForm />
        </FormLayout>
      </div>
    </div>
  );
};

export default SignUpContainer;
