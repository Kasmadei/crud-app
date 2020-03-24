import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import { HOME, ABOUT } from '../screens/consts';
import AboutStack from './aboutStack';

const RootDrawerNavigation = createDrawerNavigator({
    [`${HOME}`]: {
        screen: HomeStack
    },
    [`${ABOUT}`]: {
        screen: AboutStack
    }
})


export default createAppContainer(RootDrawerNavigation)