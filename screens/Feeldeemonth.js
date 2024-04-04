import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Feeldeedate from "../components/Feeldeedate";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import FeeldeeStorages from "../storages/FeeldeeStorages";



export default function Feeldeemonth(props) {
   const navigation = useNavigation();
    const [note, setNote] = useState([
   //    {
   //    id: 1,
   //    title : "4444",
   //    diary : 330,
   //    date : 1,
   //    month : 12,
   //    uri:
   //      "https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo02.jpg"
   //  },
   //  {
   //    id: 1,
   //    title : "5555",
   //    diary : 330,
   //    date : 2,
   //    month : 12,
   //    uri:
   //      "https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo03.jpg"
   //  }
 ]);

   // // const loadDiary = async () => {
   // //    try {
   // //       let promise = await fetch('https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/PreviewAPI.json');
   // //       let data = await promise.json();
   // //       console.log("Load Data : ", data);
   // //       //SET STATE
   // //       setdiary(data);
   // //    } catch (error) {
   // //       console.log("ERROR 1 : ", error);
   // //    }
   // // }
   // // useEffect(() => {
   // //    loadDiary();
   // // }, []);

   // const loadNote = async () => {
   //    let note = await FeeldeeStorages.readItems();
   //    setNote(note);
   //  };
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("FeeldeeDetail", { id: item.id });
        }}
      >
      <View style={{flexDirection: "row",marginRight:4}}>
      <View style={{ flexDirection: "column" , padding: 10}}>
      {/* <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: 'pink' ,marginTop:-5}}>
      <Text style={{marginTop:3,marginBottom:-5,marginLeft:5}}>{item.date}</Text></View> */}

          <Image
            style={{ width: 55 ,height: 55}}
            source={{ uri: item.uri }}
          />
          {/* <Text style={{marginLeft:20}}>{item.date}</Text> */}
          <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: 'pink' ,marginTop:3,marginLeft:16}}>
      <Text style={{marginTop:3,marginBottom:-5,marginLeft:5}}>{item.date}</Text></View>
        </View>

      </View>
        
        
      </TouchableOpacity>
    );

   

    return (
    <View style={{ flex: 1, backgroundColor: '#E7FBFF', marginTop: 20 }}>
      <Feeldeedate />
      <FlatList
            data={note}
            refreshing={refresh}
            onRefresh={() => {
               loadNote();
             }}
            numColumns={5}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => <NoteItem item={item} />}
            
            />
  
      <View style={{ flexDirection: 'row' }}>
         <View style={{padding:20,marginTop:10,marginBottom:10}}>
         <AntDesign name="bars" size={40} color="pink" onPress={()=>{ navigation.navigate("Feeldeediary")}} />
         </View>
         <View style={{marginLeft:220,marginBottom:30}}>
         <AntDesign name="pluscircle" size={70} color="pink" onPress={()=>{ navigation.navigate("FeeldeeInput"), { id: null }; }}/>
         </View>
         
        
      </View>
  
    </View>
  );
}