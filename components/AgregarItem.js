import { Button, StyleSheet, TextInput, View } from 'react-native';

import React from 'react';

export default function AgregarItem({handleChangeText, inputText, handleAddItem}) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Agregar item"
                style={styles.input}
                onChangeText={handleChangeText}
                value={inputText}
            />
            <Button
                title="ADD"
                color="#3D9970"
                onPress={handleAddItem}
            />
        </View>
    )
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