import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [burger, setBurger] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a>Model S</a>
        <a>Model 3</a>
        <a>Model X</a>
        <a>Model Y</a>
      </Menu>
      <RightMenu>
        <a>Shop</a>
        <a>Tesla Account</a>
        <CustomMenu onClick={() => setBurger((x) => !x)} />
      </RightMenu>
      <BurgerNav show={burger}>
        <CustomClose onClick={() => setBurger((x) => !x)}/>
        <li>
          <a>Existing Inventory</a>
        </li>
        <li>
          <a>Trade-in</a>
        </li>
        <li>
          <a>Cybertruck</a>
        </li>
        <li>
          <a>Roadster</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  transition: all 167ms ease-in-out;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};

  li {
    padding: 15px 0;
    border-bottom: solid 2px rgba(0, 0, 0, 0.2);
    width: 100%;
    text-align: left;
    a {
      font-weight: 600;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  align-self: end;

  &:hover {
    transform: scale(1.2);
  }
`;

export default Header;
