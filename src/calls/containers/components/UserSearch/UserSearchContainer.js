import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import * as searchActionCreators from 'calls/actions/search'
import { withRouter } from 'react-router-dom'
import {UserSearch} from 'calls/components'

function mapStateToProps ({calls}) {
  return {
    userSelected: calls.search.userSelected,
    value: calls.search.value,
    results: calls.search.searchResults,
    displayDialpad: calls.dialpad.display
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...searchActionCreators
  },
  dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch))