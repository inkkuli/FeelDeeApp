import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Feeldeedate from "../components/Feeldeedate";


export default function Feeldeemonth(props) {

   const [Diary, setdiary] = useState([]);

   const loadDiary = async () => {
      try {
         let promise = await fetch('https://raw.githubusercontent.com/inkkuli/feeldeeproject/main/previewAPI01.json');
         let data = await promise.json();
         console.log("Load Data : ", data);
         //SET STATE
         setdiary(data);
      } catch (error) {
         console.log("ERROR 1 : ", error);
      }
   }
   useEffect(() => {
      loadDiary();
   }, []);

  const onPressButton1 = () => {
    console.log("");
    };

  const onPressButton2 = () => {
      console.log("");
      };

    return (
    <View style={{ flex: 1, backgroundColor: '#E7FBFF', marginTop: 20 }}>
      <Feeldeedate />
      <FlatList
            data={Diary}
            numColumns={5}
            renderItem={
               ({ item, index }) => {
                  console.log(item, index, item.uri);
                  return (
                     <View style={{ padding: 10 }}>
                      <TouchableOpacity onPress={onPressButton1}>
                        <View style={{ flexDirection: 'row'}}>
                              <Image source={{ uri: item.uri }} style={{ width: 55 ,height: 55}} />
                        </View>
                      </TouchableOpacity>
                       
                  
                     </View>
                  );
               }
            }
            keyExtractor={item => item.id}
         />
    <TouchableOpacity onPress={onPressButton2}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 40 }}>
        <View style={{ height: 70, width: 70, borderRadius: 70 / 2, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 50 }}>+</Text>
        </View>
      </View>
    </TouchableOpacity>  

    </View>
  );
}