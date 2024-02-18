import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed';

const ProfileHeader = () => {
  return (
    <View style={tw`flex-row justify-between`}>
      <View style={tw`flex-row items-center`}>
        <Icon style={tw`p-5 bg-black rounded-full w-15 mt-4`} name="torso" color="white" type="foundation" />
        <View style={tw`ml-4`}>
          <Text>Good Morning</Text>
          <Text>Raouf</Text>
        </View>
      </View>
      <Icon style={tw`p-5 w-15 mt-4`} name="notifications" color="white" type="material" />
    </View>
  );
};

export default ProfileHeader

const styles = StyleSheet.create({})