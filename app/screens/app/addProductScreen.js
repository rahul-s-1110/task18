import { StyleSheet, Text, View,TextInput,Pressable,Alert,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../component/inputBox'

const AddProductScreen = () => {
    const [price,setPrice] = useState('');
    const [productName,setProductName] = useState('');
    const [productDesc,setProductDesc] = useState('');
    const [loader,setLoader] = useState(false);

    const postData = async () => {
        setLoader(true)
        try {
          const apiUrl = 'https://fakestoreapi.com/products '; // Replace with your API endpoint
          const body = {
            title:productName,
            price:price,
            description:productDesc,
            image: 'https://i.pravatar.cc',
            category: 'electronic' 
        }
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          });
    
          const responseData = await response.json();
          setLoader(false)
          console.log("responseData",JSON.stringify(responseData))
        } catch (error) {
          console.error('Error:', error);
          setLoader(false)
        }
      };    

    const addProduct = () =>{
        console.log("api call")
        if(price == ''){
            Alert.alert("enter price")
        }else if(productName == ''){
            Alert.alert("enter product name")
        }else if(productDesc == ''){
            Alert.alert("enter product description")
        }else{
            postData();
        }
    }

  return (
    <View style={{marginTop:45,paddingHorizontal:15}} >
        <InputBox placeholder="Enter Product Name" value={productName} onchnageText={setProductName}  />
        <InputBox placeholder="Enter Product Price" value={price} keyboard='number-pad' onchnageText={setPrice} />
        <InputBox placeholder="Enter Product Description" value={productDesc} onchnageText={setProductDesc} />
        <Pressable onPress={addProduct} disabled={loader} style={{alignSelf:"center",paddingHorizontal:45,paddingVertical:15,backgroundColor:"gray",borderRadius:10}}>
            {loader?<ActivityIndicator size='large' />:<Text style={{color:"white"}}>Add</Text>}
        </Pressable>
    </View>
  )
}

export default AddProductScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})