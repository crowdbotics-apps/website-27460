import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_366_2} />
      <View style={styles.View_366_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e181/9b10/276c372af069ad77f46f2f5df649a19e"
          }}
          style={styles.ImageBackground_366_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b55/6f51/4821bc17938f48d15057071b1a57befc"
          }}
          style={styles.ImageBackground_366_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/127f/1719/eec179035c36b3cfc84d74e835c043b4"
          }}
          style={styles.ImageBackground_366_6}
        />
      </View>
      <View style={styles.View_366_24}>
        <Text style={styles.Text_366_24}>
          Terima Kasih Data yang sudah anda masukan akan segera kami proses.
        </Text>
      </View>
      <View style={styles.View_366_28} />
      <View style={styles.View_366_25}>
        <Text style={styles.Text_366_25}>Close</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_366_2: {
    width: wp("103.39233038348084%"),
    minWidth: wp("103.39233038348084%"),
    height: hp("40.416666666666664%"),
    minHeight: hp("40.416666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.392330383480826%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 99, 180, 1)"
  },
  View_366_3: {
    width: wp("10.029498525073747%"),
    minWidth: wp("10.029498525073747%"),
    height: hp("14.166666666666666%"),
    minHeight: hp("14.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.312684365781706%"),
    top: hp("13.125%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_366_4: {
    width: wp("10.029498525073747%"),
    height: hp("14.166666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_366_5: {
    width: wp("6.296121265332608%"),
    height: hp("9.675343036651611%"),
    top: hp("4.245554606119793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733407079646028%")
  },
  ImageBackground_366_6: {
    width: wp("6.659959551155743%"),
    height: hp("7.217411200205485%"),
    top: hp("3.496958414713543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.684714348266965%")
  },
  View_366_24: {
    width: wp("77.13864306784662%"),
    minWidth: wp("77.13864306784662%"),
    minHeight: hp("31.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.209439528023598%"),
    top: hp("46.25%")
  },
  Text_366_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_28: {
    width: wp("22.271386430678465%"),
    minWidth: wp("22.271386430678465%"),
    height: hp("8.541666666666666%"),
    minHeight: hp("8.541666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.29793510324484%"),
    top: hp("75.41666666666667%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_366_25: {
    width: wp("8.997050147492626%"),
    minWidth: wp("8.997050147492626%"),
    minHeight: hp("5.833333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.1976401179941%"),
    top: hp("76.875%")
  },
  Text_366_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
