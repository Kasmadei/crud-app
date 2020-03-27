import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import * as yup from 'yup'

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0
    })
})



const Edit = ({ navigation }) => {
    const item = navigation.getParam('item');
    const onEditAndClose = navigation.getParam('onEditAndClose')
    const { _id, title, body, rating } = item;
    const initValues = { title: title, body: body, rating: rating.toString() }
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={initValues}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => { actions.resetForm(); onEditAndClose({_id, ...values}) }}>
                {(props) => {
                    const { title, body, rating } = props.values
                    const { handleSubmit } = props
                    return (
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='title...'
                                onChangeText={props.handleChange('title')}
                                value={title}
                                onBlur={props.handleBlur('title')}
                            />
                            <Text style={globalStyles.errorText}>
                                {props.touched.title && props.errors.title}
                            </Text>
                            <TextInput
                                multiline
                                style={globalStyles.input}
                                placeholder='body...'
                                onChangeText={props.handleChange('body')}
                                value={body}
                                onBlur={props.handleBlur('body')}
                            />
                            <Text style={globalStyles.errorText}>
                                {props.touched.body && props.errors.body}
                            </Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='rating (1-5)'
                                onChangeText={props.handleChange('rating')}
                                value={rating}
                                onBlur={props.handleBlur('rating')}
                                keyboardType='numeric'
                            />
                            <Text style={globalStyles.errorText}>
                                {props.touched.rating && props.errors.rating}
                            </Text>
                            <Button title='submit' color='coral' onPress={handleSubmit} />
                        </View>
                    )
                }
                }
            </Formik>
        </View>
    )
}

export default Edit