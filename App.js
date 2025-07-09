import { StyleSheet, View, Text } from 'react-native';
import Navigator from './components/Navigator';

export default function App() {
  return (
    <View style={styles.box}>
      <Navigator />

    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    paddingTop: 27

  }
})
