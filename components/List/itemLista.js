import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

const itemLista = ({ data, handleModal }) => {
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
}

const styles = StyleSheet.create({
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
});

export default itemLista;

