import React from 'react';
import styled from '@emotion/styled';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const DropdownContainer = styled.div`
  .ant-dropdown-trigger {
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.4em;
    color: white;

    img {
      width: 50%;
    }
  }
`;

const languageMenuList = (
  <Menu
    style={{ marginTop: '2px', padding: '2px' }}
    selectable={true}
    defaultSelectedKeys={['1']}
  >
    <Menu.Item key="1">Turkish</Menu.Item>
    <Menu.Item key="2">English</Menu.Item>
  </Menu>
);

const LanguageSelectionView: React.FC = () => {
  return (
    <DropdownContainer>
      <Dropdown overlay={languageMenuList} placement="bottomCenter">
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <img src="/assets/turkey-icon.svg" alt="language icon" />
          <DownOutlined />
        </a>
      </Dropdown>
    </DropdownContainer>
  );
};

export default LanguageSelectionView;
