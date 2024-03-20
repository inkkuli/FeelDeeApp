import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';



export default function Feeldeetype(props) {
   const navigation = useNavigation();


   return (
      <View style={{ flex: 1, backgroundColor: '#E7FBFF'}}>
         <View style={{flexDirection: 'row',alignSelf:'center',marginTop:20}}>
            <Text style={{fontSize:25,color: 'gray',fontWeight:'bold'}}>How your feel today?</Text>
         </View>
         <View style={{ flexDirection : "row", marginTop : 30 ,justifyContent : "space-around"}}>
            
            <TouchableOpacity >
                           
               <Image style={{width: 80, height: 80}} source={"https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo01.jpg"} />
                            
            </TouchableOpacity>
            
            <TouchableOpacity >
                           
               <Image style={{width: 80, height: 80}} source={"https://raw.githubusercontent.com/inkkuli/FeelDeeApp/main/assets/Emo02.jpg"} />
                            
            </TouchableOpacity>
         </View>
        
 

         <View style={{flexDirection: 'row',alignSelf:'center', marginBottom: 40}}>
            <Ionicons name="close-circle" size={70} color="pink" onPress={()=>{ navigation.navigate("Feeldeemonth"); }}/>
      
         </View>
         

      </View>
   );
}