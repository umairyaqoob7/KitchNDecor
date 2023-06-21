import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import  Swiper from 'react-native-swiper';
import { colors } from '../global/style';

const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offerSlider}>
        <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true}
        dotColor={colors.text2} activeDotColor={colors.text1}
        nextButton={<Text style={styles.buttonText}>›</Text>}
        prevButton={<Text style={styles.buttonText}>‹</Text>}>
          <View style={styles.slide}>
            <Image source={require('../../assets/sale20.jpg')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/sale2.jpg')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/platesale.png')} style={styles.image} />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  offerSlider: {
    width: '100%',
    height: 200,
    backgroundColor: colors.col1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
},
slide: {
    width: '100%',
    height: 200,
    backgroundColor: colors.col1,
    justifyContent: 'center',
    alignItems: 'center',
},
image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
},
buttonText: {
    color: colors.text1,
    fontSize: 30,
    fontWeight: '500',
    backgroundColor: 'white',
    borderRadius: 20,
    width: 30,
    height: 30,
    textAlign: 'center',
    lineHeight: 28,
}
});