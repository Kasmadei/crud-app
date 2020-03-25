import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableNativeFeedback, Modal } from "react-native";
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import ModalBase from '../shared/modalBase';
import { MaterialIcons } from '@expo/vector-icons';
import { HOME, EDIT } from '../shared/consts';


const ReviewDetails = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const item = navigation.getParam('item');
    const onDelete = navigation.getParam('onDelete');
    const { key, title, body, rating } = item;

    const onDeleteAndClose = () => {
        onDelete(key)
        navigation.navigate(HOME)
    }

    return (
        <View style={styles.container}>
            <ModalBase visible={modalOpen} transparent>
                <View style={styles.modalContent}>
                    <View style={styles.modalTitleContainer}>
                        <Text style={styles.modalTitleText}>Delete ?</Text>
                    </View>
                    <View style={styles.modalBodyContainer}>
                        <View style={styles.modalBodyButtonsContainer}>
                            <TouchableNativeFeedback onPress={() => onDeleteAndClose()}>
                                <View style={styles.icon}>
                                    <MaterialIcons name='check' size={24} />
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() => setModalOpen(false)}>
                                <View style={styles.icon}>
                                    <MaterialIcons name='close' size={24} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </ModalBase>
            {!modalOpen && (
                <Card>
                    <Text style={globalStyles.titleText}>{title}</Text>
                    <Text style={styles.body}>{body}</Text>
                    <TouchableNativeFeedback onPress={() => navigation.navigate(EDIT, { title, body, rating })}>
                        <View style={styles.editIcon}>
                            <MaterialIcons name='edit' size={24} />
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => setModalOpen(true)}>
                        <View style={styles.deleteIcon}>
                            <MaterialIcons name='delete' size={24} />
                        </View>
                    </TouchableNativeFeedback>
                    <View style={{ height: 40, flexDirection: "row", paddingTop: 16 }}>
                        <Text style={styles.rating}>Rating: </Text>
                        <Image source={images.rating[rating]} />
                    </View>
                </Card>
            )}
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
    editIcon: {
        position: 'absolute',
        right: 40,
        bottom: 0,
        height: 32,
        width: 32,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#E0E0E0',
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
    },
    modalContent: {
        flex: 1,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 300,
        marginBottom: 200,
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 6,
        backgroundColor: "red"
    },
    modalTitleContainer: {
        height: 40,
        backgroundColor: '#ff6666',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',

    },
    modalTitleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    modalBodyContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center"
    },
    modalBodyButtonsContainer: {
        paddingTop: 20,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5'
    },
    icon: {
        height: 48,
        width: 48,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 8,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    closeIcon: {
        height: 40,
        width: 40
    }
})

export default ReviewDetails