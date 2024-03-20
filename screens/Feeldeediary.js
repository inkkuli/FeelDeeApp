import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Feeldeediary(props) {

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


   return (
      <View style={{ flex: 1, backgroundColor: '#E7FBFF'}}>
         
         <TouchableOpacity style={{ padding:20}} onPress={ props.onPress } >
                              <FontAwesome name={"arrow-left"} size={40} color={"pink"} />

                               
         </TouchableOpacity>
      

         <FlatList
            data={Diary}
            renderItem={
               ({ item, index }) => {
                  console.log(item, index, item.uri);
                  return (
                     

                     <View style={{ padding: 10 }}>
                     
                      
               

                        <View style={{ margin : 20 , padding : 10, width:335,height:350, borderColor : 'white',backgroundColor:'lightyellow', borderRadius : 20 }}>
                           <View style={{ flexDirection: 'row',padding:10}}>
                           
                              <FontAwesome name={"heart"} size={45} color={"pink"} />
                              <Text style={{ fontSize: 20, fontWeight: 'bold',marginTop:10,marginLeft:-28}}>{item.date}</Text>
                              <Text style={{ fontSize: 15, fontWeight: 'bold',marginTop:17,marginLeft:10 }}>  {item.month}</Text>

                           </View>
                           <View style={{ flexDirection: 'row',justifyContent:'center' ,marginTop:30}}>
                              <Image source={{ uri: item.uri }} style={{ width: 90 ,height: 90}} />
                           </View>
                           <View style={{ flex: 1,marginTop:20, alignItems: 'stretch',flexDirection:"column",alignItems:'center'}}>
                              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                              <Text style={{ marginVertical: 5 }}>{item.diary}</Text>
                           </View>
                        </View>

                     </View>
                  );
               }
            }
            keyExtractor={item => item.id}
         />
      </View>
   );
}