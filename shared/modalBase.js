import React from 'react'
import { Modal, TouchableWithoutFeedback, Keyboard, View } from 'react-native';


export default (props) => {
    const { visible, transparent } = props;
    return (
        <Modal visible={visible} animationType='fade' transparent={transparent ? true : false}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {props.children}
            </TouchableWithoutFeedback>
        </Modal>
    )
}