import React from 'react';
import styled from '@emotion/styled';
import { Button, Form, Input, InputNumber, message } from 'antd';
import { useAppSelector } from '../../redux/hooks';
import { authentication } from '../../redux/reducer';
import { User } from '../../redux/types';
import CountryListView from './CountryListView';
import UserFormFields from '../navigation/UserFormFields';
import { useTranslation } from 'react-i18next';
import { language } from '../../redux/reducer';

interface ContactFormSpec extends User {
  userCountry: string;
  userPhone: number;
}

interface CountryItemSpec {
  id: string;
  name: string;
}

export interface CountryListSpec {
  countries: CountryItemSpec[];
}

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  margin: 3em auto;

  #contactForm {
    width: 80%;
    max-width: 800px;

    #userMessage {
      min-height: 80px;
      max-height: 140px;
    }
  }
`;

const ContactView: React.FC = () => {
  const { user } = useAppSelector(authentication);
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const { userLanguage } = useAppSelector(language);

  React.useEffect(() => {
    if (!user) {
      form.resetFields();
      return;
    }
    form.setFieldsValue(user);
  }, [user]);

  // In case user changed the language after selecting one of the countries,
  // we should check the ID and update the corresponding country name.
  React.useEffect(() => {
    const activeCountrySelection = form.getFieldsValue().userCountry;
    if (!activeCountrySelection) {
      return;
    }
    form.setFieldsValue({
      userCountry: COUNTRY_LIST.find(
        (country) => country.id === activeCountrySelection,
      )?.id,
    });
  }, [userLanguage]);

  // TODO(emrerdem1): You should find a proper way to use i18 outside the components.
  // A kind of static list should not be defined within the component.
  const COUNTRY_LIST: CountryItemSpec[] = [
    { id: 'TR', name: t('countryList.tr') },
    { id: 'US', name: t('countryList.us') },
    { id: 'GB', name: t('countryList.gb') },
    { id: 'DE', name: t('countryList.de') },
    { id: 'SE', name: t('countryList.se') },
    { id: 'KE', name: t('countryList.ke') },
    { id: 'BR', name: t('countryList.br') },
    { id: 'ZW', name: t('countryList.zw') },
  ];

  const sendContactForm = (formFields: ContactFormSpec) => {
    console.table(formFields);
    message.info(t('login.messages.info'));
    form.resetFields();
  };

  return (
    <ContactContainer>
      <Form
        form={form}
        layout="vertical"
        requiredMark={true}
        id="contactForm"
        initialValues={{
          userName: user?.userName,
          email: user?.email,
          title: user?.title,
        }}
        onFinish={sendContactForm}
      >
        <UserFormFields />
        <Form.Item
          name="userPhone"
          label={t('login.userPhone')}
          rules={[
            { required: true, message: t('login.requiredMessages.phone') },
          ]}
        >
          <InputNumber style={{ width: '100%' }} maxLength={15} />
        </Form.Item>
        <Form.Item
          name="userMessage"
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
        <CountryListView countries={COUNTRY_LIST} />
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
