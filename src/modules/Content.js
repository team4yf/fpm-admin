import React from 'react'

export default React.createClass({
  render: () => {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    )
  }
})
