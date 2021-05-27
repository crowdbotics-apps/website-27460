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
      <View style={styles.View_88_4} />
      <View style={styles.View_88_5}>
        <Text style={styles.Text_88_5}>Bus</Text>
      </View>
      <View style={styles.View_88_6}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/327d/b922/fefcd79c1b6f4bc1ac8dfa78d2ec05fd"
          }}
          style={styles.ImageBackground_88_7}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5911/e488/4caad4d4a3124b178d27ca00ddfdacaf"
        }}
        style={styles.ImageBackground_88_18}
      />
      <View style={styles.View_88_22} />
      <View style={styles.View_88_23} />
      <View style={styles.View_88_24}>
        <View style={styles.View_88_25} />
        <View style={styles.View_88_26}>
          <Text style={styles.Text_88_26}>Selengkapnya</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
          }}
          style={styles.ImageBackground_88_27}
        />
      </View>
      <View style={styles.View_88_30} />
      <View style={styles.View_88_31}>
        <View style={styles.View_88_32}>
          <Text style={styles.Text_88_32}>Contact us</Text>
        </View>
        <View style={styles.View_88_33}>
          <View style={styles.View_88_34}>
            <View style={styles.View_88_35}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4daf/8f5b/74d0123e9f3fa8af120bb7b6ab0e3df5"
                }}
                style={styles.ImageBackground_88_36}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4aaf/bfb9/fe37c08ead5a72f8078c6776ccee3690"
          }}
          style={styles.ImageBackground_88_41}
        />
      </View>
      <View style={styles.View_88_42} />
      <View style={styles.View_88_46}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8437/7632/afb2bd31f93bd029d201bd055e617468"
          }}
          style={styles.ImageBackground_88_47}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d5/0368/0eff6fc75931d0d77716b6fc9af38485"
          }}
          style={styles.ImageBackground_88_49}
        />
        <View style={styles.View_88_51}>
          <View style={styles.View_88_52} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eeca/a031/38f0b0d8d94815a6f7719c10d38609c4"
            }}
            style={styles.ImageBackground_88_53}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5837/1c2e/a9153adac1d37af38a59fdfb8fd73a5b"
            }}
            style={styles.ImageBackground_88_54}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93ea/01d6/816793a846cd8495076b572c07e18fae"
          }}
          style={styles.ImageBackground_88_55}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beec/9652/0e847db693027e73c509c3d6da637b59"
          }}
          style={styles.ImageBackground_88_59}
        />
      </View>
      <View style={styles.View_88_62} />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("191_36"))
        }
      >
        <View style={styles.View_88_63}>
          <View style={styles.View_88_64}>
            <Text style={styles.Text_88_64}>Layanan Kami </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33c0/509b/3256009b5ab7497a8fc0d91e8a3a444a"
            }}
            style={styles.ImageBackground_88_65}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_88_66}>
        <View style={styles.View_88_67}>
          <Text style={styles.Text_88_67}>Karir</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_69"))
        }
      >
        <View style={styles.View_158_0}>
          <View style={styles.View_161_29}>
            <View style={styles.View_88_72}>
              <Text style={styles.Text_88_72}>Investasi</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/c3f0/ef3eb252067614865e8264d3b1b439e1"
              }}
              style={styles.ImageBackground_88_73}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_8"))
        }
      >
        <View style={styles.View_211_4}>
          <View style={styles.View_211_5}>
            <View style={styles.View_211_6}>
              <Text style={styles.Text_211_6}>PELATIHAN</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/c3f0/ef3eb252067614865e8264d3b1b439e1"
              }}
              style={styles.ImageBackground_211_7}
            />
          </View>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a992/9126/d51233806dc98d5de24b022d9ec984fc"
        }}
        style={styles.ImageBackground_88_74}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_125"))
        }
      >
        <View style={styles.View_88_76}>
          <Text style={styles.Text_88_76}>Artikel</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_802"))
        }
      >
        <View style={styles.View_167_318}>
          <Text style={styles.Text_167_318}>contact</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("173_2"))
        }
      >
        <View style={styles.View_88_78}>
          <View style={styles.View_88_79}>
            <Text style={styles.Text_88_79}>Profil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
            }}
            style={styles.ImageBackground_88_80}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_88_81} />
      <View style={styles.View_161_33}>
        <View style={styles.View_88_82} />
        <View style={styles.View_146_14}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d40/cf8b/1e423a1d2ed75428500e7fb3cd800b18"
            }}
            style={styles.ImageBackground_88_83}
          />
          <View style={styles.View_88_84}>
            <Text style={styles.Text_88_84}>About Us</Text>
          </View>
          <View style={styles.View_88_85}>
            <Text style={styles.Text_88_85}>Gada Utama</Text>
          </View>
          <View style={styles.View_88_86}>
            <Text style={styles.Text_88_86}>Gada Madya</Text>
          </View>
          <View style={styles.View_88_87}>
            <Text style={styles.Text_88_87}>Gada Pratama</Text>
          </View>
          <View style={styles.View_88_88}>
            <Text style={styles.Text_88_88}>Our Service</Text>
          </View>
          <View style={styles.View_88_89}>
            <Text style={styles.Text_88_89}>Our Partner</Text>
          </View>
          <View style={styles.View_88_90}>
            <Text style={styles.Text_88_90}>Our Vision &amp; Mission</Text>
          </View>
          <View style={styles.View_88_91}>
            <Text style={styles.Text_88_91}>Pelatihan</Text>
          </View>
          <View style={styles.View_88_92}>
            <Text style={styles.Text_88_92}>Follow Us :</Text>
          </View>
          <View style={styles.View_88_93}>
            <Text style={styles.Text_88_93}>Suscribe </Text>
          </View>
          <View style={styles.View_88_94}>
            <Text style={styles.Text_88_94}>Lowongan Kerja</Text>
          </View>
          <View style={styles.View_88_95}>
            <Text style={styles.Text_88_95}>Tips &amp; News</Text>
          </View>
          <View style={styles.View_88_96}>
            <Text style={styles.Text_88_96}>Contact Us</Text>
          </View>
          <View style={styles.View_88_97}>
            <Text style={styles.Text_88_97}>
              Kepercayaan yang telah diberikan customer kepada kami merupakan
              komitmen bagi kami yang wajib dijalankan dengan integritas,
              kreatifitas dan kerja sama yang merupakan pedoman kami dalam
              menjalankan bisnis ini.
            </Text>
          </View>
          <View style={styles.View_88_98}>
            <Text style={styles.Text_88_98}>
              Head Office : JL. Semampir Selatan V A NO.18 Surabaya 60119
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_88_99}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_88_100}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_88_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df61/ace3/bf82e3652bf326b512e8925e929670d6"
            }}
            style={styles.ImageBackground_88_102}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_88_106}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_88_107}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_88_108}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_88_109}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e354/3c03/f5c08e580aa26655282d3ef27b8d5cad"
            }}
            style={styles.ImageBackground_88_110}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c7b/950a/9f7b792573bb66294649e70ac743332d"
            }}
            style={styles.ImageBackground_88_111}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a09/8813/fb8b4de80808c5b29a60d270849c2af6"
            }}
            style={styles.ImageBackground_88_116}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d52/69b3/d56b63754ba82a2aaac61bf1432e337b"
            }}
            style={styles.ImageBackground_88_120}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dea/5d57/396ef57f766f21f878be1059a2afe8ae"
            }}
            style={styles.ImageBackground_88_122}
          />
          <View style={styles.View_88_125} />
          <View style={styles.View_88_126}>
            <Text style={styles.Text_88_126}>email</Text>
          </View>
          <View style={styles.View_88_127} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdc2/6cf6/9c7d3ba34b589d9e5bca0695301915b3"
            }}
            style={styles.ImageBackground_88_128}
          />
        </View>
      </View>
      <View style={styles.View_88_130}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9956/4743/9690068ff5d4da022d77f7c79f63fa63"
          }}
          style={styles.ImageBackground_88_131}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3100/fe51/34a3e6a8fdeebd9d96c00309d8326973"
          }}
          style={styles.ImageBackground_88_132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d282/b45e/900c4a8fec3bce6a2fc7a8415bcb8204"
          }}
          style={styles.ImageBackground_88_133}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65ce/77ac/8d85affd061f383f8461b69055ad43b6"
          }}
          style={styles.ImageBackground_88_134}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9591/7823/df60a2cc13374ea5e14a94e8d3700889"
          }}
          style={styles.ImageBackground_88_135}
        />
      </View>
      <View style={styles.View_88_136}>
        <Text style={styles.Text_88_136}>Our Client</Text>
      </View>
      <View style={styles.View_88_137}>
        <Text style={styles.Text_88_137}>
          Lebih dari 400+ pelanggan di Indonesia{" "}
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e0f/ee12/4a0d35b88fae71e1a6d71dddead6299a"
        }}
        style={styles.ImageBackground_88_243}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/68d8/50d1cf2831aa3420a696872a80bffb0f"
        }}
        style={styles.ImageBackground_88_244}
      />
      <View style={styles.View_88_246}>
        <Text style={styles.Text_88_246}>ID</Text>
      </View>
      <View style={styles.View_88_272}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97c5/7d78/d5a74c6e91e5680656066becbaa8b980"
          }}
          style={styles.ImageBackground_88_273}
        />
      </View>
      <View style={styles.View_88_369}>
        <View style={styles.View_88_370}>
          <Text style={styles.Text_88_370}>Profil</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
          }}
          style={styles.ImageBackground_88_371}
        />
      </View>
      <View style={styles.View_88_373}>
        <Text style={styles.Text_88_373}>WE Provide Best Service</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d40/cf8b/1e423a1d2ed75428500e7fb3cd800b18"
        }}
        style={styles.ImageBackground_88_421}
      />
      <View style={styles.View_147_0} />
      <View style={styles.View_147_1}>
        <Text style={styles.Text_147_1}>Lastest News</Text>
      </View>
      <View style={styles.View_162_8}>
        <Text style={styles.Text_162_8}>UPDATE EVENTS</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70da/5fe6/a68b4cd8875d8bf56abea204220da83b"
        }}
        style={styles.ImageBackground_147_2}
      />
      <View style={styles.View_161_4}>
        <Text style={styles.Text_161_4}>
          Apa itu Agile Leadership? Agile Leadership adalah gaya manajemen yang
          melibatkan penerapan prinsip pengembangan software dengan metode
          tangkas (Agile Software Development) dalam menjalankan sebuah tim.
        </Text>
      </View>
      <View style={styles.View_161_16}>
        <Text style={styles.Text_161_16}>Penutupan Gada Pratama</Text>
      </View>
      <View style={styles.View_161_22}>
        <Text style={styles.Text_161_22}>Pembukaan Gada Madya</Text>
      </View>
      <View style={styles.View_161_23}>
        <Text style={styles.Text_161_23}>March 18, 2021</Text>
      </View>
      <View style={styles.View_161_24}>
        <Text style={styles.Text_161_24}>March 3, 2021</Text>
      </View>
      <View style={styles.View_161_25}>
        <Text style={styles.Text_161_25}>March 1, 2021</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c02/ba9d/83c1dc6c3715ce0f1704f4d44fc54138"
        }}
        style={styles.ImageBackground_147_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5589/29e9/76c43e3e57529640c8040f895f67670d"
        }}
        style={styles.ImageBackground_147_4}
      />
      <View style={styles.View_150_8}>
        <View style={styles.View_150_2} />
        <View style={styles.View_166_1} />
        <View style={styles.View_166_2} />
        <View style={styles.View_166_3}>
          <Text style={styles.Text_166_3}>Site Coordiantor</Text>
        </View>
        <View style={styles.View_166_5279}>
          <Text style={styles.Text_166_5279}>Security Assessment Report</Text>
        </View>
        <View style={styles.View_166_5281}>
          <Text style={styles.Text_166_5281}>Security Assessment Report</Text>
        </View>
        <View style={styles.View_166_5258}>
          <Text style={styles.Text_166_5258}>
            Penanggung Jawab Penuh System Pengamanan Perusahaan
          </Text>
        </View>
        <View style={styles.View_166_5280}>
          <Text style={styles.Text_166_5280}>
            Survey Analisa Kebutuhan dan analisa system pengamanan
          </Text>
        </View>
        <View style={styles.View_166_5282}>
          <Text style={styles.Text_166_5282}>
            Survey Analisa Kebutuhan dan analisa system pengamanan
          </Text>
        </View>
        <View style={styles.View_167_2} />
        <View style={styles.View_167_3} />
        <View style={styles.View_167_144} />
        <View style={styles.View_167_5}>
          <Text style={styles.Text_167_5}>Security Self Audit Assessment </Text>
        </View>
        <View style={styles.View_167_6}>
          <Text style={styles.Text_167_6}>Controller</Text>
        </View>
        <View style={styles.View_167_7}>
          <Text style={styles.Text_167_7}>Security Assessment Report</Text>
        </View>
        <View style={styles.View_167_8}>
          <Text style={styles.Text_167_8}>
            Evaluasi, Penilaian Perbakan terhadap Penerapan SOP{" "}
          </Text>
        </View>
        <View style={styles.View_167_9}>
          <Text style={styles.Text_167_9}>Happy Call &amp; Control Visit</Text>
        </View>
        <View style={styles.View_167_10}>
          <Text style={styles.Text_167_10}>
            Survey Analisa Kebutuhan dan analisa system pengamanan
          </Text>
        </View>
        <View style={styles.View_167_160}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c93/3bf4/28b71713e14abd29d569895baf50da8a"
            }}
            style={styles.ImageBackground_167_148}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85b3/f3cb/2a9fc375fd23e5ebe76d6dcf624ecaae"
            }}
            style={styles.ImageBackground_166_276}
          />
        </View>
        <View style={styles.View_167_162}>
          <View style={styles.View_167_161}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c93/3bf4/28b71713e14abd29d569895baf50da8a"
              }}
              style={styles.ImageBackground_166_5291}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f00/aeca/408085ff3b086d7e7e336a027fa2812f"
              }}
              style={styles.ImageBackground_166_5261}
            />
          </View>
        </View>
        <View style={styles.View_167_164}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c93/3bf4/28b71713e14abd29d569895baf50da8a"
            }}
            style={styles.ImageBackground_166_5292}
          />
          <View style={styles.View_167_145}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d20d/4641/b9a6e544fc96a4ed79c94ea4862ba195"
              }}
              style={styles.ImageBackground_167_143}
            />
            <View style={styles.View_167_43}>
              <View style={styles.View_167_44}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b459/d9b4/f10f5389ea2036719abeb514ae31286f"
                  }}
                  style={styles.ImageBackground_167_45}
                />
              </View>
              <View style={styles.View_167_47}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0a9/9e2b/88029414204ed85c567d92baa4b3e073"
                  }}
                  style={styles.ImageBackground_167_48}
                />
              </View>
              <View style={styles.View_167_50}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0a9/9e2b/88029414204ed85c567d92baa4b3e073"
                  }}
                  style={styles.ImageBackground_167_51}
                />
              </View>
              <View style={styles.View_167_53}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cef6/eedd/4bd699a5c71307ff285099efefc452ae"
                  }}
                  style={styles.ImageBackground_167_54}
                />
              </View>
              <View style={styles.View_167_56}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4739/187d/b022e26e2f5f41a87963b30ec564dad9"
                  }}
                  style={styles.ImageBackground_167_57}
                />
              </View>
              <View style={styles.View_167_59}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4739/187d/b022e26e2f5f41a87963b30ec564dad9"
                  }}
                  style={styles.ImageBackground_167_60}
                />
              </View>
              <View style={styles.View_167_62}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4739/187d/b022e26e2f5f41a87963b30ec564dad9"
                  }}
                  style={styles.ImageBackground_167_63}
                />
              </View>
              <View style={styles.View_167_65}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4739/187d/b022e26e2f5f41a87963b30ec564dad9"
                  }}
                  style={styles.ImageBackground_167_66}
                />
              </View>
              <View style={styles.View_167_68}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4739/187d/b022e26e2f5f41a87963b30ec564dad9"
                  }}
                  style={styles.ImageBackground_167_69}
                />
              </View>
              <View style={styles.View_167_71}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4739/187d/b022e26e2f5f41a87963b30ec564dad9"
                  }}
                  style={styles.ImageBackground_167_72}
                />
              </View>
              <View style={styles.View_167_74}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4739/187d/b022e26e2f5f41a87963b30ec564dad9"
                  }}
                  style={styles.ImageBackground_167_75}
                />
              </View>
              <View style={styles.View_167_77}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4739/187d/b022e26e2f5f41a87963b30ec564dad9"
                  }}
                  style={styles.ImageBackground_167_78}
                />
              </View>
              <View style={styles.View_167_80}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4739/187d/b022e26e2f5f41a87963b30ec564dad9"
                  }}
                  style={styles.ImageBackground_167_81}
                />
              </View>
              <View style={styles.View_167_83}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4ae/6c26/bd4412d8432fe880b0eec09748ad873d"
                  }}
                  style={styles.ImageBackground_167_84}
                />
              </View>
              <View style={styles.View_167_86}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/861d/c063/925a87378057c884c34945fbec2cab70"
                  }}
                  style={styles.ImageBackground_167_87}
                />
              </View>
              <View style={styles.View_167_89}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2b7/7edb/b63d8b7868d3fccfedd218e7d09cf9d3"
                  }}
                  style={styles.ImageBackground_167_90}
                />
              </View>
              <View style={styles.View_167_92}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06d4/c546/f9b87c867bc80316faea4c90428c505f"
                  }}
                  style={styles.ImageBackground_167_93}
                />
              </View>
              <View style={styles.View_167_95}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9703/62f7/4b57a7d1b86b5792d853095b039c4da8"
                  }}
                  style={styles.ImageBackground_167_96}
                />
              </View>
              <View style={styles.View_167_98}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d30/5ba0/5d5f33043646ea25c52f3f62258722e6"
                  }}
                  style={styles.ImageBackground_167_99}
                />
              </View>
              <View style={styles.View_167_101}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1ac/ad9e/1c4115c7a1f755d002ff5256d81fb7dc"
                  }}
                  style={styles.ImageBackground_167_102}
                />
              </View>
              <View style={styles.View_167_104}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42e9/c38d/2ad69221e616167a85ac49b1d0e51672"
                  }}
                  style={styles.ImageBackground_167_105}
                />
              </View>
              <View style={styles.View_167_107}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4030/d0fd/3d90c7486228b408d351f61ca0d73857"
                  }}
                  style={styles.ImageBackground_167_108}
                />
              </View>
              <View style={styles.View_167_110}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f537/8df7/ade25c56d32de57d0625fd42c8d1e05a"
                  }}
                  style={styles.ImageBackground_167_111}
                />
              </View>
              <View style={styles.View_167_113}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b70/5ca9/7795ab9199d2773630aa7710d6d1ce7c"
                  }}
                  style={styles.ImageBackground_167_114}
                />
              </View>
              <View style={styles.View_167_116}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19ca/0b49/b486fa45ed263b69291a3e647f099cf2"
                  }}
                  style={styles.ImageBackground_167_117}
                />
              </View>
              <View style={styles.View_167_119}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4739/187d/b022e26e2f5f41a87963b30ec564dad9"
                  }}
                  style={styles.ImageBackground_167_120}
                />
              </View>
              <View style={styles.View_167_122}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a71a/ef8e/c4dff458c665cd25dd0902e670c346c3"
                  }}
                  style={styles.ImageBackground_167_123}
                />
              </View>
              <View style={styles.View_167_125}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9f9/48ad/c3121b31299dac745d1b465e70c73032"
                  }}
                  style={styles.ImageBackground_167_126}
                />
              </View>
              <View style={styles.View_167_128}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e324/2242/3f24aee180212b9d7ccf2ecef260704c"
                  }}
                  style={styles.ImageBackground_167_129}
                />
              </View>
              <View style={styles.View_167_131}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c04f/f5ab/9667b6325eff45649e43752aeaa2ae77"
                  }}
                  style={styles.ImageBackground_167_132}
                />
              </View>
              <View style={styles.View_167_134}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c02f/6128/9768af731129923dde1ec27e78d3736d"
                  }}
                  style={styles.ImageBackground_167_135}
                />
              </View>
              <View style={styles.View_167_137}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/629b/09b6/0a8cb2980c3b7cebdf65bca28355e31e"
                  }}
                  style={styles.ImageBackground_167_138}
                />
              </View>
              <View style={styles.View_167_140}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6e3/8b3a/fc3d30f1bad734dbf05cd2357b026393"
                  }}
                  style={styles.ImageBackground_167_141}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_166_5293}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad2c/1c07/604594e3ee077803fafbbf0921867d5f"
              }}
              style={styles.ImageBackground_166_5283}
            />
          </View>
        </View>
        <View style={styles.View_167_169}>
          <View style={styles.View_167_168}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c93/3bf4/28b71713e14abd29d569895baf50da8a"
              }}
              style={styles.ImageBackground_167_20}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cbc/8318/cc134e6f638b6c69d7c7608acdf4b943"
              }}
              style={styles.ImageBackground_167_11}
            />
          </View>
        </View>
        <View style={styles.View_167_170}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c93/3bf4/28b71713e14abd29d569895baf50da8a"
            }}
            style={styles.ImageBackground_167_42}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b9c/cc7f/a7d327a12e1b0047caa42b3a020fb271"
            }}
            style={styles.ImageBackground_167_22}
          />
        </View>
        <View style={styles.View_167_288}>
          <View style={styles.View_167_287}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/698c/a05a/815ddeb867e6c4e0e3833e9d99dda77e"
              }}
              style={styles.ImageBackground_167_286}
            />
            <View style={styles.View_167_171}>
              <View style={styles.View_167_172}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec9/977f/397144e25d1da62714e7fcd7f527a3bd"
                  }}
                  style={styles.ImageBackground_167_173}
                />
              </View>
              <View style={styles.View_167_175}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec9/977f/397144e25d1da62714e7fcd7f527a3bd"
                  }}
                  style={styles.ImageBackground_167_176}
                />
              </View>
              <View style={styles.View_167_178}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec9/977f/397144e25d1da62714e7fcd7f527a3bd"
                  }}
                  style={styles.ImageBackground_167_179}
                />
              </View>
              <View style={styles.View_167_181}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2f1/91bd/a41d4364480979c4971a30ef329273ae"
                  }}
                  style={styles.ImageBackground_167_182}
                />
              </View>
              <View style={styles.View_167_184}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dae9/b565/a77ea108f0b739f50c8836c5011c48f3"
                  }}
                  style={styles.ImageBackground_167_185}
                />
              </View>
              <View style={styles.View_167_187}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dae9/b565/a77ea108f0b739f50c8836c5011c48f3"
                  }}
                  style={styles.ImageBackground_167_188}
                />
              </View>
              <View style={styles.View_167_190}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dae9/b565/a77ea108f0b739f50c8836c5011c48f3"
                  }}
                  style={styles.ImageBackground_167_191}
                />
              </View>
              <View style={styles.View_167_193}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dae9/b565/a77ea108f0b739f50c8836c5011c48f3"
                  }}
                  style={styles.ImageBackground_167_194}
                />
              </View>
              <View style={styles.View_167_196}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dae9/b565/a77ea108f0b739f50c8836c5011c48f3"
                  }}
                  style={styles.ImageBackground_167_197}
                />
              </View>
              <View style={styles.View_167_199}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dae9/b565/a77ea108f0b739f50c8836c5011c48f3"
                  }}
                  style={styles.ImageBackground_167_200}
                />
              </View>
              <View style={styles.View_167_202}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dae9/b565/a77ea108f0b739f50c8836c5011c48f3"
                  }}
                  style={styles.ImageBackground_167_203}
                />
              </View>
              <View style={styles.View_167_205}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dae9/b565/a77ea108f0b739f50c8836c5011c48f3"
                  }}
                  style={styles.ImageBackground_167_206}
                />
              </View>
              <View style={styles.View_167_208}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dae9/b565/a77ea108f0b739f50c8836c5011c48f3"
                  }}
                  style={styles.ImageBackground_167_209}
                />
              </View>
              <View style={styles.View_167_211}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dcb/5b5a/6bb4ccde0e4a69ba22f89069688c96a4"
                  }}
                  style={styles.ImageBackground_167_212}
                />
              </View>
              <View style={styles.View_167_214}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fad/af5d/a8db73d6bd7c7b1664c83683a2838711"
                  }}
                  style={styles.ImageBackground_167_215}
                />
              </View>
              <View style={styles.View_167_217}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8269/193e/b2ce9616b11299ae91cc0e82964492f9"
                  }}
                  style={styles.ImageBackground_167_218}
                />
              </View>
              <View style={styles.View_167_220}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5c6/e7f3/3d4ba92c72442767bbc66e5666c84957"
                  }}
                  style={styles.ImageBackground_167_221}
                />
              </View>
              <View style={styles.View_167_223}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2912/eb12/ee83df66ebcf62f0eb145d3c658e9a9e"
                  }}
                  style={styles.ImageBackground_167_224}
                />
              </View>
              <View style={styles.View_167_226}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e682/2268/75bbef6261135d6d5df33b7b72a295a4"
                  }}
                  style={styles.ImageBackground_167_227}
                />
              </View>
              <View style={styles.View_167_229}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cd6/0e5b/5ab8097418f151b357eaf304cd0ffeb5"
                  }}
                  style={styles.ImageBackground_167_230}
                />
              </View>
              <View style={styles.View_167_232}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e497/d87a/bfbf37b3cc3293ff1550f5d1f217425b"
                  }}
                  style={styles.ImageBackground_167_233}
                />
              </View>
              <View style={styles.View_167_235}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2323/5676/7ac889fda9ecc8e9e71b150f5a185ada"
                  }}
                  style={styles.ImageBackground_167_236}
                />
              </View>
              <View style={styles.View_167_238}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18b4/3081/1c015f419d89672b3002b4cd486980c8"
                  }}
                  style={styles.ImageBackground_167_239}
                />
              </View>
              <View style={styles.View_167_241}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f940/3ca3/0c9b7cc747fbd27dd046b0064c1ea9bc"
                  }}
                  style={styles.ImageBackground_167_242}
                />
              </View>
              <View style={styles.View_167_244}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca61/2bc0/8244e638e9ab2354ca0eec13ce224b38"
                  }}
                  style={styles.ImageBackground_167_245}
                />
              </View>
              <View style={styles.View_167_247}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ed/33e8/a15c13c18b706c8b4504e6da436d7f70"
                  }}
                  style={styles.ImageBackground_167_248}
                />
              </View>
              <View style={styles.View_167_250}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84a9/53ef/ad35392e737e2872c40a67410c3a8202"
                  }}
                  style={styles.ImageBackground_167_251}
                />
              </View>
              <View style={styles.View_167_253}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ac/30e0/b273fc927f0be51dafd1abc414b87ad4"
                  }}
                  style={styles.ImageBackground_167_254}
                />
              </View>
              <View style={styles.View_167_256}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bac9/fc26/3f0e4179b1e2ef73ae76f12f94654c7b"
                  }}
                  style={styles.ImageBackground_167_257}
                />
              </View>
              <View style={styles.View_167_259}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4136/9b50/89ea3b225a841f4bb7467bf9b5499703"
                  }}
                  style={styles.ImageBackground_167_260}
                />
              </View>
              <View style={styles.View_167_262}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/771f/405b/320a9960ad3355147ffecc4b1b411800"
                  }}
                  style={styles.ImageBackground_167_263}
                />
              </View>
              <View style={styles.View_167_265}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86bc/ed56/533f63f5141db8c67c6b401146f41463"
                  }}
                  style={styles.ImageBackground_167_266}
                />
              </View>
              <View style={styles.View_167_268}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37c1/74b8/399d6298675a06e3f9850f27f88570f4"
                  }}
                  style={styles.ImageBackground_167_269}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_161_12} />
      <View style={styles.View_161_17} />
      <View style={styles.View_161_20} />
      <View style={styles.View_161_13}>
        <Text style={styles.Text_161_13}>Read More</Text>
      </View>
      <View style={styles.View_161_18}>
        <Text style={styles.Text_161_18}>Read More</Text>
      </View>
      <View style={styles.View_161_21}>
        <Text style={styles.Text_161_21}>Read More</Text>
      </View>
      <View style={styles.View_161_15}>
        <Text style={styles.Text_161_15}>
          Pada tanggal 2 Maret 2021, Gada Pratama Angkatan 42 telah resmi
          ditutup. Sebanyak 126 orang siswa dinyatakan lulus dari pelatihan
          selama 12 hari ini, dan meraih sertifikasi Gada Pratama dari Polda
          Jawa Timur.{" "}
        </Text>
      </View>
      <View style={styles.View_161_19}>
        <Text style={styles.Text_161_19}>
          Pada tanggal 1 Maret 2021, Shelter Nusantara mengadakan pembukaan
          Pelatihan Gada Madya angkatan ke 6. Pelatihan lanjutan ini berlangsung
          selama kurang lebih 7 hari, dengan peserta sejumlah 54 orang.{" "}
        </Text>
      </View>
      <View style={styles.View_162_53}>
        <View style={styles.View_162_26}>
          <Text style={styles.Text_162_26}>Pelatihan gada utama</Text>
        </View>
        <View style={styles.View_162_47}>
          <Text style={styles.Text_162_47}>Surabaya- Jawa Timur</Text>
        </View>
        <View style={styles.View_162_46}>
          <View style={styles.View_162_45}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9d/fe5a/c58a326e5046f02b47e69b62ea7de067"
              }}
              style={styles.ImageBackground_162_10}
            />
            <View style={styles.View_162_12}>
              <Text style={styles.Text_162_12}>23 </Text>
            </View>
          </View>
          <View style={styles.View_162_13}>
            <Text style={styles.Text_162_13}>mEI</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_162_54}>
        <View style={styles.View_162_48}>
          <Text style={styles.Text_162_48}>Pelatihan gada Pratama</Text>
        </View>
        <View style={styles.View_162_49}>
          <Text style={styles.Text_162_49}>Surabaya - jawa Timur</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b1/73b4/3516c7ab8309821a301e0f98508fb367"
          }}
          style={styles.ImageBackground_162_20}
        />
        <View style={styles.View_162_21}>
          <Text style={styles.Text_162_21}>14 JuN </Text>
        </View>
      </View>
      <View style={styles.View_162_55}>
        <View style={styles.View_162_50}>
          <Text style={styles.Text_162_50}>Pelatihan gada Pratama</Text>
        </View>
        <View style={styles.View_162_51}>
          <Text style={styles.Text_162_51}>Semarang - Jawa Tengah</Text>
        </View>
        <View style={styles.View_162_52}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b1/73b4/3516c7ab8309821a301e0f98508fb367"
            }}
            style={styles.ImageBackground_162_23}
          />
          <View style={styles.View_162_24}>
            <Text style={styles.Text_162_24}>28 Jun </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_163_3} />
      <View style={styles.View_163_2}>
        <Text style={styles.Text_163_2}>GET A FREE CONSULTATION</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a33/9f66/c07464b1d7d8dcc62140312e89dd2c5a"
        }}
        style={styles.ImageBackground_163_4}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("366_0"))
        }
      >
        <View style={styles.View_164_13} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("239_3"))
        }
      >
        <View style={styles.View_165_11}>
          <View style={styles.View_164_12} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/b7d6/417bdbf9ba8608d34aa65a29c915dc55"
            }}
            style={styles.ImageBackground_164_8}
          />
          <View style={styles.View_164_43}>
            <Text style={styles.Text_164_43}>Service Required</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_164_44}>
        <Text style={styles.Text_164_44}>Submit</Text>
      </View>
      <View style={styles.View_165_13}>
        <View style={styles.View_163_7} />
        <View style={styles.View_164_9} />
        <View style={styles.View_164_14}>
          <Text style={styles.Text_164_14}>Nama</Text>
        </View>
        <View style={styles.View_164_39}>
          <Text style={styles.Text_164_39}>Company</Text>
        </View>
      </View>
      <View style={styles.View_165_12}>
        <View style={styles.View_164_10} />
        <View style={styles.View_164_11} />
        <View style={styles.View_164_40}>
          <Text style={styles.Text_164_40}>Email</Text>
        </View>
        <View style={styles.View_164_41}>
          <Text style={styles.Text_164_41}>Phone</Text>
        </View>
      </View>
      <View style={styles.View_165_0}>
        <Text style={styles.Text_165_0}>We’re ready to help you today !</Text>
      </View>
      <View style={styles.View_165_35}>
        <Text style={styles.Text_165_35}>08112345687</Text>
      </View>
      <View style={styles.View_165_77}>
        <Text style={styles.Text_165_77}>info-sn@shelternusantara.co.id</Text>
      </View>
      <View style={styles.View_165_15}>
        <View style={styles.View_165_16}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d42/8c3c/e67e843680037a9862803255ff9d951e"
            }}
            style={styles.ImageBackground_165_17}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc64/5f76/1e2c974a88108017f858046f87062b67"
        }}
        style={styles.ImageBackground_165_60}
      />
      <View style={styles.View_88_8}>
        <View style={styles.View_88_9}>
          <View style={styles.View_88_10} />
          <View style={styles.View_88_11}>
            <Text style={styles.Text_88_11}>Selengkapnya</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_88_12}>
        <Text style={styles.Text_88_12}>Kenali Kami Lebih Dekat.</Text>
      </View>
      <View style={styles.View_88_13}>
        <View style={styles.View_88_14}>
          <Text style={styles.Text_88_14}>
            Shelter Nusantara telah berhasil dalam proses pengentasan kemiskinan
            dan turut memberikan lapangan kerja bagi 5000pekerja per tahun dan
            jutaan keluarga di Indonesia{" "}
          </Text>
        </View>
        <View style={styles.View_88_15}>
          <View style={styles.View_88_16}>
            <Text style={styles.Text_88_16}>+</Text>
          </View>
          <View style={styles.View_88_17}>
            <Text style={styles.Text_88_17}>-</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_88_247}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a314/4b72/17df6d06ec70c0f5b75501300e2466f8"
          }}
          style={styles.ImageBackground_88_248}
        />
        <View style={styles.View_88_249}>
          <View style={styles.View_88_250} />
        </View>
        <View style={styles.View_88_251}>
          <Text style={styles.Text_88_251}>=</Text>
        </View>
        <View style={styles.View_88_252}>
          <Text style={styles.Text_88_252}>0:05/1:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7366/aa51/2eff2c8955f15e8d8f40f2c89f3c19c6"
          }}
          style={styles.ImageBackground_88_253}
        />
        <View style={styles.View_88_256}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc3a/a719/12f6b85ad6a67e843b9e93da12768825"
            }}
            style={styles.ImageBackground_88_257}
          />
          <View style={styles.View_88_260}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58a5/931f/5184515c52642fea00b5b94cae061e11"
              }}
              style={styles.ImageBackground_88_261}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5fc/5cfc/c54439b3b309ddff46dad37d78296a8d"
            }}
            style={styles.ImageBackground_88_263}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("338_13"))
        }
      >
        <View style={styles.View_88_321}>
          <View style={styles.View_88_322} />
          <View style={styles.View_88_324}>
            <Text style={styles.Text_88_324}>Daftar Pelatihan</Text>
          </View>
          <View style={styles.View_88_325}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f81f/7e78/7c4ab36bf2ce352a3041c3dd224a9f4a"
              }}
              style={styles.ImageBackground_88_326}
            />
            <View style={styles.View_88_327}>
              <Text style={styles.Text_88_327}>Selengkapnya</Text>
            </View>
          </View>
          <View style={styles.View_146_12}>
            <View style={styles.View_88_328}>
              <View style={styles.View_88_329}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e02/c1e3/4b47e437a942451a388b9eb82497a309"
                  }}
                  style={styles.ImageBackground_88_330}
                />
              </View>
              <View style={styles.View_88_332}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e02/c1e3/4b47e437a942451a388b9eb82497a309"
                  }}
                  style={styles.ImageBackground_88_333}
                />
              </View>
              <View style={styles.View_88_335}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e02/c1e3/4b47e437a942451a388b9eb82497a309"
                  }}
                  style={styles.ImageBackground_88_336}
                />
              </View>
              <View style={styles.View_88_338}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41e2/52a8/3df7f2550f9225702dc24cfe93808e1d"
                  }}
                  style={styles.ImageBackground_88_339}
                />
              </View>
              <View style={styles.View_88_341}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e02/c1e3/4b47e437a942451a388b9eb82497a309"
                  }}
                  style={styles.ImageBackground_88_342}
                />
              </View>
              <View style={styles.View_88_344}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e02/c1e3/4b47e437a942451a388b9eb82497a309"
                  }}
                  style={styles.ImageBackground_88_345}
                />
              </View>
              <View style={styles.View_88_347}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e02/c1e3/4b47e437a942451a388b9eb82497a309"
                  }}
                  style={styles.ImageBackground_88_348}
                />
              </View>
              <View style={styles.View_88_350}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b901/9f20/04c4b0a5b35a75e97d3e62603c630330"
                  }}
                  style={styles.ImageBackground_88_351}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c7/34ee/eccaf21ea3df754ec88dd8d5445b78db"
        }}
        style={styles.ImageBackground_88_278}
      />
      <View style={styles.View_88_280}>
        <Text style={styles.Text_88_280}>Investasi</Text>
      </View>
      <View style={styles.View_146_5}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f81f/7e78/7c4ab36bf2ce352a3041c3dd224a9f4a"
          }}
          style={styles.ImageBackground_88_296}
        />
        <View style={styles.View_88_297}>
          <Text style={styles.Text_88_297}>Selengkapnya</Text>
        </View>
      </View>
      <View style={styles.View_146_4}>
        <View style={styles.View_88_281}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea2d/be78/7a681b800d4e29d57a98b8201826b2fd"
            }}
            style={styles.ImageBackground_88_282}
          />
        </View>
        <View style={styles.View_88_284}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcca/b50e/f10540348bbcbbd8dbe62efce903d4ed"
            }}
            style={styles.ImageBackground_88_285}
          />
        </View>
        <View style={styles.View_88_287}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a091/4fc9/b84774c561194c485b1329b4a05fdf68"
            }}
            style={styles.ImageBackground_88_288}
          />
        </View>
        <View style={styles.View_88_290}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e1a/a1ae/eeed97316a81f60a10aa130d3d55a5f2"
            }}
            style={styles.ImageBackground_88_291}
          />
        </View>
        <View style={styles.View_88_293}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/193a/459b/90976cd3cdd6421efb7860fcfe870909"
            }}
            style={styles.ImageBackground_88_294}
          />
        </View>
        <View style={styles.View_88_298}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7990/0f73/346ef45eb655f8efadcdb7cb619eeccd"
            }}
            style={styles.ImageBackground_88_299}
          />
        </View>
      </View>
      <View style={styles.View_88_353}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8906/d9fd/25e5a2a72fa4a944ebd819c3be70f8bd"
          }}
          style={styles.ImageBackground_88_354}
        />
        <View style={styles.View_88_355}>
          <Text style={styles.Text_88_355}>Melamar Pekerjaan</Text>
        </View>
        <View style={styles.View_88_359}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4229/b845/079218a46f547fd1deec13faac9142ff"
            }}
            style={styles.ImageBackground_88_360}
          />
          <View style={styles.View_88_361}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4215/cf43/78f5185fed6d57a69177f28bc3c2da4a"
              }}
              style={styles.ImageBackground_88_362}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39a9/dbbf/ffe032259319650d41c844d6ffb8b613"
              }}
              style={styles.ImageBackground_88_368}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_375_109}>
        <View style={styles.View_88_302} />
        <View style={styles.View_88_303}>
          <Text style={styles.Text_88_303}>Menjadi Mitra Kami</Text>
        </View>
        <View style={styles.View_88_307}>
          <View style={styles.View_88_308}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c073/1dcd/ed3493c27f841f01ac3f64b1dba13b69"
              }}
              style={styles.ImageBackground_88_309}
            />
          </View>
          <View style={styles.View_88_311}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ebd/71fb/05d6430461373b032da7df5b7be24e4e"
              }}
              style={styles.ImageBackground_88_312}
            />
          </View>
          <View style={styles.View_88_314}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d69/d37c/ea2aa828e042e52f87e9557dee405455"
              }}
              style={styles.ImageBackground_88_315}
            />
          </View>
          <View style={styles.View_88_317}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ebd/71fb/05d6430461373b032da7df5b7be24e4e"
              }}
              style={styles.ImageBackground_88_318}
            />
          </View>
        </View>
        <View style={styles.View_146_6}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f81f/7e78/7c4ab36bf2ce352a3041c3dd224a9f4a"
            }}
            style={styles.ImageBackground_146_7}
          />
          <View style={styles.View_146_8}>
            <Text style={styles.Text_146_8}>Selengkapnya</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_146_9}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f81f/7e78/7c4ab36bf2ce352a3041c3dd224a9f4a"
          }}
          style={styles.ImageBackground_146_10}
        />
        <View style={styles.View_146_11}>
          <Text style={styles.Text_146_11}>Selengkapnya</Text>
        </View>
      </View>
      <View style={styles.View_167_289}>
        <View style={styles.View_167_290}>
          <View style={styles.View_167_291}>
            <Text style={styles.Text_167_291}>
              Memprioritaskan keselamatan karyawan dan tempat anda, Kami
              menyiapkan tenaga pengamanan yang berpengalaman dan berkualitas{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_167_292}>
        <Text style={styles.Text_167_292}>We Serve Your Safety</Text>
      </View>
      <View style={styles.View_88_374}>
        <View style={styles.View_88_375} />
        <View style={styles.View_88_376}>
          <Text style={styles.Text_88_376}>
            &quot;BERGABUNGLAH BERSAMA SHELTER INVESTMENT, DAN TURUT SERTA DALAM
            USAHA PENINGKATAN KUALITAS HIDUP MANUSIA&quot; -Wildy Istimror - CEO
            Shelter
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a8/064a/ae1721d748cd27600bfb1139958541b2"
          }}
          style={styles.ImageBackground_88_377}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a8/064a/ae1721d748cd27600bfb1139958541b2"
          }}
          style={styles.ImageBackground_88_378}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56a8/eb41/3fcbacc508a0779566659844bcb52b5d"
          }}
          style={styles.ImageBackground_88_379}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/426a/49df/92ddfb08edea4f8c8e09a546e80b41ea"
          }}
          style={styles.ImageBackground_88_386}
        />
        <View style={styles.View_88_389}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa2/bcf2/5811f39e4a59a0ee010079e4eb44d5eb"
            }}
            style={styles.ImageBackground_88_390}
          />
        </View>
        <View style={styles.View_88_404}>
          <Text style={styles.Text_88_404}>
            Shelter Nusantara telah berhasil dalam proses pengentasan kemiskinan
            dan turut memberikan lapangan kerja bagi 5000 pekerja per tahun dan
            jutaan keluarga di Indonesia{" "}
          </Text>
        </View>
        <View style={styles.View_88_405}>
          <Text style={styles.Text_88_405}>Pertumbuhan Organik</Text>
        </View>
        <View style={styles.View_88_406}>
          <Text style={styles.Text_88_406}>Margin</Text>
        </View>
        <View style={styles.View_88_407}>
          <Text style={styles.Text_88_407}>Arus Kas Bebas</Text>
        </View>
        <View style={styles.View_88_408}>
          <View style={styles.View_88_409}>
            <Text style={styles.Text_88_409}>+</Text>
          </View>
          <View style={styles.View_88_410}>
            <Text style={styles.Text_88_410}>-</Text>
          </View>
        </View>
        <View style={styles.View_88_411}>
          <Text style={styles.Text_88_411}>3-5%</Text>
        </View>
        <View style={styles.View_88_412}>
          <Text style={styles.Text_88_412}>4,5%</Text>
        </View>
        <View style={styles.View_88_413}>
          <Text style={styles.Text_88_413}>1,5 </Text>
        </View>
        <View style={styles.View_88_414}>
          <Text style={styles.Text_88_414}>mio/year</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56d9/4caf/c09316ed2b7db5265b95d63d7ddf0827"
          }}
          style={styles.ImageBackground_88_415}
        />
        <View style={styles.View_88_416}>
          <Text style={styles.Text_88_416}>Selengkapnya</Text>
        </View>
        <View style={styles.View_88_417}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23a1/868f/d9a461ffb7d376b2c51029aa5ab9fca0"
            }}
            style={styles.ImageBackground_88_418}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d9/17c3/dd29b24a09db6899f50b7755a75cdc07"
            }}
            style={styles.ImageBackground_88_419}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("766.5300546448087%") },
  View_88_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("142.4863387978142%"),
    minHeight: hp("142.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 26, 37, 1)"
  },
  View_88_5: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("39.07103825136612%")
  },
  Text_88_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_6: {
    width: wp("163.125%"),
    minWidth: wp("163.125%"),
    height: hp("142.4863387978142%"),
    minHeight: hp("142.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-22.63888888888889%"),
    top: hp("0.1366120218579235%")
  },
  ImageBackground_88_7: {
    width: wp("163.125%"),
    minWidth: wp("163.125%"),
    height: hp("142.4863387978142%"),
    minHeight: hp("142.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_88_18: {
    width: wp("122.15278625488281%"),
    minWidth: wp("122.15278625488281%"),
    height: hp("150.95628415300547%"),
    minHeight: hp("150.95628415300547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.305555555555555%"),
    top: hp("-8.469945355191257%")
  },
  View_88_22: {
    width: wp("9.70120112101237%"),
    minWidth: wp("9.70120112101237%"),
    height: hp("5.644661220696454%"),
    minHeight: hp("5.644661220696454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.481580946180557%"),
    top: hp("127.46123433764515%")
  },
  View_88_23: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579235%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.49000000953674316
  },
  View_88_24: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.624999999999996%"),
    top: hp("67.89617486338798%")
  },
  View_88_25: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_88_26: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("2.45901639344261%")
  },
  Text_88_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_88_27: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.000000000000004%"),
    top: hp("2.1857923497267677%")
  },
  View_88_30: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("67.89617486338798%"),
    backgroundColor: "rgba(27, 153, 232, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_88_31: {
    width: wp("10.208333333333334%"),
    minWidth: wp("10.208333333333334%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.805555555555555%"),
    top: hp("70.3551912568306%")
  },
  View_88_32: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.222222222222223%"),
    top: hp("0%")
  },
  Text_88_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_33: {
    width: wp("1.5277777777777777%"),
    minWidth: wp("1.5277777777777777%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_88_34: {
    width: wp("1.5277757909562852%"),
    height: hp("3.0054652625745764%"),
    top: hp("-0.000002605667518196242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_35: {
    width: wp("1.5277757909562852%"),
    height: hp("3.0054652625745764%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_88_36: {
    width: wp("1.5277757909562852%"),
    height: hp("3.0054652625745764%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_88_41: {
    width: wp("0.1388889385594262%"),
    minWidth: wp("0.1388889385594262%"),
    height: hp("0.2732241414283794%"),
    minHeight: hp("0.2732241414283794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.069444444444445%"),
    top: hp("1.9125683060109395%")
  },
  View_88_42: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606557%"),
    backgroundColor: "rgba(16, 18, 20, 1)"
  },
  View_88_46: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.75%"),
    top: hp("1.366120218579235%")
  },
  ImageBackground_88_47: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111143%")
  },
  ImageBackground_88_49: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444443%")
  },
  View_88_51: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666671%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_88_52: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-79.375%"),
    top: hp("4.371584699453551%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  ImageBackground_88_53: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_88_54: {
    width: wp("0.5033365885416666%"),
    height: hp("0.9650058433657787%"),
    top: hp("0.9344382364241801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5816650390624858%")
  },
  ImageBackground_88_55: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_88_59: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6527777777777715%")
  },
  View_88_62: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93.71584699453553%"),
    minHeight: hp("93.71584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("224.59016393442624%"),
    backgroundColor: "rgba(14, 99, 180, 1)"
  },
  View_88_63: {
    width: wp("9.652777777777779%"),
    minWidth: wp("9.652777777777779%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.98611111111111%"),
    top: hp("8.879781420765028%")
  },
  View_88_64: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_88_64: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_88_65: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.652777777777779%"),
    top: hp("1.9125683060109289%")
  },
  View_88_66: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.94444444444444%"),
    top: hp("8.879781420765028%")
  },
  View_88_67: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_88_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_158_0: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.041666666666664%"),
    top: hp("8.879781420765028%")
  },
  View_161_29: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_88_72: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_88_72: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_88_73: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.20491663224058723%"),
    minHeight: hp("0.20491663224058723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.875%"),
    top: hp("1.775956284153004%")
  },
  View_211_4: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.31944444444444%"),
    top: hp("8.879781420765028%")
  },
  View_211_5: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_211_6: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_211_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_211_7: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.20491663224058723%"),
    minHeight: hp("0.20491663224058723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111107%"),
    top: hp("1.775956284153004%")
  },
  ImageBackground_88_74: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.80555555555556%"),
    top: hp("3.415300546448088%")
  },
  View_88_76: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%"),
    top: hp("9.01639344262295%")
  },
  Text_88_76: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_167_318: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.66666666666667%"),
    top: hp("9.01639344262295%")
  },
  Text_167_318: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_88_78: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.069444444444443%"),
    top: hp("8.879781420765028%")
  },
  View_88_79: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_88_79: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_88_80: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555557%"),
    top: hp("1.7076502732240435%")
  },
  View_88_81: {
    width: wp("100.13888888888889%"),
    minWidth: wp("100.13888888888889%"),
    height: hp("51.229508196721305%"),
    minHeight: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1388888888888889%"),
    top: hp("509.1530054644808%"),
    backgroundColor: "rgba(243, 242, 247, 1)"
  },
  View_161_33: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("72.95081967213115%"),
    minHeight: hp("72.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("693.5792349726776%")
  },
  View_88_82: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("72.95081967213115%"),
    minHeight: hp("72.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(25, 27, 28, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_146_14: {
    width: wp("77.36111111111111%"),
    minWidth: wp("77.36111111111111%"),
    height: hp("59.699453551912576%"),
    minHeight: hp("59.699453551912576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("3.9617486338798926%")
  },
  ImageBackground_88_83: {
    width: wp("14.305555555555555%"),
    minWidth: wp("14.305555555555555%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    resizeMode: "cover"
  },
  View_88_84: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("21.038251366120107%")
  },
  Text_88_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_85: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.888888888888886%"),
    top: hp("6.010928961748618%")
  },
  Text_88_85: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_86: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("10.109289617486183%")
  },
  Text_88_86: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_87: {
    width: wp("8.958333333333334%"),
    minWidth: wp("8.958333333333334%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("14.207650273223976%")
  },
  Text_88_87: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_88: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("26.775956284152926%")
  },
  Text_88_88: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_89: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("30.874316939890605%")
  },
  Text_88_89: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_90: {
    width: wp("11.527777777777779%"),
    minWidth: wp("11.527777777777779%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("34.972677595628284%")
  },
  Text_88_90: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_91: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("0%")
  },
  Text_88_91: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_92: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("0%")
  },
  Text_88_92: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_93: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("18.715846994535468%")
  },
  Text_88_93: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_94: {
    width: wp("14.374999999999998%"),
    minWidth: wp("14.374999999999998%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("56.14754098360652%")
  },
  Text_88_94: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_95: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("42.21311475409823%")
  },
  Text_88_95: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_96: {
    width: wp("9.86111111111111%"),
    minWidth: wp("9.86111111111111%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("49.04371584699447%")
  },
  Text_88_96: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_97: {
    width: wp("28.47222222222222%"),
    minWidth: wp("28.47222222222222%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.295081967213036%")
  },
  Text_88_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_98: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.46994535519116%")
  },
  Text_88_98: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_88_99: {
    width: wp("0.4166666666666667%"),
    minWidth: wp("0.4166666666666667%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("11.612021857923423%")
  },
  ImageBackground_88_100: {
    width: wp("0.4166666666666667%"),
    minWidth: wp("0.4166666666666667%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("15.710382513661102%")
  },
  ImageBackground_88_101: {
    width: wp("0.4166666666666667%"),
    minWidth: wp("0.4166666666666667%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("7.103825136611931%")
  },
  ImageBackground_88_102: {
    width: wp("0.4166666666666667%"),
    minWidth: wp("0.4166666666666667%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("27.59562841530044%")
  },
  ImageBackground_88_106: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.125%"),
    top: hp("3.551912568305852%")
  },
  ImageBackground_88_107: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.125%"),
    top: hp("24.590163934426187%")
  },
  ImageBackground_88_108: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.125%"),
    top: hp("46.17486338797801%")
  },
  ImageBackground_88_109: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.125%"),
    top: hp("52.73224043715834%")
  },
  ImageBackground_88_110: {
    width: wp("12.430555555555555%"),
    minWidth: wp("12.430555555555555%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.125%"),
    top: hp("59.699453551912484%")
  },
  ImageBackground_88_111: {
    width: wp("2.7083333333333335%"),
    height: hp("4.781420765027322%"),
    top: hp("4.918032786885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.41666666666667%")
  },
  ImageBackground_88_116: {
    width: wp("2.569444444444444%"),
    height: hp("5.05464480874317%"),
    top: hp("4.644808743169278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.013888888888886%")
  },
  ImageBackground_88_120: {
    width: wp("2.569444444444444%"),
    height: hp("4.781420765027322%"),
    top: hp("4.918032786885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.611111111111114%")
  },
  ImageBackground_88_122: {
    width: wp("3.680555555555556%"),
    height: hp("6.967213114754098%"),
    top: hp("3.8251366120217654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.95833333333334%")
  },
  View_88_125: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("23.087431693988947%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_88_126: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.16666666666667%"),
    top: hp("23.49726775956276%")
  },
  Text_88_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_127: {
    width: wp("2.2916666666666665%"),
    minWidth: wp("2.2916666666666665%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.06944444444444%"),
    top: hp("23.087431693988947%"),
    backgroundColor: "rgba(235, 71, 71, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_88_128: {
    width: wp("1.5277777777777777%"),
    height: hp("3.0054644808743167%"),
    top: hp("23.63387978142066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.48611111111111%")
  },
  View_88_130: {
    width: wp("77.56944444444444%"),
    minWidth: wp("77.56944444444444%"),
    height: hp("25.683060109289617%"),
    minHeight: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("658.4699453551913%")
  },
  ImageBackground_88_131: {
    width: wp("14.374999999999998%"),
    minWidth: wp("14.374999999999998%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754031%"),
    resizeMode: "cover"
  },
  ImageBackground_88_132: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.916666666666664%"),
    top: hp("3.142076502732266%"),
    resizeMode: "cover"
  },
  ImageBackground_88_133: {
    width: wp("13.194444444444445%"),
    minWidth: wp("13.194444444444445%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.250000000000004%"),
    top: hp("3.142076502732266%"),
    resizeMode: "cover"
  },
  ImageBackground_88_134: {
    width: wp("15.347222222222223%"),
    minWidth: wp("15.347222222222223%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.04166666666667%"),
    top: hp("8.060109289617458%"),
    resizeMode: "cover"
  },
  ImageBackground_88_135: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    height: hp("25.683060109289617%"),
    minHeight: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.51388888888889%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_88_136: {
    width: wp("13.125%"),
    minWidth: wp("13.125%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.43055555555556%"),
    top: hp("643.5792349726776%")
  },
  Text_88_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_137: {
    width: wp("65.69444444444444%"),
    minWidth: wp("65.69444444444444%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.319444444444446%"),
    top: hp("651.9125683060109%")
  },
  Text_88_137: {
    color: "rgba(101, 101, 101, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_88_243: {
    width: wp("10.48611111111111%"),
    minWidth: wp("10.48611111111111%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("8.333333333333332%"),
    resizeMode: "cover"
  },
  ImageBackground_88_244: {
    width: wp("1.3194444444444444%"),
    height: hp("2.5923911339598273%"),
    top: hp("1.8678342058358948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%")
  },
  View_88_246: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.79166666666667%"),
    top: hp("1.2295081967213115%")
  },
  Text_88_246: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_272: {
    width: wp("1.3245985243055556%"),
    height: hp("5.374150719147562%"),
    top: hp("11.654621395257001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("218.95833333333331%")
  },
  ImageBackground_88_273: {
    width: wp("1.3245985243055556%"),
    height: hp("5.374150719147562%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_369: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-66.11111111111111%"),
    top: hp("11.202185792349727%")
  },
  View_88_370: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_88_370: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_88_371: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111143%"),
    top: hp("1.7076502732240435%")
  },
  View_88_373: {
    width: wp("30.833333333333336%"),
    minWidth: wp("30.833333333333336%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("233.46994535519124%")
  },
  Text_88_373: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_88_421: {
    width: wp("14.305555555555555%"),
    minWidth: wp("14.305555555555555%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("111.7361111111111%"),
    top: hp("496.0382513661203%"),
    resizeMode: "cover"
  },
  View_147_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93.30601092896174%"),
    minHeight: hp("93.30601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("416.3934426229508%"),
    backgroundColor: "rgba(14, 99, 180, 1)"
  },
  View_147_1: {
    width: wp("19.09722222222222%"),
    minWidth: wp("19.09722222222222%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.31944444444444%"),
    top: hp("424.4535519125683%")
  },
  Text_147_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_162_8: {
    width: wp("20.34722222222222%"),
    minWidth: wp("20.34722222222222%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.861111111111114%"),
    top: hp("516.6666666666667%")
  },
  Text_162_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_147_2: {
    width: wp("22.36111111111111%"),
    minWidth: wp("22.36111111111111%"),
    height: hp("25.81967213114754%"),
    minHeight: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("437.29508196721315%"),
    resizeMode: "cover"
  },
  View_161_4: {
    width: wp("22.15277777777778%"),
    minWidth: wp("22.15277777777778%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("468.57923497267757%")
  },
  Text_161_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_16: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.19444444444444%"),
    top: hp("467.75956284153006%")
  },
  Text_161_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_22: {
    width: wp("12.430555555555555%"),
    minWidth: wp("12.430555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.48611111111111%"),
    top: hp("467.75956284153006%")
  },
  Text_161_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_23: {
    width: wp("6.805555555555555%"),
    minWidth: wp("6.805555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("463.7978142076503%")
  },
  Text_161_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_24: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.19444444444444%"),
    top: hp("463.7978142076503%")
  },
  Text_161_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_25: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.34722222222223%"),
    top: hp("463.7978142076503%")
  },
  Text_161_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_3: {
    width: wp("22.36111111111111%"),
    minWidth: wp("22.36111111111111%"),
    height: hp("25.81967213114754%"),
    minHeight: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.19444444444444%"),
    top: hp("437.29508196721315%"),
    resizeMode: "cover"
  },
  ImageBackground_147_4: {
    width: wp("22.36111111111111%"),
    minWidth: wp("22.36111111111111%"),
    height: hp("25.81967213114754%"),
    minHeight: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.34722222222223%"),
    top: hp("437.29508196721315%"),
    resizeMode: "cover"
  },
  View_150_8: {
    width: wp("76.875%"),
    minWidth: wp("76.875%"),
    height: hp("75.81967213114754%"),
    minHeight: hp("75.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777777%"),
    top: hp("239.0710382513661%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_150_2: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: hp("58.19672131147541%"),
    minHeight: hp("58.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555555%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_166_1: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: hp("58.19672131147541%"),
    minHeight: hp("58.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.47222222222222%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_166_2: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: hp("58.19672131147541%"),
    minHeight: hp("58.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.013888888888886%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_166_3: {
    width: wp("14.305555555555555%"),
    minWidth: wp("14.305555555555555%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.708333333333334%"),
    top: hp("37.29508196721312%")
  },
  Text_166_3: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_166_5279: {
    width: wp("19.51388888888889%"),
    minWidth: wp("19.51388888888889%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.236111111111107%"),
    top: hp("37.29508196721312%")
  },
  Text_166_5279: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_166_5281: {
    width: wp("19.51388888888889%"),
    minWidth: wp("19.51388888888889%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.56944444444444%"),
    top: hp("37.29508196721312%")
  },
  Text_166_5281: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_166_5258: {
    width: wp("17.15277777777778%"),
    minWidth: wp("17.15277777777778%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.875000000000002%"),
    top: hp("47.404371584699476%")
  },
  Text_166_5258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_166_5280: {
    width: wp("16.38888888888889%"),
    minWidth: wp("16.38888888888889%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.486111111111107%"),
    top: hp("47.404371584699476%")
  },
  Text_166_5280: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_166_5282: {
    width: wp("16.38888888888889%"),
    minWidth: wp("16.38888888888889%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.81944444444445%"),
    top: hp("47.404371584699476%")
  },
  Text_166_5282: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_167_2: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: hp("58.19672131147541%"),
    minHeight: hp("58.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.94444444444446%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_167_3: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: hp("58.19672131147541%"),
    minHeight: hp("58.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100.48611111111111%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_167_144: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: hp("58.19672131147541%"),
    minHeight: hp("58.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("124.02777777777777%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_167_5: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.8888888888889%"),
    top: hp("36.33879781420765%")
  },
  Text_167_5: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_167_6: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("106.59722222222223%"),
    top: hp("37.29508196721312%")
  },
  Text_167_6: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_167_7: {
    width: wp("19.51388888888889%"),
    minWidth: wp("19.51388888888889%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125.83333333333334%"),
    top: hp("37.29508196721312%")
  },
  Text_167_7: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_167_8: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.33333333333334%"),
    top: hp("47.404371584699476%")
  },
  Text_167_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_167_9: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("102.77777777777779%"),
    top: hp("47.404371584699476%")
  },
  Text_167_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_167_10: {
    width: wp("16.38888888888889%"),
    minWidth: wp("16.38888888888889%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125.83333333333334%"),
    top: hp("47.404371584699476%")
  },
  Text_167_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_167_160: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.861111111111112%"),
    top: hp("13.797814207650305%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_167_148: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_166_276: {
    width: wp("5.105261272854275%"),
    height: hp("13.855102413990458%"),
    top: hp("2.0095241525785354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.291666666666668%")
  },
  View_167_162: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.95833333333333%"),
    top: hp("11.885245901639365%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_167_161: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016381%")
  },
  ImageBackground_166_5291: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_166_5261: {
    width: wp("6.116508377922906%"),
    height: hp("11.316763247297109%"),
    top: hp("3.7017488740181363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9354926215277786%")
  },
  View_167_164: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.77777777777778%"),
    top: hp("15.846994535519116%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_166_5292: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_167_145: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("239.375%"),
    top: hp("-90.57377049180326%")
  },
  ImageBackground_167_143: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_167_43: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333712%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_167_44: {
    width: wp("2.6250012715657554%"),
    height: hp("7.4590161849892205%"),
    top: hp("9.7540183145492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_167_45: {
    width: wp("2.6250012715657554%"),
    height: hp("7.4590161849892205%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_47: {
    width: wp("2.6250012715657554%"),
    height: hp("7.4590161849892205%"),
    top: hp("9.7540183145492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0624728732638573%")
  },
  ImageBackground_167_48: {
    width: wp("2.6250012715657554%"),
    height: hp("7.4590161849892205%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_50: {
    width: wp("2.6250012715657554%"),
    height: hp("7.4590161849892205%"),
    top: hp("9.7540183145492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.125013563368043%")
  },
  ImageBackground_167_51: {
    width: wp("2.6250012715657554%"),
    height: hp("7.4590161849892205%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_53: {
    width: wp("4.812576505872938%"),
    height: hp("6.886372800733222%"),
    top: hp("2.2938796079875203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0416259765625%")
  },
  ImageBackground_167_54: {
    width: wp("4.812576505872938%"),
    height: hp("6.886372800733222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_56: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737708565967331%"),
    top: hp("4.303211983435801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5208740234375%")
  },
  ImageBackground_167_57: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737708565967331%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_59: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737700748964737%"),
    top: hp("5.4507396260245855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.687527126736086%")
  },
  ImageBackground_167_60: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737700748964737%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_62: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737705960299799%"),
    top: hp("6.311402034238398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.687527126736086%")
  },
  ImageBackground_167_63: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737705960299799%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_65: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737711171634862%"),
    top: hp("5.1638660535134875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5208740234375%")
  },
  ImageBackground_167_66: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737711171634862%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_68: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737705960299799%"),
    top: hp("6.024520123591202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5208740234375%")
  },
  ImageBackground_167_69: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737705960299799%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_71: {
    width: wp("0.2916667196485731%"),
    height: hp("0.5737705960299799%"),
    top: hp("6.885174193668888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0833197699652715%")
  },
  ImageBackground_167_72: {
    width: wp("0.2916667196485731%"),
    height: hp("0.5737705960299799%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_74: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737705960299799%"),
    top: hp("6.885174193668888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5208740234375%")
  },
  ImageBackground_167_75: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737705960299799%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_77: {
    width: wp("0.2916667196485731%"),
    height: hp("0.5737705960299799%"),
    top: hp("7.745836601882701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0833197699652715%")
  },
  ImageBackground_167_78: {
    width: wp("0.2916667196485731%"),
    height: hp("0.5737705960299799%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_80: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737705960299799%"),
    top: hp("7.745836601882701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5208740234375%")
  },
  ImageBackground_167_81: {
    width: wp("0.29166698455810547%"),
    height: hp("0.5737705960299799%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_83: {
    width: wp("0.33293671078152126%"),
    height: hp("0.6460658839491547%"),
    top: hp("5.985797819544047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.806735568576357%")
  },
  ImageBackground_167_84: {
    width: wp("0.33293671078152126%"),
    height: hp("0.6460658839491547%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_86: {
    width: wp("0.3324998749627007%"),
    height: hp("0.6446312034064955%"),
    top: hp("5.999555744108619%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6096055772569002%")
  },
  ImageBackground_167_87: {
    width: wp("0.3324998749627007%"),
    height: hp("0.6446312034064955%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_89: {
    width: wp("0.389812257554796%"),
    height: hp("0.7622531202972912%"),
    top: hp("3.8008642978355454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.4261474609375%")
  },
  ImageBackground_167_90: {
    width: wp("0.389812257554796%"),
    height: hp("0.7622531202972912%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_92: {
    width: wp("0.4039584265814887%"),
    height: hp("0.7926638660535135%"),
    top: hp("2.8306221049991507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.119886610243043%")
  },
  ImageBackground_167_93: {
    width: wp("0.4039584265814887%"),
    height: hp("0.7926638660535135%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_95: {
    width: wp("0.4039584265814887%"),
    height: hp("0.7918032140679699%"),
    top: hp("2.840085889472334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2228054470485858%")
  },
  ImageBackground_167_96: {
    width: wp("0.4039584265814887%"),
    height: hp("0.7918032140679699%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_98: {
    width: wp("0.4083326127794054%"),
    height: hp("0.8029922110135437%"),
    top: hp("1.9739953546576032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.746826171874943%")
  },
  ImageBackground_167_99: {
    width: wp("0.4083326127794054%"),
    height: hp("0.8029922110135437%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_101: {
    width: wp("0.38952072461446124%"),
    height: hp("0.7625397437257194%"),
    top: hp("3.810344758580925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9315999348958144%")
  },
  ImageBackground_167_102: {
    width: wp("0.38952072461446124%"),
    height: hp("0.7625397437257194%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_104: {
    width: wp("0.3657500611411201%"),
    height: hp("0.7126229708311987%"),
    top: hp("4.873240319757514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7255045572916288%")
  },
  ImageBackground_167_105: {
    width: wp("0.3657500611411201%"),
    height: hp("0.7126229708311987%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_107: {
    width: wp("0.4081874423556857%"),
    height: hp("0.802991559596661%"),
    top: hp("1.9808659788037914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5911865234375%")
  },
  ImageBackground_167_108: {
    width: wp("0.4081874423556857%"),
    height: hp("0.802991559596661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_110: {
    width: wp("0.3660413953993055%"),
    height: hp("0.7129095942596269%"),
    top: hp("4.86149188599299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.657131618923586%")
  },
  ImageBackground_167_111: {
    width: wp("0.3660413953993055%"),
    height: hp("0.7129095942596269%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_113: {
    width: wp("0.36210430992974174%"),
    height: hp("0.7189344187251857%"),
    top: hp("0.27964440851263817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0609130859375%")
  },
  ImageBackground_167_114: {
    width: wp("0.36210430992974174%"),
    height: hp("0.7189344187251857%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_116: {
    width: wp("0.3278334935506185%"),
    height: hp("0.6540983752474759%"),
    top: hp("0.05184653026810793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6331515842013573%")
  },
  ImageBackground_167_117: {
    width: wp("0.3278334935506185%"),
    height: hp("0.6540983752474759%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_119: {
    width: wp("0.29749923282199436%"),
    height: hp("0.5793667881866622%"),
    top: hp("0.00007504322491058701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.223361545138857%")
  },
  ImageBackground_167_120: {
    width: wp("0.29749923282199436%"),
    height: hp("0.5793667881866622%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_122: {
    width: wp("0.3873334990607368%"),
    height: hp("0.7665574224920221%"),
    top: hp("0.6844359017460704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5212944878472285%")
  },
  ImageBackground_167_123: {
    width: wp("0.3873334990607368%"),
    height: hp("0.7665574224920221%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_125: {
    width: wp("0.327249632941352%"),
    height: hp("0.6529509044084393%"),
    top: hp("0.0501372123676731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.7833251953125%")
  },
  ImageBackground_167_126: {
    width: wp("0.327249632941352%"),
    height: hp("0.6529509044084393%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_128: {
    width: wp("0.40249930487738717%"),
    height: hp("0.7946720540197821%"),
    top: hp("1.2501700979764507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.315443250868043%")
  },
  ImageBackground_167_129: {
    width: wp("0.40249930487738717%"),
    height: hp("0.7946720540197821%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_131: {
    width: wp("0.3615220387776693%"),
    height: hp("0.7183606507348232%"),
    top: hp("0.27590892353995855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.321587456597172%")
  },
  ImageBackground_167_132: {
    width: wp("0.3615220387776693%"),
    height: hp("0.7183606507348232%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_134: {
    width: wp("0.4027918974558512%"),
    height: hp("0.7946721843031586%"),
    top: hp("1.2570573983948066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0276557074652715%")
  },
  ImageBackground_167_135: {
    width: wp("0.4027918974558512%"),
    height: hp("0.7946721843031586%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_137: {
    width: wp("0.38718753390842015%"),
    height: hp("0.7659836545016596%"),
    top: hp("0.6792745955003454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8362494574652715%")
  },
  ImageBackground_167_138: {
    width: wp("0.38718753390842015%"),
    height: hp("0.7659836545016596%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_140: {
    width: wp("1.1666663487752278%"),
    height: hp("2.295082644686673%"),
    top: hp("3.4425579133581152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.624986436631957%")
  },
  ImageBackground_167_141: {
    width: wp("1.1666663487752278%"),
    height: hp("2.295082644686673%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_166_5293: {
    width: wp("4.830187691582574%"),
    minWidth: wp("4.830187691582574%"),
    height: hp("9.92861888447746%"),
    minHeight: hp("9.92861888447746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444443%"),
    top: hp("3.9617653101520034%")
  },
  ImageBackground_166_5283: {
    width: wp("4.830187691582574%"),
    height: hp("9.92861888447746%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_169: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.56944444444446%"),
    top: hp("14.344262295081961%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_167_168: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_167_20: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_167_11: {
    width: wp("5.555555555555555%"),
    height: hp("10.92896174863388%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%")
  },
  View_167_170: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("105.97222222222224%"),
    top: hp("15.30054644808746%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_167_42: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_167_22: {
    width: wp("5.277777777777778%"),
    height: hp("10.382513661202186%"),
    top: hp("3.551912568305994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111%")
  },
  View_167_288: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("129.16666666666666%"),
    top: hp("15.710382513661216%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_167_287: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_167_286: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_167_171: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_167_172: {
    width: wp("1.85416751437717%"),
    height: hp("5.268670691818487%"),
    top: hp("6.889735154115442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_167_173: {
    width: wp("1.85416751437717%"),
    height: hp("5.268670691818487%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_175: {
    width: wp("1.8541676468319364%"),
    height: hp("5.268670691818487%"),
    top: hp("6.889735154115442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1632215711805713%")
  },
  ImageBackground_167_176: {
    width: wp("1.8541676468319364%"),
    height: hp("5.268670691818487%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_178: {
    width: wp("1.8541672494676378%"),
    height: hp("5.268670691818487%"),
    top: hp("6.889735154115442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.326375325520843%")
  },
  ImageBackground_167_179: {
    width: wp("1.8541672494676378%"),
    height: hp("5.268670691818487%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_181: {
    width: wp("3.3993593851725263%"),
    height: hp("4.864184061686197%"),
    top: hp("1.6202832831711476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4420572916666856%")
  },
  ImageBackground_167_182: {
    width: wp("3.3993593851725263%"),
    height: hp("4.864184061686197%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_184: {
    width: wp("0.20601855383978948%"),
    height: hp("0.40528266156306036%"),
    top: hp("3.039567457522196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1932915581597285%")
  },
  ImageBackground_167_185: {
    width: wp("0.20601855383978948%"),
    height: hp("0.40528266156306036%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_187: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("3.850134344048854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.017333984375028%")
  },
  ImageBackground_167_188: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_190: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("4.458051170807721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.017333984375028%")
  },
  ImageBackground_167_191: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_193: {
    width: wp("0.20601855383978948%"),
    height: hp("0.40528214042955407%"),
    top: hp("3.64748428428112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1932915581597285%")
  },
  ImageBackground_167_194: {
    width: wp("0.20601855383978948%"),
    height: hp("0.40528214042955407%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_196: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("4.255401111039987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1932915581597285%")
  },
  ImageBackground_167_197: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_199: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("4.86333461407105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8842502170138857%")
  },
  ImageBackground_167_200: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_202: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("4.86333461407105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1932915581597285%")
  },
  ImageBackground_167_203: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_205: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("5.471251440829917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8842502170138857%")
  },
  ImageBackground_167_206: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_208: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("5.471251440829917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1932915581597285%")
  },
  ImageBackground_167_209: {
    width: wp("0.20601855383978948%"),
    height: hp("0.4052824009963072%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_211: {
    width: wp("0.23516972859700522%"),
    height: hp("0.45634801270531833%"),
    top: hp("4.228068700905055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.514322916666686%")
  },
  ImageBackground_167_212: {
    width: wp("0.23516972859700522%"),
    height: hp("0.45634801270531833%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_214: {
    width: wp("0.2348611421055264%"),
    height: hp("0.45533466860244837%"),
    top: hp("4.237790967597334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.43056911892361427%")
  },
  ImageBackground_167_215: {
    width: wp("0.2348611421055264%"),
    height: hp("0.45533466860244837%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_217: {
    width: wp("0.27534378899468315%"),
    height: hp("0.5384166384003853%"),
    top: hp("2.6847464139344765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.2454291449653%")
  },
  ImageBackground_167_218: {
    width: wp("0.27534378899468315%"),
    height: hp("0.5384166384003853%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_220: {
    width: wp("0.2853356467352973%"),
    height: hp("0.5598973706771767%"),
    top: hp("1.9994016553534948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.029093424479186%")
  },
  ImageBackground_167_221: {
    width: wp("0.2853356467352973%"),
    height: hp("0.5598973706771767%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_223: {
    width: wp("0.2853356467352973%"),
    height: hp("0.5592895987255325%"),
    top: hp("2.0060888405054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8637152777777999%")
  },
  ImageBackground_167_224: {
    width: wp("0.2853356467352973%"),
    height: hp("0.5592895987255325%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_226: {
    width: wp("0.28842555152045357%"),
    height: hp("0.567193109481061%"),
    top: hp("1.3943364711407185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.765625%")
  },
  ImageBackground_167_227: {
    width: wp("0.28842555152045357%"),
    height: hp("0.567193109481061%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_229: {
    width: wp("0.2751379542880588%"),
    height: hp("0.5386190987675568%"),
    top: hp("2.6914335990864515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6580268012152999%")
  },
  ImageBackground_167_230: {
    width: wp("0.2751379542880588%"),
    height: hp("0.5386190987675568%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_232: {
    width: wp("0.2583471934000651%"),
    height: hp("0.503361029703109%"),
    top: hp("3.4422160497780396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5124918619791856%")
  },
  ImageBackground_167_233: {
    width: wp("0.2583471934000651%"),
    height: hp("0.503361029703109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_235: {
    width: wp("0.2883228990766737%"),
    height: hp("0.5671925883475548%"),
    top: hp("1.3991892663507883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1239284939236427%")
  },
  ImageBackground_167_236: {
    width: wp("0.2883228990766737%"),
    height: hp("0.5671925883475548%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_238: {
    width: wp("0.25855329301622176%"),
    height: hp("0.5035632295035274%"),
    top: hp("3.433911266222708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.408596462673643%")
  },
  ImageBackground_167_239: {
    width: wp("0.25855329301622176%"),
    height: hp("0.5035632295035274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_241: {
    width: wp("0.2557718753814697%"),
    height: hp("0.507818708002893%"),
    top: hp("0.1975137679303316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.162068684895843%")
  },
  ImageBackground_167_242: {
    width: wp("0.2557718753814697%"),
    height: hp("0.507818708002893%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_244: {
    width: wp("0.23156483968098956%"),
    height: hp("0.46202185375442917%"),
    top: hp("0.03662109375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.566257052951414%")
  },
  ImageBackground_167_245: {
    width: wp("0.23156483968098956%"),
    height: hp("0.46202185375442917%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_247: {
    width: wp("0.21013816197713217%"),
    height: hp("0.4092352963536164%"),
    top: hp("0.00005002881664495362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9831949869791856%")
  },
  ImageBackground_167_248: {
    width: wp("0.21013816197713217%"),
    height: hp("0.4092352963536164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_250: {
    width: wp("0.27359260453118217%"),
    height: hp("0.5414574849800986%"),
    top: hp("0.48346180733437905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7809380425347285%")
  },
  ImageBackground_167_251: {
    width: wp("0.27359260453118217%"),
    height: hp("0.5414574849800986%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_253: {
    width: wp("0.23115290535820854%"),
    height: hp("0.4612112957271722%"),
    top: hp("0.03542040215165798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3787027994791856%")
  },
  ImageBackground_167_254: {
    width: wp("0.23115290535820854%"),
    height: hp("0.4612112957271722%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_256: {
    width: wp("0.28430567847357857%"),
    height: hp("0.5613160263645193%"),
    top: hp("0.8830586417776658%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.460923936631957%")
  },
  ImageBackground_167_257: {
    width: wp("0.28430567847357857%"),
    height: hp("0.5613160263645193%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_259: {
    width: wp("0.25536007351345485%"),
    height: hp("0.5074134941309528%"),
    top: hp("0.1948789169228462%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7589518229166856%")
  },
  ImageBackground_167_260: {
    width: wp("0.25536007351345485%"),
    height: hp("0.5074134941309528%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_262: {
    width: wp("0.2845120429992676%"),
    height: hp("0.561315961222831%"),
    top: hp("0.8879281132599317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4322238498264142%")
  },
  ImageBackground_167_263: {
    width: wp("0.2845120429992676%"),
    height: hp("0.561315961222831%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_265: {
    width: wp("0.27348915735880536%"),
    height: hp("0.5410521082539376%"),
    top: hp("0.47980970372270804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.122450086805571%")
  },
  ImageBackground_167_266: {
    width: wp("0.27348915735880536%"),
    height: hp("0.5410521082539376%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_268: {
    width: wp("0.8240739504496256%"),
    height: hp("1.6211290828517226%"),
    top: hp("2.431633954491133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8541802300347285%")
  },
  ImageBackground_167_269: {
    width: wp("0.8240739504496256%"),
    height: hp("1.6211290828517226%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_161_12: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("490.30054644808746%"),
    backgroundColor: "rgba(7, 71, 111, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_161_17: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.19444444444444%"),
    top: hp("490.30054644808746%"),
    backgroundColor: "rgba(7, 71, 111, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_161_20: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.48611111111111%"),
    top: hp("490.30054644808746%"),
    backgroundColor: "rgba(7, 71, 111, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_161_13: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%"),
    top: hp("491.2568306010929%")
  },
  Text_161_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_18: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.958333333333336%"),
    top: hp("491.2568306010929%")
  },
  Text_161_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_21: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.25%"),
    top: hp("491.2568306010929%")
  },
  Text_161_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_15: {
    width: wp("22.083333333333332%"),
    minWidth: wp("22.083333333333332%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.47222222222222%"),
    top: hp("472.9508196721311%")
  },
  Text_161_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_19: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.48611111111111%"),
    top: hp("472.6775956284153%")
  },
  Text_161_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_162_53: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.73611111111111%"),
    top: hp("531.6939890710382%")
  },
  View_162_26: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.291666666666668%"),
    top: hp("1.3661202185792263%")
  },
  Text_162_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_162_47: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.291666666666668%"),
    top: hp("8.333333333333258%")
  },
  Text_162_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_162_46: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_162_45: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_162_10: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_162_12: {
    width: wp("5.4681369993421765%"),
    minWidth: wp("5.4681369993421765%"),
    minHeight: hp("7.63902299391116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6340196397569464%"),
    top: hp("2.0266673603996423%")
  },
  Text_162_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_162_13: {
    width: wp("3.5661763615078397%"),
    minWidth: wp("3.5661763615078397%"),
    minHeight: hp("4.676952778967352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5849473741319429%"),
    top: hp("5.768255848702211%")
  },
  Text_162_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_162_54: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.34722222222222%"),
    top: hp("532.5136612021857%")
  },
  View_162_48: {
    width: wp("10.625%"),
    minWidth: wp("10.625%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.805555555555557%"),
    top: hp("0.5464480874317132%")
  },
  Text_162_48: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_162_49: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.805555555555557%"),
    top: hp("7.5136612021857445%")
  },
  Text_162_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_162_20: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_162_21: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%"),
    top: hp("1.7759562841530396%")
  },
  Text_162_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_162_55: {
    width: wp("19.86111111111111%"),
    minWidth: wp("19.86111111111111%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.47222222222222%"),
    top: hp("532.5136612021857%")
  },
  View_162_50: {
    width: wp("10.13888888888889%"),
    minWidth: wp("10.13888888888889%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111121%"),
    top: hp("1.0928961748634265%")
  },
  Text_162_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_162_51: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111121%"),
    top: hp("8.060109289617571%")
  },
  Text_162_51: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_162_52: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_162_23: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_162_24: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.55555555555555%"),
    top: hp("1.7759562841530396%")
  },
  Text_162_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_163_3: {
    width: wp("100.62500000000001%"),
    minWidth: wp("100.62500000000001%"),
    height: hp("69.67213114754098%"),
    minHeight: hp("69.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4166666666666667%"),
    top: hp("560.3825136612022%"),
    backgroundColor: "rgba(14, 99, 180, 1)"
  },
  View_163_2: {
    width: wp("33.88888888888889%"),
    minWidth: wp("33.88888888888889%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%"),
    top: hp("566.9398907103825%")
  },
  Text_163_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_163_4: {
    width: wp("21.59722222222222%"),
    minWidth: wp("21.59722222222222%"),
    height: hp("52.18579234972678%"),
    minHeight: hp("52.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.638888888888889%"),
    top: hp("577.4590163934425%")
  },
  View_164_13: {
    width: wp("33.19444444444444%"),
    minWidth: wp("33.19444444444444%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.513888888888886%"),
    top: hp("609.8360655737705%"),
    backgroundColor: "rgba(7, 71, 110, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_165_11: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.513888888888886%"),
    top: hp("601.9125683060109%")
  },
  View_164_12: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_164_8: {
    width: wp("0.8333334657880995%"),
    minWidth: wp("0.8333334657880995%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.486111111111114%"),
    top: hp("2.185792349726853%")
  },
  View_164_43: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222285%"),
    top: hp("1.5027322404371262%")
  },
  Text_164_43: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_164_44: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.95833333333333%"),
    top: hp("611.2021857923497%")
  },
  Text_164_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_165_13: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.513888888888886%"),
    top: hp("584.9726775956285%")
  },
  View_163_7: {
    width: wp("15.76388888888889%"),
    minWidth: wp("15.76388888888889%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_164_9: {
    width: wp("15.76388888888889%"),
    minWidth: wp("15.76388888888889%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.152777777777786%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_164_14: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: hp("1.775956284152926%")
  },
  Text_164_14: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_164_39: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444443%"),
    top: hp("1.775956284152926%")
  },
  Text_164_39: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_165_12: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.513888888888886%"),
    top: hp("593.4426229508197%")
  },
  View_164_10: {
    width: wp("15.76388888888889%"),
    minWidth: wp("15.76388888888889%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_164_11: {
    width: wp("15.76388888888889%"),
    minWidth: wp("15.76388888888889%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.152777777777786%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_164_40: {
    width: wp("2.430555555555556%"),
    minWidth: wp("2.430555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222285%"),
    top: hp("1.775956284152926%")
  },
  Text_164_40: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_164_41: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444443%"),
    top: hp("1.775956284152926%")
  },
  Text_164_41: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_165_0: {
    width: wp("21.73611111111111%"),
    minWidth: wp("21.73611111111111%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.805555555555557%"),
    top: hp("578.2786885245902%")
  },
  Text_165_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_165_35: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.34722222222222%"),
    top: hp("596.5846994535519%")
  },
  Text_165_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_165_77: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.34722222222222%"),
    top: hp("604.6448087431694%")
  },
  Text_165_77: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_165_15: {
    width: wp("2.430555555555556%"),
    minWidth: wp("2.430555555555556%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.361111111111114%"),
    top: hp("596.311475409836%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_165_16: {
    width: wp("2.4305574099222818%"),
    height: hp("4.781427539762904%"),
    top: hp("-0.00006670508878414694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_165_17: {
    width: wp("2.4305574099222818%"),
    height: hp("4.781427539762904%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_165_60: {
    width: wp("2.361111111111111%"),
    height: hp("4.644808743169399%"),
    top: hp("603.5519125683061%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.361111111111114%")
  },
  View_88_8: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.055555555555557%"),
    top: hp("200.54644808743168%")
  },
  View_88_9: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_88_10: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_88_11: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8749999999999982%"),
    top: hp("1.7759562841530112%")
  },
  Text_88_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_12: {
    width: wp("14.86111111111111%"),
    minWidth: wp("14.86111111111111%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.055555555555557%"),
    top: hp("153.0054644808743%")
  },
  Text_88_12: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_13: {
    width: wp("29.166666666666668%"),
    minWidth: wp("29.166666666666668%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.055555555555557%"),
    top: hp("171.448087431694%")
  },
  View_88_14: {
    width: wp("29.166666666666668%"),
    minWidth: wp("29.166666666666668%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_88_14: {
    color: "rgba(101, 101, 101, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_15: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333332%"),
    top: hp("5.464480874316905%")
  },
  View_88_16: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_88_16: {
    color: "rgba(101, 101, 101, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_17: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888928%"),
    top: hp("0.40983606557378494%")
  },
  Text_88_17: {
    color: "rgba(101, 101, 101, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_247: {
    width: wp("41.47080315483941%"),
    minWidth: wp("41.47080315483941%"),
    height: hp("46.01268664083846%"),
    minHeight: hp("46.01268664083846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.31944444444444%"),
    top: hp("158.0601092896175%")
  },
  ImageBackground_88_248: {
    width: wp("41.401358710394966%"),
    height: hp("46.01268664083846%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_88_249: {
    width: wp("41.401358710394966%"),
    minWidth: wp("41.401358710394966%"),
    height: hp("5.378107164726883%"),
    minHeight: hp("5.378107164726883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444997%"),
    top: hp("40.38692953808061%")
  },
  View_88_250: {
    width: wp("41.401358710394966%"),
    minWidth: wp("41.401358710394966%"),
    height: hp("5.378107164726883%"),
    minHeight: hp("5.378107164726883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_88_251: {
    width: wp("1.3626974158816867%"),
    minWidth: wp("1.3626974158816867%"),
    minHeight: hp("1.398679467498279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5232747395833357%"),
    top: hp("41.28327083066512%")
  },
  Text_88_251: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_252: {
    width: wp("5.4689370261298285%"),
    minWidth: wp("5.4689370261298285%"),
    minHeight: hp("1.3316398109894634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.439100477430557%"),
    top: hp("40.586427782402666%")
  },
  Text_88_252: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_88_253: {
    width: wp("40.14065636528863%"),
    minWidth: wp("40.14065636528863%"),
    height: hp("0.7469782412377863%"),
    minHeight: hp("0.7469782412377863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37204318576389284%"),
    top: hp("43.07596175397032%")
  },
  View_88_256: {
    width: wp("2.823963430192735%"),
    minWidth: wp("2.823963430192735%"),
    height: hp("1.5939180968237705%"),
    minHeight: hp("1.5939180968237705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.52886284722223%"),
    top: hp("41.38286986637635%")
  },
  ImageBackground_88_257: {
    width: wp("0.8068508572048612%"),
    height: hp("1.5939180968237705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_260: {
    width: wp("0.6555599636501737%"),
    height: hp("1.2947290972933743%"),
    top: hp("0.09959069757516659%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.46240234375%")
  },
  ImageBackground_88_261: {
    width: wp("0.6555599636501737%"),
    height: hp("1.2947290972933743%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_88_263: {
    width: wp("0.05042796333630879%"),
    minWidth: wp("0.05042796333630879%"),
    height: hp("0.995945669914204%"),
    minHeight: hp("0.995945669914204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7735053168402715%"),
    top: hp("0.19918139515027633%")
  },
  View_88_321: {
    width: wp("19.06081093682183%"),
    minWidth: wp("19.06081093682183%"),
    height: hp("31.583223186555454%"),
    minHeight: hp("31.583223186555454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.43055555555556%"),
    top: hp("94.26229508196722%")
  },
  View_88_322: {
    width: wp("19.06081093682183%"),
    minWidth: wp("19.06081093682183%"),
    height: hp("31.583223186555454%"),
    minHeight: hp("31.583223186555454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(121, 121, 121, 1)",
    opacity: 0.15000000596046448
  },
  View_88_324: {
    width: wp("12.707206938001844%"),
    minWidth: wp("12.707206938001844%"),
    minHeight: hp("4.435091070790109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2109917534722214%"),
    top: hp("15.083442229390798%")
  },
  Text_88_324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_325: {
    width: wp("8.813063303629558%"),
    minWidth: wp("8.813063303629558%"),
    height: hp("5.107074487404746%"),
    minHeight: hp("5.107074487404746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.1239013671875%"),
    top: hp("22.609656495474724%")
  },
  ImageBackground_88_326: {
    width: wp("8.813063303629558%"),
    minWidth: wp("8.813063303629558%"),
    height: hp("5.107074487404746%"),
    minHeight: hp("5.107074487404746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_88_327: {
    width: wp("7.651651700337728%"),
    minWidth: wp("7.651651700337728%"),
    minHeight: hp("2.822330610348227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6148952907986072%"),
    top: hp("1.142374674479143%")
  },
  Text_88_327: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_12: {
    width: wp("5.807056956821017%"),
    minWidth: wp("5.807056956821017%"),
    height: hp("11.42371860358233%"),
    minHeight: hp("11.42371860358233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%"),
    top: hp("2.322404371584696%")
  },
  View_88_328: {
    width: wp("5.807056956821017%"),
    minWidth: wp("5.807056956821017%"),
    height: hp("11.42371860358233%"),
    minHeight: hp("11.42371860358233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_88_329: {
    width: wp("1.0207716623942058%"),
    height: hp("2.0080754014312245%"),
    top: hp("6.047850228398232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3415934244791643%")
  },
  ImageBackground_88_330: {
    width: wp("1.0207716623942058%"),
    height: hp("2.0080754014312245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_332: {
    width: wp("1.0207716623942058%"),
    height: hp("2.0080754014312245%"),
    top: hp("6.046536971962524%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3931206597222214%")
  },
  ImageBackground_88_333: {
    width: wp("1.0207716623942058%"),
    height: hp("2.0080754014312245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_335: {
    width: wp("1.0207716623942058%"),
    height: hp("2.0080754014312245%"),
    top: hp("6.046536971962524%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.446004231770836%")
  },
  ImageBackground_88_336: {
    width: wp("1.0207716623942058%"),
    height: hp("2.0080754014312245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_338: {
    width: wp("5.807056956821017%"),
    height: hp("3.0349158198455646%"),
    top: hp("8.38880278373675%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_88_339: {
    width: wp("5.807056956821017%"),
    height: hp("3.0349158198455646%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_341: {
    width: wp("1.0207717948489718%"),
    height: hp("2.008075531714601%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.34023708767360716%")
  },
  ImageBackground_88_342: {
    width: wp("1.0207717948489718%"),
    height: hp("2.008075531714601%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_344: {
    width: wp("1.0207716623942058%"),
    height: hp("2.008075531714601%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3931206597222214%")
  },
  ImageBackground_88_345: {
    width: wp("1.0207716623942058%"),
    height: hp("2.008075531714601%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_347: {
    width: wp("1.0207716623942058%"),
    height: hp("2.008075531714601%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.446004231770836%")
  },
  ImageBackground_88_348: {
    width: wp("1.0207716623942058%"),
    height: hp("2.008075531714601%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_350: {
    width: wp("5.807056956821017%"),
    height: hp("3.0349160804123176%"),
    top: hp("2.34226581177424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_88_351: {
    width: wp("5.807056956821017%"),
    height: hp("3.0349160804123176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_88_278: {
    width: wp("17.569444444444443%"),
    minWidth: wp("17.569444444444443%"),
    height: hp("31.010928961748636%"),
    minHeight: hp("31.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.23611111111111%"),
    top: hp("94.26229508196722%")
  },
  View_88_280: {
    width: wp("6.831831932067871%"),
    minWidth: wp("6.831831932067871%"),
    minHeight: hp("4.435091070790109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.219224717881945%"),
    top: hp("109.04592712068819%")
  },
  Text_88_280: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_5: {
    width: wp("8.813063303629558%"),
    minWidth: wp("8.813063303629558%"),
    height: hp("5.107074487404746%"),
    minHeight: hp("5.107074487404746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("116.63934259466787%")
  },
  ImageBackground_88_296: {
    width: wp("8.813063303629558%"),
    minWidth: wp("8.813063303629558%"),
    height: hp("5.107074487404746%"),
    minHeight: hp("5.107074487404746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_88_297: {
    width: wp("7.651651700337728%"),
    minWidth: wp("7.651651700337728%"),
    minHeight: hp("2.822330610348227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6148274739583321%"),
    top: hp("1.1423746744791714%")
  },
  Text_88_297: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_4: {
    width: wp("4.397493998209636%"),
    minWidth: wp("4.397493998209636%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.347222222222223%"),
    top: hp("96.85792349726776%")
  },
  View_88_281: {
    width: wp("2.0555750528971353%"),
    height: hp("7.310883464709006%"),
    top: hp("2.5251836724620063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3419189453124982%")
  },
  ImageBackground_88_282: {
    width: wp("2.0555750528971353%"),
    height: hp("7.310883464709006%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_284: {
    width: wp("0.6115892198350694%"),
    height: hp("3.5221240559562306%"),
    top: hp("5.1518341231215885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9031846788194446%")
  },
  ImageBackground_88_285: {
    width: wp("0.6115892198350694%"),
    height: hp("3.5221240559562306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_287: {
    width: wp("0.6115892198350694%"),
    height: hp("3.999700442037947%"),
    top: hp("4.694162170743681%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.722005208333334%")
  },
  ImageBackground_88_288: {
    width: wp("0.6115892198350694%"),
    height: hp("3.999700442037947%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_290: {
    width: wp("0.6115892198350694%"),
    height: hp("1.8108007034968807%"),
    top: hp("6.863153176229503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08422851562499822%")
  },
  ImageBackground_88_291: {
    width: wp("0.6115892198350694%"),
    height: hp("1.8108007034968807%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_293: {
    width: wp("4.0388234456380205%"),
    height: hp("5.957754062173145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_88_294: {
    width: wp("4.0388234456380205%"),
    height: hp("5.957754062173145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_298: {
    width: wp("0.6758774651421441%"),
    height: hp("2.781878403627156%"),
    top: hp("6.426226506467714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0527072482638875%")
  },
  ImageBackground_88_299: {
    width: wp("0.6758774651421441%"),
    height: hp("2.781878403627156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_353: {
    width: wp("19.06081093682183%"),
    minWidth: wp("19.06081093682183%"),
    height: hp("31.583223186555454%"),
    minHeight: hp("31.583223186555454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.22222222222223%"),
    top: hp("94.26229508196722%")
  },
  ImageBackground_88_354: {
    width: wp("19.06081093682183%"),
    minWidth: wp("19.06081093682183%"),
    height: hp("31.583223186555454%"),
    minHeight: hp("31.583223186555454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_88_355: {
    width: wp("15.030030144585504%"),
    minWidth: wp("15.030030144585504%"),
    minHeight: hp("4.435091070790109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8002658420138857%"),
    top: hp("15.231139803193301%")
  },
  Text_88_355: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_359: {
    width: wp("4.218631320529513%"),
    height: hp("9.699453551912567%"),
    top: hp("3.41530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.263888888888886%")
  },
  ImageBackground_88_360: {
    width: wp("1.784820556640625%"),
    height: hp("7.1129236064973425%"),
    top: hp("2.586531508815753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4338107638888857%")
  },
  View_88_361: {
    width: wp("3.8129933675130205%"),
    height: hp("9.376138155577612%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_88_362: {
    width: wp("3.4073723687065973%"),
    height: hp("9.376138155577612%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_88_368: {
    width: wp("0.24338616265190974%"),
    height: hp("2.334263285652536%"),
    top: hp("0.323323734471046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5696072048611143%")
  },
  View_375_109: {
    width: wp("19.02777777777778%"),
    minWidth: wp("19.02777777777778%"),
    height: hp("31.557377049180328%"),
    minHeight: hp("31.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.63888888888889%"),
    top: hp("94.26229508196722%")
  },
  View_88_302: {
    width: wp("19.02777777777778%"),
    height: hp("31.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(69, 69, 69, 1)",
    opacity: 0.25999999046325684
  },
  View_88_303: {
    width: wp("14.75675794813368%"),
    top: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777786%")
  },
  Text_88_303: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_307: {
    width: wp("4.850599500868055%"),
    height: hp("11.45202970244194%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.152777777777775%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_88_308: {
    width: wp("4.850599500868055%"),
    height: hp("6.0003499515721055%"),
    top: hp("3.753278555114406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_88_309: {
    width: wp("4.850599500868055%"),
    height: hp("6.0003499515721055%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_311: {
    width: wp("0.1894770728217231%"),
    height: hp("0.4473451708183914%"),
    top: hp("9.238100312446633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.661119249131943%")
  },
  ImageBackground_88_312: {
    width: wp("0.1894770728217231%"),
    height: hp("0.4473451708183914%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_314: {
    width: wp("2.991873953077528%"),
    height: hp("3.0672148928616214%"),
    top: hp("0.0005669932547789358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0159640842013928%")
  },
  ImageBackground_88_315: {
    width: wp("2.991873953077528%"),
    height: hp("3.0672148928616214%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_88_317: {
    width: wp("0.1894761456383599%"),
    height: hp("0.4473433468511196%"),
    top: hp("3.444125482944841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.77684190538195%")
  },
  ImageBackground_88_318: {
    width: wp("0.1894761456383599%"),
    height: hp("0.4473433468511196%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_146_6: {
    width: wp("8.813063303629558%"),
    minWidth: wp("8.813063303629558%"),
    height: hp("5.107074487404746%"),
    minHeight: hp("5.107074487404746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.208333333333332%"),
    top: hp("22.377047512700642%")
  },
  ImageBackground_146_7: {
    width: wp("8.813063303629558%"),
    minWidth: wp("8.813063303629558%"),
    height: hp("5.107074487404746%"),
    minHeight: hp("5.107074487404746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_146_8: {
    width: wp("7.651651700337728%"),
    minWidth: wp("7.651651700337728%"),
    minHeight: hp("2.822330610348227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6148274739583357%"),
    top: hp("1.1423746744791714%")
  },
  Text_146_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_9: {
    width: wp("8.813063303629558%"),
    minWidth: wp("8.813063303629558%"),
    height: hp("5.107074487404746%"),
    minHeight: hp("5.107074487404746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.36111111111111%"),
    top: hp("116.63934259466787%")
  },
  ImageBackground_146_10: {
    width: wp("8.813063303629558%"),
    minWidth: wp("8.813063303629558%"),
    height: hp("5.107074487404746%"),
    minHeight: hp("5.107074487404746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_146_11: {
    width: wp("7.651651700337728%"),
    minWidth: wp("7.651651700337728%"),
    minHeight: hp("2.822330610348227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6148274739583286%"),
    top: hp("1.1423746744791714%")
  },
  Text_146_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_289: {
    width: wp("28.819444444444443%"),
    minWidth: wp("28.819444444444443%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("47.26775956284153%")
  },
  View_167_290: {
    width: wp("28.819444444444443%"),
    minWidth: wp("28.819444444444443%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_167_291: {
    width: wp("28.819444444444443%"),
    minWidth: wp("28.819444444444443%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_167_291: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_292: {
    width: wp("12.708333333333332%"),
    minWidth: wp("12.708333333333332%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.694444444444445%"),
    top: hp("29.78142076502732%")
  },
  Text_167_292: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_374: {
    width: wp("100.13888888888889%"),
    minWidth: wp("100.13888888888889%"),
    height: hp("98.224043715847%"),
    minHeight: hp("98.224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1388888888888889%"),
    top: hp("318.1693989071038%")
  },
  View_88_375: {
    width: wp("100.13888888888889%"),
    minWidth: wp("100.13888888888889%"),
    height: hp("98.224043715847%"),
    minHeight: hp("98.224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 141, 223, 1)"
  },
  View_88_376: {
    width: wp("44.861111111111114%"),
    minWidth: wp("44.861111111111114%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.569444444444446%"),
    top: hp("4.3715846994535354%")
  },
  Text_88_376: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  ImageBackground_88_377: {
    width: wp("8.894053533165586e-7%"),
    minWidth: wp("8.894053533165586e-7%"),
    height: hp("40.02732240437158%"),
    minHeight: hp("40.02732240437158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.625%"),
    top: hp("35.65573770491801%")
  },
  ImageBackground_88_378: {
    width: wp("8.894053533165586e-7%"),
    minWidth: wp("8.894053533165586e-7%"),
    height: hp("40.02732240437158%"),
    minHeight: hp("40.02732240437158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.20833333333333%"),
    top: hp("35.65573770491801%")
  },
  ImageBackground_88_379: {
    width: wp("5.902777777777778%"),
    height: hp("11.612021857923498%"),
    top: hp("37.56830601092901%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.70833333333333%")
  },
  ImageBackground_88_386: {
    width: wp("4.652777777777778%"),
    height: hp("9.153005464480875%"),
    top: hp("38.797814207650276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.5%")
  },
  View_88_389: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.15277777777777%"),
    top: hp("37.56830601092901%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_88_390: {
    width: wp("5.349392361111112%"),
    height: hp("10.52339480874317%"),
    top: hp("0.5443135245901658%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2766927083333357%")
  },
  View_88_404: {
    width: wp("47.22222222222222%"),
    minWidth: wp("47.22222222222222%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.52777777777778%"),
    top: hp("24.180327868852487%")
  },
  Text_88_404: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_405: {
    width: wp("16.180555555555557%"),
    minWidth: wp("16.180555555555557%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.944444444444446%"),
    top: hp("71.31147540983608%")
  },
  Text_88_405: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_406: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.22222222222222%"),
    top: hp("71.31147540983608%")
  },
  Text_88_406: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_407: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.69444444444444%"),
    top: hp("71.31147540983608%")
  },
  Text_88_407: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_408: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.916666666666664%"),
    top: hp("26.502732240437183%")
  },
  View_88_409: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_88_409: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_410: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888573%"),
    top: hp("0.4098360655737565%")
  },
  Text_88_410: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_411: {
    width: wp("7.638888888888889%"),
    minWidth: wp("7.638888888888889%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("55.73770491803282%")
  },
  Text_88_411: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_412: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%"),
    top: hp("55.73770491803282%")
  },
  Text_88_412: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_413: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.61111111111111%"),
    top: hp("55.73770491803282%")
  },
  Text_88_413: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_414: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.25%"),
    top: hp("62.70491803278691%")
  },
  Text_88_414: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_88_415: {
    width: wp("13.125%"),
    minWidth: wp("13.125%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.541666666666664%"),
    top: hp("82.92349726775956%")
  },
  View_88_416: {
    width: wp("7.916666666666666%"),
    minWidth: wp("7.916666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.34722222222222%"),
    top: hp("84.6994535519126%")
  },
  Text_88_416: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_417: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.74999999999999%"),
    top: hp("85.65573770491801%")
  },
  ImageBackground_88_418: {
    width: wp("0.2777777777777778%"),
    minWidth: wp("0.2777777777777778%"),
    height: hp("4.7772016822038564e-8%"),
    minHeight: hp("4.7772016822038564e-8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%"),
    top: hp("0.8196721311475699%")
  },
  ImageBackground_88_419: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
