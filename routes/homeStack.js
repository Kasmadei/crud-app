import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import { HOME, REVIEW_DETAILS } from '../shared/consts';
import Header from '../shared/header';

const screens = {
    [`${HOME}`]: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Home' navigation={navigation} />,
            }
        }
    },
    [`${REVIEW_DETAILS}`]: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Details"
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: "#bebebe"
        }
    }
});

export default HomeStack