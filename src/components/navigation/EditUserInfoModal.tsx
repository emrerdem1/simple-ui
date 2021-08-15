import React from 'react';
import Modal from 'antd/lib/modal/Modal';
import { Button, Form } from 'antd';
import { User } from '../../redux/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { editUserInfo, authentication } from '../../redux/reducer';
import { userFormFields } from './LoginModal';

interface EditUserInfoModalProps {
  shouldShowEditModal: () => void;
}

const EditUserInfoModal: React.FC<EditUserInfoModalProps> = ({
  shouldShowEditModal,
}: EditUserInfoModalProps) => {
  const { user } = useAppSelector(authentication);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const updateUserInfo = (userInfo: User) => {
    dispatch(editUserInfo(userInfo));
    shouldShowEditModal();
  };

  return (
    <Modal
      title="Edit Your Profile Information"
      visible={true}
      onCancel={shouldShowEditModal}
      footer={[
        <Button key="back" onClick={shouldShowEditModal}>
          Cancel
        </Button>,
        <Button form="editForm" key="submit" htmlType="submit" type="primary">
          Save
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        requiredMark={true}
        id="editForm"
        onFinish={updateUserInfo}
        initialValues={{
          userName: user?.userName,
          email: user?.email,
          title: user?.title,
          password: user?.password,
        }}
      >
        {userFormFields({ isPasswordIncluded: true })}
      </Form>
    </Modal>
  );
};

export default EditUserInfoModal;
