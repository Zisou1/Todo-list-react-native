import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const data=[
    {
        id:"123",
        title:"Update the ui",
        type:"https://links.papareact.com/3pn",
        type:'finished',
        departement:"Project",
    },
    {
        id:"173",
        title:"update the ui",
        type:"https://links.papareact.com/3pn",
        type:'unfinished',
        departement:"Development",

    },
]

const TasksContainer = () => {
  return (
    <View>
      <View>
        <Text>My Tasks</Text>
        <Text>10</Text>
      </View>
      <View>
        
      </View>
    </View>
  )
}

export default TasksContainer

const styles = StyleSheet.create({})