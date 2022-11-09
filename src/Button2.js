import { View, Text,Dimensions , TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button2( {children}) {
    const {height, width}=Dimensions.get('window') // set chiều cao, rộng theo máy di  động
  return (
    <TouchableOpacity style={{
        backgroundColor:'yellow',
        height : height/10,
        width: width/2,
        marginBottom:20,
        
       }}>
        {children}
       </TouchableOpacity>
  )
}