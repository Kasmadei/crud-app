import React from 'react';
import { StyleSheet, View, Text, Image, TouchableNativeFeedback } from "react-native";
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import { HOME } from '../shared/consts';


const ReviewDetails = ({ navigation }) => {
    const item = navigation.getParam('item');
    const onDelete = navigation.getParam('onDelete');
    const { key, title, body, rating } = item;

    const onDeleteAndClose = () => {
        onDelete(key)
        navigation.navigate(HOME)
    }

    return (
        <View style={styles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{ title }</Text>
                <Text style={styles.body}>{ body }</Text>
                <TouchableNativeFeedback onPress={() => onDeleteAndClose()}>
                    <View style={styles.deleteIcon}> 
                        <MaterialIcons name='delete' size={24} />
                    </View>
                </TouchableNativeFeedback>
                <View style={{ height: 40, flexDirection: "row", paddingTop: 16 }}>
                    <Text style={styles.rating}>Rating: </Text>
                    <Image source={images.rating[rating]} /> 
               
                </View>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    body: {
        fontSize: 24
    },
    rating: {

    },
    deleteIcon: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        height: 32,
        width: 32,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#E0E0E0',
    }
})

export default ReviewDetails