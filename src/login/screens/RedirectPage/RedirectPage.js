import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import qs from 'qs'

import {callsRoute} from 'calls/routes'
import {LoadingDimmer} from 'login/components/LoadingDimmer/LoadingDimmer'
import * as loginRoutes from 'login/routes'

class RedirectPage extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    urlQuery: PropTypes.string.isRequired,
    getMe: PropTypes.func.isRequired,
    loginInProgress: PropTypes.bool
  }

  componentDidMount = () => {
    const isOauthEnabled = process.env.REACT_APP_OAUTH_ENABLED
    const queryParams = qs.parse(this.props.urlQuery.slice(1))

    if (queryParams.code || isOauthEnabled === 'false') {
      this.props.login(queryParams.code).then(() => {
        this.props.getMe()
      })
    }
  }

  render () {
    if (this.props.loginInProgress) {
      return <LoadingDimmer/>
    }

    if (this.props.isAuthenticated) {
      return <Redirect exact={true} to={callsRoute.path}/>
    } else {
      return <Redirect exact={true} to={loginRoutes.loginRoute.path}/>
    }
  }
}

export default RedirectPage
