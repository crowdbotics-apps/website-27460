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
      <View style={styles.View_191_338}>
        <View style={styles.View_191_339}>
          <View style={styles.View_191_340}>
            <Text style={styles.Text_191_340}>Site Coordinator</Text>
          </View>
        </View>
        <View style={styles.View_191_341}>
          <View style={styles.View_191_342}>
            <Text style={styles.Text_191_342}>Security Assesment Report</Text>
          </View>
        </View>
        <View style={styles.View_191_343}>
          <View style={styles.View_191_344}>
            <Text style={styles.Text_191_344}>Desain SOP</Text>
          </View>
        </View>
        <View style={styles.View_191_345}>
          <View style={styles.View_191_346}>
            <Text style={styles.Text_191_346}>
              Security Self Audit Assement{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_191_347}>
          <View style={styles.View_191_348}>
            <View style={styles.View_191_349}>
              <Text style={styles.Text_191_349}>Controller</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_191_350}>
          <View style={styles.View_191_351}>
            <Text style={styles.Text_191_351}>Operational Visit</Text>
          </View>
        </View>
        <View style={styles.View_191_352}>
          <View style={styles.View_191_353}>
            <Text style={styles.Text_191_353}>
              Perfomance Management Review
            </Text>
          </View>
        </View>
        <View style={styles.View_191_354}>
          <View style={styles.View_191_355}>
            <View style={styles.View_191_356}>
              <Text style={styles.Text_191_356}>Additional Personal</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_191_357}>
          <View style={styles.View_191_358}>
            <Text style={styles.Text_191_358}>Reliever</Text>
          </View>
        </View>
        <View style={styles.View_191_359}>
          <View style={styles.View_191_360}>
            <Text style={styles.Text_191_360}>Training Reguler</Text>
          </View>
        </View>
        <View style={styles.View_191_361}>
          <View style={styles.View_191_362}>
            <Text style={styles.Text_191_362}>Optional Service</Text>
          </View>
        </View>
        <View style={styles.View_191_363}>
          <View style={styles.View_191_364}>
            <Text style={styles.Text_191_364}>Shelter Digital</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_191_338: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_339: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
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
  View_191_340: {
    width: wp("48.095238095238095%"),
    minWidth: wp("48.095238095238095%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%"),
    top: hp("5.303030303030303%")
  },
  Text_191_340: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_341: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
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
  View_191_342: {
    width: wp("80.47619047619048%"),
    minWidth: wp("80.47619047619048%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.3030303030303045%")
  },
  Text_191_342: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_343: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
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
  View_191_344: {
    width: wp("34.76190476190476%"),
    minWidth: wp("34.76190476190476%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.3030303030303045%")
  },
  Text_191_344: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_345: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
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
  View_191_346: {
    width: wp("54.285714285714285%"),
    minWidth: wp("54.285714285714285%"),
    minHeight: hp("12.121212121212121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("2.2727272727272734%")
  },
  Text_191_346: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_347: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
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
  View_191_348: {
    width: wp("38.57142857142858%"),
    minWidth: wp("38.57142857142858%"),
    height: hp("13.636363636363635%"),
    minHeight: hp("13.636363636363635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3809523809523814%"),
    top: hp("1.5151515151515156%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_191_349: {
    width: wp("29.04761904761905%"),
    minWidth: wp("29.04761904761905%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.761904761904761%"),
    top: hp("3.787878787878796%")
  },
  Text_191_349: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_350: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
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
  View_191_351: {
    width: wp("49.047619047619044%"),
    minWidth: wp("49.047619047619044%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.303030303030297%")
  },
  Text_191_351: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_352: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.86363636363636%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_353: {
    width: wp("79.04761904761905%"),
    minWidth: wp("79.04761904761905%"),
    minHeight: hp("12.121212121212121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("2.2727272727272805%")
  },
  Text_191_353: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_354: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
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
  View_191_355: {
    width: wp("67.61904761904762%"),
    minWidth: wp("67.61904761904762%"),
    height: hp("13.636363636363635%"),
    minHeight: hp("13.636363636363635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3809523809523814%"),
    top: hp("1.5151515151515156%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_191_356: {
    width: wp("58.0952380952381%"),
    minWidth: wp("58.0952380952381%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.761904761904761%"),
    top: hp("3.787878787878782%")
  },
  Text_191_356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_357: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("129.54545454545453%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    overflow: "hidden"
  },
  View_191_358: {
    width: wp("23.809523809523807%"),
    minWidth: wp("23.809523809523807%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.303030303030312%")
  },
  Text_191_358: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_359: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
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
  View_191_360: {
    width: wp("48.095238095238095%"),
    minWidth: wp("48.095238095238095%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.303030303030283%")
  },
  Text_191_360: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_361: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
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
  View_191_362: {
    width: wp("48.57142857142857%"),
    minWidth: wp("48.57142857142857%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.303030303030312%")
  },
  Text_191_362: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_363: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
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
  View_191_364: {
    width: wp("41.42857142857143%"),
    minWidth: wp("41.42857142857143%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.303030303030312%")
  },
  Text_191_364: {
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
