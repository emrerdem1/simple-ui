import React from 'react';
import styled from '@emotion/styled';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { language, updateLanguage } from '../../redux/reducer';
import { Language } from '../../redux/types';
import i18next from 'i18next';
import { MenuInfo } from 'rc-menu/lib/interface';
import { Breakpoints, LanguageIconPaths } from '../common/constants';
import { useTranslation } from 'react-i18next';

const DropdownContainer = styled.div`
  .ant-dropdown-trigger {
    width: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.4em;
    color: white;

    img {
      width: 50%;
    }

    @media only screen and (max-width: ${Breakpoints.MOBILE}px) {
      width: 4.5em;
      padding: 4px 8px;
    }
  }
`;

const LanguageSelectionView: React.FC = () => {
  const { userLanguage } = useAppSelector(language);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const updateLanguageSelection = ({ key }: MenuInfo) => {
    const selectedLanguage = key as Language;
    i18next.changeLanguage(selectedLanguage);
    dispatch(updateLanguage(selectedLanguage));
  };

  const languageMenuList = (
    <Menu
      style={{ marginTop: '2px', padding: '2px' }}
      selectable={true}
      defaultSelectedKeys={[Language.EN]}
      onClick={updateLanguageSelection}
    >
      <Menu.Item key={Language.TR}>
        {t('navigation.languageTexts.tr')}
      </Menu.Item>
      <Menu.Item key={Language.EN}>
        {t('navigation.languageTexts.en')}
      </Menu.Item>
    </Menu>
  );

  return (
    <DropdownContainer>
      <Dropdown overlay={languageMenuList} placement="bottomCenter">
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <img
            src={
              userLanguage === Language.TR
                ? LanguageIconPaths.TR
                : LanguageIconPaths.EN
            }
            alt="language icon"
          />
          <DownOutlined />
        </a>
      </Dropdown>
    </DropdownContainer>
  );
};

export default LanguageSelectionView;
