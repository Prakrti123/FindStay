import React from 'react';
import {
  SafeAreaView, ScrollView, StatusBar,
  StyleSheet, Text, useColorScheme,
  View,
} from 'react-native';
import AppNavigator from "./src/navigator/AppNavigator";
import {Sizes, windowWidth, windowHeight, useDynamicTheme} from "./src/utils/theme";
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const theme = useDynamicTheme();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return(
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
      style={{height: 0}}
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.BG}
      />
        <AppNavigator/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default App;
