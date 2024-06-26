import {Alert, Platform} from 'react-native';

const server =
  Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

const showError = err => {
  if (err.response && err.response.data) {
    Alert.alert('Something wrong.', `Message: ${err.response.data}`);
  } else {
    Alert.alert('Something wrong.', `Message: ${err}`);
  }
};

const showSuccess = msg => {
  Alert.alert('Success!', msg);
};

export {server, showError, showSuccess};
