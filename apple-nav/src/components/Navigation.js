import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const DivNav = styled.div`
  display: flex;
  align-content:center;
  width: 100%;
  background: #2d2d2d;
  `;

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 10px 15% 10px 15%;
    width: 100%;
   
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
          <StyledLink to="/mac">Mac</StyledLink>
        </div>
        <div>
          <StyledLink to="/contact">Contact</StyledLink>
        </div>
      </NavBar>
    </DivNav>
    
  );
};

export default Navigation;
