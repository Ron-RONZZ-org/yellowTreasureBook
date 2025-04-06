import React, { useState } from "react";
import { Text, Button, View, ScrollView, Alert, TextInput, ImageBackground } from "react-native";
import styles from '../styles'; 
import { useNavigation } from '@react-navigation/native';
import bg from "@/assets/images/jinpooh2.webp";
import { navigate } from "expo-router/build/global-state/routing";

const storeScreen = () => {
  const navigation = useNavigation();

  const state = {
    items: [
      { item: "DDOS Attack", price: "高层专享", id: 1 },
      { item: "WWW access", price: "高层专享", id: 2 },
      { item: " 学习墙国", price: "Gratuit", id: 3 },
      { item: "膜拜习近平", price: "Gratuit", id: 4 },
      { item: "割韭菜计数器", price: "习家军专享", id: 5 },
    ],
  };

  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(state.items);

  const handlePress = (id) => {
    if (id <= 2) {
      Alert.alert('您还不是高层!');
    }
    else if (id==3){
      navigation.navigate('study')
    }
    else if (id == 4){
        navigation.navigate('worship');
    }
    else if (id == 5){
        navigation.navigate('counter');
    }
  };

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
        placeholder="Search..."
        value={search}
        onChangeText={handleSearch}
      />
      <ScrollView>
        {filteredItems.map((item) => (
          <View key={item.id}>
            <View style={styles.summary}>
              <Text style={styles.summaryText}>
                {item.item} <Text style={styles.amount}>
                    ${item.price}</Text>
              </Text>
              <Button
                title="Go"
                color="rgba(235, 87, 67, 1.0)"
                onPress={() => handlePress(item.id)}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
    </ImageBackground>
  );
}

export default storeScreen;
