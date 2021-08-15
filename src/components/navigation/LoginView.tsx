import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import { Form, Input } from 'antd';
import { User } from '../../redux/types';
import styled from '@emotion/styled';

const TipsText = styled.p`
  color: #7d7a7a;
`;

const LoginView: React.FC = () => {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const [form] = Form.useForm();

  const handleLogin = (values: User) => {
    console.log('Received values of form: ', values);
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
          This is just a psuedo-login, you do not need to sign-in or give an
          actual info to login. Please just fill the necessary fields.
        </TipsText>

        <Form
          form={form}
          layout="vertical"
          requiredMark={true}
          onFinish={handleLogin}
        >
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
          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Your password..." />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LoginView;
