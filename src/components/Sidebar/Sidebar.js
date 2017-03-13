import React, {
  PropTypes,
  Component
} from 'react'
import AppStyles from '../../utils/styles'

class Sidebar extends Component {
  static propTypes = {
    style: PropTypes.object
  }

  render () {
    const { style } = this.props
    let compStyles = style ? { ...styles.sidebar, ...style } : styles.sidebar

    return (
      <div style={compStyles}>
        <h1>Sidebar</h1>
      </div>
    )
  }
}

module.exports = Sidebar

const styles = {
  sidebar: {
    width: 290,
    height: '100%'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: AppStyles.color.primary,
    textDecoration: 'none'
  },
  placeholderTitle: {
    fontWeight: 500,
    color: AppStyles.color.primary
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: AppStyles.color.primary
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white'
  },
  root: {
    fontWeight: 300
  },
  header: {
    backgroundColor: 'white',
    color: 'white',
    padding: '16px',
    fontSize: '1.5em'
  }
}
