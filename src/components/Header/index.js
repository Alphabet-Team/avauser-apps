import React from 'react';
import { Panel, Badge, Container, Navbar, Brand } from './styled';

const Header = ({ count }) => (
  <Panel>
    <Container>
      <Navbar>
        <Brand>Avauser</Brand>
        <div>Following <Badge>{count}</Badge></div>
      </Navbar>
    </Container>
  </Panel>
);

export default Header;