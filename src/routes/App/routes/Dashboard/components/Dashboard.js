// React
import React, {
  PropTypes,
  Component
} from 'react'
// Components
import {
  Loader
} from '../../../../../components'
// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {
    app: state.app.get('data').toJS()
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
    },
    dispatch
  )
})

class Dashboard extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  dashboardContent () {
    return <h1>Dashboard</h1>
  }

  content () {
    const {
      app
    } = this.props
    let content

    if (app.isLoading) {
      content = <Loader />
    } else {
      content = this.dashboardContent()
    }

    return content
  }

  render () {
    return (
      <div className='flx h-100'>
        {this.content()}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
