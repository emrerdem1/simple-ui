import React from 'react';
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { authentication, logout } from '../../redux/reducer';
import LoginModal from './LoginModal';
import { Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import EditUserInfoModal from './EditUserInfoModal';

const LoggedInUserContainer = styled.div`
  color: white;
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

  const logoutUser = (): void => {
    dispatch(logout());
  };

  const loggedInUserMenu = (
    <Menu>
      <Menu.Item key="1" style={{ pointerEvents: 'none' }}>
        {user && user.email}
      </Menu.Item>
      <Menu.Item key="2" style={{ textAlign: 'center' }} onClick={logoutUser}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <React.Fragment>
      {user ? (
        <LoggedInUserContainer>
          <Dropdown.Button
            overlay={loggedInUserMenu}
            placement="bottomLeft"
            icon={<UserOutlined />}
            onClick={() => setShouldOpenEditModal(true)}
          >
            <UserNameSpan>{user.userName}</UserNameSpan>
          </Dropdown.Button>
        </LoggedInUserContainer>
      ) : (
        <LoginModal />
      )}
      {shouldOpenEditModal && (
        <EditUserInfoModal
          shouldShowEditModal={() => setShouldOpenEditModal(false)}
        />
      )}
    </React.Fragment>
  );
};

export default LoginView;
