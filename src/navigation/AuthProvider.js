import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_URL = 'http://10.0.2.2:8080';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [usertype, setUserType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  //const register = (fullname, phone, password, confirmpassword, usertype) => {
  const register = (input) => {
    setLoading(true);
    const fullname = input.fullname;
    const phone = input.phone;
    const password = input.password;
    const confirmpassword = input.confirmpassword;
    const usertype = input.usertype;
    axios
      .post(`${BASE_URL}/register`, {
        fullname,
        phone,
        password,
        confirmpassword,
        usertype
      })
      .then(res => {
        let user = res.data;
        const token = user.token
        const usertype = user.usertype
        setUserType(usertype)
        AsyncStorage.setItem('usertype', JSON.stringify(usertype));
        setUser(user);
        AsyncStorage.setItem('user', JSON.stringify(user));
        setLoading(false);
      })
      .catch(e => {
        console.log(`Error on register ${e.message}`);
      });
  };

  //const login = (phone, password) => {
  const login = (input) => {
    const phone = input.phone;
    const password = input.password;
    setLoading(true);
    axios
      .post(`${BASE_URL}/login`, { phone, password })
      .then(res => {
        let user = res.data;
        const token = user.token
        const usertype = user.usertype
        setUserType(usertype)
        AsyncStorage.setItem('usertype', JSON.stringify(usertype));
        setUser(user);
        AsyncStorage.setItem('user', JSON.stringify(user));
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        const err_string = JSON.stringify(e)
        const err_json = JSON.parse(err_string);
        const err_message = err_json.message
        const err_status = err_message.substring(32, 35)
        if (err_status == '401') {
          Alert.alert(`This user phone "${phone}" doesn't exist`);
        }
      });
  };

  const logout = () => {
    setLoading(true);

    axios
      .post(
        `${BASE_URL}/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${user.token}` },
        },
      )
      .then(res => {
        AsyncStorage.removeItem('user');
        setUser(null);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        console.log(`Error on logout ${e.message}`);
      });
  };

  const isLoggedIn = async () => {
    setSplashLoading(true);
    let user = await AsyncStorage.getItem('user');
    user = JSON.parse(user);

    if (user) {
      setUser(user);
    }

    setSplashLoading(false);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, register, logout, loading, user, usertype, splashLoading }}>
      {children}
    </AuthContext.Provider>
  );
};