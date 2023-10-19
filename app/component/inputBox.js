import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const InputBox = ({placeholder,keyboard,value,onchnageText,maxVal}) => {
  return (
    <TextInput style={{padding:15,borderWidth:1,marginBottom:10,borderRadius:5}} placeholder={placeholder} maxLength={maxVal} value={value}  onChangeText={onchnageText} keyboardType={keyboard} />
  )
}

export default InputBox

const styles = StyleSheet.create({})