import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React, { useState } from 'react';

const itemLista = ({ data, handleModal, handleBlurback }) => {

  const [btnListo, setBtnListo] = useState(false)

  const handleBtn = () => {
    setBtnListo(!btnListo)
  }

  const accionesBtn = (data) =>{
    handleModal(data.item.id)
    handleBlurback()
  }

  return (
    <View style={[styles.item, styles.shadow]}>
      <Text>{data.item.value}</Text>
      <View style={styles.botonesItem}>

        <Button
          title={btnListo?'OK':'NO'}
          color={btnListo?'#24D400':'#E1E1E1'}
          onPress={() => handleBtn()}
        />

        <Button
          title="X"
          color="#F82525"
          onPress={() => 
            accionesBtn(data)
            }
        />


      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  botonesItem: {
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    width: '30%'

  }
});

export default itemLista;

