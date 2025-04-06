import { Tabs} from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { TabBarBackground } from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AntDesign from '@expo/vector-icons/AntDesign';

const defaultIconSize = 20

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
      <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={defaultIconSize} name="house.fill" color={color} />}} />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => <AntDesign size={defaultIconSize} name="magnifying-glass" color={color}/>}} />,
      <Tabs.Screen
        name="study"
        options={{
          title: 'Study',
          tabBarIcon: ({ color }) => <IconSymbol size={defaultIconSize} name="paperplane.fill" color={color}/>}} />,
      <Tabs.Screen
        name="worship"
        options={{
          title: 'Worship',
          tabBarIcon: ({ color }) => <AntDesign size={defaultIconSize} name="heart" color={color}/>}} />,
      <Tabs.Screen
        name="counter"
        options={{
          title: '韭菜',
          tabBarIcon: ({ color }) => <AntDesign size={defaultIconSize} name="star" color={color} />}} />,
      </Tabs>
  );
}

