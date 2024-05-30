import React from 'react';
import {
    Dimensions, useColorScheme,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const backgroundStyle = {
//   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// };

export const Colors = {

    BG: '#F9F5F6', //'#FFDDCCFF', //A9B388
    textFocused: '#0A0A0A',
    text: '#1C1C0A',
    textFliped: '#F1F1F1',
    icon: '#6d6d6d', //'#3A3A3A',
    iconFliped: '#F1F1F1',
    bottomTab: '#FFDDCC', //'#FFB1903A',
    greyBG: '#E4E4E4',
    border: '#A1A1A1',

    main_dark: '#4F6F52',
    main: '#739072',
    main_2: '#86A789',
    main_3: '#D2E3C8',

    pink: '#F72798',
    orange: '#F57D1F',
    yellow: '#EBF400',

    primary: '#F14C22', //#F16B22
    bg_dark: '#030303',
    //bg_dark: '#15151C',
    gray: '#7A7A7A',
    white: '#FFFFFF',
    white_1: '#EEEEEE',
    white_2: '#DDDDDD',
    white_3: '#d9d9d9',
    secondary: '#1C1C29',
    glass_1: '#15151C',
    glass_2: '#F2F5FB',
    black: '#000000',
    red: '#FF0000',
    light_gray: '#323436',
    sidebar_links: '#83899F',
    green: '#05BF01',
    bottomBar: '#0D0E10',
};

export const darkColors = {

  BG: '#15151B',  //3D3B40  //45474B
  textFocused: '#FFFFFF',
  text: '#DDDDDD',
  textFliped: '#F1F1F1',
  icon: '#F1F1F1',
  iconFliped: '#0A0A0A',
  bottomTab: '#15151B',
  greyBG: '#A0A0DD',
  border: '#DDDDDD',
  
  main_dark: '#4F6F52',
  main: '#739072',
  main_2: '#86A789',
  main_3: '#D2E3C8',

  pink: '#F72798',
  orange: '#F57D1F',
  yellow: '#EBF400',

  primary: '#F16B22',
  bg_dark: '#030303',
  //bg_dark: '#15151C',
  gray: '#7A7A7A',
  white: '#FFFFFF',
  white_2: '#DDDDDD',
  white_3: '#d9d9d9',
  secondary: '#1C1C29',
  glass_1: '#15151C',
  glass_2: '#F2F5FB',
  black: '#000000',
  red: '#FF0000',
  light_gray: '#323436',
  sidebar_links: '#83899F',
  green: '#05BF01',
  bottomBar: '#0D0E10',
};
  
  export const getDarkTheme = {
    backgroundColor: Colors.bg_dark,
    color: '#fff',
    icon: '#fff',
    bottomIcon: '#9D9EA0',
  };
  
  export const inputDarkTheme = {
    backgroundColor: '#FFE6E0',
    color: 'grey',
  };
  
  export const getLightTheme = {
    backgroundColor: '#ffff',
    color: '#000',
    icon: '#61677ACC',
    bottomIcon: '#9D9EA0',
  };
  

const Sizes = {
    base: 24,
    padding: 22,
    radius: 16,
    h1: 16,
    h2: 14,
    h3: 12,
    h4: 10,
    h5: 8,
};

export { 
    windowWidth, windowHeight, //device dimensions
    Sizes,
};

export const useDynamicTheme = () => {
  const colorScheme = useColorScheme();
  const AppTheme = colorScheme === 'dark' ? darkColors : Colors;

  return AppTheme;
};