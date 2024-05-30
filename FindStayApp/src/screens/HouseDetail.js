import React from 'react';
import { 
    StyleSheet, Text, View,
    Image, TouchableOpacity, 
    ScrollView,
} from 'react-native';
import {Colors, Sizes, windowWidth, windowHeight, useDynamicTheme} from '../utils/theme';
import {Icons} from '../utils/icons';
import {Images} from '../utils/images';

const HouseDetail = ({route, navigation}) => {

    const theme = useDynamicTheme();
    const data = route.params.item;
 
    return (
        <View style={{flex: 1}}>

            <ScrollView contentContainerStyle={[styles.container]}>

                
    
                <View style={[]}>

                    <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                        <Image
                        source={Icons.arrowLeft}
                        style={{
                            tintColor: theme.icon,
                            // position: 'absolute',
                            alignSelf: 'flex-start',
                            
                            // zIndex: 1,
                            width: windowWidth*0.1,
                            height: windowWidth*0.1,
                        }}
    
                        />
                    </TouchableOpacity>
    
                    <Image
                        source={data.img}
                        style={[styles.img, {alignSelf: 'center',}]}
                    />
    
                </View>
    
                <View style={[styles.textContainer]}>
    
                    {/* <Text style={[styles.heading]}>{data.address}</Text> */}
    
                    <View style={{
                        justifyContent: 'space-between',
                        marginBottom: Sizes.h5*0.5,
                        flexDirection: 'row',
                    }}>
                        <Text style={[styles.heading]}>{data.address}</Text>
    
                        <View style={{
                            marginTop: Sizes.h4,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            {/* <Image /> */}
                            <Image
                                    source={Icons.star}
                                    style={{
                                        width: Sizes.radius*1.4,
                                        height: Sizes.radius*1.4,
                                        left: 2,
                                        bottom: 4
                                    }}
                            />
                            <Text
                                style={{
                                    color: theme.text,
                                    fontSize: Sizes.h2,
                                    fontWeight: '500',
                                    letterSpacing: 0.4,
                            }}>
                                <Text style={{
                                    // color: theme.text,
                                    fontSize: Sizes.h2*1.1,
                                    // fontWeight: '500',
                                }}> {data.rent ? `${data.rating}`: '4.5'}
                                </Text>
                            </Text>
                            
                            
                        </View>
                    
                    </View>
    
                        <Text style={{
                                color: theme.icon,
                                fontSize: Sizes.h1,
                                fontWeight: '500',
                                letterSpacing: 0.2,
                            }}>
                                {data.address}
                            </Text>
                </View>
    
                {/* acomodations */}
                <View style={[styles.center, styles.iconContainer, {
                    backgroundColor: theme.greyBG,
                }]}>
    
                    <View style={{
                        // elevation:2,
    
                        backgroundColor: theme.BG,
                        borderRadius: Sizes.radius*2,
                    }}>
                        <Image
                            source={Icons.ac}
                            style={[styles.icon, {
                                tintColor: '#353535',
                            }]}
                        />
                    </View>
    
                    <View style={{
                        // elevation:2,
                        backgroundColor: theme.BG,
                        borderRadius: Sizes.radius*2,
                    }}>
                        <Image
                            source={Icons.canteen}
                            style={[styles.icon, {
                                tintColor: '#353535',
                            }]}
                        />
                    </View>
    
                    <View style={{
                        // elevation:2,
    
                        backgroundColor: theme.BG,
                        borderRadius: Sizes.radius*2,
                    }}>
                        <Image
                            source={Icons.wifi}
                            style={[styles.icon, {
                                tintColor: '#353535',
                            }]}
                        />
                    </View>
    
                    <View style={{
                        // elevation:2,
    
                        backgroundColor: theme.BG,
                        borderRadius: Sizes.radius*2,
                    }}>
                        <Image
                            source={Icons.bed}
                            style={[styles.icon, {
                                tintColor: '#353535',
                            }]}
                        />
                    </View>
                </View>
    
                {/* reviews */}
                <View style={[ {
                }]}>
                    <Text style={[styles.heading, {
                        fontSize: Sizes.h1*1.2,
                        letterSpacing: 0.3,
                    }]}>
                        Reviews
                    </Text>
                    

                    {data.reviews.map((item, index) => {
                        return(
                            <View style={{
                                marginTop: Sizes.h4-1,
                            }}>
                                <Text>{item.text}</Text>
                            </View>
                        )
                    })}

                    
                </View>
    
    
            </ScrollView>

            <View style={[styles.BtnContainer, {
                    // backgroundColor: 'transparent',
                backgroundColor: Colors.primary,
                flexDirection: 'row',
            }]}>

                <View>
                    <Text style={{
                        color: theme.textFliped,
                        fontSize: Sizes.h2,
                        fontWeight: '400',
                    }}>PRICE</Text>

                    <Text style={{
                        color: theme.textFliped,
                        fontSize: Sizes.h1*1.3,
                        fontWeight: '500',
                        letterSpacing: 0.4,
                    }}> 
                        {data.rent ? `₹${data.rent}`: '₹5,999'}
                    </Text>
                                
                </View>

                <TouchableOpacity style={[styles.btn, styles.center, {
                    backgroundColor: theme.BG
                }]}
                onPress={() => {navigation.navigate('Receipt', {data})}}>
                    <Text style={{
                        color: Colors.primary,
                        fontWeight: '700',
                        fontSize: Sizes.h1,
                    }}>Book Now!</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default HouseDetail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '',
        paddingHorizontal: Sizes.base,
        paddingBottom: Sizes.base*3,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgContainer: {

    },
    img: {
        width: windowWidth*0.9,
        height: windowWidth*0.9,
        borderRadius: Sizes.radius*1.8,
    },
    heading: {
        fontSize: Sizes.h1*1.5,
        fontWeight: '600',
        color: Colors.text,    
    },
    textContainer: {
        // paddingHorizontal: Sizes.base,
        marginTop: Sizes.h3,
    },
    iconContainer: {
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: windowWidth*0.9,
        height: windowWidth*0.15,
        borderRadius: Sizes.radius*2,
        paddingHorizontal: Sizes.h5,
        marginVertical: Sizes.h3,
        flexDirection: 'row',
    },
    icon: {
        width: windowWidth*0.065,
        height: windowWidth*0.065,
        resizeMode: 'contain',
        margin: Sizes.h4,
    },
    BtnContainer: {
        bottom: 0,
        position: 'absolute',
        alignSelf: 'center',
        paddingLeft: Sizes.base*1.3,
        paddingRight: windowWidth*0.011,
        width: windowWidth*0.9,
        height: windowHeight*0.08,
        borderRadius: Sizes.radius*24,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btn: {
        width: windowWidth*0.35,
        height: windowHeight*0.068,
        borderRadius: Sizes.radius*4,
    }
})