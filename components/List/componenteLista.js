import {
  FlatList,
  StyleSheet,
} from 'react-native';

import ItemLista from './itemLista';
import React from 'react';

const ComponenteLista = ({ itemList, handleModal, handleBlurback }) => {
  return (
    <FlatList
      data={itemList}
      renderItem={(data) => <ItemLista handleModal={handleModal} data={data} handleBlurback ={handleBlurback}/>}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  items: {
    marginTop: 20,
  },
});

export default ComponenteLista;