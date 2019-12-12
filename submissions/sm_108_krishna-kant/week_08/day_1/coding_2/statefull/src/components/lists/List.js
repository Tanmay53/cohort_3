import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: this.props.items
    };
  }

  // Creating Li with array
  printLi = items => {
    let li = [];
    items.forEach(item => {
      li.push(<li>{item}</li>);
    });

    return li;
  };

  // Rendering Li's
  render() {
    return (
      <div>
        <ul>{this.printLi(this.state.listItem)}</ul>
      </div>
    );
  }
}

export default List;
