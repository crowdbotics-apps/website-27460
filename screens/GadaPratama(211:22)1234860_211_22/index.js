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
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("338_318"))
        }
      >
        <View style={styles.View_211_24}>
          <View style={styles.View_211_25}>
            <Text style={styles.Text_211_25}> Gada Pratama</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_211_26}>
        <View style={styles.View_211_27}>
          <Text style={styles.Text_211_27}>Gada Madya</Text>
        </View>
      </View>
      <View style={styles.View_211_28}>
        <View style={styles.View_211_29}>
          <Text style={styles.Text_211_29}>Gada Utama</Text>
        </View>
      </View>
      <View style={styles.View_211_30}>
        <View style={styles.View_211_31}>
          <Text style={styles.Text_211_31}>Pelatihan Lainya</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_211_24: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 241, 241, 1)",
    overflow: "hidden"
  },
  View_211_25: {
    width: wp("47.69230769230769%"),
    minWidth: wp("47.69230769230769%"),
    minHeight: hp("9.090909090909092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.256410256410255%"),
    top: hp("7.954545454545454%")
  },
  Text_211_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_26: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_211_27: {
    width: wp("40.51282051282051%"),
    minWidth: wp("40.51282051282051%"),
    minHeight: hp("9.090909090909092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.307692307692308%"),
    top: hp("7.954545454545453%")
  },
  Text_211_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_28: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_211_29: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("9.090909090909092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.256410256410255%"),
    top: hp("7.95454545454546%")
  },
  Text_211_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_30: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_211_31: {
    width: wp("52.820512820512825%"),
    minWidth: wp("52.820512820512825%"),
    minHeight: hp("9.090909090909092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.256410256410255%"),
    top: hp("7.954545454545453%")
  },
  Text_211_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
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
