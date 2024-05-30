import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Colors, Sizes, windowWidth, windowHeight, useDynamicTheme} from '../utils/theme';
import {Icons} from '../utils/icons';
import {Images} from '../utils/images';

const PaymentScreen = () => {
  return (
    <View style={[styles.container]}>
      <Text>PaymentScreen</Text>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});