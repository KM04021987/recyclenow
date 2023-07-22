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
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const {loading, login} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Spinner visible={loading} />
      <Image
        source={require('../assets/Logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Recycle Now</Text>
      <Text style={styles.text1}>A smart recycling system to resolve landfill problem</Text>

      <Text style={styles.text2}>Login</Text>

      <FormInput
        labelValue={phone}
        onChangeText={(userPhone) => setPhone(userPhone)}
        placeholderText="Phone Number"
        iconType="phone"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Login"
        onPress={() => login(phone, password)}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>


      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{fontSize: 17}}>Don't have an acount?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: 'blue', fontWeight: '500', fontSize: 17}}> Register</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    color: '#051d5f',
  },
  text1: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    marginBottom: 50,
    color: '#051d5f',
  },
  text2: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 24,
    marginBottom: 10,
    color: 'black',
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'blue',
    fontFamily: 'Lato-Regular',
  },
});
