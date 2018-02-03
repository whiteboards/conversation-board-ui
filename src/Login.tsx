import * as React from 'react';

import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment, Form } from 'semantic-ui-react';

// interface ILoginProps {
//   // no props
// }

const Login: React.StatelessComponent<any> = (props) => {
  return (
    <Container>
      <Segment>
        <Header>Login</Header>
        <Form>
          <Form.Field>
            {/* <label>Username</label> */}
            <input placeholder='Username' />
          </Form.Field>
          <Form.Field>
            {/* <label>Password</label> */}
            <input placeholder='Password' />
          </Form.Field>
          <Button
            // type='submit'
          >
            <Link to='/'>
              Login
            </Link>
          </Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default Login;
