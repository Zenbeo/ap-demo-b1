import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Button4() {
    const [name,setName]=useState( '')
     const handlertext=( text)=>{
        setName(text)
     }
  return (
    <View>
     <TextInput
      placeholder='Mời bạn nhập : '
      placeholderTextColor={'green'}
      style={{borderRadius:10,borderWidth:1, height:50,width:150,marginBottom:20}}
      onChange = {handlertext}
     />

    </View>
  )
}