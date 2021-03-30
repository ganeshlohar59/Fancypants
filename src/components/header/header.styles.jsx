import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0px 50px;

  background-color: white;
  position: fixed;
  box-shadow: rgba(176, 183, 190, 0.1) 0px 8px 20px;

  top: 0;

  z-index: 25;
`;

export const LogoContainer = styled(Link)`
  flex: 1;
  text-align: start;
`;

export const TopNavigationContainer = styled.nav`
  flex: 1;
  margin-left: 20px;
`;

export const NavItemList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const NavItem = styled.h4`
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  border-bottom: 5px solid white;

  cursor: pointer;

  &:hover {
    border-bottom: 5px solid #ff3f6c;
  }
`;
