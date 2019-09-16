import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      textField:'./.',
    }
  }

  keyLogger = (e) => {
    e.preventDefault();
    let input = e.target.value;
    this.setState({textField:input});
  }

  submitHandler = (e) => {
    e.preventDefault();
    if(this.state.textField === './.'){
      alert('enter a todo')
      return
    }
    this.props.addItem(this.state.textField)
    e.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input  onChange={this.keyLogger} placeholder="I need to...">
        </input>
      </form>
    );
  }

}

export default Form;
