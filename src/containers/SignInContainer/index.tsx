import SignInForm from '../../components/forms/SignInForm';
import FormLayout from '../../components/layouts/FormLayout';

import './styles.scss';

const SignInContainer = () => {
  return (
    <div className="sign-in">
      <div className="sign-in__header">Войдите в аккаунт</div>
      <div className="sign-in__content">
        <FormLayout>
          <SignInForm />
        </FormLayout>
      </div>
    </div>
  );
};

export default SignInContainer;
