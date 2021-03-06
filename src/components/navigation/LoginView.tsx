import React from 'react';
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { authentication, logout } from 'src/redux/reducer';
import LoginModal from './LoginModal';
import { Dropdown, Menu, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import EditUserInfoModal from './EditUserInfoModal';
import { useTranslation } from 'react-i18next';
import { Breakpoints } from 'src/utils/constants';

const LoginViewContainer = styled.div`
  @media only screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-top: 1em;
  }
`;

const UserNameSpan = styled.span`
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LoginView: React.FC = () => {
  const [shouldOpenEditModal, setShouldOpenEditModal] =
    React.useState<boolean>(false);
  const { user } = useAppSelector(authentication);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const logoutUser = (): void => {
    dispatch(logout());
    message.success(t('login.messages.success.logout'));
  };

  const loggedInUserMenu = (
    <Menu>
      <Menu.Item key="1" style={{ pointerEvents: 'none' }}>
        {user && user.email}
      </Menu.Item>
      <Menu.Item key="2" style={{ textAlign: 'center' }} onClick={logoutUser}>
        {t('login.buttons.logout')}
      </Menu.Item>
    </Menu>
  );

  let loginItem = <LoginModal />;
  if (user) {
    loginItem = (
      <Dropdown.Button
        icon={<UserOutlined />}
        onClick={() => setShouldOpenEditModal(true)}
        trigger={['click']}
        overlay={loggedInUserMenu}
        placement="bottomLeft"
        overlayStyle={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '180px',
        }}
      >
        <UserNameSpan>{user.name}</UserNameSpan>
      </Dropdown.Button>
    );
  }

  return (
    <LoginViewContainer>
      {loginItem}
      {shouldOpenEditModal && (
        <EditUserInfoModal
          shouldShowEditModal={() => setShouldOpenEditModal(false)}
        />
      )}
    </LoginViewContainer>
  );
};

export default LoginView;
