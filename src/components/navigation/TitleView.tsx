import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  FileUnknownOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { PageRoutes } from '../common/constants';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../redux/hooks';
import { language } from '../../redux/reducer';

interface PageIconAndTitleSpec {
  icon: AntdIconProps;
  title: string;
}

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1em;
  color: #ecf0f1;
  padding-left: 1.4em;

  .anticon {
    font-size: 1.6em;
  }
`;

const NavTitle = styled.span`
  font-size: 1.1em;
`;

const TitleView: React.FC = () => {
  const { userLanguage } = useAppSelector(language);
  const { t } = useTranslation();
  const [pageIconAndTitle, setPageIconAndTitle] =
    React.useState<PageIconAndTitleSpec>({
      icon: <HomeOutlined />,
      title: t('navigation.pages.titles.home'),
    });
  const location = useLocation();

  React.useEffect(() => {
    setPageIconAndTitle(getPageDetailsByRoute(location.pathname));
  }, [location, userLanguage]);

  const getPageDetailsByRoute = (routeName: string): PageIconAndTitleSpec => {
    switch (routeName) {
      case PageRoutes.HOME:
        return {
          icon: <HomeOutlined />,
          title: t('navigation.pages.titles.home'),
        };
      case PageRoutes.ABOUT:
        return {
          icon: <InfoCircleOutlined />,
          title: t('navigation.pages.titles.about'),
        };
      case PageRoutes.CONTACT:
        return {
          icon: <MailOutlined />,
          title: t('navigation.pages.titles.contact'),
        };
      default:
        return {
          icon: <FileUnknownOutlined />,
          title: t('navigation.pages.titles.notFound'),
        };
    }
  };

  return (
    <TitleContainer>
      {pageIconAndTitle.icon}
      <NavTitle>{pageIconAndTitle.title}</NavTitle>
    </TitleContainer>
  );
};

export default TitleView;
