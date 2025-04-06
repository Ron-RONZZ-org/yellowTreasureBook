import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, ImageBackground } from 'react-native';
import styles from '../styles'; 
import { Link } from 'expo-router';
import bg from "@/assets/images/Xi-Jinpooh-in-office_1-1.png";
import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';

const homeScreen = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
       require('@/assets/sounds/xiWelcome.mp3')
    );
    setSound(sound);
    await sound.playAsync(); 
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); 
        }
      : undefined;
  }, [sound]);

  const onPressButton = () => {
    playSound();
  }

  // Note {styles.bg} in <ImageBackground> is not applied to the image but the background container. Therefore, width and height should be set to viewport size.
  return (
    <ImageBackground 
      source={bg}
      style={styles.bg}
    >
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>
        黄宝书
      </Text>
      <Text style={styles.title}></Text>
      <Text style={styles.subtitle}>
        总加速师万岁！
        维尼大帝万岁！
      </Text>
      <View style={styles.button}>
      <Link href="explore" asChild>
        <Button style={styles.button}
     title="学‘习’" color="rgba(235, 87, 67, 1.0)" />
      </Link>
      </View>
      <View style={styles.button}>
        <Button onPress={onPressButton} style={styles.button}
          title="玉音放送" color="rgba(235, 87, 67, 1.0)" />
          </View>
    </View>
          </ImageBackground>
  );
}

export default homeScreen;
