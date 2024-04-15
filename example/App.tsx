import { StyleSheet, Text, View } from 'react-native';

import * as ExpoAudioDeviceManager from 'expo-audio-device-manager';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoAudioDeviceManager.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
