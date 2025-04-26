import { StyleSheet, Image, Platform, View, Text, Pressable } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 , backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 16 }}>
        Explore
      </Text>
      <Pressable 
        style={{ 
          backgroundColor: '#007AFF', 
          padding: 16, 
          borderRadius: 8,
          margin: 16,
          alignItems: 'center' 
        }}
        onPress={() => router.navigate('/full-page')}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Go to Full Page
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
