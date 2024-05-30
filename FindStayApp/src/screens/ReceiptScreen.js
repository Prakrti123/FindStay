import React, {useState} from 'react';
import { StyleSheet, Text, View,
    Image, TouchableOpacity, Modal,
 } from 'react-native';
import {Colors, Sizes, windowWidth, windowHeight, useDynamicTheme} from '../utils/theme';
import {Icons} from '../utils/icons';
import {Images} from '../utils/images';


const ReceiptScreen = ({route, navigation}) => {

    const theme = useDynamicTheme();
    const data = route.params.data;

    return(
        <View style={[styles.container]}>

            <View style={[styles.header]}>
                <Image
                source={Icons.arrowLeft}
                style={[styles.arrow]}
                />
                
                <Text style={[{
                    fontSize: Sizes.h1,
                    fontWeight: '500',
                }]}>Request to book</Text>

            </View>

            <View style={[styles.textBox]}>

                <Text style={{
                    fontSize: Sizes.h2,
                    fontWeight: '600',
                }}>
                    Request details
                </Text>

                <View style={[styles.value]}>
                    <View style={[styles.row]}>
                        <View style={[styles.column]}>
                            <Text style={{
                                fontWeight: '500',
                            }}>Dates</Text>

                            <Text style={{
                                fontWeight: '400',
                            }}>1-10 May</Text>
                        </View>

                        <Text>Edit</Text>
                    </View>

                    <View style={[styles.row]}>
                        <View style={[styles.column]}>
                            <Text style={{
                                fontWeight: '500',
                            }}>Tanents</Text>

                            <Text style={{
                                fontWeight: '400',
                            }}>1-10 May</Text>
                        </View>

                        <Text>Edit</Text>
                    </View>

                    <View style={{
                        // width: windowWidth,
                        //  width: windowWidth-(Sizes.padding*2),

                        height: 1,
                        backgroundColor: '#00000010',
                        marginVertical: Sizes.radius,
                    }}/>
                </View>

                <Text style={{
                    fontSize: Sizes.h2,
                    fontWeight: '600',
                }}>
                    Rent details
                </Text>

                <View style={[styles.value, {
                    // top: -Sizes.radius,
                }]}>
                    <View style={[styles.row]}>
                        <View style={[styles.column]}>
                            <Text style={{
                                fontWeight: '400',
                            }}>Rent</Text>

                            {/* <Text style={{
                                fontWeight: '400',
                            }}>₹{data.rent} per month</Text> */}
                        </View>

                        <Text style={{
                                fontWeight: '500',
                            }}>₹{data.rent} per month</Text>
                    </View>

                </View>

                <View style={[styles.value, {
                    // top: -Sizes.radius,
                }]}>
                    <View style={[styles.row]}>
                        <View style={[styles.column]}>
                            <Text style={{
                                fontWeight: '400',
                            }}>Months</Text>

                            {/* <Text style={{
                                fontWeight: '400',
                            }}>₹{data.rent} per month</Text> */}
                        </View>

                        <Text style={{
                                fontWeight: '500',
                            }}>1</Text>
                    </View>
                </View>

                <View style={[styles.value, {
                    // top: -Sizes.radius,
                }]}>
                    <View style={[styles.row]}>
                        <View style={[styles.column]}>
                            <Text style={{
                                fontWeight: '400',
                            }}>Total Rent</Text>

                            {/* <Text style={{
                                fontWeight: '400',
                            }}>₹{data.rent} per month</Text> */}
                        </View>

                        <Text style={{
                                fontWeight: '500',
                            }}>₹{data.rent}</Text>
                    </View>

                    <View style={{
                        // width: windowWidth,
                        //  width: windowWidth-(Sizes.padding*2),

                        height: 1,
                        backgroundColor: '#00000010',
                        marginVertical: Sizes.radius,
                    }}/>
                </View>
            </View>

            <View style={{
                position: 'absolute',
                bottom: Sizes.padding,
                alignSelf: 'center',
            }}>
                <TouchableOpacity style={[styles.btn]}
                onPress={() => {
                    
                }}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: Sizes.h2,
                        color: '#f1dfef',
                    }}>Submit Request</Text>
                </TouchableOpacity>
            </View>

        </View>
    )  
}

export default ReceiptScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
    },
    header: {
        paddingVertical: Sizes.padding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrow: {
        left: Sizes.base,        
        position: 'absolute',
        width: windowWidth*0.1,
        height: windowWidth*0.1,
    },
    textBox: {
        // width: windowWidth-(Sizes.padding*2),
        marginHorizontal: Sizes.padding,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Sizes.base*0.5,
        justifyContent: 'space-between',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    btn: {
        alignSelf: 'center',
        width: windowWidth*0.6,
        height: windowHeight*0.05,
        borderRadius: Sizes.radius*0.8,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    }

})