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

interface LanguageProps {
  specificColor?: string;
}

const DropdownContainer = styled.div<LanguageProps>`
  .ant-dropdown-trigger {
    // Increase click trigger area for mobile.
    padding: 0.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.4em;
    color: ${(props) => props.color ?? 'white'};

    img {
      width: 1.5em;
    }

    span {
      padding-left: 0.2em;
    }

    @media only screen and (max-width: ${Breakpoints.MOBILE}px) {
      width: 4.5em;
      padding: 4px 8px;
    }
  }
`;

const LanguageSelectionView: React.FC<LanguageProps> = ({ specificColor }) => {
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
      style={{ marginTop: '-4px', padding: '2px' }}
      selectedKeys={[i18next.language]}
      onClick={updateLanguageSelection}
      selectable
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
    <DropdownContainer color={specificColor}>
      <Dropdown
        overlay={languageMenuList}
        placement="bottomCenter"
        trigger={['click']}
      >
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
