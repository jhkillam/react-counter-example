const HelloWorld = function() {
  return <h1>Hello World!</h1>;
};

const List = function(props) {
  return (
    <div>
      <p>This is {props.name}'s list of things to do!</p>
      <ul>
        <li>todo</li>
        <li>todo</li>
        <li>todo</li>
      </ul>

    </div>
  );
};

const Hello = function(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <List name={props.name} />
    </div>
  );
};

class HelloClass extends React.Component {
  componentDidMount() {
    console.log('A HelloClass component mounted with props', this.props)
  }
  componentWillUnmount() {
    console.log('This component is about to be unmounted')
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}, welcome to class.</h1>
        <List name={this.props.name} />
      </div>
    )
  }
}

class Counter extends React.Component {
  state = {
    count: 0,
    color: "blue"
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleToggle = () => {
    // const color = (this.state.color === 'blue') ? "green" : "blue"
    let color = 'blue'
    if (this.state.color === 'blue') {
      color = 'green'
    }
    this.setState({
      color: color
    })
  }
  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.props.name}</h1>
        <p>The count is {this.state.count}</p>
        <button onClick={this.handleToggle}>Toggle Color</button>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    )
  }
}

const App = function() {
  return (
    <div>
      <Counter name="First Counter"/>
      <Counter name="Second Counter"/>
      <Counter name="Third Counter"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
