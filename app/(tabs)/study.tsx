import React, { useState, useEffect } from "react";
import { Text, Button, View, ScrollView, Alert, TextInput, ImageBackground } from "react-native";
import styles from '../styles'; 
import { useNavigation } from '@react-navigation/native';
import bg from "@/assets/images/jinpooh2.webp";
import { Audio } from 'expo-av';


const studyScreen = () => {
  const navigation = useNavigation();

  const state = {
    items: [
      {item:"通商宽农", audio: "Audio1"},
      {item:"精湛", audio: "Audio2"},
      {item:"生动活泼", audio: "Audio3"},
    ],
  };

  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const play = async (audio) => {
    const audioMap = {
      Audio1: require("@/assets/sounds/studyAudio1.mp3"),
      Audio2: require("@/assets/sounds/studyAudio2.mp3"),
      Audio3: require("@/assets/sounds/studyAudio3.mp3"),
    };

    const { sound } = await Audio.Sound.createAsync(audioMap[audio]);
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(state.items);
  const handleSearch = (text) => {
    setSearch(text);
    const filtered = state.items.filter(item => 
      item.item.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <ImageBackground
    source={bg}
    style={styles.bg}
    >

<View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name"
        value={search}
        onChangeText={handleSearch}
      />
      <Text style={styles.title}>
      习近平教你读汉字
      </Text>
      <ScrollView>
        {filteredItems.map((item) => (
          <View key={item.audio}>
            <View style={styles.summary}>
                    <Text>{item.item}</Text>
              <Button
                title="Listen"
                color="rgba(235, 87, 67, 1.0)"
                onPress={() => play(item.audio)}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
    </ImageBackground>
  );
}

export default studyScreen;
