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
      <View style={styles.View_220_143}>
        <View style={styles.View_220_144}>
          <Text style={styles.Text_220_144}>Tentang Kami</Text>
        </View>
      </View>
      <View style={styles.View_220_145}>
        <View style={styles.View_220_146}>
          <Text style={styles.Text_220_146}>Manajemen</Text>
        </View>
      </View>
      <View style={styles.View_220_147}>
        <View style={styles.View_220_148}>
          <Text style={styles.Text_220_148}>Struktur Organisasi</Text>
        </View>
      </View>
      <View style={styles.View_220_149}>
        <View style={styles.View_220_150}>
          <Text style={styles.Text_220_150}>Milestone</Text>
        </View>
      </View>
      <View style={styles.View_220_151}>
        <View style={styles.View_220_152}>
          <Text style={styles.Text_220_152}>Visi, Misi &amp; Tujuan</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_220_143: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_220_144: {
    width: wp("44.61538461538462%"),
    minWidth: wp("44.61538461538462%"),
    minHeight: hp("7.2727272727272725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.256410256410255%"),
    top: hp("6.363636363636363%")
  },
  Text_220_144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_145: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_220_146: {
    width: wp("37.94871794871795%"),
    minWidth: wp("37.94871794871795%"),
    minHeight: hp("7.2727272727272725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.743589743589745%"),
    top: hp("6.36363636363636%")
  },
  Text_220_146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_147: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_220_148: {
    width: wp("61.53846153846154%"),
    minWidth: wp("61.53846153846154%"),
    minHeight: hp("7.2727272727272725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.256410256410255%"),
    top: hp("6.363636363636374%")
  },
  Text_220_148: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_149: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    overflow: "hidden"
  },
  View_220_150: {
    width: wp("31.794871794871792%"),
    minWidth: wp("31.794871794871792%"),
    minHeight: hp("7.2727272727272725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.256410256410255%"),
    top: hp("6.36363636363636%")
  },
  Text_220_150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_151: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_220_152: {
    width: wp("57.948717948717956%"),
    minWidth: wp("57.948717948717956%"),
    minHeight: hp("7.2727272727272725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.256410256410255%"),
    top: hp("6.36363636363636%")
  },
  Text_220_152: {
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
