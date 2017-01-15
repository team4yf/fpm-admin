import React from 'react'

export default React.createClass({
  render: () => {
    return (
      <form className="navbar-form navbar-right">
        <div className="form-group">
          <input type="text" className="form-control col-md-8" placeholder="Search" />
        </div>
      </form>
    )
  }
})
