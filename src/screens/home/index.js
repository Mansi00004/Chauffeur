import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Airplane,
  City,
  HomeBackGround,
  HomeBanner,
  Linear,
  Menu,
} from '@/assets';
import {ms} from 'react-native-size-matters';
import {DrawerActions, useIsFocused} from '@react-navigation/native';
import {styles} from './styles';
import OneWayPickDropPoint from './component/OneWayPickDropPoint';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {Spacer} from '@/theme/Spacer';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '@/redux/actions/authActions';
import {restAllData} from '@/redux/commonActions';
import {navigationRef} from '@/navigation/NavigationRef';

export function Home() {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const isLoadings = useSelector(state => state?.auth?.loading);
  console.log(isLoadings);

  const [activeTab, setActiveTab] = useState(0);

  const oneWayView = {borderBottomWidth: activeTab === 0 ? ms(3) : 0};
  const byHourView = {borderBottomWidth: activeTab === 1 ? ms(3) : 0};

  const oneWayText = {fontWeight: activeTab === 0 ? '800' : '500'};
  const byHourText = {fontWeight: activeTab === 1 ? '800' : '500'};

  const rideSelectedWay = [
    {
      id: 1,
      image: City,
      title: 'City Transfers',
      onPress: () => setSelectedIndex(0),
    },
    {
      id: 2,
      image: Airplane,
      title: 'Airport Transfers',
      onPress: () => setSelectedIndex(1),
    },
    {
      id: 3,
      image: City,
      title: 'Events Transportation',
      onPress: () => setSelectedIndex(2),
    },
  ];

  const renderItem = ({item, index}) => (
    <View style={styles.flexDirectionRow}>
      {selectedIndex == 2 && (
        <View
          style={[
            styles.selectedSeprator,
            {
              backgroundColor:
                index === selectedIndex || index == 0
                  ? 'transparent'
                  : '#727272',
            },
          ]}
        />
      )}

      <TouchableOpacity
        style={[
          styles.transferView,
          {backgroundColor: index == selectedIndex ? '#727272' : 'transparent'},
        ]}
        onPress={item?.onPress}>
        <Image
          source={item?.image}
          resizeMode="contain"
          style={styles.transportIcon}
        />
        <Text style={styles.rideTransferTitle}>{item?.title}</Text>
      </TouchableOpacity>

      {selectedIndex == 0 && (
        <View
          style={[
            styles.selectedSeprator,
            {
              backgroundColor:
                index === selectedIndex || index == 2
                  ? 'transparent'
                  : '#727272',
            },
          ]}
        />
      )}
    </View>
  );

  const handleLogout = () => {
    // toggleDrawers();
    // dispatch(logout());
    // dispatch(restAllData());
  };

  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        StatusBar.setBackgroundColor('#292929', true);
        StatusBar.setBarStyle('light-content');
      }, 300);
    }
  }, [isFocused]);

  const openDrawer = () => {
    navigationRef.current.dispatch(DrawerActions.openDrawer());
  };
  return (
    <ScreenWrapper>
      <ImageBackground
        source={HomeBackGround}
        style={styles.mainBackgroundImage}>
        <ImageBackground source={HomeBanner} style={styles.headerBannerImage}>
          <ImageBackground
            source={Linear}
            style={styles.opacityBackgroundImage}>
            <TouchableOpacity style={styles.menuView} onPress={openDrawer}>
              <Image source={Menu} style={styles.menuIcon} />
            </TouchableOpacity>
            <View style={styles.rideView}>
              <Text style={styles.rideText}>{'BOOK A RIDE'}</Text>

              <Spacer space={ms(10)} />

              {/* <FlatList
                data={rideSelectedWay}
                numColumns={3}
                renderItem={renderItem}
                style={styles.selectionStyle}
              /> */}
            </View>
          </ImageBackground>
        </ImageBackground>

        <View style={styles.bottomView}>
          <View style={styles.flexDirectionRow}>
            <TouchableOpacity
              style={[styles.tabView, oneWayView]}
              onPress={() => setActiveTab(0)}>
              <Text style={[styles.title, oneWayText]}>{'One Way'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabView, byHourView]}
              onPress={() => setActiveTab(1)}>
              <Text style={[styles.title, byHourText]}>{'By Hour'}</Text>
            </TouchableOpacity>
          </View>
          <Spacer space={ms(20)} />
          <OneWayPickDropPoint />
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
}
