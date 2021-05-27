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
      <View style={styles.View_255_11} />
      <View style={styles.View_255_12} />
      <View style={styles.View_255_13} />
      <View style={styles.View_255_14}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8437/7632/afb2bd31f93bd029d201bd055e617468"
          }}
          style={styles.ImageBackground_255_15}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d5/0368/0eff6fc75931d0d77716b6fc9af38485"
          }}
          style={styles.ImageBackground_255_17}
        />
        <View style={styles.View_255_19}>
          <View style={styles.View_255_20} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eeca/a031/38f0b0d8d94815a6f7719c10d38609c4"
            }}
            style={styles.ImageBackground_255_21}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5837/1c2e/a9153adac1d37af38a59fdfb8fd73a5b"
            }}
            style={styles.ImageBackground_255_22}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93ea/01d6/816793a846cd8495076b572c07e18fae"
          }}
          style={styles.ImageBackground_255_23}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beec/9652/0e847db693027e73c509c3d6da637b59"
          }}
          style={styles.ImageBackground_255_27}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("191_36"))
        }
      >
        <View style={styles.View_255_30}>
          <View style={styles.View_255_31}>
            <Text style={styles.Text_255_31}>Layanan Kami </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33c0/509b/3256009b5ab7497a8fc0d91e8a3a444a"
            }}
            style={styles.ImageBackground_255_32}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_255_33}>
        <View style={styles.View_255_34}>
          <Text style={styles.Text_255_34}>Karir</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_69"))
        }
      >
        <View style={styles.View_255_35}>
          <View style={styles.View_255_36}>
            <View style={styles.View_255_37}>
              <Text style={styles.Text_255_37}>Investasi</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/c3f0/ef3eb252067614865e8264d3b1b439e1"
              }}
              style={styles.ImageBackground_255_38}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_8"))
        }
      >
        <View style={styles.View_255_39}>
          <View style={styles.View_255_40}>
            <View style={styles.View_255_41}>
              <Text style={styles.Text_255_41}>PELATIHAN</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/c3f0/ef3eb252067614865e8264d3b1b439e1"
              }}
              style={styles.ImageBackground_255_42}
            />
          </View>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a992/9126/d51233806dc98d5de24b022d9ec984fc"
        }}
        style={styles.ImageBackground_255_43}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_125"))
        }
      >
        <View style={styles.View_255_44}>
          <Text style={styles.Text_255_44}>Artikel</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_802"))
        }
      >
        <View style={styles.View_255_45}>
          <Text style={styles.Text_255_45}>contact</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("173_2"))
        }
      >
        <View style={styles.View_255_46}>
          <View style={styles.View_255_47}>
            <Text style={styles.Text_255_47}>Profil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
            }}
            style={styles.ImageBackground_255_48}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_255_49}>
        <View style={styles.View_255_50} />
        <View style={styles.View_255_51}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d40/cf8b/1e423a1d2ed75428500e7fb3cd800b18"
            }}
            style={styles.ImageBackground_255_52}
          />
          <View style={styles.View_255_53}>
            <Text style={styles.Text_255_53}>About Us</Text>
          </View>
          <View style={styles.View_255_54}>
            <Text style={styles.Text_255_54}>Gada Utama</Text>
          </View>
          <View style={styles.View_255_55}>
            <Text style={styles.Text_255_55}>Gada Madya</Text>
          </View>
          <View style={styles.View_255_56}>
            <Text style={styles.Text_255_56}>Gada Pratama</Text>
          </View>
          <View style={styles.View_255_57}>
            <Text style={styles.Text_255_57}>Our Service</Text>
          </View>
          <View style={styles.View_255_58}>
            <Text style={styles.Text_255_58}>Our Partner</Text>
          </View>
          <View style={styles.View_255_59}>
            <Text style={styles.Text_255_59}>Our Vision &amp; Mission</Text>
          </View>
          <View style={styles.View_255_60}>
            <Text style={styles.Text_255_60}>Pelatihan</Text>
          </View>
          <View style={styles.View_255_61}>
            <Text style={styles.Text_255_61}>Follow Us :</Text>
          </View>
          <View style={styles.View_255_62}>
            <Text style={styles.Text_255_62}>Suscribe </Text>
          </View>
          <View style={styles.View_255_63}>
            <Text style={styles.Text_255_63}>Lowongan Kerja</Text>
          </View>
          <View style={styles.View_255_64}>
            <Text style={styles.Text_255_64}>Tips &amp; News</Text>
          </View>
          <View style={styles.View_255_65}>
            <Text style={styles.Text_255_65}>Contact Us</Text>
          </View>
          <View style={styles.View_255_66}>
            <Text style={styles.Text_255_66}>
              Kepercayaan yang telah diberikan customer kepada kami merupakan
              komitmen bagi kami yang wajib dijalankan dengan integritas,
              kreatifitas dan kerja sama yang merupakan pedoman kami dalam
              menjalankan bisnis ini.
            </Text>
          </View>
          <View style={styles.View_255_67}>
            <Text style={styles.Text_255_67}>
              Head Office : JL. Semampir Selatan V A NO.18 Surabaya 60119
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_255_68}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_255_69}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_255_70}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df61/ace3/bf82e3652bf326b512e8925e929670d6"
            }}
            style={styles.ImageBackground_255_71}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_255_75}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_255_76}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_255_77}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_255_78}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e354/3c03/f5c08e580aa26655282d3ef27b8d5cad"
            }}
            style={styles.ImageBackground_255_79}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c7b/950a/9f7b792573bb66294649e70ac743332d"
            }}
            style={styles.ImageBackground_255_80}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a09/8813/fb8b4de80808c5b29a60d270849c2af6"
            }}
            style={styles.ImageBackground_255_85}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d52/69b3/d56b63754ba82a2aaac61bf1432e337b"
            }}
            style={styles.ImageBackground_255_89}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dea/5d57/396ef57f766f21f878be1059a2afe8ae"
            }}
            style={styles.ImageBackground_255_91}
          />
          <View style={styles.View_255_94} />
          <View style={styles.View_255_95}>
            <Text style={styles.Text_255_95}>email</Text>
          </View>
          <View style={styles.View_255_96} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdc2/6cf6/9c7d3ba34b589d9e5bca0695301915b3"
            }}
            style={styles.ImageBackground_255_97}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("88_0"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e0f/ee12/4a0d35b88fae71e1a6d71dddead6299a"
          }}
          style={styles.ImageBackground_255_99}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/68d8/50d1cf2831aa3420a696872a80bffb0f"
        }}
        style={styles.ImageBackground_255_100}
      />
      <View style={styles.View_255_102}>
        <Text style={styles.Text_255_102}>ID</Text>
      </View>
      <View style={styles.View_255_103}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f895/42d1/b2c1bfe645dafba93c4d8eb7822ddb22"
          }}
          style={styles.ImageBackground_255_104}
        />
      </View>
      <View style={styles.View_255_108}>
        <View style={styles.View_255_109}>
          <Text style={styles.Text_255_109}>Profil</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
          }}
          style={styles.ImageBackground_255_110}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d40/cf8b/1e423a1d2ed75428500e7fb3cd800b18"
        }}
        style={styles.ImageBackground_255_111}
      />
      <View style={styles.View_269_54}>
        <View style={styles.View_255_112} />
        <View style={styles.View_255_113}>
          <Text style={styles.Text_255_113}>GET A FREE CONSULTATION</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a33/9f66/c07464b1d7d8dcc62140312e89dd2c5a"
          }}
          style={styles.ImageBackground_255_114}
        />
        <View style={styles.View_255_115}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("366_0"))
            }
          >
            <View style={styles.View_255_116} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("239_3"))
            }
          >
            <View style={styles.View_255_117}>
              <View style={styles.View_255_118} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/b7d6/417bdbf9ba8608d34aa65a29c915dc55"
                }}
                style={styles.ImageBackground_255_119}
              />
              <View style={styles.View_255_120}>
                <Text style={styles.Text_255_120}>Service Required</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.View_255_121}>
            <Text style={styles.Text_255_121}>Submit</Text>
          </View>
          <View style={styles.View_255_122}>
            <View style={styles.View_255_123} />
            <View style={styles.View_255_124} />
            <View style={styles.View_255_125}>
              <Text style={styles.Text_255_125}>Nama</Text>
            </View>
            <View style={styles.View_255_126}>
              <Text style={styles.Text_255_126}>Company</Text>
            </View>
          </View>
          <View style={styles.View_255_127}>
            <View style={styles.View_255_128} />
            <View style={styles.View_255_129} />
            <View style={styles.View_255_130}>
              <Text style={styles.Text_255_130}>Email</Text>
            </View>
            <View style={styles.View_255_131}>
              <Text style={styles.Text_255_131}>Phone</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_255_132}>
          <Text style={styles.Text_255_132}>
            We’re ready to help you today !
          </Text>
        </View>
        <View style={styles.View_255_133}>
          <Text style={styles.Text_255_133}>08112345687</Text>
        </View>
        <View style={styles.View_255_134}>
          <Text style={styles.Text_255_134}>
            info-sn@shelternusantara.co.id
          </Text>
        </View>
        <View style={styles.View_255_135}>
          <View style={styles.View_255_136}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d42/8c3c/e67e843680037a9862803255ff9d951e"
              }}
              style={styles.ImageBackground_255_137}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc64/5f76/1e2c974a88108017f858046f87062b67"
          }}
          style={styles.ImageBackground_255_139}
        />
      </View>
      <View style={styles.View_258_18}>
        <Text style={styles.Text_258_18}>Site Coordinator</Text>
      </View>
      <View style={styles.View_267_44}>
        <Text style={styles.Text_267_44}>Additional Personal</Text>
      </View>
      <View style={styles.View_267_2}>
        <Text style={styles.Text_267_2}>Training Reguler</Text>
      </View>
      <View style={styles.View_266_4}>
        <Text style={styles.Text_266_4}>Training Reguler</Text>
      </View>
      <View style={styles.View_267_45}>
        <Text style={styles.Text_267_45}>Optional Service</Text>
      </View>
      <View style={styles.View_267_3}>
        <Text style={styles.Text_267_3}>Operational Visit</Text>
      </View>
      <View style={styles.View_265_12}>
        <Text style={styles.Text_265_12}>Security Assessment Report</Text>
      </View>
      <View style={styles.View_267_46}>
        <Text style={styles.Text_267_46}> Reliever</Text>
      </View>
      <View style={styles.View_267_4}>
        <Text style={styles.Text_267_4}>Controller</Text>
      </View>
      <View style={styles.View_266_5}>
        <Text style={styles.Text_266_5}>Security Self Audit Assessment </Text>
      </View>
      <View style={styles.View_267_47}>
        <Text style={styles.Text_267_47}>Shelter Digital</Text>
      </View>
      <View style={styles.View_267_5}>
        <Text style={styles.Text_267_5}>Perfomance Management Review </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a0/dfcc/369475d24e4f7b1d7faab696043cfd85"
        }}
        style={styles.ImageBackground_262_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a0/dfcc/369475d24e4f7b1d7faab696043cfd85"
        }}
        style={styles.ImageBackground_267_48}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a0/dfcc/369475d24e4f7b1d7faab696043cfd85"
        }}
        style={styles.ImageBackground_267_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a0/dfcc/369475d24e4f7b1d7faab696043cfd85"
        }}
        style={styles.ImageBackground_266_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a0/dfcc/369475d24e4f7b1d7faab696043cfd85"
        }}
        style={styles.ImageBackground_267_49}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a0/dfcc/369475d24e4f7b1d7faab696043cfd85"
        }}
        style={styles.ImageBackground_267_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a0/dfcc/369475d24e4f7b1d7faab696043cfd85"
        }}
        style={styles.ImageBackground_265_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a0/dfcc/369475d24e4f7b1d7faab696043cfd85"
        }}
        style={styles.ImageBackground_267_50}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a0/dfcc/369475d24e4f7b1d7faab696043cfd85"
        }}
        style={styles.ImageBackground_267_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a0/dfcc/369475d24e4f7b1d7faab696043cfd85"
        }}
        style={styles.ImageBackground_266_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a0/dfcc/369475d24e4f7b1d7faab696043cfd85"
        }}
        style={styles.ImageBackground_267_51}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a0/dfcc/369475d24e4f7b1d7faab696043cfd85"
        }}
        style={styles.ImageBackground_267_9}
      />
      <View style={styles.View_262_1}>
        <Text style={styles.Text_262_1}>1</Text>
      </View>
      <View style={styles.View_267_52}>
        <Text style={styles.Text_267_52}>9</Text>
      </View>
      <View style={styles.View_267_10}>
        <Text style={styles.Text_267_10}>5</Text>
      </View>
      <View style={styles.View_266_8}>
        <Text style={styles.Text_266_8}>3</Text>
      </View>
      <View style={styles.View_267_11}>
        <Text style={styles.Text_267_11}>7</Text>
      </View>
      <View style={styles.View_265_14}>
        <Text style={styles.Text_265_14}>2</Text>
      </View>
      <View style={styles.View_267_54}>
        <Text style={styles.Text_267_54}>10</Text>
      </View>
      <View style={styles.View_267_86}>
        <Text style={styles.Text_267_86}>11</Text>
      </View>
      <View style={styles.View_267_87}>
        <Text style={styles.Text_267_87}>12</Text>
      </View>
      <View style={styles.View_267_12}>
        <Text style={styles.Text_267_12}>6</Text>
      </View>
      <View style={styles.View_266_9}>
        <Text style={styles.Text_266_9}>4</Text>
      </View>
      <View style={styles.View_267_13}>
        <Text style={styles.Text_267_13}>8</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bcd/d6c3/09345222ed842f9f501756b71b973899"
        }}
        style={styles.ImageBackground_265_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bcd/d6c3/09345222ed842f9f501756b71b973899"
        }}
        style={styles.ImageBackground_267_56}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bcd/d6c3/09345222ed842f9f501756b71b973899"
        }}
        style={styles.ImageBackground_267_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bcd/d6c3/09345222ed842f9f501756b71b973899"
        }}
        style={styles.ImageBackground_266_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bcd/d6c3/09345222ed842f9f501756b71b973899"
        }}
        style={styles.ImageBackground_267_57}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bcd/d6c3/09345222ed842f9f501756b71b973899"
        }}
        style={styles.ImageBackground_267_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bcd/d6c3/09345222ed842f9f501756b71b973899"
        }}
        style={styles.ImageBackground_265_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bcd/d6c3/09345222ed842f9f501756b71b973899"
        }}
        style={styles.ImageBackground_267_58}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bcd/d6c3/09345222ed842f9f501756b71b973899"
        }}
        style={styles.ImageBackground_267_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bcd/d6c3/09345222ed842f9f501756b71b973899"
        }}
        style={styles.ImageBackground_266_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bcd/d6c3/09345222ed842f9f501756b71b973899"
        }}
        style={styles.ImageBackground_267_59}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bcd/d6c3/09345222ed842f9f501756b71b973899"
        }}
        style={styles.ImageBackground_267_17}
      />
      <View style={styles.View_265_3}>
        <Text style={styles.Text_265_3}>
          Penanggung Jawab Penuh System Pengamanan Perusahaan
        </Text>
      </View>
      <View style={styles.View_267_60}>
        <Text style={styles.Text_267_60}>
          Backup jika ada penggerakan masa{" "}
        </Text>
      </View>
      <View style={styles.View_267_18}>
        <Text style={styles.Text_267_18}>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{" "}
        </Text>
      </View>
      <View style={styles.View_266_12}>
        <Text style={styles.Text_266_12}>
          Mendesain SOP sesuai dengan kebutuhan lapangan{" "}
        </Text>
      </View>
      <View style={styles.View_267_61}>
        <Text style={styles.Text_267_61}>
          {" "}
          Penambahan layanan sesuai dengan Customer
        </Text>
      </View>
      <View style={styles.View_267_19}>
        <Text style={styles.Text_267_19}>
          Operational Visit dilakukan di siang Hari
        </Text>
      </View>
      <View style={styles.View_265_16}>
        <Text style={styles.Text_265_16}>
          Survey Analisa Kebutuhan dan analisa system pengamanan
        </Text>
      </View>
      <View style={styles.View_267_62}>
        <Text style={styles.Text_267_62}>Personal standby HO</Text>
      </View>
      <View style={styles.View_267_20}>
        <Text style={styles.Text_267_20}>Happy Call &amp; Control Visit</Text>
      </View>
      <View style={styles.View_266_13}>
        <Text style={styles.Text_266_13}>
          Evaluasi, Penilaian Perbakan terhadap Penerapan SOP{" "}
        </Text>
      </View>
      <View style={styles.View_267_63}>
        <Text style={styles.Text_267_63}>
          Aplikasi Digital untuk pengamanan{" "}
        </Text>
      </View>
      <View style={styles.View_267_21}>
        <Text style={styles.Text_267_21}>Review dilakukan 3 bulan sekali</Text>
      </View>
      <View style={styles.View_265_7} />
      <View style={styles.View_270_3} />
      <View style={styles.View_267_64} />
      <View style={styles.View_267_22} />
      <View style={styles.View_266_14} />
      <View style={styles.View_267_65} />
      <View style={styles.View_267_23} />
      <View style={styles.View_265_8}>
        <Text style={styles.Text_265_8}>Selengkapnya</Text>
      </View>
      <View style={styles.View_270_4}>
        <Text style={styles.Text_270_4}>Contact Kami</Text>
      </View>
      <View style={styles.View_267_66}>
        <Text style={styles.Text_267_66}>Selengkapnya</Text>
      </View>
      <View style={styles.View_267_24}>
        <Text style={styles.Text_267_24}>Selengkapnya</Text>
      </View>
      <View style={styles.View_266_15}>
        <Text style={styles.Text_266_15}>Selengkapnya</Text>
      </View>
      <View style={styles.View_267_67}>
        <Text style={styles.Text_267_67}>Selengkapnya</Text>
      </View>
      <View style={styles.View_267_25}>
        <Text style={styles.Text_267_25}>Selengkapnya</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
        }}
        style={styles.ImageBackground_265_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
        }}
        style={styles.ImageBackground_267_68}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
        }}
        style={styles.ImageBackground_267_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
        }}
        style={styles.ImageBackground_266_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
        }}
        style={styles.ImageBackground_267_71}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
        }}
        style={styles.ImageBackground_267_29}
      />
      <View style={styles.View_265_22}>
        <View style={styles.View_265_17} />
        <View style={styles.View_265_18}>
          <Text style={styles.Text_265_18}>Selengkapnya</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
          }}
          style={styles.ImageBackground_265_19}
        />
      </View>
      <View style={styles.View_267_74}>
        <View style={styles.View_267_75} />
        <View style={styles.View_267_76}>
          <Text style={styles.Text_267_76}>Selengkapnya</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
          }}
          style={styles.ImageBackground_267_77}
        />
      </View>
      <View style={styles.View_267_32}>
        <View style={styles.View_267_33} />
        <View style={styles.View_267_34}>
          <Text style={styles.Text_267_34}>Selengkapnya</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
          }}
          style={styles.ImageBackground_267_35}
        />
      </View>
      <View style={styles.View_266_19}>
        <View style={styles.View_266_20} />
        <View style={styles.View_266_21}>
          <Text style={styles.Text_266_21}>Selengkapnya</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
          }}
          style={styles.ImageBackground_266_22}
        />
      </View>
      <View style={styles.View_267_80}>
        <View style={styles.View_267_81} />
        <View style={styles.View_267_82}>
          <Text style={styles.Text_267_82}>Selengkapnya</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
          }}
          style={styles.ImageBackground_267_83}
        />
      </View>
      <View style={styles.View_267_38}>
        <View style={styles.View_267_39} />
        <View style={styles.View_267_40}>
          <Text style={styles.Text_267_40}>Selengkapnya</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
          }}
          style={styles.ImageBackground_267_41}
        />
      </View>
      <View style={styles.View_341_86}>
        <View style={styles.View_267_88} />
        <View style={styles.View_268_3} />
        <View style={styles.View_267_90} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7981/de62/a8c81b0d6cf30b847b43068859b0ebff"
          }}
          style={styles.ImageBackground_268_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f2a/8d77/d180d194bd021e08a23884008070555c"
          }}
          style={styles.ImageBackground_268_11}
        />
        <View style={styles.View_268_13}>
          <Text style={styles.Text_268_13}>Facebook</Text>
        </View>
        <View style={styles.View_268_14}>
          <Text style={styles.Text_268_14}>Linkedin</Text>
        </View>
        <View style={styles.View_269_4}>
          <Text style={styles.Text_269_4}>Twitter</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fa2/cc45/0ef351c7c80603689ef0f69aeb4536ed"
          }}
          style={styles.ImageBackground_269_2}
        />
        <View style={styles.View_268_4} />
        <View style={styles.View_268_6} />
        <View style={styles.View_269_5}>
          <View style={styles.View_269_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85cf/441a/f2b48dedf41a2428da6a265edce837da"
              }}
              style={styles.ImageBackground_269_7}
            />
          </View>
        </View>
        <View style={styles.View_269_24}>
          <Text style={styles.Text_269_24}>WhatsApp</Text>
        </View>
        <View style={styles.View_269_53}>
          <Text style={styles.Text_269_53}>Email</Text>
        </View>
        <View style={styles.View_269_25}>
          <View style={styles.View_269_26}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048e/d39e/dc30f1e43afa5d73d5e19dce63aede4a"
              }}
              style={styles.ImageBackground_269_27}
            />
          </View>
          <View style={styles.View_269_29}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a27/b777/62453600a0658e0f998fd598785345a9"
              }}
              style={styles.ImageBackground_269_30}
            />
          </View>
          <View style={styles.View_269_32}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/718f/dfbd/780b1d6b251722c2695e8b87446950a3"
              }}
              style={styles.ImageBackground_269_33}
            />
          </View>
          <View style={styles.View_269_35}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b33d/6c69/c33bb694b3accab734d3186039e0f06e"
              }}
              style={styles.ImageBackground_269_36}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_269_55}>
        <Text style={styles.Text_269_55}>Security Services</Text>
      </View>
      <View style={styles.View_270_2}>
        <Text style={styles.Text_270_2}>
          Memprioritaskan keselamatan karyawan dan tempat anda, Kami menyiapkan
          tenaga pengamanan yang berpengalaman dan berkualitas serta di dukung
          dengan aplikasi yang modern{" "}
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("644.3989071038251%") },
  View_255_11: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 26, 37, 1)"
  },
  View_255_12: {
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
  View_255_13: {
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
  View_255_14: {
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
  ImageBackground_255_15: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111143%")
  },
  ImageBackground_255_17: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444443%")
  },
  View_255_19: {
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
  View_255_20: {
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
  ImageBackground_255_21: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_255_22: {
    width: wp("0.5033365885416666%"),
    height: hp("0.9650058433657787%"),
    top: hp("0.9344382364241801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5816650390624858%")
  },
  ImageBackground_255_23: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_255_27: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6527777777777715%")
  },
  View_255_30: {
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
  View_255_31: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_255_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_255_32: {
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
  View_255_33: {
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
  View_255_34: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_255_34: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_255_35: {
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
  View_255_36: {
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
  View_255_37: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_255_37: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_255_38: {
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
  View_255_39: {
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
  View_255_40: {
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
  View_255_41: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_255_41: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_255_42: {
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
  ImageBackground_255_43: {
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
  View_255_44: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%"),
    top: hp("9.01639344262295%")
  },
  Text_255_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_255_45: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.66666666666667%"),
    top: hp("9.01639344262295%")
  },
  Text_255_45: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_255_46: {
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
  View_255_47: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_255_47: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_255_48: {
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
  View_255_49: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("72.95081967213115%"),
    minHeight: hp("72.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("571.4480874316939%")
  },
  View_255_50: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("72.95081967213115%"),
    minHeight: hp("72.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(25, 27, 28, 1)"
  },
  View_255_51: {
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
  ImageBackground_255_52: {
    width: wp("14.305555555555555%"),
    minWidth: wp("14.305555555555555%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185791126%"),
    resizeMode: "cover"
  },
  View_255_53: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("21.038251366120107%")
  },
  Text_255_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_54: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.888888888888886%"),
    top: hp("6.010928961748618%")
  },
  Text_255_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_55: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("10.109289617486297%")
  },
  Text_255_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_56: {
    width: wp("8.958333333333334%"),
    minWidth: wp("8.958333333333334%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("14.207650273223976%")
  },
  Text_255_56: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_57: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("26.775956284152926%")
  },
  Text_255_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_58: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("30.87431693989072%")
  },
  Text_255_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_59: {
    width: wp("11.527777777777779%"),
    minWidth: wp("11.527777777777779%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("34.9726775956284%")
  },
  Text_255_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_60: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("0%")
  },
  Text_255_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_61: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("0%")
  },
  Text_255_61: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_62: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("18.715846994535468%")
  },
  Text_255_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_63: {
    width: wp("14.374999999999998%"),
    minWidth: wp("14.374999999999998%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("56.14754098360652%")
  },
  Text_255_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_64: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("42.21311475409834%")
  },
  Text_255_64: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_65: {
    width: wp("9.86111111111111%"),
    minWidth: wp("9.86111111111111%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("49.04371584699447%")
  },
  Text_255_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_66: {
    width: wp("28.47222222222222%"),
    minWidth: wp("28.47222222222222%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.295081967213036%")
  },
  Text_255_66: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_67: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.46994535519116%")
  },
  Text_255_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_255_68: {
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
  ImageBackground_255_69: {
    width: wp("0.4166666666666667%"),
    minWidth: wp("0.4166666666666667%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("15.710382513661216%")
  },
  ImageBackground_255_70: {
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
  ImageBackground_255_71: {
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
  ImageBackground_255_75: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.125%"),
    top: hp("3.5519125683059656%")
  },
  ImageBackground_255_76: {
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
  ImageBackground_255_77: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.125%"),
    top: hp("46.17486338797812%")
  },
  ImageBackground_255_78: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.125%"),
    top: hp("52.73224043715845%")
  },
  ImageBackground_255_79: {
    width: wp("12.430555555555555%"),
    minWidth: wp("12.430555555555555%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.125%"),
    top: hp("59.6994535519126%")
  },
  ImageBackground_255_80: {
    width: wp("2.7083333333333335%"),
    height: hp("4.781420765027322%"),
    top: hp("4.918032786885192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.41666666666667%")
  },
  ImageBackground_255_85: {
    width: wp("2.569444444444444%"),
    height: hp("5.05464480874317%"),
    top: hp("4.644808743169392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.013888888888886%")
  },
  ImageBackground_255_89: {
    width: wp("2.569444444444444%"),
    height: hp("4.781420765027322%"),
    top: hp("4.918032786885192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.611111111111114%")
  },
  ImageBackground_255_91: {
    width: wp("3.680555555555556%"),
    height: hp("6.967213114754098%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.95833333333334%")
  },
  View_255_94: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("23.08743169398906%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_255_95: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.16666666666667%"),
    top: hp("23.497267759562874%")
  },
  Text_255_95: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_96: {
    width: wp("2.2916666666666665%"),
    minWidth: wp("2.2916666666666665%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.06944444444444%"),
    top: hp("23.08743169398906%"),
    backgroundColor: "rgba(235, 71, 71, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_255_97: {
    width: wp("1.5277777777777777%"),
    height: hp("3.0054644808743167%"),
    top: hp("23.633879781420774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.48611111111111%")
  },
  ImageBackground_255_99: {
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
  ImageBackground_255_100: {
    width: wp("1.3194444444444444%"),
    height: hp("2.5956284153005464%"),
    top: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%")
  },
  View_255_102: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.79166666666667%"),
    top: hp("1.2295081967213115%")
  },
  Text_255_102: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_103: {
    width: wp("1.3245985243055556%"),
    height: hp("4.517887719993382%"),
    top: hp("9.7976893023715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("218.95833333333331%")
  },
  ImageBackground_255_104: {
    width: wp("1.3245985243055556%"),
    height: hp("4.517887719993382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_255_108: {
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
  View_255_109: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_255_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_255_110: {
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
  ImageBackground_255_111: {
    width: wp("14.305555555555555%"),
    minWidth: wp("14.305555555555555%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("111.7361111111111%"),
    top: hp("559.5628415300547%"),
    resizeMode: "cover"
  },
  View_269_54: {
    width: wp("100.62500000000001%"),
    minWidth: wp("100.62500000000001%"),
    height: hp("69.67213114754098%"),
    minHeight: hp("69.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4166666666666667%"),
    top: hp("501.775956284153%")
  },
  View_255_112: {
    width: wp("100.62500000000001%"),
    minWidth: wp("100.62500000000001%"),
    height: hp("69.67213114754098%"),
    minHeight: hp("69.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 99, 180, 1)"
  },
  View_255_113: {
    width: wp("33.88888888888889%"),
    minWidth: wp("33.88888888888889%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.47222222222222%"),
    top: hp("6.557377049180332%")
  },
  Text_255_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_255_114: {
    width: wp("21.59722222222222%"),
    minWidth: wp("21.59722222222222%"),
    height: hp("52.18579234972678%"),
    minHeight: hp("52.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("17.4863387978142%")
  },
  View_255_115: {
    width: wp("33.19444444444444%"),
    minWidth: wp("33.19444444444444%"),
    height: hp("30.46448087431694%"),
    minHeight: hp("30.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.23611111111111%"),
    top: hp("24.590163934426243%")
  },
  View_255_116: {
    width: wp("33.19444444444444%"),
    minWidth: wp("33.19444444444444%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(7, 71, 110, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_255_117: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.939890710382542%")
  },
  View_255_118: {
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
  ImageBackground_255_119: {
    width: wp("0.8333334657880995%"),
    minWidth: wp("0.8333334657880995%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.486111111111114%"),
    top: hp("2.1857923497267393%")
  },
  View_255_120: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222285%"),
    top: hp("1.5027322404371262%")
  },
  Text_255_120: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_255_121: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%"),
    top: hp("26.229508196721326%")
  },
  Text_255_121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_255_122: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_255_123: {
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
  View_255_124: {
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
  View_255_125: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("1.7759562841530396%")
  },
  Text_255_125: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_255_126: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444443%"),
    top: hp("1.7759562841530396%")
  },
  Text_255_126: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_255_127: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%")
  },
  View_255_128: {
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
  View_255_129: {
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
  View_255_130: {
    width: wp("2.430555555555556%"),
    minWidth: wp("2.430555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222285%"),
    top: hp("1.7759562841530396%")
  },
  Text_255_130: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_255_131: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444443%"),
    top: hp("1.7759562841530396%")
  },
  Text_255_131: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_255_132: {
    width: wp("21.73611111111111%"),
    minWidth: wp("21.73611111111111%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.222222222222225%"),
    top: hp("17.896174863388012%")
  },
  Text_255_132: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_133: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.76388888888889%"),
    top: hp("36.20218579234978%")
  },
  Text_255_133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_134: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.76388888888889%"),
    top: hp("44.26229508196724%")
  },
  Text_255_134: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_135: {
    width: wp("2.430555555555556%"),
    minWidth: wp("2.430555555555556%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.777777777777782%"),
    top: hp("35.92896174863387%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_255_136: {
    width: wp("2.4305574099222818%"),
    height: hp("4.781427539762904%"),
    top: hp("-0.00006670508878414694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_255_137: {
    width: wp("2.4305574099222818%"),
    height: hp("4.781427539762904%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_255_139: {
    width: wp("2.361111111111111%"),
    height: hp("4.644808743169399%"),
    top: hp("43.16939890710381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.777777777777782%")
  },
  View_258_18: {
    width: wp("21.38888888888889%"),
    minWidth: wp("21.38888888888889%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.69444444444444%"),
    top: hp("82.10382513661202%")
  },
  Text_258_18: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_44: {
    width: wp("25.763888888888886%"),
    minWidth: wp("25.763888888888886%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.861111111111114%"),
    top: hp("341.8032786885246%")
  },
  Text_267_44: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_2: {
    width: wp("21.73611111111111%"),
    minWidth: wp("21.73611111111111%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.861111111111114%"),
    top: hp("210.65573770491804%")
  },
  Text_267_2: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_266_4: {
    width: wp("21.73611111111111%"),
    minWidth: wp("21.73611111111111%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.625%"),
    top: hp("147.26775956284152%")
  },
  Text_266_4: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_45: {
    width: wp("21.59722222222222%"),
    minWidth: wp("21.59722222222222%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.861111111111114%"),
    top: hp("406.96721311475403%")
  },
  Text_267_45: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_3: {
    width: wp("21.875%"),
    minWidth: wp("21.875%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.861111111111114%"),
    top: hp("275.8196721311475%")
  },
  Text_267_3: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_265_12: {
    width: wp("54.513888888888886%"),
    minWidth: wp("54.513888888888886%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.27777777777778%"),
    top: hp("115.30054644808743%")
  },
  Text_265_12: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_46: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.569444444444446%"),
    top: hp("375%")
  },
  Text_267_46: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_4: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.430555555555557%"),
    top: hp("243.85245901639342%")
  },
  Text_267_4: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_266_5: {
    width: wp("42.22222222222222%"),
    minWidth: wp("42.22222222222222%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.430555555555557%"),
    top: hp("180.46448087431693%")
  },
  Text_266_5: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_47: {
    width: wp("18.61111111111111%"),
    minWidth: wp("18.61111111111111%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.430555555555557%"),
    top: hp("440.16393442622956%")
  },
  Text_267_47: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_5: {
    width: wp("44.93055555555556%"),
    minWidth: wp("44.93055555555556%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.430555555555557%"),
    top: hp("309.016393442623%")
  },
  Text_267_5: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_262_0: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666666%"),
    top: hp("83.33333333333334%")
  },
  ImageBackground_267_48: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666666%"),
    top: hp("343.0327868852459%")
  },
  ImageBackground_267_6: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666666%"),
    top: hp("211.88524590163934%")
  },
  ImageBackground_266_6: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666666%"),
    top: hp("148.49726775956285%")
  },
  ImageBackground_267_49: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666666%"),
    top: hp("408.1967213114754%")
  },
  ImageBackground_267_7: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666666%"),
    top: hp("277.0491803278689%")
  },
  ImageBackground_265_13: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666666%"),
    top: hp("116.53005464480874%")
  },
  ImageBackground_267_50: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666666%"),
    top: hp("376.22950819672127%")
  },
  ImageBackground_267_8: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666666%"),
    top: hp("245.08196721311478%")
  },
  ImageBackground_266_7: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666666%"),
    top: hp("181.69398907103823%")
  },
  ImageBackground_267_51: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666666%"),
    top: hp("441.3934426229508%")
  },
  ImageBackground_267_9: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666666%"),
    top: hp("310.24590163934425%")
  },
  View_262_1: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("83.46994535519126%")
  },
  Text_262_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_52: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("343.1693989071038%")
  },
  Text_267_52: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_10: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("212.0218579234973%")
  },
  Text_267_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_266_8: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("148.63387978142077%")
  },
  Text_266_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_11: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("277.1857923497268%")
  },
  Text_267_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_265_14: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("116.66666666666667%")
  },
  Text_265_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_54: {
    width: wp("4.305555555555555%"),
    minWidth: wp("4.305555555555555%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.86111111111111%"),
    top: hp("376.91256830601094%")
  },
  Text_267_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_86: {
    width: wp("4.305555555555555%"),
    minWidth: wp("4.305555555555555%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.86111111111111%"),
    top: hp("408.879781420765%")
  },
  Text_267_86: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_87: {
    width: wp("4.305555555555555%"),
    minWidth: wp("4.305555555555555%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.86111111111111%"),
    top: hp("441.8032786885246%")
  },
  Text_267_87: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_12: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("245.21857923497268%")
  },
  Text_267_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_266_9: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("181.83060109289616%")
  },
  Text_266_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_13: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("310.38251366120215%")
  },
  Text_267_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_265_2: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.61111111111111%"),
    top: hp("81.4207650273224%"),
    resizeMode: "cover"
  },
  ImageBackground_267_56: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.61111111111111%"),
    top: hp("341.120218579235%"),
    resizeMode: "cover"
  },
  ImageBackground_267_14: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.61111111111111%"),
    top: hp("209.9726775956284%"),
    resizeMode: "cover"
  },
  ImageBackground_266_10: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.61111111111111%"),
    top: hp("146.5846994535519%"),
    resizeMode: "cover"
  },
  ImageBackground_267_57: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.61111111111111%"),
    top: hp("406.28415300546453%"),
    resizeMode: "cover"
  },
  ImageBackground_267_15: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.61111111111111%"),
    top: hp("275.1366120218579%"),
    resizeMode: "cover"
  },
  ImageBackground_265_15: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.11111111111111%"),
    top: hp("114.61748633879782%"),
    resizeMode: "cover"
  },
  ImageBackground_267_58: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.11111111111111%"),
    top: hp("374.3169398907104%"),
    resizeMode: "cover"
  },
  ImageBackground_267_16: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.11111111111111%"),
    top: hp("243.1693989071038%"),
    resizeMode: "cover"
  },
  ImageBackground_266_11: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.11111111111111%"),
    top: hp("179.78142076502732%"),
    resizeMode: "cover"
  },
  ImageBackground_267_59: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.11111111111111%"),
    top: hp("439.4808743169399%"),
    resizeMode: "cover"
  },
  ImageBackground_267_17: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.11111111111111%"),
    top: hp("308.33333333333337%"),
    resizeMode: "cover"
  },
  View_265_3: {
    width: wp("46.458333333333336%"),
    minWidth: wp("46.458333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.93055555555556%"),
    top: hp("89.48087431693989%")
  },
  Text_265_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_267_60: {
    width: wp("46.458333333333336%"),
    minWidth: wp("46.458333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.861111111111114%"),
    top: hp("349.1803278688525%")
  },
  Text_267_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_267_18: {
    width: wp("46.458333333333336%"),
    minWidth: wp("46.458333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.861111111111114%"),
    top: hp("218.30601092896177%")
  },
  Text_267_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_266_12: {
    width: wp("46.458333333333336%"),
    minWidth: wp("46.458333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.69444444444444%"),
    top: hp("155.60109289617486%")
  },
  Text_266_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_267_61: {
    width: wp("46.458333333333336%"),
    minWidth: wp("46.458333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.861111111111114%"),
    top: hp("414.4808743169399%")
  },
  Text_267_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_267_19: {
    width: wp("46.458333333333336%"),
    minWidth: wp("46.458333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.861111111111114%"),
    top: hp("283.33333333333337%")
  },
  Text_267_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_265_16: {
    width: wp("46.458333333333336%"),
    minWidth: wp("46.458333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.51388888888889%"),
    top: hp("122.67759562841529%")
  },
  Text_265_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_267_62: {
    width: wp("46.458333333333336%"),
    minWidth: wp("46.458333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.40277777777778%"),
    top: hp("382.37704918032784%")
  },
  Text_267_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_267_20: {
    width: wp("46.458333333333336%"),
    minWidth: wp("46.458333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.708333333333332%"),
    top: hp("251.2295081967213%")
  },
  Text_267_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_266_13: {
    width: wp("46.458333333333336%"),
    minWidth: wp("46.458333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.569444444444446%"),
    top: hp("188.11475409836063%")
  },
  Text_266_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_267_63: {
    width: wp("46.458333333333336%"),
    minWidth: wp("46.458333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.569444444444446%"),
    top: hp("447.5409836065574%")
  },
  Text_267_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_267_21: {
    width: wp("46.458333333333336%"),
    minWidth: wp("46.458333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.708333333333332%"),
    top: hp("316.39344262295083%")
  },
  Text_267_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_265_7: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.69444444444444%"),
    top: hp("97.54098360655738%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_270_3: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.05555555555556%"),
    top: hp("54.37158469945356%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_267_64: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.861111111111114%"),
    top: hp("357.24043715846994%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_267_22: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.861111111111114%"),
    top: hp("226.0928961748634%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_266_14: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.625%"),
    top: hp("162.70491803278688%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_267_65: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.861111111111114%"),
    top: hp("422.4043715846994%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_267_23: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.861111111111114%"),
    top: hp("291.2568306010929%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_265_8: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.736111111111114%"),
    top: hp("99.31693989071039%")
  },
  Text_265_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_270_4: {
    width: wp("7.638888888888889%"),
    minWidth: wp("7.638888888888889%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.69444444444444%"),
    top: hp("56.01092896174863%")
  },
  Text_270_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_66: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.11111111111111%"),
    top: hp("359.016393442623%")
  },
  Text_267_66: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_24: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.11111111111111%"),
    top: hp("227.8688524590164%")
  },
  Text_267_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_266_15: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.875%"),
    top: hp("164.4808743169399%")
  },
  Text_266_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_67: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.11111111111111%"),
    top: hp("424.1803278688525%")
  },
  Text_267_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_25: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.11111111111111%"),
    top: hp("293.0327868852459%")
  },
  Text_267_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_265_9: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.48611111111111%"),
    top: hp("99.04371584699454%")
  },
  ImageBackground_267_68: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.861111111111114%"),
    top: hp("358.7431693989071%")
  },
  ImageBackground_267_26: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.861111111111114%"),
    top: hp("227.59562841530055%")
  },
  ImageBackground_266_16: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.625%"),
    top: hp("164.20765027322403%")
  },
  ImageBackground_267_71: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.861111111111114%"),
    top: hp("423.90710382513663%")
  },
  ImageBackground_267_29: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.861111111111114%"),
    top: hp("292.75956284153006%")
  },
  View_265_22: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.27777777777778%"),
    top: hp("130.7377049180328%")
  },
  View_265_17: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_265_18: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("1.7759562841530112%")
  },
  Text_265_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_265_19: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.999999999999996%"),
    top: hp("1.5027322404371546%")
  },
  View_267_74: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.61111111111111%"),
    top: hp("390.43715846994536%")
  },
  View_267_75: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_267_76: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("1.7759562841529828%")
  },
  Text_267_76: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_267_77: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.000000000000004%"),
    top: hp("1.5027322404371262%")
  },
  View_267_32: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.430555555555557%"),
    top: hp("259.2896174863388%")
  },
  View_267_33: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_267_34: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2499999999999964%"),
    top: hp("1.7759562841530396%")
  },
  Text_267_34: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_267_35: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1.502732240437183%")
  },
  View_266_19: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.430555555555557%"),
    top: hp("195.9016393442623%")
  },
  View_266_20: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_266_21: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2499999999999964%"),
    top: hp("1.7759562841530112%")
  },
  Text_266_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_266_22: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1.5027322404371546%")
  },
  View_267_80: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.430555555555557%"),
    top: hp("455.6010928961749%")
  },
  View_267_81: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_267_82: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2499999999999964%"),
    top: hp("1.775956284152926%")
  },
  Text_267_82: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_267_83: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1.5027322404371262%")
  },
  View_267_38: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.430555555555557%"),
    top: hp("324.45355191256834%")
  },
  View_267_39: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_267_40: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2499999999999964%"),
    top: hp("1.775956284152926%")
  },
  Text_267_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_267_41: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1.5027322404371262%")
  },
  View_341_86: {
    width: wp("77.36111111111111%"),
    minWidth: wp("77.36111111111111%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.319444444444445%"),
    top: hp("483.46994535519127%")
  },
  View_267_88: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(57, 86, 146, 1)"
  },
  View_268_3: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 158, 238, 1)"
  },
  View_267_90: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.694444444444441%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 118, 179, 1)"
  },
  ImageBackground_268_9: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("2.0491803278688394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.263888888888886%")
  },
  ImageBackground_268_11: {
    width: wp("1.597222222222222%"),
    height: hp("3.1420765027322406%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.291666666666666%")
  },
  View_268_13: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555555%"),
    top: hp("2.322404371584696%")
  },
  Text_268_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_14: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("2.322404371584696%")
  },
  Text_268_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_269_4: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.361111111111114%"),
    top: hp("2.322404371584696%")
  },
  Text_269_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_269_2: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("1.9125683060108827%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.513888888888886%")
  },
  View_268_4: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.083333333333336%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 211, 102, 1)"
  },
  View_268_6: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.91666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(230, 66, 52, 1)"
  },
  View_269_5: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.375%"),
    top: hp("1.9125683060108827%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_269_6: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_269_7: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_269_24: {
    width: wp("5.763888888888889%"),
    minWidth: wp("5.763888888888889%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.777777777777786%"),
    top: hp("2.322404371584696%")
  },
  Text_269_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_269_53: {
    width: wp("5.763888888888889%"),
    minWidth: wp("5.763888888888889%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.51388888888889%"),
    top: hp("2.1857923497267393%")
  },
  Text_269_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_269_25: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.55555555555556%"),
    top: hp("1.9125683060108827%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_269_26: {
    width: wp("0.5852866172790527%"),
    height: hp("1.486509224104751%"),
    top: hp("0.9665233841359964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1508517795138857%")
  },
  ImageBackground_269_27: {
    width: wp("0.5852866172790527%"),
    height: hp("1.486509224104751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_269_29: {
    width: wp("0.5852864848242866%"),
    height: hp("1.486509224104751%"),
    top: hp("0.9665233841359964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_269_30: {
    width: wp("0.5852864848242866%"),
    height: hp("1.486509224104751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_269_32: {
    width: wp("1.7296008268992105%"),
    height: hp("1.3025102719583146%"),
    top: hp("0.5336407103825422%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0032552083333285964%")
  },
  ImageBackground_269_33: {
    width: wp("1.7296008268992105%"),
    height: hp("1.3025102719583146%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_269_35: {
    width: wp("1.7291669050852456%"),
    height: hp("1.027791487063215%"),
    top: hp("1.8538678278688963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0034586588541714036%")
  },
  ImageBackground_269_36: {
    width: wp("1.7291669050852456%"),
    height: hp("1.027791487063215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_269_55: {
    width: wp("20.694444444444443%"),
    minWidth: wp("20.694444444444443%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.65277777777778%"),
    top: hp("30.191256830601095%")
  },
  Text_269_55: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_270_2: {
    width: wp("66.59722222222221%"),
    minWidth: wp("66.59722222222221%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.916666666666668%"),
    top: hp("41.12021857923497%")
  },
  Text_270_2: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "justify",
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
