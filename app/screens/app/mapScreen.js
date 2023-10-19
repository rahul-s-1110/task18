import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Pressable,
    PermissionsAndroid,
  } from "react-native";
  import React, { useContext, useEffect, useState } from "react";
  import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
  import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native";
  
  const MapScreen = () => {
    const [mapRegion, setMapRegion] = useState([]);
    const [location, setLocation] = useState(null);
    const navigation = useNavigation();  

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);
  
    useEffect(()=>{
      if(location)
      {
        setMapRegion({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0422,
              longitudeDelta: 0.0421,
          })
      }
    },[location])
  
    return (
      <View style={{marginTop:20,paddingHorizontal:20}} >
        <MapView
          style={styles.mapView}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          {console.log("mapRegion",mapRegion)}
          <Marker title="You" coordinate={mapRegion}  />
        </MapView>
        <Pressable onPress={()=>navigation.navigate('addProductScreen')} style={{alignSelf:"center",marginTop:20,padding:10,backgroundColor:"gray",borderRadius:5}}>
            <Text style={{color:"white"}}>Add new Product</Text>
        </Pressable>
      </View>
    );
  } 
  
  export default MapScreen;
  
  const styles = StyleSheet.create({
    mapView: {
      height: Dimensions.get("screen").height * 0.23,
      width: Dimensions.get("screen").width * 0.89,
      borderRadius: 20,
      marginTop: 20,
    },
  });