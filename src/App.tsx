import * as React from 'react';

import { Button, Container, Header, Segment } from 'semantic-ui-react';

// interface IAppProps {
//   // No props.
//   // We need this as a placeholder for the component.
//   // (We could pass props to here from where we call ReactDOM.render in index.tsx)
// }

interface IAppState {
  counter: number;
}

class App extends React.Component<any, IAppState> {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    try {
      this.setState((prevState, props) => ({
        ...prevState,
        counter: prevState.counter + 1,
      }));
    } catch (err) {
      console.error('[App] failed to increment counter', err);
    }
  }

  render() {
    return (
      <Container>
        <Header size='huge'>Conversation Board UI</Header>
        <Segment>
          <p>Counter: {this.state.counter}</p>
          <Button primary onClick={this.increment}>Add</Button>
        </Segment>
      </Container>
    );
  }
}

export default App;
