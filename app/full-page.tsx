import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FullPage: React.FC = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text 
                style={{ 
                    position: 'absolute', 
                    top: 50, 
                    right: 20, 
                    fontSize: 24,
                    padding: 10
                }}
                onPress={() => {
                    router.back()
                    console.log('Back to Home');
                }}
            >
                ✕
            </Text>
            <Text>Full Page Component</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default FullPage