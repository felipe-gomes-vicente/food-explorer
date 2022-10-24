import { useState } from 'react';
import { FiSearch, FiLogOut, FiMenu, FiX } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import receipt from '../../assets/receipt.svg';

import { Container, Content, Logo, Nav, Favorites, Search, Button, Logout } from './styles';

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Container>
      <Content>
        <Logo to="/">
          <img src={logo} alt="polígono azul" />
          <strong>food explorer</strong>
        </Logo>
          
        <Nav isVisible={menuIsVisible}>
          <Favorites href="#">Meus favoritos</Favorites>

          <Search>
          {<FiSearch size={20}/>}
          <input 
            type="text"
            placeholder="Busque pelas opções de pratos"  
          />
          </Search>

          <Button to="/cart">
          <img src={receipt} alt="receipt" />
          Meu pedido <span>(0)</span>
          </Button>

          <Logout href="#">
          <FiLogOut />
          </Logout>
        </Nav>

        <button
          type='button'
          onClick={() => setMenuIsVisible(!menuIsVisible)}
        >
          {menuIsVisible ? <FiX /> : <FiMenu />}
        </button>
      </Content>
    </Container>
  )
}