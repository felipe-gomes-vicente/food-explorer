import { useState } from 'react';
import { FiSearch, FiLogOut, FiMenu, FiX } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import receipt from '../../assets/receipt.svg';
import { useAuth } from '../../hooks/auth';

import { Container, Content, Logo, Nav, Favorites, NewDish, Search, Button, Logout } from './styles';

export function Header({search}) {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const { user, signOut } = useAuth();

  return (
    <Container>
      <Content>
        <Logo to="/">
          <img src={logo} alt="polígono azul" />
          <strong>food explorer</strong>
        </Logo>
          
        <Nav isVisible={menuIsVisible}>
          {
            user.isAdmin ? 
            <NewDish to="/new">+ Adicionar novo prato</NewDish>
            :
            <Favorites href="#">Meus favoritos</Favorites>
          }

          <Search>
          {<FiSearch size={20}/>}
          <input 
            type="text"
            placeholder="Busque pelas opções de pratos"  
            onChange={e => {search(e.target.value)}}
          />
          </Search>

          <Button to="/cart">
          <img src={receipt} alt="receipt" />
          Meu pedido <span>(0)</span>
          </Button>

          <Logout to="/" onClick={signOut}>
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