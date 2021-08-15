import React from 'react';
import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { Form, Input } from 'antd';
import { User } from '../../redux/types';
import styled from '@emotion/styled';
import { useAppDispatch } from '../../redux/hooks';
import { login } from '../../redux/reducer';

interface EditUserInfoModalProps {
  setShouldShowEditModal: () => void;
}

const EditUserInfoModal: React.FC<EditUserInfoModalProps> = ({
  setShouldShowEditModal,
}) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const updateUserInfo = (userInfo: User) => {
    dispatch(login(userInfo));
  };
  return (
    <Modal
      title="Login Modal"
      visible={true}
      onCancel={setShouldShowEditModal}
      forceRender
    >
      <Form form={form} layout="vertical" requiredMark={true}>
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
      </Form>
    </Modal>
  );
};

export default EditUserInfoModal;
