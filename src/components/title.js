import React from 'react';

class Title extends React.Component {
  constructor(props){
    super(props);
    this.state =  {
      h1Text:this.props.text,
    }
  }

  // renderText = () => {
  //   this.setState({h1Text:this.props.text})
  //   console.log(this.state);
  //   return this.state.h1Text;
  // };

  render() {
    return <h1>
      {this.state.h1Text}
    </h1>
  }
}

export default Title;
