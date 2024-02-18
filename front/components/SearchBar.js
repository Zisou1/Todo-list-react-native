import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed';


export default function SearchBar() {
    const currentDate = new Date();
    const dateOptions = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
      };
      const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);
  return (
    <View style={tw`pt-8`}>
      <Text style={styles.smalltext}>Today</Text>
      <Text style={styles.bigtext}>{formattedDate}</Text>
      <View style={[styles.searchssbar, { backgroundColor: '#292B3A'}]}>
      <Icon name="magnifying-glass" color="white" type="foundation" />
      <TextInput
      style={tw`ml-5`}
      
        placeholder="Search by events , tasks and people"
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    searchssbar:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'292B3A',
        padding:10,
        borderRadius:12,
        marginTop:15,
        fontFamily:'poppins',
        
        

        



    },
    smalltext:{
        fontFamily: 'Roboto',
        color:'grey'
    },
    bigtext:{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'white'
    },
   

})