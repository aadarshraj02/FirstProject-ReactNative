import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.whiteText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
});

export default AppPro;
