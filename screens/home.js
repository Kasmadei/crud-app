import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const addReview = (review) => {
      reviews.key = Math.random.toString();
      setReviews((currentRevs) => {
          return [review, ...currentRevs]
      })
      setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>
  
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <MaterialIcons 
            name='close'
            size={24} 
            style={{...styles.modalToggle, ...styles.modalClose}} 
            onPress={() => setModalOpen(false)} 
          />
          <ReviewForm addReview={addReview} />
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons 
        name='add' 
        size={24} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)} 
      />

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)} key={Math.random()}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} 
      keyExtractor={(item, index) => `${index.toString()}-${item.title}`}
      />

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