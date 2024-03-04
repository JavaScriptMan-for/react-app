import React from 'react';
class Date extends React.Component {
  constructor(props) {
    super(props);
    this.title = "Date";
  }
  render() {
    return(
      <>
      <div>{this.title}</div>
      </>
    )
  }
}
export default Date;