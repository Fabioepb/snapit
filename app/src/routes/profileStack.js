import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Profile, Settings, PostCamera, PostForm, PostDetail } from '../screens';
import React from 'react';
import { Dimensions } from 'react-native';
import { ProfileHeader } from '../components';

const DEVICE_HEIGHT = Dimensions.get('window').height;

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    Settings: Settings,
    Detail: PostDetail
  }, {
    initialRouteName: 'Profile',
  }
);

const UploadStack = createStackNavigator(
  {
    PostCamera: PostCamera,
    PostForm: PostForm
  }, {
    initialRouteName:'PostCamera',
  }
)

const _ProfileStack = createBottomTabNavigator(
  {
    Profile: ProfileStack,
    Upload: UploadStack
  },
);

// Marana para evitar un error con el drawer
export default createStackNavigator(
  {
    Principal: _ProfileStack,
  }, {
    headerMode: 'none',
  }
);