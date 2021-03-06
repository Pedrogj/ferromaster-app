import styled from "styled-components";
import { themeValue } from "../../utils/helpers/theme";

export const Div = styled.div`
  @media screen and (max-width: 960px) {
    height: 50px;
  }
`;

export const NavMobile = styled.nav`
  background-color: ${() => themeValue.ligtGreyColor};
  height: 68px;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

export const DivButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 10px;
  justify-items: center;
`;

export const HomeButton = styled.div`
  display: grid;
  justify-content: center;
  width: 70px;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: grid;
  justify-content: center;
  font-size: 25px;
`;
