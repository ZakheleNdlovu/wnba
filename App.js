import { StyleSheet, View } from 'react-native';
import Navigation from './components/Navigation';


export default function App() {
  return (
    <View style={styles.box}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    paddingTop: 27,
    height: '100%',
    backgroundColor: 'gray',

  }
})
