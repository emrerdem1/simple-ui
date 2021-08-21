import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormFields } from '../main-content/ContactView';

type InvalidEmail = 'invalidMail';

export const RequiredFieldsTranslationSpec: Record<
  FormFields | InvalidEmail,
  string
> = {
  [FormFields.NAME]: 'name',
  [FormFields.EMAIL]: 'email',
  [FormFields.PHONE]: 'phone',
  [FormFields.MESSAGE]: 'message',
  [FormFields.COUNTRY]: 'country',
  [FormFields.TITLE]: 'title',
  [FormFields.PASSWORD]: 'password',
  invalidMail: 'invalidMail',
};

export const getRequiredMessage = (fieldName: string): string =>
  `login.requiredMessages.${fieldName}`;

// Password field does not exist in some forms,
// use an optional param to include it.
interface UserFormFieldsProps {
  isPasswordIncluded?: boolean;
}

// Both login and edit user info modals use the same fields.
const UserFormFields: React.FC<UserFormFieldsProps> = ({
  isPasswordIncluded,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Form.Item
        label={t('login.userName')}
        name={FormFields.NAME}
        required
        rules={[
          {
            required: true,
            message: t(
              getRequiredMessage(
                RequiredFieldsTranslationSpec[FormFields.NAME],
              ),
            ),
          },
        ]}
        shouldUpdate
      >
        <Input placeholder={t('login.placeholders.name')} />
      </Form.Item>
      <Form.Item
        label={t('login.userEmail')}
        name={FormFields.EMAIL}
        required
        rules={[
          {
            type: 'email',
            message: t(
              getRequiredMessage(RequiredFieldsTranslationSpec.invalidMail),
            ),
          },
          {
            required: true,
            message: t(
              getRequiredMessage(
                RequiredFieldsTranslationSpec[FormFields.EMAIL],
              ),
            ),
          },
        ]}
      >
        <Input placeholder={t('login.placeholders.email')} maxLength={30} />
      </Form.Item>
      <Form.Item label={t('login.userTitle')} name={FormFields.TITLE}>
        <Input placeholder={t('login.placeholders.title')} />
      </Form.Item>
      {isPasswordIncluded && (
        <Form.Item label={t('login.userPassword')} name={FormFields.PASSWORD}>
          <Input.Password placeholder={t('login.placeholders.password')} />
        </Form.Item>
      )}
    </>
  );
};

export default UserFormFields;
