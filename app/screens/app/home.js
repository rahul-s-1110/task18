import { StyleSheet, Text, View,FlatList,Image, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../gloablConstant/colors';

const Home = () => {
    const [listData,setListData] = useState([]);
    const navigation = useNavigation();
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products'); 
                const result = await response.json();
                setListData(result)
            }
            catch (error) {
                Alert.alert("error to fecth data",error)
              }
        };
        fetchData();
       },[])

    const RenderItem = ({item,index}) =>{
        return(
            <Pressable onPress={()=>navigation.navigate('MapScreen')} style={{paddingVertical:10,borderWidth:1,borderRadius:10}}>
                <Text numberOfLines={1}>{item?.title}</Text>
                <View style={{paddingVertical:10,paddingHorizontal:5,flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row"}}>
                        <Image style={{width:80,height:80,borderRadius:5}} source={{uri:item?.image}} />
                        <View style={{marginLeft:5}}>
                            <Text>Category : {item?.category}</Text>
                            <Text>Price : {item?.price}</Text>
                        </View>
                    </View>
                    <View>
                        <Text>Rating : {item?.rating?.rate}</Text>
                        <Text>Times : {item?.rating?.count}</Text>
                    </View>
                </View>
            </Pressable>
        )

    }

  return (
    <ScrollView style={{marginTop:30,paddingHorizontal:15}}>
        <FlatList 
            data={listData}
            initialNumToRender={10}
            showsVerticalScrollIndicator={false}
            renderItem={RenderItem}
            ItemSeparatorComponent={<View style={{height:10}} />}
        />
         <View style={{ backgroundColor: colors.gray, padding: 10, marginBottom: 30, margin: 15, borderRadius: 7, flexDirection: "row", alignItems: "center", justifyContent: "space-between",marginBottom:40 }}>
            <Text style={{fontSize:17,fontWeight:"600",color:colors.white}}> Total Items | {listData.length} </Text>
            <Text style={{fontSize:17,fontWeight:"600",color:colors.white}}>Price| {listData.reduce((total, currentItem) => total + currentItem.price, 0).toFixed(2)} </Text>
                </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})