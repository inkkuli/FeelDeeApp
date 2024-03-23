import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';




export default function Feeldeetype(props) {
   const navigation = useNavigation();


   return (
      <View style={{ flex: 1, backgroundColor: '#E7FBFF' }}>
         <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>How your feel today?</Text>
         </View>
         <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>

            <View style={{ width: 120, height: 130, borderColor: 'white', backgroundColor: 'lightyellow', borderRadius: 20, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
               <TouchableOpacity onPress={() => { navigation.navigate("FeeldeeInput1"); }}>

                  <Image style={{ width: 80, height: 80 }} source={{ "uri": "https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo01.jpg" }} />

               </TouchableOpacity>
               <Text style={{ fontSize: 17, color: 'gray', fontWeight: 'bold', marginBottom: -10 }}>Sad</Text>

            </View>
            <View style={{ width: 120, height: 130, borderColor: 'white', backgroundColor: 'lightyellow', borderRadius: 20, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
               <TouchableOpacity onPress={() => { navigation.navigate("FeeldeeInput2"); }}>

                  <Image style={{ width: 80, height: 80 }} source={{ "uri": "https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo02.jpg" }} />

               </TouchableOpacity>
               <Text style={{ fontSize: 17, color: 'gray', fontWeight: 'bold', marginBottom: -10 }}>Argry</Text>

            </View>
         </View>
         <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>

            <View style={{ width: 120, height: 130, borderColor: 'white', backgroundColor: 'lightyellow', borderRadius: 20, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
               <TouchableOpacity onPress={() => { navigation.navigate("FeeldeeInput3"); }}>

                  <Image style={{ width: 80, height: 80 }} source={{ "uri": "https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo03.jpg" }} />

               </TouchableOpacity>
               <Text style={{ fontSize: 17, color: 'gray', fontWeight: 'bold', marginBottom: -10 }}>Calm</Text>

            </View>
            <View style={{ width: 120, height: 130, borderColor: 'white', backgroundColor: 'lightyellow', borderRadius: 20, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
               <TouchableOpacity onPress={() => { navigation.navigate("FeeldeeInput4"); }}>

                  <Image style={{ width: 80, height: 80 }} source={{ "uri": "https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo04.jpg" }} />

               </TouchableOpacity>
               <Text style={{ fontSize: 17, color: 'gray', fontWeight: 'bold', marginBottom: -10 }}>Unpleasant</Text>

            </View>
         </View>
         <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>

            <View style={{ width: 120, height: 130, borderColor: 'white', backgroundColor: 'lightyellow', borderRadius: 20, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
               <TouchableOpacity onPress={() => { navigation.navigate("FeeldeeInput5"); }}>

                  <Image style={{ width: 80, height: 80 }} source={{ "uri": "https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo05.jpg" }} />

               </TouchableOpacity>
               <Text style={{ fontSize: 17, color: 'gray', fontWeight: 'bold', marginBottom: -10 }}>Shock</Text>

            </View>
            <View style={{ width: 120, height: 130, borderColor: 'white', backgroundColor: 'lightyellow', borderRadius: 20, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
               <TouchableOpacity onPress={() => { navigation.navigate("FeeldeeInput6"); }}>

                  <Image style={{ width: 80, height: 80 }} source={{ "uri": "https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo06.jpg" }} />

               </TouchableOpacity>
               <Text style={{ fontSize: 17, color: 'gray', fontWeight: 'bold', marginBottom: -10 }}>Unhappy</Text>

            </View>
         </View>
         <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>

            <View style={{ width: 120, height: 130, borderColor: 'white', backgroundColor: 'lightyellow', borderRadius: 20, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
               <TouchableOpacity onPress={() => { navigation.navigate("FeeldeeInput7"); }}>

                  <Image style={{ width: 80, height: 80 }} source={{ "uri": "https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo07.jpg" }} />

               </TouchableOpacity>
               <Text style={{ fontSize: 17, color: 'gray', fontWeight: 'bold', marginBottom: -10 }}>Joyful</Text>

            </View>
            <View style={{ width: 120, height: 130, borderColor: 'white', backgroundColor: 'lightyellow', borderRadius: 20, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
               <TouchableOpacity onPress={() => { navigation.navigate("FeeldeeInput8"); }}>

                  <Image style={{ width: 80, height: 80 }} source={{ "uri": "https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo08.jpg" }} />

               </TouchableOpacity>
               <Text style={{ fontSize: 17, color: 'gray', fontWeight: 'bold', marginBottom: -10 }}>Bored</Text>

            </View>
         </View>
         

         <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 0 }}>
            <Ionicons name="close-circle" size={85} color="pink" onPress={() => { navigation.navigate("Feeldeemonth"); }} />

         </View>


      </View>
   );
}