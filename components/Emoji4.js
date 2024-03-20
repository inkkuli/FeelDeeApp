import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';


export default function Emoji4() {  //เป็นปุ่มกด
              const onPressButton = () => {
                            console.log("");
                            
              };
  return (
              <TouchableOpacity onPress={onPressButton}>
                            <View style={{flexDirection: "row",marginLeft:20,marginBottom:20}} >
                                          <Image style={{width: 55, height: 55}} source={require("/Users/kulisara/FeelDeeApp/assets/Emo04.jpg")} />
                            </View>
              </TouchableOpacity>

      );
}