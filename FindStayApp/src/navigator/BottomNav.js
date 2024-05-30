import React from 'react';
import { 
    View, Text, TouchableOpacity,
    Image, useColorScheme,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import HomeNav from "../navigator/HomeNav";
import {Icons} from "../utils/icons";
import {Colors, Sizes, windowWidth, windowHeight, useDynamicTheme} from "../utils/theme";


const Tab = createBottomTabNavigator();

const MyTabs = () => {

    const theme = useDynamicTheme();

    const MyTabBar = ({ state, descriptors, navigation }) => {

        return (
            <View style={{ 
                position: 'absolute',
                bottom: Sizes.radius*0.6,
                flexDirection: 'row',
                width: windowWidth*0.92,
                height: windowHeight*0.07,
                alignSelf: 'center',
                justifyContent: 'space-around',
                borderTopLeftRadius: Sizes.radius*0.4,
                borderTopRightRadius: Sizes.radius*0.4,
                borderBottomLeftRadius: Sizes.radius,
                borderBottomRightRadius: Sizes.radius,
                backgroundColor: useColorScheme === 'dark'? '#150D0AFF' : '#f1f1f1', //#FFDDCC
                // backgroundColor: theme.bottomTab,
                elevation: 15,

            }}>
                {state.routes.map((route, index) => {
                    key={index}
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
            
                    const isFocused = state.index === index;
            
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });
            
                        if (!isFocused && !event.defaultPrevented) {
                          navigation.navigate(route.name, route.params);
                        }
                    };
            
                    const onLongPress = () => {
                        navigation.emit({
                          type: 'tabLongPress',
                          target: route.key,
                        });
                    };
            
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ 
                                top: isFocused ? -Sizes.h5 : null,
                                alignSelf: 'center',
                                borderRadius: Sizes.radius*2,
                                backgroundColor: isFocused ? Colors.primary : null,
                                padding: isFocused ? Sizes.h4 : null,
                                borderWidth: isFocused ? 4 : null,
                                borderColor: '#ffbaa0', //'#F1BAAA',
                                elevation: isFocused ? 2 : null,
                            }}
                        >
                            {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                              {label}
                            </Text> */}
                            <Image
                                source={index === 0 ? Icons.home : index === 1 ? Icons.searchBold : Icons.settings}
                                style={[{
                                    width: Sizes.padding*1.4,
                                    height: Sizes.padding*1.4,
                                    tintColor: isFocused ? '#fdfcfc' : Colors.primary,
                                }]}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
      
    const ProfileScreen = ({navigation, route}) => {
        return <Text>This is 's profile</Text>;
    };

    return (
        <Tab.Navigator 
            initialRouteName={'Home'}
            tabBar={props => <MyTabBar {...props} />}
            // contentContainerStyle={{
            //     height: windowHeight*0.08,
            // }}
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: { 
                    height: windowHeight*0.08,
                    // zIndex: 2,
                    // position: 'absolute',
                    // backgroundColor: '',
                },
                // tabBarBackground: 'green',
            }}>
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        tabBarStyle: {
                            // display: 'none',
                        }
                    }}
                />
                <Tab.Screen name="Search" component={SearchScreen} />
                {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
                {/* <Tab.Screen name="Setting" component={ProfileScreen} /> */}

        </Tab.Navigator>
    );
}
export default MyTabs;