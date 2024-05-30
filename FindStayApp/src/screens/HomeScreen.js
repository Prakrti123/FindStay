import React, {useState} from 'react';
import { 
    StyleSheet, Text, View,
    Image, FlatList, TouchableOpacity,
    ImageBackground, useColorScheme,
} from 'react-native';
import {Colors, Sizes, windowWidth, windowHeight, useDynamicTheme} from '../utils/theme';
import {Icons} from '../utils/icons';
import {Images} from '../utils/images';
import GIF from 'react-native-gif';
import Video from 'react-native-video';

const HomeScreen = ({navigation}) => {

    
    const colorScheme = useColorScheme();
    const theme = useDynamicTheme();
    
    const DATA = [
        {
            id: 1,
            title: 'Recent',
            imgArray: [
                {
                    id: `#${Images.img13}`,
                    img: Images.img4,
                    address: 'Minal Recidency',
                    seating: 'Single Seater',
                    rent: '5999',
                    rating: 4.5,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
                {
                    id: `#${Images.img5}`,
                    img: Images.img5,
                    address: 'Arrera Colony',
                    seating: 'Single Seater',
                    rent: '6000',
                    rating: 4.1,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
                {
                    id: `#${Images.img6}`,
                    img: Images.img6,
                    address: 'Ashoka Garden',
                    seating: 'Two Seater',
                    rent: '5500',
                    rating: 3.9,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
            ]
        },
        {
            id: 2,
            title: 'Trending',
            imgArray: [
                {
                    id: `#${Images.img7}`,
                    img: Images.img7,
                    address: 'Shanti Niketan',
                    seating: 'Two Seater',
                    rent: '5500',
                    rating: 3.9,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
                {
                    id: `#${Images.img8}`,
                    img: Images.img8,
                    address: 'Indrapuri',
                    seating: 'Two Seater',
                    rent: '5500',
                    rating: 3.9,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
                {
                    id: `#${Images.img9}`,
                    img: Images.img9,
                    address: 'Bharti Niketan',
                    seating: 'Two Seater',
                    rent: '5500',
                    rating: 3.9,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
            ]
        },
        {
            id: 3,
            title: 'Top',
            imgArray: [
                {
                    id: `#${Images.img17}`,
                    img: Images.img17,
                    address: 'MP Nagar',
                    seating: 'Two Seater',
                    rent: '5500',
                    rating: 3.9,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
                {
                    id: `#${Images.img18}`,
                    img: Images.img18,
                    address: 'Indrapuri',
                    seating: 'Two Seater',
                    rent: '5500',
                    rating: 3.9,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
                {
                    id: `#${Images.img16}`,
                    img: Images.img16,
                    address: 'Bharti Niketan',
                    seating: 'Two Seater',
                    rent: '5500',
                    rating: 3.9,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
            ]
        },
        {
            id: 4,
            title: 'Buy',
            imgArray: [
                {
                    id: `#${Images.img10}`,
                    img: Images.img10,
                    address: 'Kolar',
                    seating: 'Two Seater',
                    rent: '5500',
                    rating: 3.9,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
                {
                    id: `#${Images.img11}`,
                    img: Images.img11,
                    address: 'Minal Recidency',
                    seating: 'Two Seater',
                    rent: '5500',
                    rating: 3.9,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
                {
                    id: `#${Images.img12}`,
                    img: Images.img12,
                    address: 'Kolar',
                    seating: 'Two Seater',
                    rent: '5500',
                    rating: 3.9,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
            ]
        },
        {
            id: 5,
            title: 'New',
            imgArray: [
                {
                    id: `#${Images.img4}`,
                    img: Images.img13,
                    address: 'Awadhpuri',
                    seating: 'Two Seater',
                    rent: '5500',
                    rating: 3.9,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
                {
                    id: `#${Images.img14}`,
                    img: Images.img14,
                    address: 'Lal Ghati',
                    seating: 'Two Seater',
                    rent: '5500',
                    rating: 3.9,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
                {
                    id: `#${Images.img15}`,
                    img: Images.img15,
                    address: 'Old Bhopal',
                    seating: 'Two Seater',
                    rent: '5500',
                    rating: 3.9,
                    reviews: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        },
                        {
                            id: 2,
                            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        },
                        {
                            id: 3,
                            text: 'Nisi lacus sed viverra tellus in hac habitasse platea. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vivamus arcu felis bibendum ut. Augue mauris augue neque gravida in fermentum et sollicitudin ac. ',
                        },
                    ]
                },
            ]
        },
    ];

    const cardInfo = [
        {
          id: 1,
          address: 'Recent',

        },
        {
          id: 2,

          address: 'Trending',
        },
        {
          id: 3,
          address: 'Top',
        },
        {
          id: 4,
          address: 'Buy',
        },
        {
          id: 5,
          address: 'New',
        },
    ];

    const [SelectedType, setSelectedType] = useState(0);
    const [SelectedTab, setSelectedTab] = useState('Recent');

    return (
    
        <View style={[styles.container, {
            backgroundColor: '#F9F5F6'
        }]}>
            {/* <Video 
                style={{
                    width: '100%', 
                    height: '100%',
                    position: 'absolute',
                }} 
                source={require('../assets/video/gif.mp4')}                          // Can be a URL or a local file.
                resizeMode='cover'
                repeat
            >
            </Video> */}
            <ImageBackground 
                source={{ uri: 'https://youronlineGif.gif' }}
                // source={'https://ericaofanderson.tumblr.com/post/173326491027/storm-cloud-you-can-get-this-gif-as-a-looping'}
                // source={colorScheme==='dark' ? require('../assets/images/giphy.gif'): Images.GlassBG}
                style={[styles.BG, {resizeMode: 'cover'}]}
            >

                {/* header */}
                <View style={[styles.header]}>
                    <Text style={[styles.title, {
                        color: theme.textFocused,
                        opacity: colorScheme === 'dark' ? 1 : 0.8,
                        }
                    ]}>
                        FindStay
                    </Text>

                    {/* <Image
                        source={Images.FindStay}
                        style={[{
                            width: windowWidth*0.4,
                            height: windowHeight*0.1,
                        }]}
                    /> */}
        
                    <Image
                        source={Icons.menu}
                        style={[styles.menu, {
                            tintColor: theme.icon,
                        }]}
                    />
                </View>

                    {/* tabs */}
        
                <FlatList
                    horizontal
                    contentContainerStyle={{
                        height: windowHeight*0.06,
                        // backgroundColor: 'white',
                        marginBottom: Sizes.padding,
                    }}
                    data={DATA}
                    renderItem={({item, index}) =>
                    <>
                        {/* <TouchableOpacity 
                            style={{
                                // backgroundColor: 'blue',
                                height: windowHeight*0.06,
                            }}
                            onPress={() => {
                            setSelectedType(index)
                            setSelectedTab(item.title)
                            }}
                        >
                            <Text style={[styles.tabText, {
                                top: SelectedType === index ? 0 : 3,
                                paddingHorizontal: Sizes.h2+4,
                                paddingVertical: SelectedType === index ? 3.3 : 2,
                                paddingRight: SelectedType === index ? Sizes.h3+4 : Sizes.h4+4,
                                borderRadius: SelectedType === index ? Sizes.padding : Sizes.padding,
                                borderBottomWidth: SelectedType === index ? 4 : 2.4,
                                borderWidth: SelectedType === index ? 1.3 : 0,
                                fontWeight: SelectedType === index ? '700' : '600',
                                letterSpacing: SelectedType === index ? 0.8 : 0.4,
                                color: SelectedType === index ? theme.textFocused : theme.text,
                                fontSize: SelectedType === index ? Sizes.h1 : Sizes.h2,
    
                                borderColor: SelectedType === index ? Colors.pink : Colors.orange,
                                borderLeftWidth: SelectedType === index ? 5 : 2.4,
                                borderRightWidth: SelectedType === index ? 1.8 : 0.01,
                                // backgroundColor: useColorScheme === 'dark' ? null : '#FFDDCC8A',
                            }]}>
                                {item.title}
                            </Text>
                        </TouchableOpacity> */}

                        <TouchableOpacity 
                            style={{
                                // backgroundColor: 'blue',
                                height: windowHeight*0.06,
                            }}
                            onPress={() => {
                            setSelectedType(index)
                            setSelectedTab(item.title)
                            }}
                        >
                            <Text style={[styles.tabText, {
                                top: SelectedType === index ? 0 : 3,
                                marginHorizontal: Sizes.padding*1,
                                paddingVertical: SelectedType === index ? 3.3 : 2,
                                paddingHorizontal: SelectedType === index ? 2 : 0,
                                borderRadius: SelectedType === index ? 2 : Sizes.padding,
                                borderBottomWidth: SelectedType === index ? 2.5 : 0,
                                // borderWidth: SelectedType === index ? 1.3 : 0,
                                fontWeight: SelectedType === index ? '800' : '600',
                                letterSpacing: SelectedType === index ? 1.2 : 0.6,
                                color: SelectedType === index ? theme.textFocused : theme.text,
                                fontSize: SelectedType === index ? Sizes.h1+2 : Sizes.h2+1,

                                borderColor: SelectedType === index ? Colors.primary : Colors.orange,
                                // borderLeftWidth: SelectedType === index ? 1.2 : 0,
                                // borderRightWidth: SelectedType === index ? 1.2 : 0,
                                // backgroundColor: useColorScheme === 'dark' ? null : '#FFDDCC8A',
                                shadowColor: 'black',
                                shadowOffset: {
                                    width: 20,
                                    height: 30,
                                },
                            }]}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    </>
                    }
                    keyExtractor={item => `#${item.id}`}
                />

                    {/* cards */}
                
                <FlatList
                    contentContainerStyle={{
                        paddingBottom: windowHeight*0.08,
                    }}
                    data={DATA[SelectedType].imgArray}
                    renderItem={({item, index}) => 
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('HouseDetail', {item}), console.log(item)}}
                        style={{
                            // top: -windowHeight*0.3,
                            alignSelf: 'center',
                            alignItems: 'center',
                            // justifyContent: 'flex-start',
                            marginVertical: Sizes.h4,
                            marginTop: index === 0 ? Sizes.h5*0.5 : Sizes.h4,
                            // paddingTop: Sizes.padding,
                            width: windowWidth*0.9,
                            backgroundColor: theme.BG, //'#FFDDCDCC',
                            // borderWidth: 0.3,
                            borderRadius: Sizes.radius*1.4,
                            borderColor: '#0A0A0A1A',
                            elevation: 0,
                            paddingBottom: -5,
                        }}
                    >
    
                        <Image
                            source={item.img}
                            style={{
                                width: windowWidth*0.85,
                                height: windowWidth*0.85,
                                // resizeMode: 'contain',
                                borderRadius: Sizes.radius*1,

                            }}
                        />

                        <View style={{
                            width: windowWidth*0.85,
                            marginVertical: Sizes.h4,
                            // backgroundColor: '#ffffff99'
                        }}
                        >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: Sizes.h4,
                            }}>

                                <View>

                                    <Text style={{
                                        color: theme.text,
                                        fontSize: Sizes.h1,
                                        fontWeight: '500',
                                        letterSpacing: 0.2,
                                    }}>
                                        {item.address}
                                    </Text>

                                    <Text style={{
                                        color: theme.icon,
                                        fontSize: Sizes.h2,
                                        fontWeight: '400',
                                        letterSpacing: 0.1,
                                    }}>
                                        {item.address}
                                    </Text>

                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text
                                        style={{
                                            color: theme.icon,
                                            fontSize: Sizes.h2,
                                            fontWeight: '500',
                                            letterSpacing: 0.4,
                                    }}>Rating -
                                        <Text style={{
                                            // color: theme.text,
                                            fontSize: Sizes.h2*1.1,
                                            // fontWeight: '500',
                                        }}> {item.rent ? `${item.rating}`: '4.5'}
                                        </Text>
    
                                    </Text>
                                    
                                    {/* <Image /> */}
                                    <Image
                                            source={Icons.star}
                                            style={{
                                                width: Sizes.radius*1.4,
                                                height: Sizes.radius*1.4,
                                                left: 5,
                                            }}
                                    />
                                </View>

                                

                            </View>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                justifyContent: 'space-between',
                                marginTop: -Sizes.h2,
                                marginBottom: Sizes.h5,
                            }}>
                                
                                <Text
                                    style={{
                                        color: theme.text,
                                        fontSize: Sizes.h2+1,
                                        fontWeight: '500',
                                }}>Rent -
                                    <Text style={{
                                        // color: theme.text,
                                        fontSize: Sizes.h1*1.3,
                                        fontWeight: '700',
                                        letterSpacing: 0.4,
                                    }}> {item.rent ? `₹${item.rent}`: '₹5,999'}</Text>
                                </Text>

                                <TouchableOpacity style={{
                                    width: windowWidth*0.26-2,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: Colors.primary,
                                    borderRadius: Sizes.radius*2,
                                    paddingHorizontal: Sizes.h2,
                                    paddingVertical: Sizes.h5*0.8,
                                    paddingTop: Sizes.h5,


                                }}
                                onPress={() => navigation.navigate('HouseDetail', {item})}>

                                    <Text style={{
                                        color: theme.textFliped,
                                        fontSize: Sizes.h1,
                                        fontWeight: '700',
                                        bottom: 2,
                                        fontVariants: 'small-caps',
                                        marginRight: 1,
                                    }}>
                                        Book
                                    </Text>

                                    <Image
                                        source={Icons.home}
                                        style={[styles.menu, {
                                            width: Sizes.radius*1.4,
                                            height: Sizes.radius*1.3,
                                            resizeMode: 'contain',
                                            tintColor: Colors.white_1,
                                        }]}
                                    />

                                </TouchableOpacity>
                            </View>
                        </View>
    
                    </TouchableOpacity>
                    }
                />

                {/* <Image source={require('../assets/images/NoiseBG1.png')}>

                </Image> */}
    
            </ImageBackground>

        </View>

    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    BG: {
        // flex: 1,
        width: windowWidth,
        height: windowHeight,
    },
    container: {
        flex: 1,
        // position: 'absolute',
        backgroundColor: Colors.black,
        // zIndex: 2,
    },
    header: {
        marginTop: Sizes.padding*1.2,
        marginHorizontal: Sizes.padding*0.8,
        marginBottom: Sizes.padding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: Colors.white_3,
        lineHeight: Sizes.h1*1.8,
        fontSize: Sizes.h2*2,
        fontWeight: '600',
        letterSpacing: 1.6,
        textAlign: 'center',
        alignSelf: 'center',
    },
    tabText: {
        marginHorizontal: Sizes.padding*0.7,
        color: Colors.white_2,
        lineHeight: Sizes.h1*1.8,
        fontSize: Sizes.h2,
        fontWeight: '400',
        letterSpacing: 0.5,
        textAlign: 'center',
        alignSelf: 'center',  
        borderBottomWidth: 2,
        borderColor: Colors.pink,
    },
    menu: {
        tintColor: null,
        width: Sizes.base*1.4,
        height: Sizes.base*1.4,
        marginBottom: Sizes.padding*0.2,
    }
})