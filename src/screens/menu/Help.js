import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {LeftBlackArrow} from '@/assets';
import {goBack} from '@/navigation/NavigationRef';
import {ms} from 'react-native-size-matters';
import {Spacer} from '@/theme/Spacer';
import {phonenew} from '@/assets';
import {chat} from '@/assets';
import {leftarrow} from '@/assets';
import {line} from '@/assets';
import {mailbox} from '@/assets';
export function Help({navigation}) {
  return (
    <ScreenWrapper>
      <View
        style={{flex: 1, paddingHorizontal: ms(20), marginVertical: ms(25)}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.arrowIconViewStyle}
            onPress={() => goBack()}>
            <Image source={LeftBlackArrow} style={styles.arrowIconStyle} />
          </TouchableOpacity>

          <Spacer space={ms(15)} />
          <Text style={styles.headerTitle}>{'Help'}</Text>
        </View>

        <Spacer space={ms(20)} />
        <Text style={styles.headerText}>Hello, How we can help you?</Text>
        <Text>We are always ready to help you.</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('SupportChat')}
          style={styles.chatContainer}>
          <View style={styles.chatContent}>
            <Image source={chat} />
            <Text style={styles.chatNumber}>Via Chat</Text>
          </View>
          <Image source={leftarrow} />
        </TouchableOpacity>
        <Text>Call Us</Text>
        <View style={styles.callContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image source={phonenew} />
            <Text style={styles.callDate}>CH +41 44 797 61 24</Text>
          </View>
          <Image style={{margin: ms(10)}} source={line} />
          <View style={{flexDirection: 'row'}}>
            <Image source={phonenew} />
            <Text style={styles.callDate}>GB +44 20 7663 7347</Text>
          </View>
          <Image style={{margin: ms(10)}} source={line} />
          <View style={{flexDirection: 'row'}}>
            <Image source={phonenew} />
            <Text style={styles.callDate}>FR +33 1 89 70 87 37</Text>
          </View>
        </View>
        <Text>Mail Us</Text>
        <TouchableOpacity style={styles.chatContainer}>
          <View style={styles.chatContent}>
            <Image source={mailbox} />
            <Text style={styles.chatNumber}>office@chauffeur-services.com</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  arrowIconViewStyle: {
    width: ms(42),
    height: ms(42),
    borderRadius: ms(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 5,
  },
  arrowIconStyle: {
    width: ms(8),
    height: ms(12),
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: ms(26),
    color: '#0F0F0F',
    fontWeight: '500',
    marginLeft: ms(15),
  },
  headerText: {
    fontSize: ms(20),
    fontWeight: '500',
    color: '#0F0F0F',
  },
  chatContainer: {
    paddingVertical: ms(20),
    paddingHorizontal: ms(20),
    marginVertical: ms(20),
    backgroundColor: '#FFFF',
    borderRadius: ms(10),
    flexDirection: 'row',
    marginRight: ms(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    shadowColor: 'black',
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 2,
      height: 5,
    },
  },
  chatContent: {
    flexDirection: 'row',
  },
  chatNumber: {
    marginHorizontal: ms(10),
    fontSize: ms(15),
    fontWeight: 'bold',
  },
  callContainer: {
    paddingVertical: ms(20),
    paddingHorizontal: ms(8),
    marginVertical: ms(20),
    backgroundColor: '#FFFF',
    borderRadius: ms(15),
    elevation: ms(5),
    shadowColor: 'black',
    marginHorizontal: ms(2),
    marginTop: ms(15),
  },

  callDate: {
    color: 'black',
    fontSize: ms(15),
    fontWeight: 'bold',
    marginHorizontal: ms(10),
    marginVertical: ms(2),
  },
});
