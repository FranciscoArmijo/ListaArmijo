import {
  ImageBackground,
  StyleSheet,
  View
} from 'react-native';
import React, { useState } from 'react';

import AgregarItem from './components/AgregarItem'
import ComponenteLista from './components/List/componenteLista.js'
import Modal from './components/Modal.js'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [blurBack, setBlurBack] = useState(true);

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
    handleBlurback();
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(true);
    
  }
 const handleBlurback = () => {
   setBlurBack(!blurBack)
 }

  return (
    <View style={styles.screen}>
      <ImageBackground blurRadius ={blurBack?0:15} source={require('./src/images/hojasFondo.jpg')} resizeMode="cover" style={styles.image}>
        <AgregarItem handleChangeText={handleChangeText} inputText={inputText} handleAddItem={handleAddItem} />

        <ComponenteLista itemList={itemList} handleModal={handleModal} handleBlurback ={handleBlurback} />


        <Modal modalVisible={modalVisible} handleConfirmDelete={handleConfirmDelete} itemSelected={itemSelected} handleBlurback ={handleBlurback}/>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 0,
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
  },
  image: {
    padding: 40,
    flex: 1,
    justifyContent: "center",
    opacity: 0.7,
  },
});