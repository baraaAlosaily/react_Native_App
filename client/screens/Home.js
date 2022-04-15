import React from 'react';
import { useState } from 'react';
import { View, SafeAreaView, FlatList} from 'react-native';
import { COLORS,NFTData } from '../constants';

import {HomeHeader,NFTCard,FocusedStatusBar} from "../components/index"


const Home = () => {
  const [NFT, setNFT] = useState(NFTData);

  const handleSeach=(value)=>{
    if(!value.length){
      return setNFT(NFTData);
    }

    const filterdData=NFTData.filter((item)=>
    item.name.toLowerCase().includes(value.toLowerCase()));


    if(filterdData.length){
      setNFT(filterdData);
    }else {
      setNFT(NFT)
    }
  }

  return (
   <SafeAreaView style={{flex:1}}>
       <FocusedStatusBar background={COLORS.primary} />
       <View style={{flex:1}}>
         <View style={{ zIndex:0 }}>
           <FlatList data={NFT}
           renderItem={({item})=> <NFTCard data={item} />}
           keyExtractor={(item)=>item.id}
           showsVerticalScrollIndicator={false}
           ListHeaderComponent={<HomeHeader onSearch={handleSeach} />}
           />
         </View>

         <View 
         style={{position:"absolute",
         top: 0,
         bottom:0 ,
         right:0 ,
         left:0 ,
         zIndex:-1,
        
        }}
         >
           <View style={{height:300, backgroundColor: COLORS.primary}} />
           <View style={{flex:1, backgroundColor:COLORS.white}} />

         </View>
       </View>
   </SafeAreaView>
  )
}

export default Home