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
      <View style={styles.View_191_2}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("191_95"))
          }
        >
          <View style={styles.View_191_66}>
            <View style={styles.View_191_67}>
              <Text style={styles.Text_191_67}>Site Coordinator</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("191_125"))
          }
        >
          <View style={styles.View_191_68}>
            <View style={styles.View_191_69}>
              <Text style={styles.Text_191_69}>Security Assesment Report</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("191_155"))
          }
        >
          <View style={styles.View_191_70}>
            <View style={styles.View_191_71}>
              <Text style={styles.Text_191_71}>Desain SOP</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("191_185"))
          }
        >
          <View style={styles.View_191_74}>
            <View style={styles.View_191_75}>
              <Text style={styles.Text_191_75}>
                Security Self Audit Assement{" "}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("191_215"))
          }
        >
          <View style={styles.View_191_76}>
            <View style={styles.View_191_77}>
              <View style={styles.View_191_78}>
                <Text style={styles.Text_191_78}>Controller</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("191_245"))
          }
        >
          <View style={styles.View_191_79}>
            <View style={styles.View_191_80}>
              <Text style={styles.Text_191_80}>Operational Visit</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("191_275"))
          }
        >
          <View style={styles.View_191_81}>
            <View style={styles.View_191_82}>
              <Text style={styles.Text_191_82}>
                Perfomance Management Review
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("191_305"))
          }
        >
          <View style={styles.View_191_83}>
            <View style={styles.View_191_84}>
              <View style={styles.View_191_85}>
                <Text style={styles.Text_191_85}>Additional Personal</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("191_335"))
          }
        >
          <View style={styles.View_191_86}>
            <View style={styles.View_191_87}>
              <Text style={styles.Text_191_87}>Reliever</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("191_365"))
          }
        >
          <View style={styles.View_191_88}>
            <View style={styles.View_191_89}>
              <Text style={styles.Text_191_89}>Training Reguler</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("191_395"))
          }
        >
          <View style={styles.View_191_90}>
            <View style={styles.View_191_91}>
              <Text style={styles.Text_191_91}>Optional Service</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_191_92}>
          <View style={styles.View_191_93}>
            <Text style={styles.Text_191_93}>Shelter Digital</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_191_2: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
    height: hp("99.62121212121212%"),
    minHeight: hp("99.62121212121212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("0.3787878787878788%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_66: {
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
  View_191_67: {
    width: wp("48.095238095238095%"),
    minWidth: wp("48.095238095238095%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%"),
    top: hp("5.303030303030303%")
  },
  Text_191_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_68: {
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
  View_191_69: {
    width: wp("80.47619047619048%"),
    minWidth: wp("80.47619047619048%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.3030303030303045%")
  },
  Text_191_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_70: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.333333333333336%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_71: {
    width: wp("34.76190476190476%"),
    minWidth: wp("34.76190476190476%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.3030303030303045%")
  },
  Text_191_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_74: {
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
  View_191_75: {
    width: wp("54.285714285714285%"),
    minWidth: wp("54.285714285714285%"),
    minHeight: hp("12.121212121212121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("2.2727272727272734%")
  },
  Text_191_75: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_76: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.66666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_77: {
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
  View_191_78: {
    width: wp("29.04761904761905%"),
    minWidth: wp("29.04761904761905%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.761904761904761%"),
    top: hp("3.787878787878782%")
  },
  Text_191_78: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_79: {
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
  View_191_80: {
    width: wp("49.047619047619044%"),
    minWidth: wp("49.047619047619044%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.303030303030297%")
  },
  Text_191_80: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_81: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.86363636363637%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_82: {
    width: wp("79.04761904761905%"),
    minWidth: wp("79.04761904761905%"),
    minHeight: hp("12.121212121212121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("2.2727272727272663%")
  },
  Text_191_82: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_83: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114.39393939393939%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_84: {
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
  View_191_85: {
    width: wp("58.0952380952381%"),
    minWidth: wp("58.0952380952381%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.761904761904761%"),
    top: hp("3.787878787878782%")
  },
  Text_191_85: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_86: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("129.54545454545456%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_87: {
    width: wp("23.809523809523807%"),
    minWidth: wp("23.809523809523807%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.303030303030283%")
  },
  Text_191_87: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_88: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("145.45454545454544%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_89: {
    width: wp("48.095238095238095%"),
    minWidth: wp("48.095238095238095%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.30303030303034%")
  },
  Text_191_89: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_90: {
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
  View_191_91: {
    width: wp("48.57142857142857%"),
    minWidth: wp("48.57142857142857%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.303030303030312%")
  },
  Text_191_91: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_92: {
    width: wp("92.85714285714286%"),
    minWidth: wp("92.85714285714286%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("178.7878787878788%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_191_93: {
    width: wp("41.42857142857143%"),
    minWidth: wp("41.42857142857143%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("5.303030303030283%")
  },
  Text_191_93: {
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
