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
      <View style={styles.View_191_279}>
        <View style={styles.View_191_280}>
          <Text style={styles.Text_191_280}>Site Coordinator</Text>
        </View>
      </View>
      <View style={styles.View_191_281}>
        <View style={styles.View_191_282}>
          <Text style={styles.Text_191_282}>Security Assesment Report</Text>
        </View>
      </View>
      <View style={styles.View_191_283}>
        <View style={styles.View_191_284}>
          <Text style={styles.Text_191_284}>Desain SOP</Text>
        </View>
      </View>
      <View style={styles.View_191_285}>
        <View style={styles.View_191_286}>
          <Text style={styles.Text_191_286}>Security Self Audit Assement </Text>
        </View>
      </View>
      <View style={styles.View_191_287}>
        <View style={styles.View_191_288}>
          <View style={styles.View_191_289}>
            <Text style={styles.Text_191_289}>Controller</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_191_290}>
        <View style={styles.View_191_291}>
          <Text style={styles.Text_191_291}>Operational Visit</Text>
        </View>
      </View>
      <View style={styles.View_191_292}>
        <View style={styles.View_191_293}>
          <Text style={styles.Text_191_293}>Perfomance Management Review</Text>
        </View>
      </View>
      <View style={styles.View_191_294}>
        <View style={styles.View_191_295}>
          <View style={styles.View_191_296}>
            <Text style={styles.Text_191_296}>Additional Personal</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_191_297}>
        <View style={styles.View_191_298}>
          <Text style={styles.Text_191_298}>Reliever</Text>
        </View>
      </View>
      <View style={styles.View_191_299}>
        <View style={styles.View_191_300}>
          <Text style={styles.Text_191_300}>Training Reguler</Text>
        </View>
      </View>
      <View style={styles.View_191_301}>
        <View style={styles.View_191_302}>
          <Text style={styles.Text_191_302}>Optional Service</Text>
        </View>
      </View>
      <View style={styles.View_191_303}>
        <View style={styles.View_191_304}>
          <Text style={styles.Text_191_304}>Shelter Digital</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_191_279: {
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
  View_191_280: {
    width: wp("51.7948717948718%"),
    minWidth: wp("51.7948717948718%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.179487179487179%"),
    top: hp("5.303030303030303%")
  },
  Text_191_280: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_281: {
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
  View_191_282: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6923076923076925%"),
    top: hp("5.3030303030303045%")
  },
  Text_191_282: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_283: {
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
  View_191_284: {
    width: wp("37.43589743589744%"),
    minWidth: wp("37.43589743589744%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6923076923076925%"),
    top: hp("5.3030303030303045%")
  },
  Text_191_284: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_285: {
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
  View_191_286: {
    width: wp("58.46153846153847%"),
    minWidth: wp("58.46153846153847%"),
    minHeight: hp("12.121212121212121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6923076923076925%"),
    top: hp("2.2727272727272734%")
  },
  Text_191_286: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_287: {
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
  View_191_288: {
    width: wp("41.53846153846154%"),
    minWidth: wp("41.53846153846154%"),
    height: hp("13.636363636363635%"),
    minHeight: hp("13.636363636363635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.564102564102564%"),
    top: hp("1.5151515151515156%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_191_289: {
    width: wp("31.28205128205128%"),
    minWidth: wp("31.28205128205128%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.128205128205129%"),
    top: hp("3.787878787878796%")
  },
  Text_191_289: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_290: {
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
  View_191_291: {
    width: wp("52.820512820512825%"),
    minWidth: wp("52.820512820512825%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6923076923076925%"),
    top: hp("5.303030303030297%")
  },
  Text_191_291: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_292: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.86363636363636%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    overflow: "hidden"
  },
  View_191_293: {
    width: wp("85.12820512820512%"),
    minWidth: wp("85.12820512820512%"),
    minHeight: hp("12.121212121212121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6923076923076925%"),
    top: hp("2.2727272727272805%")
  },
  Text_191_293: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_294: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114.3939393939394%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_295: {
    width: wp("72.82051282051282%"),
    minWidth: wp("72.82051282051282%"),
    height: hp("13.636363636363635%"),
    minHeight: hp("13.636363636363635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.564102564102564%"),
    top: hp("1.5151515151515156%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_191_296: {
    width: wp("62.56410256410256%"),
    minWidth: wp("62.56410256410256%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.128205128205129%"),
    top: hp("3.787878787878782%")
  },
  Text_191_296: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_297: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("129.54545454545453%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_298: {
    width: wp("25.64102564102564%"),
    minWidth: wp("25.64102564102564%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6923076923076925%"),
    top: hp("5.303030303030312%")
  },
  Text_191_298: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_299: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("145.45454545454547%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_300: {
    width: wp("51.7948717948718%"),
    minWidth: wp("51.7948717948718%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6923076923076925%"),
    top: hp("5.303030303030283%")
  },
  Text_191_300: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_301: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("162.12121212121212%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_302: {
    width: wp("52.307692307692314%"),
    minWidth: wp("52.307692307692314%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6923076923076925%"),
    top: hp("5.303030303030312%")
  },
  Text_191_302: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_303: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("178.78787878787878%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_304: {
    width: wp("44.61538461538462%"),
    minWidth: wp("44.61538461538462%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6923076923076925%"),
    top: hp("5.303030303030312%")
  },
  Text_191_304: {
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
