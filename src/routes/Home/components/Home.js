import React, { Component, PropTypes } from 'react'
import Landing from '../../../components/Landing'
import './Home.scss'
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

class Home extends Component {
  static propTypes = {
    app: PropTypes.object,
    location: PropTypes.object
  }

  static contextTypes = {
    route: PropTypes.object,
    router: PropTypes.object.isRequired
  }

  render () {
    return (
      <div className='flx ph2 home__landing'>
        <Landing />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
