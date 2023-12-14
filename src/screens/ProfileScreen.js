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


const ProfileScreen = ({ navigation }) => {
  const { logout, loading } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  return (
    <ScrollView>
      <Spinner visible={loading} />
      <Text style={styles.text}> Welcome, {user.user.FULLNAME}! </Text> 
      <TouchableOpacity
        style={styles.userBtn}
        onPress={() => {
          navigation.navigate('EditProfile');
        }}>
        <Text style={styles.userBtnTxt}>Edit Profile</Text>
      </TouchableOpacity>
      <FormButton
        buttonTitle="Logout"
        onPress={() => logout()}
      />
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 18,
    color: '#051d5f',
    marginTop: 20,
    marginLeft: 10,
  },
  userBtn: {
    borderColor: '#2e64e5',
    marginTop: 25,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginHorizontal: 15,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
});