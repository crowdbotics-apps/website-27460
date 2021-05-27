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
      <View style={styles.View_375_76}>
        <View style={styles.View_375_77}>
          <Text style={styles.Text_375_77}>Satuan Pengamanan (Satpam)</Text>
        </View>
      </View>
      <View style={styles.View_375_78}>
        <View style={styles.View_375_79}>
          <Text style={styles.Text_375_79}>
            Pelatihan Satuan Pengamanan (Satpam)
          </Text>
        </View>
      </View>
      <View style={styles.View_375_80}>
        <View style={styles.View_375_81}>
          <Text style={styles.Text_375_81}>Pemborongan</Text>
        </View>
      </View>
      <View style={styles.View_375_82}>
        <View style={styles.View_375_83}>
          <Text style={styles.Text_375_83}>Pengamanan Digital</Text>
        </View>
      </View>
      <View style={styles.View_375_84}>
        <View style={styles.View_375_85}>
          <Text style={styles.Text_375_85}>Cleaning Service</Text>
        </View>
      </View>
      <View style={styles.View_375_86}>
        <View style={styles.View_375_87}>
          <Text style={styles.Text_375_87}>Lainnya</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_375_76: {
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
  View_375_77: {
    width: wp("51.89873417721519%"),
    minWidth: wp("51.89873417721519%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5400843881856545%"),
    top: hp("5.464480874316941%")
  },
  Text_375_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_375_78: {
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
  View_375_79: {
    width: wp("68.56540084388185%"),
    minWidth: wp("68.56540084388185%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.329113924050633%"),
    top: hp("5.46448087431694%")
  },
  Text_375_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_375_80: {
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
  View_375_81: {
    width: wp("23.839662447257385%"),
    minWidth: wp("23.839662447257385%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.59493670886076%"),
    top: hp("5.4644808743169335%")
  },
  Text_375_81: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_375_82: {
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
  View_375_83: {
    width: wp("34.177215189873415%"),
    minWidth: wp("34.177215189873415%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.383966244725738%"),
    top: hp("5.464480874316941%")
  },
  Text_375_83: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_375_84: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.66666666666666%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    overflow: "hidden"
  },
  View_375_85: {
    width: wp("28.059071729957807%"),
    minWidth: wp("28.059071729957807%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.59493670886076%"),
    top: hp("5.464480874316948%")
  },
  Text_375_85: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_375_86: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83.33333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_375_87: {
    width: wp("13.080168776371309%"),
    minWidth: wp("13.080168776371309%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.59493670886076%"),
    top: hp("5.4644808743169335%")
  },
  Text_375_87: {
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
