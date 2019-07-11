import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import {
  callActions,
  connectionActions,
  recentCallsActions,
  authActions,
  authActionFactory
} from 'dial-core';

import { info, success, warning } from 'common/actions/notifications';
import PhoneProvider from 'calls/providers/PhoneProvider/PhoneProvider';
import { withPhoneService } from 'calls/providers/PhoneProvider/PhoneService';

import config from 'config';

const apiEndpoint = config.api.ENDPOINT;

export function mapStateToProps({ calls, auth }) {
  return {
    doNotDisturb: calls.status.doNotDisturb,
    call: calls.call,
    authToken: auth.authToken
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...authActions,
      logout: authActionFactory(apiEndpoint, "desktop").logout,
      ...connectionActions,
      ...callActions,
      ...recentCallsActions,
      success,
      info,
      warning
    },
    dispatch
  );
}

export default withPhoneService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PhoneProvider)
);
