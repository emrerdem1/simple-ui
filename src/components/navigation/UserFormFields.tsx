import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormFields } from 'src/utils/form-utils';

// Password field does not exist in all forms.
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
            message: t('login.requiredMessages.name'),
          },
        ]}
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
            message: t('login.invalidMessages.email'),
          },
          {
            required: true,
            message: t('login.requiredMessages.email'),
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
