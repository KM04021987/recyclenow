import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import FormButton from '../components/FormButton';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../navigation/AuthProvider';


const HomeScreen = ({navigation}) => {
  const {logout, loading} = useContext(AuthContext);


  return (
    <ScrollView>
      <Spinner visible={loading} />
      <Text> Home </Text>  
      <FormButton
        buttonTitle="Logout"
        onPress={() => logout()}
      /> 
    </ScrollView>
  );
};

export default HomeScreen;