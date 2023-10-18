import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const OtpBox = ({value,reference,onKeyPress,onChangeText}) => {
  return (
    <TextInput style={{padding:8,borderWidth:1,textAlign:"center",justifyContent:"center"}} 
    keyboardType='number-pad'
    value={value}
    maxLength={1}
    ref={reference}
    onKeyPress={onKeyPress}
    onChangeText={onChangeText}
/>
  )
}

export default OtpBox

const styles = StyleSheet.create({})