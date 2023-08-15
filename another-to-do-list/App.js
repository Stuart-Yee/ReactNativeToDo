import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import NewItem from './components/NewItem';

export default function App() {
  const [newText, setNewText] = useState("");
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(true);

  return (
    <View style={styles.container}>
      <Button
        title='Add Item'
        onPress={()=>{setShowModal(true)}}
      />
      <Modal visible={showModal}>
        <NewItem 
          text={newText} 
          setText={setNewText} 
          setVisible={setShowModal}
          addItem={setItems}
          />
      </Modal>
      <Text>Look, it's Godzilla!</Text>
      {items.map((item, idx)=>{
        return(
          <Text key={idx}>
            {item}
          </Text>
        )
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    borderWidth: 10,
    borderColor: "blue",
    backgroundColor: "#999",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
