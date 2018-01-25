/**
 * Launch Screen Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions


// The component we're mapping to
import AccountView from './AccountView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
});

// Any actions to map to the component?
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountView);
