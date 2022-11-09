import { View, Text,Dimensions , TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button3( {children}) {
    const {height, width}=Dimensions.get('window') // set chiều cao, rộng theo máy di  động
    return (
      <TouchableOpacity style={{
          backgroundColor:'red',
          height : height/10,
          width: width/2
         }}>
          {children}
         </TouchableOpacity>
    )
}