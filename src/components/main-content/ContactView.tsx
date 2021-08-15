import React from 'react';
import styled from '@emotion/styled';
import { Button, Form, Input, InputNumber, message } from 'antd';
import { useAppSelector } from '../../redux/hooks';
import { authentication } from '../../redux/reducer';
import { User } from '../../redux/types';
import { userFormFields } from '../navigation/LoginModal';
import CountryListView from './CountryListView';

interface ContactFormSpec extends User {
  userCountry: string;
  userPhone: number;
}

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 3em auto;

  #contactForm {
    width: 80%;
    max-width: 800px;

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
    if (!user) {
      form.resetFields();
      return;
    }
    form.setFieldsValue(user);
  }, [user]);

  const sendContactForm = (formFields: ContactFormSpec) => {
    console.table(formFields);
    message.info('You can see the JSON in the console.');
    form.resetFields();
  };

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
        onFinish={sendContactForm}
      >
        {userFormFields({ isPasswordIncluded: false })}
        <Form.Item
          name="userPhone"
          label="Phone Number"
          rules={[
            { required: true, message: 'Please input your phone number!' },
          ]}
        >
          <InputNumber style={{ width: '100%' }} maxLength={15} />
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
          <Input.TextArea maxLength={600} />
        </Form.Item>
        <CountryListView />
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            size="large"
            block
          >
            Send
          </Button>
        </Form.Item>
      </Form>
    </ContactContainer>
  );
};

export default ContactView;
