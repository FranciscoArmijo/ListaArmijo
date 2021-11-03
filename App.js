import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';

import AgregarItem from './components/AgregarItem'
import Modal from './components/Modal.js'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (text) => setInputText(text);
  const handleAddItem = () => {
    setItemList([
      ...itemList,
      {
        id: Math.random().toString(),
        value: inputText,
      },
    ]);
    setInputText('');
  }

  const handleConfirmDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter(item => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  }

  const handleModal = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(true);
  }

  return (
    <View style={styles.screen}>
      <AgregarItem handleChangeText ={handleChangeText} inputText= {inputText} handleAddItem={handleAddItem}/>
      <FlatList
        data={itemList}
        renderItem={data => {
          return (
            <View style={[styles.item, styles.shadow]}>
              <Text>{data.item.value}</Text>
              <Button
                title="X"
                color="#AAAAAA"
                onPress={() => handleModal(data.item.id)}
              />
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
      <Modal modalVisible= {modalVisible} handleConfirmDelete = {handleConfirmDelete} itemSelected={itemSelected} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    backgroundColor: '#F0F0F0',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
  items: {
    marginTop: 20,
  },
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    padding: 30,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalMessage: {
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});