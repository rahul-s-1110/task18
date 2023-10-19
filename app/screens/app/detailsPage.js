import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ACCESS_TOKEN, TOKEN } from "../../gloablConstant/globalValues";
import { AuthContext } from "../../gloablConstant/context";

const DetailsPage = () => {
  const route = useRoute();
  const { data } = route?.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data?.image }}
        style={{ width: 300, height: 200 }}
      />
      <Text numberOfLines={1}>Product Name: {data?.title}</Text>
      <Text numberOfLines={1}>Product Description: {data?.description}</Text>
      <Text >Product Category: {data?.category}</Text>
      <Text>Product Price: {data?.price}</Text>
    </View>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 30,
  },
});
