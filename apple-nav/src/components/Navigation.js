import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const DivNav = styled.div`
  display: flex;
  align-content:center;
  margin: 15px 15px 15px 15px;
  `;

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 10px 20px 10px 20px;
    width: 90%;
    background: #36454f;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;





const Navigation = () => {
  return (
    <DivNav>
      <NavBar>
        <div>
          <StyledLink to="/">Home</StyledLink>
        </div>
        <div>
          <StyledLink to="/about">About</StyledLink>
        </div>
        <div>
          <StyledLink to="/contact">Contact</StyledLink>
        </div>
      </NavBar>
    </DivNav>
    
  );
};

export default Navigation;
