/**
 * Launch Screen Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as PlayActions from '@redux/play/actions';

// The component we're mapping to
import VideoView from './VideoView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  play: state.play,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  getPlayInfo: PlayActions.getPlayInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoView);
