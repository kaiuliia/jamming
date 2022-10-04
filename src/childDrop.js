import React from 'react';

export class ChildDrop extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <h1>Hey, my name is {this.props.name}</h1>
        <select id="drop" className="drop" onChange={this.handleChange}>
          <option value="Julia">Julia</option>
          <option value="Misha">Misha</option>
          <option value="Petr">Petr</option>
          <option value="Martin">Martin</option>
        </select>
      </div>
    );
  }
}