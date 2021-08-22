import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Button, Form, Input, InputNumber, message } from 'antd';
import { useAppSelector } from '../../redux/hooks';
import { authentication } from '../../redux/reducer';
import CountryListView from './CountryListView';
import UserFormFields from '../navigation/UserFormFields';
import { useTranslation } from 'react-i18next';
import { language } from '../../redux/reducer';
import {
  CountryItemSpec,
  FormFields,
  getRequiredMessage,
  RequiredFieldsTranslationSpec,
  updateRequiredMessages,
} from '../common/form-utils';

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
  const { userLanguage } = useAppSelector(language);

  // Clear the form fields when user is logged out.
  useEffect(() => {
    if (!user) {
      form.resetFields();
      return;
    }
    form.setFieldsValue(user);
  }, [user]);

  // rc-form-field does not update required field messages
  // when the language is changed by default. That's why
  // we need to listen to the errors and update them manually here.
  useEffect(() => {
    // Find all fields that have error other than email.
    // Email has two different requirement rules, handle separately.
    form
      .getFieldsError()
      .filter((er) => er.errors.length && er.name[0] != FormFields.EMAIL)
      .map((er) =>
        updateRequiredMessages({
          fieldName: er.name[0] as FormFields,
          formInstance: form,
          i18nHook: t,
        }),
      );

    if (!form.getFieldError(FormFields.EMAIL).length) {
      return;
    }
    // Email has some inputs, yet validation is failed. It means invalid email.
    if (form.getFieldValue(FormFields.EMAIL)) {
      return updateRequiredMessages({
        fieldName: FormFields.EMAIL,
        formInstance: form,
        i18nHook: t,
        isInvalidFieldCheck: true,
      });
    }
    // User left the input empty, show the related error message.
    updateRequiredMessages({
      fieldName: FormFields.EMAIL,
      formInstance: form,
      i18nHook: t,
    });
  }, [userLanguage]);

  // In case user changed the language after selecting one of the countries,
  // we should check the ID and update the corresponding country name.
  useEffect(() => {
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

  const sendContactForm = (formFields: FormFields) => {
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
        onFinish={sendContactForm}
      >
        <UserFormFields />
        <Form.Item
          name={FormFields.PHONE}
          label={t('login.userPhone')}
          rules={[
            {
              required: true,
              message: t(
                getRequiredMessage(
                  RequiredFieldsTranslationSpec[FormFields.PHONE],
                ),
              ),
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
              message: t(
                getRequiredMessage(
                  RequiredFieldsTranslationSpec[FormFields.MESSAGE],
                ),
              ),
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
