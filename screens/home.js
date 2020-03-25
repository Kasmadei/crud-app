import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import ReviewForm from './reviewForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addReview, deleteReview, setAllReviews } from '../services/actions';
import { REVIEW_DETAILS } from '../shared/consts';
import ModalBase from '../shared/modalBase';


const Home = ({ navigation }) => {

  const dispatch = useDispatch()
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const reviews = useSelector(state => state);

    useEffect(() => {
      async function disp () {
        await dispatch(setAllReviews())
        setLoading(false)
      }

      disp();
    }, [])

  const onAdd = (review) => {
    setLoading(true);
    reviews.key = Math.random().toString();
    dispatch(addReview(review))
    setModalOpen(false)
  }

  const onDelete = async (key) => {
    setLoading(true);
    await dispatch(deleteReview(key))
  }

  return (
    <View style={globalStyles.container}>
      <ModalBase visible={modalOpen}>
        <View style={styles.modalContent}>
          <MaterialIcons name='close' size={24} style={{ ...styles.modalToggle, ...styles.modalClose }} onPress={() => setModalOpen(false)} />
          <ReviewForm addReview={onAdd} />
        </View>
      </ModalBase>

      <MaterialIcons name='add' size={24} style={styles.modalToggle} onPress={() => setModalOpen(true)} />

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(REVIEW_DETAILS, { item, onDelete })} key={Math.random().toString()}>
          <Card>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </Card>
        </TouchableOpacity>
      )}
        keyExtractor={(item, index) => `${index.toString()}-${item.title}`}
      />
      {loading === true && ( <Text style={{ position: "absolute", left: '48%', top: '65%', fontSize: 20, fontWeight: 'bold' }}>Lodaing</Text> )}
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    color: '#A9A9A9',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});