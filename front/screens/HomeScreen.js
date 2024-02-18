import { StyleSheet, Text,SafeAreaView, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import ProfileHeader from '../components/ProfileHeader.js'
import SearchBar from '../components/SearchBar.js'
import TasksContainer from '../components/TasksContainer.js'


const HomeScreen = () => {
  return (
    <SafeAreaView 
    style={[styles.color,tw`h-full pt-10 pr-5 pl-5`]}>
        <ProfileHeader/>
        <SearchBar/>
        <TasksContainer/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    color:{
        backgroundColor:'#1C293A'
    }
})