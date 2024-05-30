import React, {useState} from 'react';
import { 
    StyleSheet, Text, 
    View, Image, Dimensions,
    useColorScheme, FlatList,
    TouchableOpacity,
} from 'react-native';
import {Images} from '../utils/images';
import {Icons} from '../utils/icons';
import {
    Sizes, windowWidth, windowHeight, Colors, useDynamicTheme,
} from '../utils/theme';

  
const OnBoarding = ({navigation}) => {

    const theme = useDynamicTheme();

    // dummy data
    const DATA = [
        {
          id: 1,
          title: 'Find Hostels & Rooms',
          subtitle: 'Enter a city, town, or address to find available stays nearby.',
          img: Images.onBoardImg1,
          color: "#E3F2C1",
        },
        {
          id: 2,
          title: 'Pay your rent instantly',
          subtitle: `Once you've found the perfect place, tap the "Book Now" button to secure your reservation.`,
          img: Images.onBoardImg2,
          color: '#FCD8D4',
        },
        {
          id: 3,
          title: 'With FindStay',
          subtitle: ' Access your bookings anytime, anywhere, and easily manage them using our app.',
          img: Images.onBoardImg3,
          color: '#EAE7B1',
        },
    ];

    // states
    const [CurrentIndex, setCurrentIndex] = useState(0);

    // functions
    const onIndexChange = (index) => {
        setSelectedIndex(index);
    };

    const Item = ({title, img, subtitle}: ItemProps) => (
        <View style={[styles.center, styles.item]}>  
            <Image
                source={img}
                style={[styles.onBoardImg,  {
                }]}
            /> 

            <View style={[styles.center, styles.textBox]}>
                <Text style={[styles.title, {
                    color: theme.textFocused,
                }]}>{title}</Text>
    
                <Text style={[styles.subtitle, {
                    color: theme.text,
                }]}>{subtitle}</Text>
            </View>
        </View>
    );

    const styles = StyleSheet.create({
        center: {
            paddingTop: Sizes.padding,
            alignItems: 'center',
            justifyContent: 'center',
        },
        container: {
            flex: 1,
            paddingTop: Sizes.padding*3.2,
            justifyContent: 'flex-start',
            // backgroundColor: 'black',
        },
        onBoardImg: {
            width: windowWidth*0.9,
            height: windowWidth*0.9,
            resizeMode: 'contain',
            borderRadius: Sizes.radius,
        },
        dot: {
            width: Sizes.base*0.3,
            height: Sizes.base*0.3,
            borderRadius: Sizes.radius,
            backgroundColor: 'black',
            marginHorizontal: 5,
        },
        item: {
            justifyContent: 'flex-start',
        },
        textBox: {
            paddingHorizontal: windowWidth*0.1,
            width: windowWidth,
        },
        title: {
            marginTop: Sizes.padding*1.8,
            lineHeight: Sizes.h1*1.8,
            fontSize: Sizes.h2*2,
            fontWeight: '600',
            letterSpacing: 1.6,
            textAlign: 'center',
            alignSelf: 'center',
        },
        subtitle: {
            marginTop: Sizes.h3,
            marginBottom: Sizes.base*2,
            lineHeight: Sizes.h3*1.4,
            fontSize: Sizes.h3,
            fontWeight: '400',
            letterSpacing: 0.6,
            textAlign: 'center',
            alignSelf: 'center',
        },
        start: {
            alignItems: 'center',
            justifyContent: 'center',
            width: Sizes.base*3,
            height: Sizes.base*3,
            borderRadius: Sizes.radius*3,
            backgroundColor: Colors.main,
            marginBottom: Sizes.base*2.4,
        },
        arrow: {
            alignSelf: 'center',
            width: Sizes.base*1.6,
            height: Sizes.base*1.6,
            tintColor: '#0F0F0F',
        },
        pink: {
            backgroundColor: '#F72798',
        },
        orange: {
            alignItems: 'center',
            justifyContent: 'center',
            width: Sizes.base*2.6,
            height: Sizes.base*2.6,
            backgroundColor: '#F57D1F',
            borderRadius: Sizes.radius*2,
            elevation: 4,
        },
        yellow: {
            alignItems: 'center',
            justifyContent: 'center',
            width: Sizes.base*2.2,
            height: Sizes.base*2.2,
            backgroundColor: '#EBF400',
            borderRadius: Sizes.radius*2,
            elevation: 2,
        }
    
    });

    return (
        <>
        {useColorScheme === 'dark' ?

            <View style={[styles.center, styles.container, {
                // 🌚dark mode
                // backgroundColor: (CurrentIndex === 0 && useColorScheme === 'dark' ) ? "#000" : (CurrentIndex === 1 && useColorScheme === 'dark') ? '#000' : (CurrentIndex === 2 && useColorScheme === 'dark' ) ? '#000' : "#fff",
                backgroundColor: '#252525',
            }]}>
    
                <FlatList
                    horizontal
                    showHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        // backgroundColor: theme.BG,
                    }}
                    pagingEnabled
                    data={DATA}
                    renderItem={({item, index}) =>
                        <Item img={item.img} title={item.title} subtitle={item.subtitle}/>
                    }
                    keyExtractor={item => item.id}
                    onViewableItemsChanged={({viewableItems}) => {
                        setCurrentIndex(viewableItems[0].index);
                    }}
                />
                
                {CurrentIndex === 2
                    ?
                        <TouchableOpacity 
                            style={[styles.start, styles.pink]}
                            onPress={() => {navigation.navigate('BottomTab')}}
                        >
    
                            <View style={[styles.orange]}>
                                <View style={[styles.yellow]}>
                                    <Image
                                        source={Icons.arrowBold}
                                        style={[styles.arrow]}
                                    />
                                </View>
                            </View>
                            
                        </TouchableOpacity>
                    :
                        <FlatList
                            horizontal
                            contentContainerStyle={{
                                height: windowHeight*0.1,
                            }}
                            paginationEnabled
                            data={DATA}
                            renderItem={({item, index}) =>
                                <View style={[styles.dot, {
                                    width: index === CurrentIndex ? Sizes.base*0.8 : Sizes.base*0.4,
                                    height: index === CurrentIndex ? Sizes.base*0.2 : Sizes.base*0.2,
                                    backgroundColor: index === CurrentIndex ? Colors.orange : Colors.pink,
                                }]}/>
                            }
                            keyExtractor={item => item.id}
                        />
                }
    
                    
            </View>
            :
            <View style={[styles.center, styles.container, {
                backgroundColor: (CurrentIndex === 0) ? "#E3F2C1" : (CurrentIndex === 1 && useColorScheme === 'dark') ? '#FCD8D4' : (CurrentIndex === 2) ? '#EAE7B1' : "#fff",
                // backgroundColor: '#0A0A0A',
            }]}>
    
                <FlatList
                    horizontal
                    showHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        // backgroundColor: theme.BG,
                    }}
                    pagingEnabled
                    data={DATA}
                    renderItem={({item, index}) =>
                        <Item img={item.img} title={item.title} subtitle={item.subtitle}/>
                    }
                    keyExtractor={item => item.id}
                    onViewableItemsChanged={({viewableItems}) => {
                        setCurrentIndex(viewableItems[0].index);
                    }}
                />
                
                {CurrentIndex === 2
                    ?
                        <TouchableOpacity 
                            style={[styles.start, styles.pink]}
                            onPress={() => {navigation.navigate('Login')}}
                        >
    
                            <View style={[styles.orange]}>
                                <View style={[styles.yellow]}>
                                    <Image
                                        source={Icons.arrowBold}
                                        style={[styles.arrow]}
                                    />
                                </View>
                            </View>
                            
                        </TouchableOpacity>
                    :
                        <FlatList
                            horizontal
                            contentContainerStyle={{
                                height: windowHeight*0.1,
                            }}
                            paginationEnabled
                            data={DATA}
                            renderItem={({item, index}) =>
                                <View style={[styles.dot, {
                                    width: index === CurrentIndex ? Sizes.base*0.8 : Sizes.base*0.4,
                                    height: index === CurrentIndex ? Sizes.base*0.2 : Sizes.base*0.2,
                                    backgroundColor: index === CurrentIndex ? Colors.orange : Colors.pink,
                                }]}/>
                            }
                            keyExtractor={item => item.id}
                        />
                }
    
            </View>
        }
        </>
    )
}
export default OnBoarding;

