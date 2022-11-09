import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';

export default function CustomButton({item}) {
  const data = [
    {
      id: 1,
      title: 'red',
    },
    {
      id: 1,
      title: 'blue',
    },
    {
      id: 1,
      title: 'green',
    },
    {
      id: 1,
      title: 'black',
    },
  ];
  const [color, setColor] = useState();
  // const Item= ({item})=>{
  //     <TouchableOpacity style={{height:60, width:100, backgroundColor:(item.title )} }
  //     onPress={()=> setColor($(item.title))}>
  //         <Text style={{color:'white'}}>
  //             {item.title}
  //         </Text>
  //     </TouchableOpacity>
  // }
  // const renderItem = ({item})=>{
  //     <Item item={item}/>
  // }
  return (
    <FlatList
      data={data}
      style={{backgroundColor: `${color}`}}
      renderItem={({item}) => {
        return (
 
            <TouchableOpacity
              style={{
                height: 60,
                width: 100,
                backgroundColor: item.title,
                justifyContent: 'center',
                alignItems:'center'
              }}
              onPress={() => setColor(item.title)}>
              <Text style={{color: 'white'}}>{item.title}</Text>
            </TouchableOpacity>
          
        );
      }}
    />
  );
}
