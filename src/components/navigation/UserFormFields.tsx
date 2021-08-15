import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

// Password field does not exist in same usages,
// use a param to decide whether include it or not.
interface UserFormFieldsProps {
  isPasswordIncluded: boolean;
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
        name="userName"
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
        name="email"
        required
        rules={[
          {
            type: 'email',
            message: t('login.requiredMessages.invalidMail'),
          },
          {
            required: true,
            message: t('login.requiredMessages.e-mail'),
          },
        ]}
      >
        <Input placeholder={t('login.placeholders.e-mail')} maxLength={30} />
      </Form.Item>
      <Form.Item label={t('login.userTitle')} name="title">
        <Input placeholder={t('login.placeholders.title')} />
      </Form.Item>
      {isPasswordIncluded && (
        <Form.Item label={t('login.userPassword')} name="password">
          <Input.Password placeholder={t('login.placeholders.password')} />
        </Form.Item>
      )}
    </>
  );
};

export default UserFormFields;
