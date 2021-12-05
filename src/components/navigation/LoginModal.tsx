import React from 'react';
import { Button, message, Row } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { Form } from 'antd';
import { User } from '../../redux/types';
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { login } from '../../redux/reducer';
import { useTranslation } from 'react-i18next';
import UserFormFields from './UserFormFields';
import LanguageSelectionView from './LanguageSelectionView';
import { language } from '../../redux/reducer';
import { localizeFormErrors } from '../common/form-utils';

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

  React.useEffect(() => {
    localizeFormErrors({
      formInstance: form,
      i18nHook: t,
      parentTranslationKey: 'login',
    });
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
