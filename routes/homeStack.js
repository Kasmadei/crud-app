import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Edit from '../screens/edit';
import ReviewDetails from '../screens/reviewDetails';
import { HOME, REVIEW_DETAILS, EDIT } from '../shared/consts';
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
    },
    [`${EDIT}`]: {
        screen: Edit,
        navigationOptions: {
            title: "Edit"
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: "#57A0D3"
        }
    }
});

export default HomeStack