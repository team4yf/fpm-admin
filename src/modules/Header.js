import React from 'react'
import Logo from './Logo'
import Navs from './Navs'
import SearchBar from './SearchBar'
import Profile from './Profile'

export default React.createClass({
  render: () =>{
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <Logo />
          <div className="navbar-collapse collapse navbar-responsive-collapse">
            <Navs />
            <Profile />
            <SearchBar />
          </div>
        </div>
      </div>
    )
  }
})
