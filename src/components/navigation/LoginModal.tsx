import React from 'react';
import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { Form, Input } from 'antd';
import { User } from '../../redux/types';
import styled from '@emotion/styled';
import { useAppDispatch } from '../../redux/hooks';
import { login } from '../../redux/reducer';

// Password field does not exist in same usages,
// use a param to decide whether include it or not.
interface UserFormFieldsProps {
  isPasswordIncluded: boolean;
}

// Both login and edit user info modals use the same fields.
export const userFormFields = ({
  isPasswordIncluded,
}: UserFormFieldsProps): JSX.Element => (
  <>
    <Form.Item
      label="Name"
      name="userName"
      required
      rules={[
        {
          required: true,
          message: 'Please type your name!',
        },
      ]}
    >
      <Input placeholder="Your name..." />
    </Form.Item>
    <Form.Item
      label="E-mail"
      name="email"
      required
      rules={[
        {
          type: 'email',
          message: 'E-mail address is not valid!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}
    >
      <Input placeholder="Your e-mail address..." />
    </Form.Item>
    <Form.Item label="Title" name="title">
      <Input placeholder="E.g., student, intern, engineer etc." />
    </Form.Item>
    {isPasswordIncluded && (
      <Form.Item label="Password" name="password">
        <Input.Password placeholder="Your password..." />
      </Form.Item>
    )}
  </>
);

const TipsText = styled.p`
  color: #7d7a7a;
`;

const LoginModal: React.FC = () => {
  const [isModalShown, setIsModalShown] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const handleLogin = (userInfo: User) => {
    dispatch(login(userInfo));
  };

  return (
    <>
      <Button onClick={() => setIsModalShown(true)}>Login</Button>
      <Modal
        title="Login Modal"
        visible={isModalShown}
        onCancel={() => setIsModalShown(false)}
        footer={null}
        forceRender
      >
        <TipsText>
          This is just a pseudo-login, you do not need to sign-in or give an
          actual info to login. Please just fill the necessary fields.
        </TipsText>

        <Form
          form={form}
          layout="vertical"
          requiredMark={true}
          onFinish={handleLogin}
        >
          {userFormFields({ isPasswordIncluded: true })}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LoginModal;
