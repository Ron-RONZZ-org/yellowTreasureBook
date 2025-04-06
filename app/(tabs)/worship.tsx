import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import styles from '../styles'; 
import bg from "@/assets/images/jinpooh.jpg";


const worshipScreen = () => {
  const [name, setName] = useState("");
  const [worshipText, setWorshipText] = useState("");

  const handleText = (text) => {
    setName(text);
  };

  const displayWorship = (name) => {
    let worshipText = `${name}郑重宣布：维尼大帝的话句句是真理，一句顶一万句！`;
    setWorshipText(worshipText);
  };

  return (
    <View style={styles.container}>
      <Image
        source={bg}
        style={styles.image}
      />
      <TextInput
        style={styles.searchBar}
        onChangeText={(text) => { handleText(text) }}
        placeholder="来将请留姓名！"
        />
        <View style={styles.button}>
          <Button
            title={"Go"}
            onPress={() => { displayWorship(name); }}
          />
        </View>
        <Text style={styles.text}>
           {worshipText}
        </Text>
    </View>
  );
}

export default worshipScreen;
