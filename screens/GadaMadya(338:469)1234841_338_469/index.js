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
      <View style={styles.View_338_474} />
      <View style={styles.View_338_475} />
      <View style={styles.View_338_476} />
      <View style={styles.View_338_477}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8437/7632/afb2bd31f93bd029d201bd055e617468"
          }}
          style={styles.ImageBackground_338_478}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d5/0368/0eff6fc75931d0d77716b6fc9af38485"
          }}
          style={styles.ImageBackground_338_480}
        />
        <View style={styles.View_338_482}>
          <View style={styles.View_338_483} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eeca/a031/38f0b0d8d94815a6f7719c10d38609c4"
            }}
            style={styles.ImageBackground_338_484}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5837/1c2e/a9153adac1d37af38a59fdfb8fd73a5b"
            }}
            style={styles.ImageBackground_338_485}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93ea/01d6/816793a846cd8495076b572c07e18fae"
          }}
          style={styles.ImageBackground_338_486}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beec/9652/0e847db693027e73c509c3d6da637b59"
          }}
          style={styles.ImageBackground_338_490}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("191_36"))
        }
      >
        <View style={styles.View_338_493}>
          <View style={styles.View_338_494}>
            <Text style={styles.Text_338_494}>Layanan Kami </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33c0/509b/3256009b5ab7497a8fc0d91e8a3a444a"
            }}
            style={styles.ImageBackground_338_495}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_338_496}>
        <View style={styles.View_338_497}>
          <Text style={styles.Text_338_497}>Karir</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_69"))
        }
      >
        <View style={styles.View_338_498}>
          <View style={styles.View_338_499}>
            <View style={styles.View_338_500}>
              <Text style={styles.Text_338_500}>Investasi</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/c3f0/ef3eb252067614865e8264d3b1b439e1"
              }}
              style={styles.ImageBackground_338_501}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_8"))
        }
      >
        <View style={styles.View_338_502}>
          <View style={styles.View_338_503}>
            <View style={styles.View_338_504}>
              <Text style={styles.Text_338_504}>PELATIHAN</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/c3f0/ef3eb252067614865e8264d3b1b439e1"
              }}
              style={styles.ImageBackground_338_505}
            />
          </View>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a992/9126/d51233806dc98d5de24b022d9ec984fc"
        }}
        style={styles.ImageBackground_338_506}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_125"))
        }
      >
        <View style={styles.View_338_507}>
          <Text style={styles.Text_338_507}>Artikel</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_802"))
        }
      >
        <View style={styles.View_338_508}>
          <Text style={styles.Text_338_508}>contact</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("173_2"))
        }
      >
        <View style={styles.View_338_509}>
          <View style={styles.View_338_510}>
            <Text style={styles.Text_338_510}>Profil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
            }}
            style={styles.ImageBackground_338_511}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_338_512}>
        <View style={styles.View_338_513} />
        <View style={styles.View_338_514}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d40/cf8b/1e423a1d2ed75428500e7fb3cd800b18"
            }}
            style={styles.ImageBackground_338_515}
          />
          <View style={styles.View_338_516}>
            <Text style={styles.Text_338_516}>About Us</Text>
          </View>
          <View style={styles.View_338_517}>
            <Text style={styles.Text_338_517}>Gada Utama</Text>
          </View>
          <View style={styles.View_338_518}>
            <Text style={styles.Text_338_518}>Gada Madya</Text>
          </View>
          <View style={styles.View_338_519}>
            <Text style={styles.Text_338_519}>Gada Pratama</Text>
          </View>
          <View style={styles.View_338_520}>
            <Text style={styles.Text_338_520}>Our Service</Text>
          </View>
          <View style={styles.View_338_521}>
            <Text style={styles.Text_338_521}>Our Partner</Text>
          </View>
          <View style={styles.View_338_522}>
            <Text style={styles.Text_338_522}>Our Vision &amp; Mission</Text>
          </View>
          <View style={styles.View_338_523}>
            <Text style={styles.Text_338_523}>Pelatihan</Text>
          </View>
          <View style={styles.View_338_524}>
            <Text style={styles.Text_338_524}>Follow Us :</Text>
          </View>
          <View style={styles.View_338_525}>
            <Text style={styles.Text_338_525}>Suscribe </Text>
          </View>
          <View style={styles.View_338_526}>
            <Text style={styles.Text_338_526}>Lowongan Kerja</Text>
          </View>
          <View style={styles.View_338_527}>
            <Text style={styles.Text_338_527}>Tips &amp; News</Text>
          </View>
          <View style={styles.View_338_528}>
            <Text style={styles.Text_338_528}>Contact Us</Text>
          </View>
          <View style={styles.View_338_529}>
            <Text style={styles.Text_338_529}>
              Kepercayaan yang telah diberikan customer kepada kami merupakan
              komitmen bagi kami yang wajib dijalankan dengan integritas,
              kreatifitas dan kerja sama yang merupakan pedoman kami dalam
              menjalankan bisnis ini.
            </Text>
          </View>
          <View style={styles.View_338_530}>
            <Text style={styles.Text_338_530}>
              Head Office : JL. Semampir Selatan V A NO.18 Surabaya 60119
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_338_531}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_338_532}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_338_533}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df61/ace3/bf82e3652bf326b512e8925e929670d6"
            }}
            style={styles.ImageBackground_338_534}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_338_538}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_338_539}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_338_540}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_338_541}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e354/3c03/f5c08e580aa26655282d3ef27b8d5cad"
            }}
            style={styles.ImageBackground_338_542}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c7b/950a/9f7b792573bb66294649e70ac743332d"
            }}
            style={styles.ImageBackground_338_543}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a09/8813/fb8b4de80808c5b29a60d270849c2af6"
            }}
            style={styles.ImageBackground_338_548}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d52/69b3/d56b63754ba82a2aaac61bf1432e337b"
            }}
            style={styles.ImageBackground_338_552}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dea/5d57/396ef57f766f21f878be1059a2afe8ae"
            }}
            style={styles.ImageBackground_338_554}
          />
          <View style={styles.View_338_557} />
          <View style={styles.View_338_558}>
            <Text style={styles.Text_338_558}>email</Text>
          </View>
          <View style={styles.View_338_559} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdc2/6cf6/9c7d3ba34b589d9e5bca0695301915b3"
            }}
            style={styles.ImageBackground_338_560}
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
          style={styles.ImageBackground_338_562}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/68d8/50d1cf2831aa3420a696872a80bffb0f"
        }}
        style={styles.ImageBackground_338_563}
      />
      <View style={styles.View_338_565}>
        <Text style={styles.Text_338_565}>ID</Text>
      </View>
      <View style={styles.View_338_566}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffa0/b554/42148e2627afa2179cb22492583b77fc"
          }}
          style={styles.ImageBackground_338_567}
        />
      </View>
      <View style={styles.View_338_571}>
        <View style={styles.View_338_572}>
          <Text style={styles.Text_338_572}>Profil</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
          }}
          style={styles.ImageBackground_338_573}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d40/cf8b/1e423a1d2ed75428500e7fb3cd800b18"
        }}
        style={styles.ImageBackground_338_574}
      />
      <View style={styles.View_338_575} />
      <View style={styles.View_338_576}>
        <Text style={styles.Text_338_576}>GET A FREE CONSULTATION</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a33/9f66/c07464b1d7d8dcc62140312e89dd2c5a"
        }}
        style={styles.ImageBackground_338_577}
      />
      <View style={styles.View_338_578}>
        <View style={styles.View_338_579} />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("239_3"))
          }
        >
          <View style={styles.View_338_580}>
            <View style={styles.View_338_581} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/b7d6/417bdbf9ba8608d34aa65a29c915dc55"
              }}
              style={styles.ImageBackground_338_582}
            />
            <View style={styles.View_338_583}>
              <Text style={styles.Text_338_583}>Service Required</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_338_584}>
          <Text style={styles.Text_338_584}>Submit</Text>
        </View>
        <View style={styles.View_338_585}>
          <View style={styles.View_338_586} />
          <View style={styles.View_338_587} />
          <View style={styles.View_338_588}>
            <Text style={styles.Text_338_588}>Nama</Text>
          </View>
          <View style={styles.View_338_589}>
            <Text style={styles.Text_338_589}>Company</Text>
          </View>
        </View>
        <View style={styles.View_338_590}>
          <View style={styles.View_338_591} />
          <View style={styles.View_338_592} />
          <View style={styles.View_338_593}>
            <Text style={styles.Text_338_593}>Email</Text>
          </View>
          <View style={styles.View_338_594}>
            <Text style={styles.Text_338_594}>Phone</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_338_595}>
        <Text style={styles.Text_338_595}>We’re ready to help you today !</Text>
      </View>
      <View style={styles.View_338_596}>
        <Text style={styles.Text_338_596}>08112345687</Text>
      </View>
      <View style={styles.View_338_597}>
        <Text style={styles.Text_338_597}>info-sn@shelternusantara.co.id</Text>
      </View>
      <View style={styles.View_338_598}>
        <View style={styles.View_338_599}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d42/8c3c/e67e843680037a9862803255ff9d951e"
            }}
            style={styles.ImageBackground_338_600}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc64/5f76/1e2c974a88108017f858046f87062b67"
        }}
        style={styles.ImageBackground_338_602}
      />
      <View style={styles.View_338_611}>
        <View style={styles.View_338_612} />
        <View style={styles.View_338_613}>
          <View style={styles.View_338_614}>
            <View style={styles.View_338_615}>
              <Text style={styles.Text_338_615}>Selengkapnya</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119b/3996/930b5a599017d81458c44191c461ba1a"
              }}
              style={styles.ImageBackground_338_616}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_338_619} />
      <View style={styles.View_349_0} />
      <View style={styles.View_362_8} />
      <View style={styles.View_362_9}>
        <Text style={styles.Text_362_9}>
          Pelatihan dasar Satuan Pengamanan bagi anggota/calon anggota Satuan
          Pengamanan yang belum pernah mengikuti pelatihan di bidang Satuan
          Pengamanan.
        </Text>
      </View>
      <View style={styles.View_362_10}>
        <Text style={styles.Text_362_10}>Pelatihan GADA Madya</Text>
      </View>
      <View style={styles.View_362_11}>
        <View style={styles.View_362_12} />
        <View style={styles.View_362_13} />
        <View style={styles.View_362_14} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7981/de62/a8c81b0d6cf30b847b43068859b0ebff"
          }}
          style={styles.ImageBackground_362_15}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f2a/8d77/d180d194bd021e08a23884008070555c"
          }}
          style={styles.ImageBackground_362_17}
        />
        <View style={styles.View_362_19}>
          <Text style={styles.Text_362_19}>Facebook</Text>
        </View>
        <View style={styles.View_362_20}>
          <Text style={styles.Text_362_20}>Linkedin</Text>
        </View>
        <View style={styles.View_362_21}>
          <Text style={styles.Text_362_21}>Twitter</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fa2/cc45/0ef351c7c80603689ef0f69aeb4536ed"
          }}
          style={styles.ImageBackground_362_22}
        />
        <View style={styles.View_362_24} />
        <View style={styles.View_362_25} />
        <View style={styles.View_362_26}>
          <View style={styles.View_362_27}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85cf/441a/f2b48dedf41a2428da6a265edce837da"
              }}
              style={styles.ImageBackground_362_28}
            />
          </View>
        </View>
        <View style={styles.View_362_30}>
          <Text style={styles.Text_362_30}>WhatsApp</Text>
        </View>
        <View style={styles.View_362_31}>
          <Text style={styles.Text_362_31}>Email</Text>
        </View>
        <View style={styles.View_362_32}>
          <View style={styles.View_362_33}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048e/d39e/dc30f1e43afa5d73d5e19dce63aede4a"
              }}
              style={styles.ImageBackground_362_34}
            />
          </View>
          <View style={styles.View_362_36}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a27/b777/62453600a0658e0f998fd598785345a9"
              }}
              style={styles.ImageBackground_362_37}
            />
          </View>
          <View style={styles.View_362_39}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/718f/dfbd/780b1d6b251722c2695e8b87446950a3"
              }}
              style={styles.ImageBackground_362_40}
            />
          </View>
          <View style={styles.View_362_42}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b33d/6c69/c33bb694b3accab734d3186039e0f06e"
              }}
              style={styles.ImageBackground_362_43}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_362_45}>
        <View style={styles.View_362_46}>
          <View style={styles.View_362_47} />
          <View style={styles.View_362_48}>
            <Text style={styles.Text_362_48}>
              Pelatihan Gada Pratama Selanjutnya
            </Text>
          </View>
          <View style={styles.View_362_49}>
            <Text style={styles.Text_362_49}>Jadwal</Text>
          </View>
          <View style={styles.View_362_50}>
            <Text style={styles.Text_362_50}>25 Mei 2021 | Angkatan 44</Text>
          </View>
          <View style={styles.View_362_51}>
            <Text style={styles.Text_362_51}>Bulan</Text>
          </View>
          <View style={styles.View_362_52}>
            <Text style={styles.Text_362_52}>Hari</Text>
          </View>
          <View style={styles.View_362_53}>
            <Text style={styles.Text_362_53}>Jam</Text>
          </View>
          <View style={styles.View_362_54}>
            <Text style={styles.Text_362_54}>Menit</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c64c/6388/aab797c5a7379cb8b5764052afb819c0"
            }}
            style={styles.ImageBackground_362_55}
          />
          <View style={styles.View_362_56} />
          <View style={styles.View_362_57} />
          <View style={styles.View_362_58} />
          <View style={styles.View_362_59}>
            <Text style={styles.Text_362_59}>00</Text>
          </View>
          <View style={styles.View_362_60}>
            <Text style={styles.Text_362_60}>03</Text>
          </View>
          <View style={styles.View_362_61}>
            <Text style={styles.Text_362_61}>11</Text>
          </View>
          <View style={styles.View_362_62}>
            <Text style={styles.Text_362_62}>15</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_362_63}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_362_64}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_362_65}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_362_66}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_362_67}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_362_68}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_362_69}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_362_70}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_362_71}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_362_72}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_362_73}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_362_74}
          />
          <View style={styles.View_362_75}>
            <Text style={styles.Text_362_75}>25 Mei - 05 Juni 2021</Text>
          </View>
          <View style={styles.View_362_76}>
            <Text style={styles.Text_362_76}>24 Juni - 04 Juli 2021</Text>
          </View>
          <View style={styles.View_362_77}>
            <Text style={styles.Text_362_77}>27 Juli - 07 Agustus 2021</Text>
          </View>
          <View style={styles.View_362_78}>
            <Text style={styles.Text_362_78}>27 Juli - 07 Agustus 2021</Text>
          </View>
          <View style={styles.View_362_79}>
            <Text style={styles.Text_362_79}>27 Juli - 07 Agustus 2021</Text>
          </View>
          <View style={styles.View_362_80}>
            <Text style={styles.Text_362_80}>27 Juli - 07 Agustus 2021</Text>
          </View>
          <View style={styles.View_362_81}>
            <Text style={styles.Text_362_81}>Gada Pratama Angkatan - 44</Text>
          </View>
          <View style={styles.View_362_82}>
            <Text style={styles.Text_362_82}>Gada Pratama Angkatan - 45</Text>
          </View>
          <View style={styles.View_362_83}>
            <Text style={styles.Text_362_83}>Gada Pratama Angkatan - 46</Text>
          </View>
          <View style={styles.View_362_84}>
            <Text style={styles.Text_362_84}>Gada Pratama Angkatan - 47</Text>
          </View>
          <View style={styles.View_362_85}>
            <Text style={styles.Text_362_85}>Gada Pratama Angkatan - 48</Text>
          </View>
          <View style={styles.View_362_86}>
            <Text style={styles.Text_362_86}>Gada Pratama Angkatan - 49</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_362_87}>
        <Text style={styles.Text_362_87}>
          a. Surat Izin Kapolri Nomor : SI/ 3021 /VI/YAN.2.14./2020 tentang Izin
          Operasiona Badan Usaha Jasa Pengamanan Bidang Pelatihan Keamanan b.
          Sertifikasi ISO 9001 : 2015 No.50200071 QM15 tentang Sistem Manajemen
          Mutu{" "}
        </Text>
      </View>
      <View style={styles.View_362_88}>
        <Text style={styles.Text_362_88}>
           a. Warga Negara Indonesia dan Berpendidikan minimal SLTA / Sederajat.
          b. Foto Copy Ijazah Terakhir dan KTP yang masih berlaku. c. Surat
          Pengantar dari Perusahaan bagi yang sudah bekerja. d. Kartu BPJS (
          bila mempunyai ). e. SKCK Asli dengan rumus sidik jari dari Polres. f.
          Membawa seragam Satpam PDL lengkap 2 Stel. g. Membawa peralatan
          pribadi dan pakaian olahraga h. Membawa borgol &amp; Tongkat T Polri
          beserta tempatnya. i. Membawa Masker biru dongker 2 buah j. Bersedia
          mengikuti RAPID test di tempat pelatihan
        </Text>
      </View>
      <View style={styles.View_362_89}>
        <Text style={styles.Text_362_89}>Persyaratan</Text>
      </View>
      <View style={styles.View_362_90}>
        <Text style={styles.Text_362_90}>Fasilitas</Text>
      </View>
      <View style={styles.View_362_91}>
        <Text style={styles.Text_362_91}>Tanda Kelulusan</Text>
      </View>
      <View style={styles.View_362_92}>
        <Text style={styles.Text_362_92}>Menerapkan Protokol Kesehatan</Text>
      </View>
      <View style={styles.View_362_93} />
      <View style={styles.View_362_94}>
        <Text style={styles.Text_362_94}>Galeri</Text>
      </View>
      <View style={styles.View_362_95} />
      <View style={styles.View_362_96} />
      <View style={styles.View_362_97} />
      <View style={styles.View_362_98} />
      <View style={styles.View_362_99} />
      <View style={styles.View_362_100} />
      <View style={styles.View_362_101} />
      <View style={styles.View_362_102} />
      <View style={styles.View_362_103} />
      <View style={styles.View_362_104}>
        <Text style={styles.Text_362_104}>
          a. Ruang Belajar &amp; Kamar Istirahat b. Makan dan minum c. Topi dan
          Pakaian Olahraga d. Topi dan Kaos dalam PDL e. Buku dan alat tulis f.
          Obat-obatan ringan
        </Text>
      </View>
      <View style={styles.View_362_105}>
        <Text style={styles.Text_362_105}>
          a. Pengecekan Suhu Tubuh b. Physical Distancing c. Memakai Masker d.
          Memakai Hand sanitizer dan mencuci tangan
        </Text>
      </View>
      <View style={styles.View_362_106}>
        <Text style={styles.Text_362_106}>
          a. Ijazah / sertifikat dari Polda Jatim b. Skep Lulus &amp; Daftar
          Nilai c. Pin Gada Pratama d. Kartu Tanda Anggota Satpam
        </Text>
      </View>
      <View style={styles.View_362_107}>
        <Text style={styles.Text_362_107}>Pembayaran</Text>
      </View>
      <View style={styles.View_362_108}>
        <Text style={styles.Text_362_108}>
          Biaya Pelatihan : Rp.4.000.000,- Pembayaran Via Transfer ke REK. BANK
          MANDIRI KCP MULYOSARI PT SHELTER NUSANTARA no.ac.1400088888251
        </Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("766.5300546448087%") },
  View_338_474: {
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
  View_338_475: {
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
  View_338_476: {
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
  View_338_477: {
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
  ImageBackground_338_478: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111143%")
  },
  ImageBackground_338_480: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444443%")
  },
  View_338_482: {
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
  View_338_483: {
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
  ImageBackground_338_484: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_338_485: {
    width: wp("0.5033365885416666%"),
    height: hp("0.9650058433657787%"),
    top: hp("0.9344048838797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5816650390624858%")
  },
  ImageBackground_338_486: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_338_490: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6527777777777715%")
  },
  View_338_493: {
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
  View_338_494: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_338_494: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_338_495: {
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
  View_338_496: {
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
  View_338_497: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_338_497: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_338_498: {
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
  View_338_499: {
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
  View_338_500: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_338_500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_338_501: {
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
  View_338_502: {
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
  View_338_503: {
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
  View_338_504: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_338_504: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_338_505: {
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
  ImageBackground_338_506: {
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
  View_338_507: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%"),
    top: hp("9.01639344262295%")
  },
  Text_338_507: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_338_508: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.66666666666667%"),
    top: hp("9.01639344262295%")
  },
  Text_338_508: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_338_509: {
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
  View_338_510: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_338_510: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_338_511: {
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
  View_338_512: {
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
  View_338_513: {
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
  View_338_514: {
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
  ImageBackground_338_515: {
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
  View_338_516: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("21.038251366120107%")
  },
  Text_338_516: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_517: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.888888888888886%"),
    top: hp("6.010928961748618%")
  },
  Text_338_517: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_518: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("10.109289617486183%")
  },
  Text_338_518: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_519: {
    width: wp("8.958333333333334%"),
    minWidth: wp("8.958333333333334%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("14.207650273223976%")
  },
  Text_338_519: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_520: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("26.775956284152926%")
  },
  Text_338_520: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_521: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("30.874316939890605%")
  },
  Text_338_521: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_522: {
    width: wp("11.527777777777779%"),
    minWidth: wp("11.527777777777779%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("34.972677595628284%")
  },
  Text_338_522: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_523: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("0%")
  },
  Text_338_523: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_524: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("0%")
  },
  Text_338_524: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_525: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("18.715846994535468%")
  },
  Text_338_525: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_526: {
    width: wp("14.374999999999998%"),
    minWidth: wp("14.374999999999998%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("56.14754098360652%")
  },
  Text_338_526: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_527: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("42.21311475409823%")
  },
  Text_338_527: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_528: {
    width: wp("9.86111111111111%"),
    minWidth: wp("9.86111111111111%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("49.04371584699447%")
  },
  Text_338_528: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_529: {
    width: wp("28.47222222222222%"),
    minWidth: wp("28.47222222222222%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.295081967213036%")
  },
  Text_338_529: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_530: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.46994535519116%")
  },
  Text_338_530: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_338_531: {
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
  ImageBackground_338_532: {
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
  ImageBackground_338_533: {
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
  ImageBackground_338_534: {
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
  ImageBackground_338_538: {
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
  ImageBackground_338_539: {
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
  ImageBackground_338_540: {
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
  ImageBackground_338_541: {
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
  ImageBackground_338_542: {
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
  ImageBackground_338_543: {
    width: wp("2.7083333333333335%"),
    height: hp("4.781420765027322%"),
    top: hp("4.918032786885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.41666666666667%")
  },
  ImageBackground_338_548: {
    width: wp("2.569444444444444%"),
    height: hp("5.05464480874317%"),
    top: hp("4.644808743169278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.013888888888886%")
  },
  ImageBackground_338_552: {
    width: wp("2.569444444444444%"),
    height: hp("4.781420765027322%"),
    top: hp("4.918032786885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.611111111111114%")
  },
  ImageBackground_338_554: {
    width: wp("3.680555555555556%"),
    height: hp("6.967213114754098%"),
    top: hp("3.8251366120217654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.95833333333334%")
  },
  View_338_557: {
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
  View_338_558: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.16666666666667%"),
    top: hp("23.49726775956276%")
  },
  Text_338_558: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_559: {
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
  ImageBackground_338_560: {
    width: wp("1.5277777777777777%"),
    height: hp("3.0054644808743167%"),
    top: hp("23.63387978142066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.48611111111111%")
  },
  ImageBackground_338_562: {
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
  ImageBackground_338_563: {
    width: wp("1.3194444444444444%"),
    height: hp("2.5923911339598273%"),
    top: hp("1.8678758965163935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%")
  },
  View_338_565: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.79166666666667%"),
    top: hp("1.2295081967213115%")
  },
  Text_338_565: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_566: {
    width: wp("1.3245985243055556%"),
    height: hp("5.374150719147562%"),
    top: hp("11.654579704576502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("218.95833333333331%")
  },
  ImageBackground_338_567: {
    width: wp("1.3245985243055556%"),
    height: hp("5.374150719147562%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_338_571: {
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
  View_338_572: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_338_572: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_338_573: {
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
  ImageBackground_338_574: {
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
  View_338_575: {
    width: wp("100.62500000000001%"),
    minWidth: wp("100.62500000000001%"),
    height: hp("69.67213114754098%"),
    minHeight: hp("69.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4166666666666667%"),
    top: hp("623.9071038251367%"),
    backgroundColor: "rgba(14, 99, 180, 1)"
  },
  View_338_576: {
    width: wp("33.88888888888889%"),
    minWidth: wp("33.88888888888889%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%"),
    top: hp("630.4644808743169%")
  },
  Text_338_576: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_338_577: {
    width: wp("21.59722222222222%"),
    minWidth: wp("21.59722222222222%"),
    height: hp("52.18579234972678%"),
    minHeight: hp("52.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.638888888888889%"),
    top: hp("641.3934426229508%")
  },
  View_338_578: {
    width: wp("33.19444444444444%"),
    minWidth: wp("33.19444444444444%"),
    height: hp("30.46448087431694%"),
    minHeight: hp("30.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93055555555556%"),
    top: hp("648.4972677595629%")
  },
  View_338_579: {
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
  View_338_580: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.93989071038243%")
  },
  View_338_581: {
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
  ImageBackground_338_582: {
    width: wp("0.8333334657880995%"),
    minWidth: wp("0.8333334657880995%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4861111111111%"),
    top: hp("2.185792349726853%")
  },
  View_338_583: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222214%"),
    top: hp("1.5027322404372399%")
  },
  Text_338_583: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_338_584: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%"),
    top: hp("26.229508196721326%")
  },
  Text_338_584: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_338_585: {
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
  View_338_586: {
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
  View_338_587: {
    width: wp("15.76388888888889%"),
    minWidth: wp("15.76388888888889%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.15277777777777%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_338_588: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: hp("1.775956284152926%")
  },
  Text_338_588: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_338_589: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444443%"),
    top: hp("1.775956284152926%")
  },
  Text_338_589: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_338_590: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191157%")
  },
  View_338_591: {
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
  View_338_592: {
    width: wp("15.76388888888889%"),
    minWidth: wp("15.76388888888889%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.15277777777777%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_338_593: {
    width: wp("2.430555555555556%"),
    minWidth: wp("2.430555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222214%"),
    top: hp("1.7759562841530396%")
  },
  Text_338_593: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_338_594: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444443%"),
    top: hp("1.7759562841530396%")
  },
  Text_338_594: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_338_595: {
    width: wp("21.73611111111111%"),
    minWidth: wp("21.73611111111111%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.805555555555557%"),
    top: hp("641.8032786885246%")
  },
  Text_338_595: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_596: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.34722222222222%"),
    top: hp("660.1092896174864%")
  },
  Text_338_596: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_597: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.34722222222222%"),
    top: hp("668.1693989071039%")
  },
  Text_338_597: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_598: {
    width: wp("2.430555555555556%"),
    minWidth: wp("2.430555555555556%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.361111111111114%"),
    top: hp("659.8360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_338_599: {
    width: wp("2.4305574099222818%"),
    height: hp("4.781427539762904%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_338_600: {
    width: wp("2.4305574099222818%"),
    height: hp("4.781427539762904%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_338_602: {
    width: wp("2.361111111111111%"),
    height: hp("4.644808743169399%"),
    top: hp("667.0765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.361111111111114%")
  },
  View_338_611: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.77777777777778%"),
    top: hp("114.75409836065573%")
  },
  View_338_612: {
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
  View_338_613: {
    width: wp("10.625%"),
    minWidth: wp("10.625%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("2.185792349726782%")
  },
  View_338_614: {
    width: wp("10.625%"),
    minWidth: wp("10.625%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_338_615: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  Text_338_615: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_338_616: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.611111111111107%"),
    top: hp("0%")
  },
  View_338_619: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.708333333333336%"),
    top: hp("109.97267759562841%")
  },
  View_349_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("81.9672131147541%"),
    minHeight: hp("81.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.846994535519126%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_362_8: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.736111111111114%"),
    top: hp("109.97267759562841%")
  },
  View_362_9: {
    width: wp("53.95833333333333%"),
    minWidth: wp("53.95833333333333%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: hp("116.80327868852459%")
  },
  Text_362_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_10: {
    width: wp("29.930555555555554%"),
    minWidth: wp("29.930555555555554%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.541666666666664%"),
    top: hp("108.19672131147541%")
  },
  Text_362_10: {
    color: "rgba(14, 99, 180, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_362_11: {
    width: wp("77.36111111111111%"),
    minWidth: wp("77.36111111111111%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555555%"),
    top: hp("607.5136612021857%")
  },
  View_362_12: {
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
  View_362_13: {
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
  View_362_14: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.694444444444445%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 118, 179, 1)"
  },
  ImageBackground_362_15: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("2.049180327868953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.263888888888886%")
  },
  ImageBackground_362_17: {
    width: wp("1.597222222222222%"),
    height: hp("3.1420765027322406%"),
    top: hp("2.322404371584753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.291666666666666%")
  },
  View_362_19: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555555%"),
    top: hp("2.322404371584753%")
  },
  Text_362_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_20: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("2.322404371584753%")
  },
  Text_362_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_21: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.361111111111114%"),
    top: hp("2.322404371584753%")
  },
  Text_362_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_362_22: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.513888888888886%")
  },
  View_362_24: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.08333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 211, 102, 1)"
  },
  View_362_25: {
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
  View_362_26: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.375%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_362_27: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_362_28: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_362_30: {
    width: wp("5.763888888888889%"),
    minWidth: wp("5.763888888888889%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77777777777777%"),
    top: hp("2.322404371584753%")
  },
  Text_362_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_31: {
    width: wp("5.763888888888889%"),
    minWidth: wp("5.763888888888889%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.51388888888889%"),
    top: hp("2.185792349726853%")
  },
  Text_362_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_32: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.55555555555556%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_362_33: {
    width: wp("0.5852866172790527%"),
    height: hp("1.486509224104751%"),
    top: hp("0.9665567366803316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1508517795138857%")
  },
  ImageBackground_362_34: {
    width: wp("0.5852866172790527%"),
    height: hp("1.486509224104751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_362_36: {
    width: wp("0.5852864848242866%"),
    height: hp("1.486509224104751%"),
    top: hp("0.9665567366803316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_362_37: {
    width: wp("0.5852864848242866%"),
    height: hp("1.486509224104751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_362_39: {
    width: wp("1.7296008268992105%"),
    height: hp("1.3025102719583146%"),
    top: hp("0.5336407103825422%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0032552083333285964%")
  },
  ImageBackground_362_40: {
    width: wp("1.7296008268992105%"),
    height: hp("1.3025102719583146%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_362_42: {
    width: wp("1.7291669050852456%"),
    height: hp("1.027791487063215%"),
    top: hp("1.853867827868953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0034586588541714036%")
  },
  ImageBackground_362_43: {
    width: wp("1.7291669050852456%"),
    height: hp("1.027791487063215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_362_45: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("54.91803278688525%"),
    minHeight: hp("54.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("148.9071038251366%")
  },
  View_362_46: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("54.91803278688525%"),
    minHeight: hp("54.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_362_47: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("54.91803278688525%"),
    minHeight: hp("54.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 99, 180, 1)"
  },
  View_362_48: {
    width: wp("18.125%"),
    minWidth: wp("18.125%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.38888888888889%"),
    top: hp("4.644808743169392%")
  },
  Text_362_48: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_49: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("5.464480874316962%")
  },
  Text_362_49: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_50: {
    width: wp("20.13888888888889%"),
    minWidth: wp("20.13888888888889%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.48611111111111%"),
    top: hp("43.98907103825138%")
  },
  Text_362_50: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_51: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.416666666666668%"),
    top: hp("32.65027322404373%")
  },
  Text_362_51: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_52: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.51388888888889%"),
    top: hp("32.65027322404373%")
  },
  Text_362_52: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_53: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.98611111111111%"),
    top: hp("32.65027322404373%")
  },
  Text_362_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_54: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.11111111111111%"),
    top: hp("32.65027322404373%")
  },
  Text_362_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_362_55: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.51388888888889%"),
    top: hp("18.44262295081967%")
  },
  View_362_56: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%"),
    top: hp("18.44262295081967%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_362_57: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.59722222222222%"),
    top: hp("18.44262295081967%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_362_58: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.208333333333336%"),
    top: hp("18.44262295081967%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_362_59: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.11111111111111%"),
    top: hp("21.721311475409834%")
  },
  Text_362_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_60: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.65277777777778%"),
    top: hp("21.721311475409834%")
  },
  Text_362_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_61: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.47222222222222%"),
    top: hp("21.721311475409834%")
  },
  Text_362_61: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_62: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.736111111111114%"),
    top: hp("21.721311475409834%")
  },
  Text_362_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_362_63: {
    width: wp("32.56944444444444%"),
    minWidth: wp("32.56944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("12.841530054644835%")
  },
  ImageBackground_362_64: {
    width: wp("32.56944444444444%"),
    minWidth: wp("32.56944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("18.44262295081967%")
  },
  ImageBackground_362_65: {
    width: wp("32.56944444444444%"),
    minWidth: wp("32.56944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("18.44262295081967%")
  },
  ImageBackground_362_66: {
    width: wp("32.56944444444444%"),
    minWidth: wp("32.56944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("24.04371584699456%")
  },
  ImageBackground_362_67: {
    width: wp("32.56944444444444%"),
    minWidth: wp("32.56944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("24.04371584699456%")
  },
  ImageBackground_362_68: {
    width: wp("32.56944444444444%"),
    minWidth: wp("32.56944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("29.644808743169392%")
  },
  ImageBackground_362_69: {
    width: wp("32.56944444444444%"),
    minWidth: wp("32.56944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("35.24590163934428%")
  },
  ImageBackground_362_70: {
    width: wp("32.56944444444444%"),
    minWidth: wp("32.56944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("29.644808743169392%")
  },
  ImageBackground_362_71: {
    width: wp("32.56944444444444%"),
    minWidth: wp("32.56944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("35.24590163934428%")
  },
  ImageBackground_362_72: {
    width: wp("32.56944444444444%"),
    minWidth: wp("32.56944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("40.846994535519144%")
  },
  ImageBackground_362_73: {
    width: wp("32.56944444444444%"),
    minWidth: wp("32.56944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("40.846994535519144%")
  },
  ImageBackground_362_74: {
    width: wp("32.56944444444444%"),
    minWidth: wp("32.56944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("46.448087431694006%")
  },
  View_362_75: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77777777777778%"),
    top: hp("14.480874316939918%")
  },
  Text_362_75: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_76: {
    width: wp("9.23611111111111%"),
    minWidth: wp("9.23611111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.84722222222222%"),
    top: hp("20.08196721311475%")
  },
  Text_362_76: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_77: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.84722222222222%"),
    top: hp("25.68306010928964%")
  },
  Text_362_77: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_78: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.84722222222222%"),
    top: hp("31.284153005464475%")
  },
  Text_362_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_79: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.84722222222222%"),
    top: hp("36.885245901639365%")
  },
  Text_362_79: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_80: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.84722222222222%"),
    top: hp("42.48633879781423%")
  },
  Text_362_80: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_81: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("14.480874316939918%")
  },
  Text_362_81: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_82: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("19.94535519125685%")
  },
  Text_362_82: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_83: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("25.546448087431713%")
  },
  Text_362_83: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_84: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("31.147540983606547%")
  },
  Text_362_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_85: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("36.74863387978144%")
  },
  Text_362_85: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_86: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("42.34972677595627%")
  },
  Text_362_86: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_87: {
    width: wp("53.40277777777778%"),
    minWidth: wp("53.40277777777778%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.166666666666668%"),
    top: hp("132.37704918032787%")
  },
  Text_362_87: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_362_88: {
    width: wp("46.18055555555556%"),
    minWidth: wp("46.18055555555556%"),
    minHeight: hp("81.01092896174863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("219.672131147541%")
  },
  Text_362_88: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_89: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("212.56830601092895%")
  },
  Text_362_89: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_90: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("288.5245901639344%")
  },
  Text_362_90: {
    color: "rgba(14, 99, 180, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_91: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("373.4972677595629%")
  },
  Text_362_91: {
    color: "rgba(14, 99, 180, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_92: {
    width: wp("36.666666666666664%"),
    minWidth: wp("36.666666666666664%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("336.88524590163934%")
  },
  Text_362_92: {
    color: "rgba(14, 99, 180, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_93: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("52.86885245901639%"),
    minHeight: hp("52.86885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("409.42622950819674%"),
    backgroundColor: "rgba(237, 237, 237, 1)"
  },
  View_362_94: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.25%"),
    top: hp("468.03278688524597%")
  },
  Text_362_94: {
    color: "rgba(14, 99, 180, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_95: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("478.8251366120218%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_362_96: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("521.0382513661202%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_362_97: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("561.8852459016393%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_362_98: {
    width: wp("24.23611111111111%"),
    minWidth: wp("24.23611111111111%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("478.8251366120218%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_362_99: {
    width: wp("24.23611111111111%"),
    minWidth: wp("24.23611111111111%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("521.0382513661202%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_362_100: {
    width: wp("24.23611111111111%"),
    minWidth: wp("24.23611111111111%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("561.8852459016393%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_362_101: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.05555555555556%"),
    top: hp("478.8251366120218%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_362_102: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.05555555555556%"),
    top: hp("521.0382513661202%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_362_103: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.05555555555556%"),
    top: hp("561.8852459016393%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_362_104: {
    width: wp("25.90277777777778%"),
    minWidth: wp("25.90277777777778%"),
    minHeight: hp("62.568306010928964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%"),
    top: hp("293.1693989071038%")
  },
  Text_362_104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_105: {
    width: wp("37.15277777777778%"),
    minWidth: wp("37.15277777777778%"),
    minHeight: hp("53.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.972222222222221%"),
    top: hp("344.53551912568304%")
  },
  Text_362_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_106: {
    width: wp("27.500000000000004%"),
    minWidth: wp("27.500000000000004%"),
    minHeight: hp("30.191256830601095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("379.23497267759564%")
  },
  Text_362_106: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_107: {
    width: wp("14.097222222222221%"),
    minWidth: wp("14.097222222222221%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.291666666666664%"),
    top: hp("417.62295081967216%")
  },
  Text_362_107: {
    color: "rgba(14, 99, 180, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_108: {
    width: wp("38.75%"),
    minWidth: wp("38.75%"),
    minHeight: hp("18.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.236111111111114%"),
    top: hp("428.551912568306%")
  },
  Text_362_108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
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
