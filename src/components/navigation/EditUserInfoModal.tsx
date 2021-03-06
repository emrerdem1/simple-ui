import React from 'react';
import Modal from 'antd/lib/modal/Modal';
import { Button, Form, message } from 'antd';
import { User } from 'src/redux/types';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { editUserInfo, authentication } from 'src/redux/reducer';
import { useTranslation } from 'react-i18next';
import UserFormFields from './UserFormFields';

interface EditUserInfoModalProps {
  shouldShowEditModal: () => void;
}

const EditUserInfoModal: React.FC<EditUserInfoModalProps> = ({
  shouldShowEditModal,
}: EditUserInfoModalProps) => {
  const { user } = useAppSelector(authentication);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const updateUserInfo = (userInfo: User) => {
    dispatch(editUserInfo(userInfo));
    shouldShowEditModal();
    message.success(t('login.messages.success.update'));
  };

  return (
    <Modal
      title={t('login.editModal')}
      onCancel={shouldShowEditModal}
      footer={[
        <Button key="back" onClick={shouldShowEditModal}>
          {t('login.buttons.cancel')}
        </Button>,
        <Button form="editForm" key="submit" htmlType="submit" type="primary">
          {t('login.buttons.save')}
        </Button>,
      ]}
      visible
    >
      <Form
        form={form}
        layout="vertical"
        id="editForm"
        onFinish={updateUserInfo}
        initialValues={{
          name: user?.name,
          email: user?.email,
          title: user?.title,
          password: user?.password,
        }}
        requiredMark
      >
        <UserFormFields isPasswordIncluded />
      </Form>
    </Modal>
  );
};

export default EditUserInfoModal;
