import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {ms} from 'react-native-size-matters';
import {
  Notification,
  Password,
  Profile,
  bookRide,
  card,
  help,
  logoutIcon,
  privacy,
  terms,
  toggleOff,
  toggleOn,
  userIcon,
} from '@/assets';
import {COLORS} from '@/theme/Colors';
import {Spacer} from '@/theme/Spacer';
import {navigate} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';
import {restAllData} from '@/redux/commonActions';
import {getNotification, logout} from '@/redux/actions/authActions';
import {useDispatch, useSelector} from 'react-redux';

const CustomDrawer = () => {
  const dispatch = useDispatch();

  const [isToggle, setIsToggle] = useState(false);
  const notificationData = useSelector((state) => state?.user?.notification)

  const handleLogout = () => {
    dispatch(logout());
    dispatch(restAllData());
  };

  const handleNotification = () => {
    dispatch(getNotification());
  };

  const data = [
    {
      id: 1,
      title: 'Personal Information',
      image: Profile,
      onPress: () => navigate(NAVIGATION.personalInfo),
    },
    {
      id: 2,
      title: 'Notifications',
      image: Notification,
      onPress: handleNotification,
      toggleIcon: isToggle ? toggleOn : toggleOff,
    },
    {
      id: 3,
      title: 'Ride Bookings ',
      image: bookRide,
      onPress: () => navigate(NAVIGATION.rideBookings),
    },
    {
      id: 4,
      title: 'Payment Method',
      image: card,
      onPress: () => navigate(NAVIGATION.paymentMethod),
    },
    {
      id: 5,
      title: 'Change Password',
      image: Password,
      onPress: () => navigate(NAVIGATION.changePassword),
    },
    {
      id: 6,
      title: 'Terms & Conditions',
      image: terms,
      onPress: () => navigate(NAVIGATION.termConditions),
    },
    {
      id: 7,
      title: 'Privacy Policy',
      image: privacy,
      onPress: () => navigate(NAVIGATION.privacyPolicy),
    },
    {
      id: 8,
      title: 'Help',
      image: help,
      onPress: () => navigate(NAVIGATION.help),
    },
  ];

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: ms(5),
      }}
      onPress={item?.onPress}>
      <View
        style={{
          backgroundColor: '#F6F6F6',
          height: ms(36),
          width: ms(36),
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: ms(14),
        }}>
        <Image
          style={{height: ms(20), width: ms(20), resizeMode: 'contain'}}
          source={item?.image}
        />
      </View>
      <Text
        style={{
          fontSize: ms(15),
          color: COLORS.black,
          fontWeight: '400',
          marginHorizontal: ms(10),
          flex: 1,
        }}>
        {item?.title}
      </Text>
      {index == 1 ? (
        <TouchableOpacity
          onPress={() => setIsToggle(!isToggle)}
          style={{
            paddingVertical: ms(0),
            height: ms(25),
            width: ms(40),
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Image
            source={item?.toggleIcon}
            style={{width: ms(34), height: ms(18), resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={{padding: ms(20), flex: 1}}>
      <View style={{flex: 0.9}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: ms(48), width: ms(48), resizeMode: 'contain'}}
            source={userIcon}
          />
          <View style={{marginLeft: ms(15)}}>
            <Text
              style={{
                fontSize: ms(14),
                color: COLORS.skyGray,
                fontWeight: '500',
              }}>
              {'Hey'}
            </Text>
            <Text
              style={{
                fontSize: ms(26),
                color: COLORS.black,
                fontWeight: '600',
              }}>
              {'Johan'}
            </Text>
          </View>
        </View>

        <Spacer space={ms(20)} />

        <FlatList data={data} style={{}} renderItem={renderItem} />
      </View>

      <View style={{flex: 0.1}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: ms(5),
          }}>
          <View
            style={{
              backgroundColor: '#F6F6F6',
              height: ms(36),
              width: ms(36),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: ms(14),
            }}>
            <Image
              style={{height: ms(20), width: ms(20), resizeMode: 'contain'}}
              source={logoutIcon}
            />
          </View>
          <Text
            style={{
              fontSize: ms(15),
              color: COLORS.black,
              fontWeight: '400',
              marginHorizontal: ms(10),
              flex: 1,
            }}
            onPress={handleLogout}>
            {'Logout'}
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: ms(14),
            color: COLORS.skyGray,
            fontWeight: '500',
            marginHorizontal: ms(10),
            flex: 1,
          }}
          onPress={() => navigate(NAVIGATION.deleteAccountBottomSheet)}>
          {'Delete My Account'}
        </Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
