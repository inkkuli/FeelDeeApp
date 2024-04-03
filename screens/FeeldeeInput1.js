import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from 'moment';




export default function FeeldeeInput1(props) {
   //const [title, setTitle] = useState([]);
   const [note, setNote] = useState([]);
   const [today, setToday] = useState(moment());
   const [uri, setUri] = useState(['https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo01.jpg'])


   const date = today.date();
   const englishMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   const month = englishMonths[today.month()];
   const year = today.year();
   const navigation = useNavigation();

   const onLoad = async () => {
      // READ ITEMS FROM STORAGE
      let data = await FeeldeeStorage.readItems();

      console.log("data:", data);

      // SET STATE - WRITE CODE HERE
      setNote(data);

   };

   useEffect(() => { onLoad(); }, []);

   const onCreate = async () => {
      let new_data = {
         id: '_' + Math.random().toString(36).substr(2, 9), //RANDOM NUMBER
         title: "", //Empty String
         diary: "",
      };
      //CLONE ARRAY + APPEND NEW DATA INTO ARRAY
      let n = [...note, new_data];
      //UPDATE STATE
      setNote(n);

      // WRITE ITEM TO STORAGE - WRITE CODE HERE
      await FeelseeStorage.writeItems(n);

   };

   const onUpdate =async (new_title, new_diary, id) => {   
      //CLONE ARRAY FIRST
      let n = [...note];
      //Find index of specific object using findIndex method.   
      let index = n.findIndex((item => item.id == id));
      //Update object's name property.
      console.log("n:", n[index],id);
      n[index].title = new_title;
      n[index].diary = new_diary;
      //UPDATE STATE
      setNote(n);
      
      // WRITE ITEM TO STORAGE - WRITE CODE HERE
      await FeeldeeStorage.writeItems(n);
      
  }; 


  //console.log("notes", note);



   //console.log(`STATE  : ${title}, ${diary}, ${date}, ${month}, ${year},${uri}`);

   //console.log("STATE  : ", inputtitle, inputDiary,${separatedDate.date},${separatedDate.month},${separatedDate.year});




   return (
      <View style={{ flex: 1, backgroundColor: '#E7FBFF', padding: 10 }}>

         <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 20, marginBottom: -20 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}> {date}  {month}  {year}</Text>


         </View>
         <View style={{ margin: 20, padding: 10, width: 335, height: 470, borderColor: 'white', backgroundColor: 'lightyellow', borderRadius: 20 }}>

            <View style={{ flexDirection: "row", justifyContent: 'center', marginBottom: 20, marginTop: 20 }}>
               <Image style={{ width: 100, height: 100 }} source={{ "uri": "https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo01.jpg" }} />
            </View>
            <View style={{ padding: 20, backgroundColor: 'white', marginVertical: 10, borderRadius: 10, height: 90, justifyContent: "space-around" }}>

            {/* <TextInput placeholder="Input your Title" value={note.title} onChangeText={(title) => setNote({ ...note, title })} /> */}
            <TextInput value={props.item.title} placeholder="Input your Title" onChangeText={(new_title) => props.onUpdate(new_title, props.item.id) }  />
        


            </View>
            <View style={{ padding: 20, backgroundColor: 'white', marginVertical: 10, borderRadius: 10, height: 160, justifyContent: "space-around" }}>

            {/* <TextInput placeholder="Input your Diary" value={note.diary} onChangeText={(diary) => setNote({ ...note, diary })} /> */}
            <TextInput value={props.item.diary} placeholder="Input your Diary" onChangeText={(new_diary) => props.onUpdate(new_diary, props.item.id) }  />
        
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'center', marginLeft: 200 }}>
               <TouchableOpacity onPress={() => {
                  onUpdate(); // เพิ่มข้อมูล
                  // navigation.navigate("Feeldeemonth"); // นำทางไปยังหน้าถัดไป
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
