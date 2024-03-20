import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Feeldeedate from "../components/Feeldeedate";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';


export default function Feeldeemonth(props) {
   

   const [Diary, setdiary] = useState([]);

   const loadDiary = async () => {
      try {
         let promise = await fetch('https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/PreviewAPI.json');
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

   const navigation = useNavigation();

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
                      <TouchableOpacity onPress={() => { navigation.navigate("Feeldeediary"); }}>
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
    
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 40 }}>
         <AntDesign name="pluscircle" size={70} color="pink" onPress={()=>{ navigation.navigate("Feeldeetype"); }}/>
         
        
      </View>
  
    
    

    </View>
  );
}