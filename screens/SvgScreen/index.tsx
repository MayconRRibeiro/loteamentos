import * as React from 'react';
import {Alert, Dimensions, ImageBackground, StyleSheet} from 'react-native'
import RnSvg, { Polygon } from 'react-native-svg';
import polygons from "./polygons";
import PinchZoomView from "react-native-pinch-zoom-view";
import { RootTabScreenProps } from '../../types';

const {width, height} = Dimensions.get('window');

export default function Svg({ navigation }: RootTabScreenProps<'TabTwo'>, props: any) {
  const onPressItem = (itemId: string) => {
    Alert.alert('Polygon pressed', itemId)
  }

  return (
    <PinchZoomView maxScale={10} minScale={2}>
      <ImageBackground style={styles.container}
        source={require('../../assets/images/loteamento.jpg')}
        // resizeMode="contain"
      >
        <RnSvg height={height} width={width} viewBox={`0 0 ${width} ${height}`}   {...props}>
          {polygons.map(item => <Polygon
            onPress={() => onPressItem(item.id)}
            key={item.id}
            points={item.points}
            fill="rgba(255, 0, 0, 0.2)"
            stroke="lime"
            strokeWidth="0.1"
          />)}
        </RnSvg>
      </ImageBackground>
    </PinchZoomView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
});
