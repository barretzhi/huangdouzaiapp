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
import ListView from './ListView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
});

// Any actions to map to the component?
const mapDispatchToProps = {
    setPlayInfo: PlayActions.setPlayInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
