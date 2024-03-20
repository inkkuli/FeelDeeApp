import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native";



export default function FeleldeeInput() {
   const [inputtitle, setInputTitle] = useState([]);
   const [inputDiary, setInputDiary] = useState([]);



   console.log("STATE  : ", inputtitle, inputDiary);


   return (
      <View style={{ margin: 20, padding: 10, width: 335, height: 350, borderColor: 'white', backgroundColor: 'lightyellow', borderRadius: 20 }}>
         <View style={{ padding: 20, backgroundColor: 'white', marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
            <Text style={{ fontSize: 20 }}>Title</Text>
            <TextInput placeholder="Input your Title" value={inputtitle} onChangeText={(newtitle) => setInputTitle(newtitle)} />
         </View>
         <View style={{ padding: 20, backgroundColor: 'white', marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
            <Text style={{ fontSize: 20 }}>Diary</Text>
            <TextInput placeholder="Input your Height" value={inputDiary} onChangeText={(newdiary) => setInputDiary(newdiary)} />
         </View>



      </View>
   );
} 
