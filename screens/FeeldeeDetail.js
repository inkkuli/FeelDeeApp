import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import FeeldeeStorages from "../storages/FeeldeeStorages";

export default function FeeldeeDetail() {
   const navigation = useNavigation();
   const route = useRoute();
   const [note, setNote] = useState({
    
   });

   //DELETE POPUP
   const deleteDiary = async () => {
      const { id } = route.params;
      //REMOVE BOOK
      await FeeldeeStorages.removeItem(id);
      //REDIRECT TO
      navigation.navigate("Feeldeemonth");
   };

   const confirmDelete = () => {
      return Alert.alert("ยืนยันการลบ?", "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?", [
         { text: "ยกเลิก" },
         {
            text: "ยืนยัน",
            onPress: () => {
               deleteDiary();
            },
         },
      ]);
   };

   // TOP RIGHT MENU
   const TopRightMenu = () => (
      <View
         style={{
            flexDirection: "row",
            width: 100,
            justifyContent: "space-around",
         }}
      >
         <TouchableOpacity
            onPress={() => {
               navigation.navigate("FeeldeeInput", { id: note.id });
            }}
         >
            <FontAwesome name="edit" size={30} />
         </TouchableOpacity>
         <TouchableOpacity
            onPress={() => {
               confirmDelete();
            }}
         >
            <FontAwesome name="trash" size={30} />
         </TouchableOpacity>
      </View>
   );
   const onLoad = async () => {
      const { id } = route.params;
      navigation.setOptions({ headerRight: () => <TopRightMenu /> });

      let b = await FeeldeeStorages.readItemDetail(id);
      setNote(b);
   };
   useEffect(() => {
      onLoad();
   }, []);
   // CONDITIONAL RENDERING
   if (Object.keys(note).length == 0) {
      return <View></View>;
   }

   return (
      <View style={{ flex: 1, backgroundColor: '#E7FBFF' }}>
         <View style={{ margin: 20, marginLeft: 30, padding: 20, width: 335, height: 350, borderColor: 'white', backgroundColor: 'lightyellow', borderRadius: 20 }}>
            
               <View style={{ flexDirection: 'row', padding: 10 }}>

                  <FontAwesome name={"heart"} size={45} color={"pink"} />
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, marginLeft: -28 }}>{note.date}</Text>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 17, marginLeft: 10 }}>  {note.month}</Text>

               </View>
               <View style={{ flexDirection: "row" }}>
                  <Image
                     style={{ flex: 1, resizeMode: "contain", width: 90, height: 90 }}
                     source={{ uri: note.uri }}
                  />
               </View>
            
            <View style={{ flex: 1, marginTop: 20, alignItems: 'stretch', flexDirection: "column", alignItems: 'center' }}>
               <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{note.title}</Text>
               <Text style={{ marginVertical: 5 }}>{note.diary}</Text>
            </View>
         </View>
      </View>

   );
}


{/* <View style={{ margin : 20 , padding : 10, width:335,height:350, borderColor : 'white',backgroundColor:'lightyellow', borderRadius : 20 }}>
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

</View> */}
