import * as React from 'react';

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
      <div>
        <h1>Conversation Board UI</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default App;
