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
      <View style={styles.View_167_321}>
        <View style={styles.View_167_322}>
          <View style={styles.View_167_323} />
          <View style={styles.View_167_324}>
            <Text style={styles.Text_167_324}>Sejarah Singkat </Text>
          </View>
          <View style={styles.View_167_325}>
            <Text style={styles.Text_167_325}>Manajemen</Text>
          </View>
          <View style={styles.View_167_326}>
            <Text style={styles.Text_167_326}>Visi, Misi &amp; Tujuan</Text>
          </View>
          <View style={styles.View_167_327}>
            <Text style={styles.Text_167_327}>Struktur Organisasi</Text>
          </View>
          <View style={styles.View_167_328}>
            <Text style={styles.Text_167_328}>Kegiatan Usaha</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3e0/dc59/7c3ff21c77816768173cb62814006ecb"
            }}
            style={styles.ImageBackground_167_329}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85d6/a40b/f6a7cf45e526dd149b222e1bf4fce8c0"
            }}
            style={styles.ImageBackground_167_330}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85d6/a40b/f6a7cf45e526dd149b222e1bf4fce8c0"
            }}
            style={styles.ImageBackground_167_331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85d6/a40b/f6a7cf45e526dd149b222e1bf4fce8c0"
            }}
            style={styles.ImageBackground_167_332}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85d6/a40b/f6a7cf45e526dd149b222e1bf4fce8c0"
          }}
          style={styles.ImageBackground_167_333}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_167_321: {
    width: wp("117.36842105263159%"),
    minWidth: wp("117.36842105263159%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_167_322: {
    width: wp("117.36842105263159%"),
    minWidth: wp("117.36842105263159%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_167_323: {
    width: wp("117.36842105263159%"),
    minWidth: wp("117.36842105263159%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.6499999761581421
  },
  View_167_324: {
    width: wp("66.57740944310238%"),
    minWidth: wp("66.57740944310238%"),
    minHeight: hp("9.356725376283107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.105263157894736%"),
    top: hp("5.829596412556054%")
  },
  Text_167_324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_325: {
    width: wp("50.79101160952919%"),
    minWidth: wp("50.79101160952919%"),
    minHeight: hp("9.356725376283107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.89473684210526%"),
    top: hp("25.56053811659193%")
  },
  Text_167_325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_326: {
    width: wp("77.55925228721216%"),
    minWidth: wp("77.55925228721216%"),
    minHeight: hp("9.356725376283107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.904656661184212%"),
    top: hp("45.61403556789518%")
  },
  Text_167_326: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_327: {
    width: wp("82.36380326120477%"),
    minWidth: wp("82.36380326120477%"),
    minHeight: hp("9.356725376283107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.904656661184212%"),
    top: hp("65.49707250210201%")
  },
  Text_167_327: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_328: {
    width: wp("67.26377386795846%"),
    minWidth: wp("67.26377386795846%"),
    minHeight: hp("9.356725376283107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.684210526315788%"),
    top: hp("84.79532147736826%")
  },
  Text_167_328: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_167_329: {
    width: wp("117.36842105263159%"),
    minWidth: wp("117.36842105263159%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.88306430423206%")
  },
  ImageBackground_167_330: {
    width: wp("117.36842105263159%"),
    minWidth: wp("117.36842105263159%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.350861827354265%")
  },
  ImageBackground_167_331: {
    width: wp("117.36842105263159%"),
    minWidth: wp("117.36842105263159%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.23392613158632%")
  },
  ImageBackground_167_332: {
    width: wp("117.36842105263159%"),
    minWidth: wp("117.36842105263159%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80.11696306579316%")
  },
  ImageBackground_167_333: {
    width: wp("117.36842105263159%"),
    minWidth: wp("117.36842105263159%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
