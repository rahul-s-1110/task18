import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigtion from './app/navigation/rootNavigtion';
import Login from './app/screens/login';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <RootNavigtion /> */}
      <Login />
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
