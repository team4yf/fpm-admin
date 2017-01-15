import React from 'react'

export default React.createClass({
  render: () => {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">admin
            <b className="caret"></b></a>
          <ul className="dropdown-menu">
            <li><a href="javascript:void(0)">Setting</a></li>
            <li><a href="javascript:void(0)">Change Password</a></li>
            <li className="divider"></li>
            <li><a href="javascript:void(0)">Logout</a></li>
          </ul>
        </li>
      </ul>
    )
  }
})
