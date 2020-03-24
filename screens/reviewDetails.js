import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';


const ReviewDetails = ({ navigation }) => {
    const title = navigation.getParam('title');
    const body = navigation.getParam('body');
    const rating = navigation.getParam('rating')
    return (
        <View style={styles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{ title }</Text>
                <Text style={styles.body}>{ body }</Text>
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

    }
})

export default ReviewDetails