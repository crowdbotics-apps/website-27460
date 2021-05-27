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
      <View style={styles.View_150_6}>
        <Text style={styles.Text_150_6}>SPBU terdekat</Text>
      </View>
      <View style={styles.View_150_7}>
        <Text style={styles.Text_150_7}>Event &amp; Promo</Text>
      </View>
      <View style={styles.View_150_29}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ac0/88ca/afcd2435ee360e285c2ebeab5bbe4c83"
          }}
          style={styles.ImageBackground_150_30}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d152/0a2f/5df75b06071f5717e091aa57987c36ca"
          }}
          style={styles.ImageBackground_150_31}
        />
      </View>
      <View style={styles.View_150_32}>
        <Text style={styles.Text_150_32}>Produk lainnya</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6f4/24b9/4430fd78982519914ca4162eeae81878"
        }}
        style={styles.ImageBackground_150_33}
      />
      <View style={styles.View_150_34}>
        <View style={styles.View_150_35} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dabc/ec69/8e35ad6f335dfa986c60a8dc44c9d762"
          }}
          style={styles.ImageBackground_150_36}
        />
        <View style={styles.View_150_37}>
          <Text style={styles.Text_150_37}>Riwayat pembelian</Text>
        </View>
        <View style={styles.View_150_38}>
          <Text style={styles.Text_150_38}>
            Kamu dapat melihat grafik pembelian BBM kamu
          </Text>
        </View>
        <View style={styles.View_150_39} />
        <View style={styles.View_150_40}>
          <Text style={styles.Text_150_40}>Lihat grafik</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_150_6: {
    width: wp("38.34586466165413%"),
    minWidth: wp("38.34586466165413%"),
    minHeight: hp("3.275529865125241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0025062656641603%"),
    top: hp("25.240847784200387%")
  },
  Text_150_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_150_7: {
    width: wp("38.34586466165413%"),
    minWidth: wp("38.34586466165413%"),
    minHeight: hp("3.275529865125241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0025062656641603%"),
    top: hp("69.36416184971098%")
  },
  Text_150_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_150_29: {
    width: wp("98.99749373433583%"),
    minWidth: wp("98.99749373433583%"),
    height: hp("27.552986512524086%"),
    minHeight: hp("27.552986512524086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0025062656641603%"),
    top: hp("74.373795761079%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_150_30: {
    width: wp("90.72681704260651%"),
    minWidth: wp("90.72681704260651%"),
    height: hp("27.360308285163775%"),
    minHeight: hp("27.360308285163775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.19267822736031803%"),
    resizeMode: "cover"
  },
  ImageBackground_150_31: {
    width: wp("90.72681704260651%"),
    minWidth: wp("90.72681704260651%"),
    height: hp("26.778833760461822%"),
    minHeight: hp("26.778833760461822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.23308270676691%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_150_32: {
    width: wp("38.34586466165413%"),
    minWidth: wp("38.34586466165413%"),
    minHeight: hp("3.275529865125241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("103.85356454720616%")
  },
  Text_150_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_150_33: {
    width: wp("90.47619047619048%"),
    minWidth: wp("90.47619047619048%"),
    height: hp("29.672447013487474%"),
    minHeight: hp("29.672447013487474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5037593984962405%"),
    top: hp("110.01926782273603%"),
    resizeMode: "cover"
  },
  View_150_34: {
    width: wp("91.47869674185463%"),
    minWidth: wp("91.47869674185463%"),
    height: hp("21.001926782273603%"),
    minHeight: hp("21.001926782273603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.756892230576441%"),
    top: hp("0%")
  },
  View_150_35: {
    width: wp("91.47869674185463%"),
    minWidth: wp("91.47869674185463%"),
    height: hp("21.001926782273603%"),
    minHeight: hp("21.001926782273603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(227, 41, 54, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_150_36: {
    width: wp("36.59147869674185%"),
    minWidth: wp("36.59147869674185%"),
    height: hp("8.670520231213873%"),
    minHeight: hp("8.670520231213873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.13032581453634%"),
    top: hp("0.5780346820809248%")
  },
  View_150_37: {
    width: wp("42.606516290726816%"),
    minWidth: wp("42.606516290726816%"),
    minHeight: hp("4.431599229287091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.260651629072681%"),
    top: hp("0.9633911368015413%")
  },
  Text_150_37: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_150_38: {
    width: wp("47.86967418546366%"),
    minWidth: wp("47.86967418546366%"),
    minHeight: hp("5.394990366088632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.761904761904762%"),
    top: hp("10.404624277456648%")
  },
  Text_150_38: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_150_39: {
    width: wp("36.59147869674185%"),
    minWidth: wp("36.59147869674185%"),
    height: hp("4.624277456647398%"),
    minHeight: hp("4.624277456647398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.879699248120296%"),
    top: hp("12.138728323699421%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_150_40: {
    width: wp("18.045112781954884%"),
    minWidth: wp("18.045112781954884%"),
    minHeight: hp("3.0828516377649327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.40350877192982%"),
    top: hp("12.909441233140656%")
  },
  Text_150_40: {
    color: "rgba(227, 41, 54, 1)",
    fontSize: 11,
    fontWeight: "700",
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
