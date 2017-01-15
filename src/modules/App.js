import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ProgressBar from './ProgressBar'
import Content from './Content'
import Dashboard from './Dashboard'
import Chart from './Chart'
import Application from './Application'

export default React.createClass({
  render: () => {
    return (
      <div>
        <ProgressBar />
        <Header />
        <div className="container-fluid">
          <h3>Targets</h3>
          <Dashboard />
          <h3>Chart</h3>
          <Chart />
          <h3>Application</h3>
          <Application />
        </div>
        <Footer />
      </div>
    )
  }
})
