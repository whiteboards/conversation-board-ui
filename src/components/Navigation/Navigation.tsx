import * as React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { Container, Dropdown, Menu } from 'semantic-ui-react';

const Navigation: React.StatelessComponent<any> = (props) => {
  return (
    <Menu stackable attached borderless>
      <Container>
        <Menu.Item header as={Link} name='Conversation Board' to='/' />
        <Dropdown item text='Boards'>
          <Dropdown.Menu>
            <Menu.Item as={NavLink} name='Board One' to='/board/1' />
            <Menu.Item as={NavLink} name='Board Two' to='/board/2' />
            <Menu.Item as={NavLink} name='Board Three' to='/board/3' />
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item as={NavLink} name='User' to='/user' />

        <Menu.Menu position='right'>
          <Menu.Item as={Link} name='Logout' to='/login' />
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navigation;
