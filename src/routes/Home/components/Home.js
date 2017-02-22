import React, {
  Component,
  PropTypes
} from 'react'

// Redux
import actions from '../../../actions'
const {
  fetchDoctors
} = actions
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
    },
    dispatch
  )
})

class Home extends Component {

  render () {
    return (
      <div className='flx'>
        <button className="app__button fw5 mw5 center mt5">Click Me</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
