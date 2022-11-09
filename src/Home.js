import { View, Text } from 'react-native'
import React from 'react'
import Button1 from './Button1'
import Button2 from './Button2'
import Button3 from './Button3'
import Button4 from './Button4'
import CustomButton from './CustomButton'

export default function Home() {
  return (
    <View style = {{ paddingHorizontal:10, justifyContent:'center', alignItems:'center'}}>
        <View style={{height:100}}></View>
      <Text>Home</Text>
    
<Button4 >
</Button4>
      <Button1 >
    <Text> Hello 1 </Text>
    <Text> Hello 1 </Text>
    <Text> Hello 1 </Text>
    <Text> Hello 1 </Text>

      </Button1>

      <Button2>
 <Text> Hello 2 </Text>
    <Text> Hello 2 </Text>
    <Text> Hello 2 </Text>
    <Text> Hello 2 </Text>
      </Button2>

    <Button3>
    <Text> Hello 3 </Text>
    <Text> Hello 3 </Text>
    <Text> Hello 3 </Text>
    <Text> Hello 3 </Text>
    </Button3>
    <CustomButton/>
    </View>
  )
}