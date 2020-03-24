import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about'
import { ABOUT } from '../screens/consts';
import Header from '../shared/header';

const screens = {
    [`${ABOUT}`]: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='About' navigation={navigation} />,
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: "#bebebe"
        }
    }
});

export default AboutStack;