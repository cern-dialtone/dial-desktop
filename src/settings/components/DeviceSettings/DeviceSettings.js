import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Header } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import ErrorBoundary from 'common/components/ErrorBoundary/ErrorBoundary';
import MicrophoneFieldContainer from 'settings/components/DeviceSettings/MicrophoneField/MicrophoneFieldContainer';
import SpeakersFieldContainer from 'settings/components/DeviceSettings/SpeakersField/SpeakersFieldContainer';
import SpeakersRingtoneFieldContainer from 'settings/components/DeviceSettings/SpeakersRingtoneField/SpeakersRingtoneFieldContainer';

export class DeviceSettings extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired
  };

  playSound = () => {
    document.getElementById('ringbackTone').play();
  };

  stopSound = () => {
    document.getElementById('ringbackTone').pause();
  };

  render() {
    const { t } = this.props;

    return (
      <div>
        <ErrorBoundary>
          <Header as={'h4'}>{t('devices.header')}</Header>
          <Form>
            <MicrophoneFieldContainer
              fieldLabel={t('devices.audioInputLabel')}
              fieldId={'audioSource'}
              fieldType={'audioinput'}
            />
            <SpeakersFieldContainer
              fieldLabel={t('devices.audioOutputLabel')}
              fieldId={'audioOutput'}
              fieldType={'audiooutput'}
            />
            <SpeakersRingtoneFieldContainer
              fieldLabel={t('devices.ringtoneOutputLabel')}
              fieldId={'ringtoneOutput'}
              fieldType={'audiooutput'}
            />
            <Button onClick={this.playSound}>Play Test Sound</Button>
            <Button onClick={this.stopSound}>Stop Test Sound</Button>
          </Form>
        </ErrorBoundary>
      </div>
    );
  }
}

export default translate('settings')(DeviceSettings);
