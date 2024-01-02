import colors from './colors';

import { styled } from 'styled-components';

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  &.col-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media only screen and (max-width: 768px) {
    &.col-6 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Page = styled.div`
  padding: 70px 10px 0 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;

  @media only screen and (max-width: 768px) {
    padding: 140px 20px 0 20px;
  }
`;

export {
  colors,
  Col,
  Row,
  Page,
};
