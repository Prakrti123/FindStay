import React, {useRef, useEffect} from 'react';
import { 
    StyleSheet, Text, View,
    StatusBar, Image, TouchableOpacity,
    Animated, TextInput,

} from 'react-native';
import {Colors, Sizes, windowWidth, windowHeight, useDynamicTheme} from '../utils/theme';
import {Icons} from '../utils/icons';
import {Images} from '../utils/images';

const LoginScreen = ({navigation}) => {

    const theme = useDynamicTheme();
    const progress = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(progress, {
            toValue: 1.04,
            duration: 2000,
            useNativeDriver: true,
        }).start();
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 1.04,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.spring(scale, {
                toValue: 1,
                duration: 0,
                useNativeDriver: true,
            }),
        ]).start();
    }, [])
    

    return (
        <View style={[styles.container]}>
            <StatusBar
                style={{height: 0}}
                 // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={theme.primary}
            />

            <Animated.View style={[styles.logoBox, {
                opacity: progress,
                transform: [{scale}],
            }]}>
                <Image
                    style={[styles.logo, ]}
                    source={Images.logo}
                />

                <Image
                    style={[styles.logoShadow]}
                    source={Images.logo}
                />
            </Animated.View>

            <View style={[styles.textBox]}>
                <View style={[styles.inputBox]}>
                    <Text style={[styles.label]}>
                        Name
                    </Text>

                    <TextInput
                        style={[styles.input]}
                        placeholder={'enter name'}

                    />
                </View>

                <View style={[styles.inputBox]}>
                    <Text style={[styles.label]}>
                        Password
                    </Text>

                    <TextInput
                        keyboardtype={'password'}
                        style={[styles.input]}
                        placeholder={'enter password'}
                    />
                </View>


                <TouchableOpacity 
                onPress={() => {navigation.navigate('HomeNav')}}
                style={{
                    top: 20,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    width: windowWidth*0.6,
                    height: windowHeight*0.06,
                    borderRadius: Sizes.radius*2,
                }}>
                    <Text style={[styles.label, {
                        top: 4,
                        fontweight: '600',
                        alignSelf: 'center',
                    }]}>Login</Text>
                </TouchableOpacity>
            </View>


    
        </View>
    )
} 

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logo: {
        zIndex: 1,
        top: -2,
        left: -1,
        position: 'absolute',
        resizeMode: 'contain',
        width: '100%',
        tintColor: '#F6E6B2',  //F8F4E1
    },
    logoShadow: {
        resizeMode: 'contain',
        width: '100%',
        tintColor: '#322C2BA1',
        opacity: 0.36,
    },
    logoBox: {
        width: windowWidth*0.6,
        height: windowHeight*0.4,
    },
    textBox: {
        top: -20,
        // backgroundColor: 'red',
        alignSelf: 'center',

    },
    inputBox: {

    },
    label: {
        fontSize: Sizes.h1,
        fontWeight: '500',
        color: Colors.textFliped,
        marginBottom: Sizes.radius,
    },
    input: {
        width: windowWidth*0.86,
        borderRadius: Sizes.radius*0.4,
        backgroundColor: '#f1efef',
        marginBottom: Sizes.base,
        paddingHorizontal: Sizes.h2,
    }
})