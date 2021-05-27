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
      <View style={styles.View_375_89}>
        <View style={styles.View_375_90}>
          <Text style={styles.Text_375_90}>Satuan Pengamanan (Satpam)</Text>
        </View>
      </View>
      <View style={styles.View_375_91}>
        <View style={styles.View_375_92}>
          <Text style={styles.Text_375_92}>
            Pelatihan Satuan Pengamanan (Satpam)
          </Text>
        </View>
      </View>
      <View style={styles.View_375_93}>
        <View style={styles.View_375_94}>
          <Text style={styles.Text_375_94}>Pemborongan</Text>
        </View>
      </View>
      <View style={styles.View_375_95}>
        <View style={styles.View_375_96}>
          <Text style={styles.Text_375_96}>Pengamanan Digital</Text>
        </View>
      </View>
      <View style={styles.View_375_97}>
        <View style={styles.View_375_98}>
          <Text style={styles.Text_375_98}>Cleaning Service</Text>
        </View>
      </View>
      <View style={styles.View_375_99}>
        <View style={styles.View_375_100}>
          <Text style={styles.Text_375_100}>Lainnya</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_375_89: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.666666666666664%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_375_90: {
    width: wp("51.89873417721519%"),
    minWidth: wp("51.89873417721519%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5400843881856545%"),
    top: hp("5.464480874316941%")
  },
  Text_375_90: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_375_91: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_375_92: {
    width: wp("68.56540084388185%"),
    minWidth: wp("68.56540084388185%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.329113924050633%"),
    top: hp("5.46448087431694%")
  },
  Text_375_92: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_375_93: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_375_94: {
    width: wp("23.839662447257385%"),
    minWidth: wp("23.839662447257385%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.59493670886076%"),
    top: hp("5.4644808743169335%")
  },
  Text_375_94: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_375_95: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_375_96: {
    width: wp("34.177215189873415%"),
    minWidth: wp("34.177215189873415%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.383966244725738%"),
    top: hp("5.464480874316941%")
  },
  Text_375_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_375_97: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.66666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_375_98: {
    width: wp("28.059071729957807%"),
    minWidth: wp("28.059071729957807%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.59493670886076%"),
    top: hp("5.464480874316948%")
  },
  Text_375_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_375_99: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83.33333333333334%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    overflow: "hidden"
  },
  View_375_100: {
    width: wp("13.080168776371309%"),
    minWidth: wp("13.080168776371309%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.59493670886076%"),
    top: hp("5.4644808743169335%")
  },
  Text_375_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
