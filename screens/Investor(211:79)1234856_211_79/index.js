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
      <View style={styles.View_211_81}>
        <View style={styles.View_211_82}>
          <Text style={styles.Text_211_82}>Laporan Tahunan</Text>
        </View>
      </View>
      <View style={styles.View_211_83}>
        <View style={styles.View_211_84}>
          <Text style={styles.Text_211_84}>Informasi Keuangan</Text>
        </View>
      </View>
      <View style={styles.View_211_85}>
        <View style={styles.View_211_86}>
          <Text style={styles.Text_211_86}>Persentasi Perusahaan</Text>
        </View>
      </View>
      <View style={styles.View_211_87}>
        <View style={styles.View_211_88}>
          <Text style={styles.Text_211_88}>Informasi Pemegang Saham</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_211_81: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 242, 247, 1)",
    overflow: "hidden"
  },
  View_211_82: {
    width: wp("55.38461538461539%"),
    minWidth: wp("55.38461538461539%"),
    minHeight: hp("9.090909090909092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.641025641025641%"),
    top: hp("7.954545454545454%")
  },
  Text_211_82: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_83: {
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
  View_211_84: {
    width: wp("64.61538461538461%"),
    minWidth: wp("64.61538461538461%"),
    minHeight: hp("9.090909090909092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.641025641025641%"),
    top: hp("7.954545454545453%")
  },
  Text_211_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_85: {
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
  View_211_86: {
    width: wp("73.84615384615385%"),
    minWidth: wp("73.84615384615385%"),
    minHeight: hp("9.090909090909092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("7.95454545454546%")
  },
  Text_211_86: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_87: {
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
  View_211_88: {
    width: wp("91.28205128205128%"),
    minWidth: wp("91.28205128205128%"),
    minHeight: hp("9.090909090909092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.153846153846154%"),
    top: hp("7.954545454545453%")
  },
  Text_211_88: {
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
