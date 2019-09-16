import React from 'react';

class Message extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <ul>
      {this.props.people.map((person,idx) => (
          <li key={idx}> {person.name}</li>
      ))}
      </ul>
    );
  }
}

export default Message;
