import React from 'react';
import styled from '@emotion/styled';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { ContactLinks } from '../utils/constants';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.5em;
  margin-top: auto;
  height: 80px;
  background-color: #2c3e50;

  .ant-btn {
    padding: 0;
  }

  .anticon {
    font-size: 2em;
  }
`;

const FooterView: React.FC = () => {
  return (
    <FooterContainer>
      <Button
        type="text"
        href={ContactLinks.LINKEDIN.url}
        target="_blank"
        rel="noopener"
      >
        <LinkedinFilled style={{ color: ContactLinks.LINKEDIN.color }} />
      </Button>
      <Button
        type="text"
        href={ContactLinks.GITHUB.url}
        target="_blank"
        rel="noopener"
      >
        <GithubFilled style={{ color: ContactLinks.GITHUB.color }} />
      </Button>
    </FooterContainer>
  );
};

export default FooterView;
