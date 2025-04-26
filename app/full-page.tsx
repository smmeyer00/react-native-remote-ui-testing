import { RemoteMessageRenderer } from "@/components/RemoteMessageRenderer";
import { m1, m3, m4 } from "@/constants/test-data";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FullPage: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <RemoteMessageRenderer messageData={m4} />
      <Text
        style={{
          position: "absolute",
          top: 50,
          right: 20,
          fontSize: 24,
          padding: 10,
        }}
        onPress={() => {
          router.back();
          console.log("Back to Home");
        }}>
        ✕
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default FullPage;
