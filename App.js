import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/login';
import SignInScreen from './app/screens/auth/signIn';
import SignUpScreen from './app/screens/auth/signUp';
import RootNavigtion from './app/navigation/rootNavigtion';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignUpScreen /> */}
      <RootNavigtion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
