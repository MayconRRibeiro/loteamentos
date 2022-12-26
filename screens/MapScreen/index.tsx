import * as React from "react";
import { View, StyleSheet, Alert, Platform } from "react-native";
import MapView, { Polygon, Overlay } from "react-native-maps";
import { RootTabScreenProps } from "../../types";
import { mapStyle } from "./mapStyle";
import polygons from "./polygons";

export default function MapScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  const onPressItem = (itemId: string) => {
    Alert.alert("Polygon pressed", itemId);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider="google"
        initialRegion={{
          latitude: -23.427181368657955,
          longitude: -51.920113453836784,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsPointsOfInterest={false}
        customMapStyle={mapStyle}
      >
        <Overlay
          bounds={[
            [-23.429343475230542, -51.92468192415328],
            [-23.424269087599974, -51.917107881260144],
          ]}
          // Maximum image overlay size on iOS with Google Maps
          // https://github.com/react-native-maps/react-native-maps/issues/4401
          image={Platform.select({
            ios: require("../../assets/images/loteamento-small1024.jpg"),
            android: require("../../assets/images/loteamento.jpg")
          })}
        />
        {polygons.map((item) => (
          <Polygon
            key={item.id}
            coordinates={item.coordinates}
            tappable
            onPress={() => onPressItem(item.id)}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
