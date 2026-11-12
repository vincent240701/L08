import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from "react";
import Boats from "./components/Boats";

class Boat extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <StatusBar style="light" />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>⚓ Boat Showroom</Text>
          <Text style={styles.headerSubtitle}>Find your next ride on the water</Text>
        </View>
        <ScrollView contentContainerStyle={styles.list}>
          <Boats title={"SEA RAY 500 SUNDANCER"} Description={'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'} icon_name={"sailboat"}
                 icon_color={"black"} poster={require("./img/sea_ray.jpg")} />

          <Boats title={"Four Winns Horizon 18"} Description={'A sporty look and refined details truly set the Horizon 180 above all others..'} icon_name={"sailboat"}
                 icon_color={"black"} poster={require("./img/four_winns.jpg")} />

          <Boats title={"Flipper 640 ST"} Description={'A modern take on the classic, traditional hardtop and perfect for a family picnic'} icon_name={"sailboat"}
                 icon_color={"black"} poster={require("./img/flipper.jpg")} />

          <Boats title={"Princess V48"} Description={'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'} icon_name={"sailboat"}
                 icon_color={"black"} poster={require("./img/princess.jpg")} />

          <Boats title={"Bayliner 175 Bowrider"} Description={'CIts outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'} icon_name={"sailboat"}
                 icon_color={"black"} poster={require("./img/bayliner.jpg")} />

          <Boats title={"Fairline Targa 47"} Description={'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'} icon_name={"sailboat"}
                 icon_color={"black"} poster={require("./img/fairline.jpg")} />

          <Boats title={"Budget Cabit boat"} Description={'Super cheap boat, i dont think its safe but its cheap LOL.'} icon_name={"sailboat"}
                 icon_color={"black"} poster={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQiWPLURgwRCvzeY7csP_38c87NDqtP6cpFtGnsMoQNw&s=10"}} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,                     // fills the whole screen
    backgroundColor: '#eaf4fb',
  },
  header: {
    backgroundColor: '#0b3d5c',
    paddingTop: 20,              // clears the status bar
    paddingBottom: 20,
    alignItems: 'center',        // centres the header text
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  headerSubtitle: {
    color: '#a5d8f3',
    fontSize: 14,
    marginTop: 4,
  },
  list: {
    paddingTop: 20,
    paddingBottom: 30,
  },
});

export default Boat;