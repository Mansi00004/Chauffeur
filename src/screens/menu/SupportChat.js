import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {LeftBlackArrow} from '@/assets';
import {goBack} from '@/navigation/NavigationRef';
import {ms} from 'react-native-size-matters';
import {Spacer} from '@/theme/Spacer';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';

export function SupportChat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hey!',
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <ScreenWrapper>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: ms(20),
            marginVertical: ms(25),
          }}>
          <TouchableOpacity
            style={styles.arrowIconViewStyle}
            onPress={() => goBack()}>
            <Image source={LeftBlackArrow} style={styles.arrowIconStyle} />
          </TouchableOpacity>

          <Spacer space={ms(15)} />
          <Text style={styles.headerTitle}>{'Support Chat'}</Text>
        </View>
        <View style={styles.divider} />
      </View>

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        
        renderBubble={props => (
          <Bubble
            {...props}
            textStyle={{
              right: {
                color: 'white',
              },
              left: {
                color: 'black',
              },
            }}
            wrapperStyle={{
              right: {backgroundColor: 'black', borderBottomRightRadius: 0},
              left: {backgroundColor: 'white',borderBottomLeftRadius:0},
            }}
          />
        )}
      />
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
  divider: {
    borderTopWidth: ms(2),
    borderColor: '#E6E6E6',
  },
});
