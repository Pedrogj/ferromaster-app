import styled from "styled-components";
import { Link } from "react-router-dom";
import { themeValue } from "../../utils/helpers/theme";

export const ContentLink = styled.div`
  padding-left: 20px;
`;

export const LinkBack = styled(Link)`
  background-color: ${() => themeValue.primary};
  color: white;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px;
  border: 2px solid ${() => themeValue.primary};
  cursor: pointer;
  font-size: ${() => themeValue.fontSize3};
  font-weight: ${() => themeValue.fontWeigth600};
  text-align: center;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  margin-top: 20px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
  &:disable {
    pointer-events: none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  justify-content: center;
  padding: 20px;

  @media screen and (max-width: 960px) {
    padding-bottom: 50px;
  }

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1080px) {
    gap: 8px;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Box = styled.div`
  border: none;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: transform 0.3s;

  @media (max-width: 770px) {
    display: grid;
    align-items: center;
    justify-content: center;
    align-content: space-between;
  }
`;

export const Img = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const TextContent = styled.div`
  padding: 10px;
`;

export const H3 = styled.h3`
  font-size: ${() => themeValue.fontSize3};

  @media (max-width: 960px) {
    font-size: ${() => themeValue.fontSize5};
  }
`;

export const ContentPrice = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;

export const ProductPrice = styled.h3`
  font-size: ${() => themeValue.fontSize2};

  @media (max-width: 400px) {
    font-size: ${() => themeValue.fontSize3};
  }
`;

export const Button = styled.div`
  background-color: ${() => themeValue.primary};
  color: white;
  display: inline-block;
  border-radius: 8px;
  border: 2px solid ${() => themeValue.primary};
  cursor: pointer;
  font-size: ${() => themeValue.fontSize3};
  font-weight: ${() => themeValue.fontWeigth600};
  text-align: center;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  margin-top: 5px;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;

  @media (max-width: 400px) {
    font-size: ${() => themeValue.fontSize5};
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
  &:disable {
    pointer-events: none;
  }
`;
