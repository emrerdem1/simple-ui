import React from 'react';
import styled from '@emotion/styled';
import { Form, Input, InputNumber } from 'antd';
import { useAppSelector } from '../../redux/hooks';
import { authentication } from '../../redux/reducer';
import { userFormFields } from '../navigation/LoginModal';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 3em auto;

  #contactForm {
    width: 80%;
    max-width: 900px;

    #userMessage {
      min-height: 80px;
      max-height: 140px;
    }
  }
`;

const ContactView: React.FC = () => {
  const { user } = useAppSelector(authentication);
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue(user);
  }, [user]);

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
      >
        {userFormFields({ isPasswordIncluded: false })}
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: 'Please input your phone number!' },
          ]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="userMessage"
          label="Your Message"
          rules={[
            {
              required: true,
              message: 'Please let us know how can we help you.',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </ContactContainer>
  );
};

export default ContactView;
