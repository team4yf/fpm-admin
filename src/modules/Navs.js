import React from 'react'

export default React.createClass({
  render: () => {
    return (
      <ul className="nav navbar-nav">
        <li className="active"><a href="javascript:void(0)">Dashboard</a></li>
        <li className=""><a href="javascript:void(0)">Applications</a></li>
        <li className="dropdown">
          <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Users
            <b className="caret"></b></a>
          <ul className="dropdown-menu">
            <li><a href="javascript:void(0)">List</a></li>
            <li><a href="javascript:void(0)">Another action</a></li>
            <li className="divider"></li>
            <li className="dropdown-header">Dropdown header</li>
            <li><a href="javascript:void(0)">One more separated link</a></li>
          </ul>
        </li>
      </ul>
    )
  }
})
