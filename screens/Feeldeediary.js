import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FeeldeeStorages from "../storages/FeeldeeStorages";


export default function Feeldeediary(props) {

   const navigation = useNavigation();
   const [note, setNote] = useState([
 
]);

  const loadNote = async () => {
     let note = await FeeldeeStorages.readItems();
     setNote(note.reverse()); // กลับด้านอาร์เรย์ก่อนที่จะเขียนลงใน state
   };
   
   useEffect(() => {
     // WHEN MOUNT AND UPDATE
     const unsubscribe = navigation.addListener("focus", () => {
       loadNote();
     });
     // WHEN UNMOUNT
     return unsubscribe;
   }, [navigation]);
 
   const [refresh, setRefresh] = useState(false);

   const NoteItem = ({ item, index }) => (
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

  


   return (
      <View style={{ flex: 1, backgroundColor: '#E7FBFF'}}>
         
         

         <FlatList
            data={note}
            refreshing={refresh}
            onRefresh={() => {
               loadNote();
             }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => <NoteItem item={item} />}
            />

                  
                     

                  
         
      </View>
   );
}