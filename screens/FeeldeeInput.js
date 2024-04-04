import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import moment from 'moment';
import FeeldeeStorages from "../storages/FeeldeeStorages";





export default function FeeldeeInput() {


   const route = useRoute();
   // RANDOM ID
   const [key, setKey] = useState(
      "_" + Math.random().toString(36).substring(2, 9)
   );
   const [title, setTitle] = useState([]);
   const [diary, setDiary] = useState([]);
   const [today, setToday] = useState(moment());
   const [uri, setUri] = useState([''])
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const date = today.date();
   const englishMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   const month = englishMonths[today.month()];
   const year = today.year();
   const navigation = useNavigation();
   const imageSources = [
      'https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo01.jpg',
      'https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo02.jpg',
      'https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo03.jpg',
      'https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo04.jpg',
      'https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo05.jpg',
      'https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo06.jpg',
      'https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo07.jpg',
      'https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo08.jpg'
   ];




   //console.log(`STATE  : ${title}, ${diary}, ${date}, ${month}, ${year},${uri}`);
   
   const onLoad = async () => {
      const { id } = route.params;
      if (id) {
         setKey(id);
         setTitle("");
         setDiary("")
         setToday("");
         setUri("");
      }
      navigation.setOptions({ title: id ? "edit" : "create" });
   };
   useEffect(() => {
      onLoad();
   }, []);

   const savediary = async () => {
      //A NEW ITEM
      let new_data = { "id": key, "title": title, "diary": diary ,"month":month,"date":date,"uri":imageSources[currentImageIndex]};
      //SAVE
      await FeeldeeStorages.writeItem(new_data);
      //REDIRECT TO
      navigation.navigate("Feeldeemonth");
   };



   return (
      
      <View style={{ flex: 1, backgroundColor: '#E7FBFF', padding: 10 }}>

         <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 20, marginBottom: -20 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}> {date}  {month}  {year}</Text>


         </View>
         <View style={{ margin: 20, padding: 10, width: 335, height: 470, borderColor: 'white', backgroundColor: 'lightyellow', borderRadius: 20 }}>

            <View style={{ flexDirection: "row", justifyContent: 'center', marginBottom: 20, marginTop: 20 }}>
            <TouchableOpacity onPress={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length)}>
                  <Image style={{ width: 100, height: 100 }} source={{ uri: imageSources[currentImageIndex] }} />
               </TouchableOpacity>
            </View>
            <View style={{ padding: 20, backgroundColor: 'white', marginVertical: 10, borderRadius: 10, height: 90, justifyContent: "space-around" }}>

               <TextInput placeholder="Input your Title" value={title} onChangeText={(newtitle) => setTitle(newtitle)} />


            </View>
            <View style={{ padding: 20, backgroundColor: 'white', marginVertical: 10, borderRadius: 10, height: 160, justifyContent: "space-around" }}>

               <TextInput placeholder="Input your Diary" value={diary} onChangeText={(newdiary) => setDiary(newdiary)} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'center', marginLeft: 200 }}>
               <TouchableOpacity onPress={() => {
                  
                  savediary();
               }}>
                  <View style={{ width: 90, height: 50, backgroundColor: 'pink', borderRadius: 20, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                     <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#E7FBFF' }}>Save</Text>
                  </View>
               </TouchableOpacity>
            </View>

         </View>




      </View>
   );
} 