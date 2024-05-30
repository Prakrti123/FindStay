import React, {useState} from 'react';
import { 
    StyleSheet, Text, View,
    Image, TouchableOpacity,
    TextInput, FlatList,
} from 'react-native';
import {Colors, Sizes, windowWidth, windowHeight, useDynamicTheme} from '../utils/theme';
import {Icons} from '../utils/icons';
import {Images} from '../utils/images';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const SearchScreen = () => {

    const theme = useDynamicTheme();
    const [SearchWord, setSearchWord] = useState(null);
    const Data = [
        {
            id: 1,
            tab: 'Sort',
            icon: Icons.funnel,
        },
        {
            id: 2,
            tab: 'Price',
            icon: Icons.arrowDown,
        },
        {
            id: 3,
            tab: 'Range Area',
            icon: Icons.arrowDown,
        },
        {
            id: 4,
            tab: 'Seating',
            icon: Icons.arrowDown,
        },
        {
            id: 5,
            tab: 'Premium',
            icon: Icons.arrowDown,
        },
    ]
    const LocData = [
        {
            id: 1,
            title: 'MP nagar',
            latitude: 23.231601020213237, 
            longitude: 77.43267931341978
        },
        {
            id: 2,
            title: 'Indrapuri',
            latitude: 23.25718193048845, 
            longitude: 77.46063669427325
        },
        {
            id: 3,
            title: 'Lalghati',
            latitude: 23.26115931493973, 
            longitude: 77.4127414668492
        },
    ]

    const [Location, setLocation] = useState('Bhopal');

    return (
        <View style={[styles.container]}>

            <View style={{
                // position: 'absolute',
            }}>

            {/* header */}
            <View style={[styles.header]}>
                
                <TouchableOpacity>
                    <Image
                        style={[styles.icon]}
                        source={Icons.arrowLeft}
                        
                    />
                </TouchableOpacity>

                <TextInput
                    style={[styles.inputField, {
                        backgroundColor: theme.greyBG,
                        color: theme.textFocused,
                    }]}
                    placeholder={'enter the location'}
                    value={Location}
                    onChangeText={(text) => {setLocation(text)}}
                />
                
                <TouchableOpacity>
                    <Image
                        style={[styles.icon, {
                            width: windowWidth*0.07,
                            resizeMode: 'contain',
                        }]}
                        source={Icons.filter}
                        
                    />
                </TouchableOpacity>
                
            </View>

            {/* filter tabs */}
            <FlatList
                horizontal
                contentContainerStyle={[{
                    paddingHorizontal: Sizes.base,
                    marginVertical: Sizes.padding,
                    height: windowHeight*0.04,

                }]}
                keyExtractor={(item) => `#${item.id}`}
                data={Data}
                renderItem={({index, item}) => {
                    return(
                        <TouchableOpacity style={[styles.tab, styles.center, {
                            borderColor: theme.border,

                        }]}>
                            {index === 0?
                            <Image
                                source={item.icon}
                                style={[styles.smallIcon, {
                                    tintColor: theme.text,
                                }]}
                            />
                            :null}

                            <Text style={{
                                color: theme.textFocused,
                                fontWeight: '500',
                                fontSize: Sizes.h3,
                                marginLeft: index === 0 ? 4: null,
                                marginRight: index != 0 ? 4: null,
                            }}>
                                {item.tab}
                            </Text>

                            {index != 0?
                            <Image
                                source={item.icon}
                                style={[styles.smallIcon, {
                                    tintColor: theme.text,
                                }]}
                            />
                            :null}
                        </TouchableOpacity>
                    )
                }}
            />

            </View>

            <View style={[styles.mapBox]}>
                <MapView 
                    style={[StyleSheet.absoluteFill, {
                        // width: windowWidth,
                        // height: windowHeight*0.8,
                    }]}
                    initialRegion={{ 
                        latitude: 23.26115931493973,
                        longitude: 77.4127414668492,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onRegionChange={x => {
                        console.log(x);
                    }}
                >
                    {Location === 'Bhopal' ? 
                        <Marker
                            coordinate={{latitude: 23.26115931493973, longitude: 77.4127414668492}}
                            image={{uri: 'https://icons8.com/icon/OBmVbH2qOGwK/location'}}
                        />
                    :
                        null
                    }
                    
                    {Location === LocData[0].title ?
                        <Marker
                            coordinate={{latitude: 23.231601020213237, longitude: 77.43267931341978}}
                            image={{uri: 'https://icons8.com/icon/OBmVbH2qOGwK/location'}}
                        />
                    :
                        null
                    }
                    
                    {Location === LocData[1].title ?
                        <Marker
                            coordinate={{latitude: 23.25718193048845, longitude: 77.46063669427325}}
                            image={{uri: 'https://icons8.com/icon/OBmVbH2qOGwK/location'}}
                        />
                    :
                        null
                    }

                    

                    {/* 23.231601020213237, 77.43267931341978 */}

                    {/* 23.25718193048845, 77.46063669427325 */}

                </MapView>
            </View>

        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        // backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Sizes.base,
    },
    icon: {
        width: windowWidth*0.09,
        height: windowWidth*0.09,
    },
    smallIcon: {
        width: windowWidth*0.04,
        height: windowWidth*0.04,
    },
    inputField: {
        width: windowWidth*0.62,
        height: windowWidth*0.12,
        borderRadius: Sizes.radius*2,
        fontWeight: '500',
        paddingHorizontal: Sizes.base,
    },
    tab: {
        height: windowHeight*0.04,
        flexDirection: 'row',
        marginRight: Sizes.h5,
        paddingLeft: Sizes.h3,
        paddingRight: Sizes.h4,
        borderRadius: Sizes.radius,
        borderWidth: 1,
    },
    mapBox: {
        flex: 1,
    },
});