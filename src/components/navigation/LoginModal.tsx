import React from 'react';
import { Button, message, Row } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { Form } from 'antd';
import { User } from '../../redux/types';
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { login } from '../../redux/reducer';
import { useTranslation } from 'react-i18next';
import UserFormFields, {
  getRequiredMessage,
  RequiredFieldsTranslationSpec,
} from './UserFormFields';
import LanguageSelectionView from './LanguageSelectionView';
import { FormFields } from '../main-content/ContactView';
import { language } from '../../redux/reducer';

const TipsText = styled.p`
  color: #7d7a7a;
  margin-bottom: 0.8em;
`;

const LoginModal: React.FC = () => {
  const [isModalShown, setIsModalShown] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const { userLanguage } = useAppSelector(language);

  // rc-form-field does not update required field messages
  // when the language is changed by default. That's why
  // we need to listen to the errors and update them manually here.
  React.useEffect(() => {
    const updateRequiredMessages = (fieldName: FormFields[]) =>
      form.setFields([
        {
          name: fieldName[0],
          errors: [
            t(getRequiredMessage(RequiredFieldsTranslationSpec[fieldName[0]])),
          ],
        },
      ]);
    // Find all fields that have error other than email.
    // Email has two different requirement rules, handle separately.
    form
      .getFieldsError()
      .filter((er) => er.errors.length && er.name[0] != FormFields.EMAIL)
      .map((er) => updateRequiredMessages(er.name as FormFields[]));

    if (!form.getFieldError(FormFields.EMAIL).length) {
      return;
    }
    // Email has some inputs, yet validation is failed. It means invalid email.
    if (form.getFieldValue(FormFields.EMAIL)) {
      return form.setFields([
        {
          name: FormFields.EMAIL,
          errors: [
            t(getRequiredMessage(RequiredFieldsTranslationSpec.invalidMail)),
          ],
        },
      ]);
    }
    // User left the input empty, show the related error message.
    updateRequiredMessages([FormFields.EMAIL]);
  }, [userLanguage]);

  const handleLogin = (userInfo: User) => {
    dispatch(login(userInfo));
    message.success(t('login.messages.success.login'));
  };

  return (
    <>
      <Button onClick={() => setIsModalShown(true)}>
        {t('login.buttons.login')}
      </Button>
      <Modal
        title={t('login.loginModal')}
        visible={isModalShown}
        onCancel={() => setIsModalShown(false)}
        footer={null}
        forceRender
      >
        <TipsText>{t('login.loginInfo')}</TipsText>

        <Form
          form={form}
          layout="vertical"
          requiredMark={true}
          onFinish={handleLogin}
        >
          <UserFormFields isPasswordIncluded />
          <Form.Item className="login-row">
            <Row justify="space-between" align="middle">
              <LanguageSelectionView specificColor="black" />
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {t('login.buttons.login')}
              </Button>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LoginModal;
