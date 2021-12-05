import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Button, Form, Input, InputNumber, message } from 'antd';
import { useAppSelector } from '../../redux/hooks';
import { authentication } from '../../redux/reducer';
import CountryListView from './CountryListView';
import UserFormFields from '../navigation/UserFormFields';
import { useTranslation } from 'react-i18next';
import { FormFields } from '../common/form-utils';
import FormErrorsTranslator from '../common/FormErrorsTranslator';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  margin: 3em auto;

  #contactForm {
    width: 80%;
    max-width: 800px;

    #message {
      min-height: 80px;
      max-height: 140px;
    }
  }
`;

const ContactView: React.FC = () => {
  const { user } = useAppSelector(authentication);
  const [form] = Form.useForm();
  const { t } = useTranslation();

  useEffect(() => {
    // Clear the form fields when user is logged out.
    if (!user) {
      form.resetFields();
      return;
    }
    form.setFieldsValue(user);
  }, [user]);

  const sendContactForm = (formFields: FormFields) => {
    console.table(formFields);
    message.info(t('login.messages.info'));
    form.resetFields();
  };

  return (
    <ContactContainer>
      <FormErrorsTranslator formInstance={form} parentTranslationKey="login" />
      <Form
        form={form}
        layout="vertical"
        requiredMark={true}
        id="contactForm"
        onFinish={sendContactForm}
      >
        <UserFormFields />
        <Form.Item
          name={FormFields.PHONE}
          label={t('login.userPhone')}
          rules={[
            {
              required: true,
              message: t('login.requiredMessages.phone'),
            },
          ]}
        >
          <InputNumber style={{ width: '100%' }} maxLength={15} />
        </Form.Item>
        <Form.Item
          name={FormFields.MESSAGE}
          label={t('login.userMessage')}
          rules={[
            {
              required: true,
              message: t('login.requiredMessages.message'),
            },
          ]}
        >
          <Input.TextArea maxLength={600} />
        </Form.Item>
        <CountryListView />
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            {t('login.buttons.send')}
          </Button>
        </Form.Item>
      </Form>
    </ContactContainer>
  );
};

export default ContactView;
