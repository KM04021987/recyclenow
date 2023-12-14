import React, { useContext, useState } from 'react';
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
import { AuthContext } from '../navigation/AuthProvider';


const NewPickupScreen = ({ navigation }) => {
  const { logout, loading } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  return (
    <ScrollView>
      <Spinner visible={loading} />
      <Text style={styles.text}> Welcome, {user.user.FULLNAME}! </Text> 
      <FormButton
        buttonTitle="Logout"
        onPress={() => logout()}
      />
    </ScrollView>
  );
};

export default NewPickupScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 18,
    color: '#051d5f',
    marginTop: 20,
    marginLeft: 10,
  },
});