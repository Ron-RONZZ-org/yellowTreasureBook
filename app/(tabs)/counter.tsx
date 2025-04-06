import React , {useState} from 'react';
import { StyleSheet, Text, View , Button, Alert, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles'; 
import bg from "@/assets/images/chive.jpeg";


const counterScreen = () => {
    const refreshHighCount = async (count: number, highCount: number) => {
      try {
        if(count > highCount) {
            await AsyncStorage.setItem('highCount', count.toString())
            await AsyncStorage.setItem('highCount', count)
        }

      }
      catch (e){
        console.error(e);
      }
    }
  
    const getHighCount = async () => {
      try {
        let value = await AsyncStorage.getItem('highCount')
        if (value !== null){
            setHighCount(parseInt(value));
      }
        }
      catch (e){
        console.error(e);
      }
    }
  const [count , setcount] = useState(0);
  const [last , setLast] = useState(0);
  const [highCount , setHighCount] = useState(0);
  const changeCount = async (value) => {
    setcount(count + value);
     refreshHighCount(count + value, highCount);
     getHighCount();
  }
  const resetCount = () => {
    setcount(0);
  }
  const opps = () => {
    Alert.alert('太多了，无法撤回')
  }
  return (
      <ImageBackground
      source={bg}
      style={styles.bg}
      >
    <View style={styles.container}>
        <Text style={styles.text}>维尼大帝计数器</Text>
        <Text style={styles.text}>今天割了多少韭菜？</Text>
        <Text style={styles.smallText}>High Count: {highCount}</Text>
        <Text style={styles.text}>{count}</Text>
        <View style={styles.button}>
        <Button
        title={"+1"}
          onPress={() => { changeCount(1); setLast(1);}}
        />
        </View>
        <View style={styles.button}>
        <Button 
          title={"+10"}
          onPress={() => { changeCount(10); setLast(10);}}
        />
        </View>
        <View style={styles.button}>
        <Button 
          title={"+一个亿"}
          onPress={() => { changeCount(100000000); setLast(0);opps(); }}
        />
        </View>
        <View style={styles.button}>
        <Button 
          title={"cancel last addition"}
          onPress={() => changeCount(-last)}
        />
        </View>
        <View style={styles.button}>
        <Button
          title={"Reset"}
          onPress={resetCount}
          />
        </View>
    </View>
    </ImageBackground>
  );
}


export default counterScreen;