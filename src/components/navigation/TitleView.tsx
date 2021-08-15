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

enum PageTitles {
  HOME = 'The Simple UI',
  ABOUT = 'About Us',
  CONTACT = 'Contact Us',
  NOT_FOUND = 'Page Not Found',
}

interface PageIconAndTitleSpec {
  icon: AntdIconProps;
  title: PageTitles;
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

const getPageDetailsByRoute = (routeName: string): PageIconAndTitleSpec => {
  switch (routeName) {
    case PageRoutes.HOME:
      return { icon: <HomeOutlined />, title: PageTitles.HOME };
    case PageRoutes.ABOUT:
      return { icon: <InfoCircleOutlined />, title: PageTitles.ABOUT };
    case PageRoutes.CONTACT:
      return { icon: <MailOutlined />, title: PageTitles.CONTACT };
    default:
      return { icon: <FileUnknownOutlined />, title: PageTitles.NOT_FOUND };
  }
};

const TitleView: React.FC = () => {
  const [pageIconAndTitle, setPageIconAndTitle] =
    React.useState<PageIconAndTitleSpec>({
      icon: <HomeOutlined />,
      title: PageTitles.HOME,
    });
  const location = useLocation();

  React.useEffect(() => {
    setPageIconAndTitle(getPageDetailsByRoute(location.pathname));
  }, [location]);

  return (
    <TitleContainer>
      {pageIconAndTitle.icon}
      <NavTitle>{pageIconAndTitle.title}</NavTitle>
    </TitleContainer>
  );
};

export default TitleView;
