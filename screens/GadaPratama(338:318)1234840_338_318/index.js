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
      <View style={styles.View_338_323} />
      <View style={styles.View_338_324} />
      <View style={styles.View_338_325} />
      <View style={styles.View_338_326}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8437/7632/afb2bd31f93bd029d201bd055e617468"
          }}
          style={styles.ImageBackground_338_327}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d5/0368/0eff6fc75931d0d77716b6fc9af38485"
          }}
          style={styles.ImageBackground_338_329}
        />
        <View style={styles.View_338_331}>
          <View style={styles.View_338_332} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eeca/a031/38f0b0d8d94815a6f7719c10d38609c4"
            }}
            style={styles.ImageBackground_338_333}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5837/1c2e/a9153adac1d37af38a59fdfb8fd73a5b"
            }}
            style={styles.ImageBackground_338_334}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93ea/01d6/816793a846cd8495076b572c07e18fae"
          }}
          style={styles.ImageBackground_338_335}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beec/9652/0e847db693027e73c509c3d6da637b59"
          }}
          style={styles.ImageBackground_338_339}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("191_36"))
        }
      >
        <View style={styles.View_338_342}>
          <View style={styles.View_338_343}>
            <Text style={styles.Text_338_343}>Layanan Kami </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33c0/509b/3256009b5ab7497a8fc0d91e8a3a444a"
            }}
            style={styles.ImageBackground_338_344}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_338_345}>
        <View style={styles.View_338_346}>
          <Text style={styles.Text_338_346}>Karir</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_69"))
        }
      >
        <View style={styles.View_338_347}>
          <View style={styles.View_338_348}>
            <View style={styles.View_338_349}>
              <Text style={styles.Text_338_349}>Investasi</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/c3f0/ef3eb252067614865e8264d3b1b439e1"
              }}
              style={styles.ImageBackground_338_350}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_8"))
        }
      >
        <View style={styles.View_338_351}>
          <View style={styles.View_338_352}>
            <View style={styles.View_338_353}>
              <Text style={styles.Text_338_353}>PELATIHAN</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/c3f0/ef3eb252067614865e8264d3b1b439e1"
              }}
              style={styles.ImageBackground_338_354}
            />
          </View>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a992/9126/d51233806dc98d5de24b022d9ec984fc"
        }}
        style={styles.ImageBackground_338_355}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_125"))
        }
      >
        <View style={styles.View_338_356}>
          <Text style={styles.Text_338_356}>Artikel</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_802"))
        }
      >
        <View style={styles.View_338_357}>
          <Text style={styles.Text_338_357}>contact</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("173_2"))
        }
      >
        <View style={styles.View_338_358}>
          <View style={styles.View_338_359}>
            <Text style={styles.Text_338_359}>Profil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
            }}
            style={styles.ImageBackground_338_360}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_338_361}>
        <View style={styles.View_338_362} />
        <View style={styles.View_338_363}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d40/cf8b/1e423a1d2ed75428500e7fb3cd800b18"
            }}
            style={styles.ImageBackground_338_364}
          />
          <View style={styles.View_338_365}>
            <Text style={styles.Text_338_365}>About Us</Text>
          </View>
          <View style={styles.View_338_366}>
            <Text style={styles.Text_338_366}>Gada Utama</Text>
          </View>
          <View style={styles.View_338_367}>
            <Text style={styles.Text_338_367}>Gada Madya</Text>
          </View>
          <View style={styles.View_338_368}>
            <Text style={styles.Text_338_368}>Gada Pratama</Text>
          </View>
          <View style={styles.View_338_369}>
            <Text style={styles.Text_338_369}>Our Service</Text>
          </View>
          <View style={styles.View_338_370}>
            <Text style={styles.Text_338_370}>Our Partner</Text>
          </View>
          <View style={styles.View_338_371}>
            <Text style={styles.Text_338_371}>Our Vision &amp; Mission</Text>
          </View>
          <View style={styles.View_338_372}>
            <Text style={styles.Text_338_372}>Pelatihan</Text>
          </View>
          <View style={styles.View_338_373}>
            <Text style={styles.Text_338_373}>Follow Us :</Text>
          </View>
          <View style={styles.View_338_374}>
            <Text style={styles.Text_338_374}>Suscribe </Text>
          </View>
          <View style={styles.View_338_375}>
            <Text style={styles.Text_338_375}>Lowongan Kerja</Text>
          </View>
          <View style={styles.View_338_376}>
            <Text style={styles.Text_338_376}>Tips &amp; News</Text>
          </View>
          <View style={styles.View_338_377}>
            <Text style={styles.Text_338_377}>Contact Us</Text>
          </View>
          <View style={styles.View_338_378}>
            <Text style={styles.Text_338_378}>
              Kepercayaan yang telah diberikan customer kepada kami merupakan
              komitmen bagi kami yang wajib dijalankan dengan integritas,
              kreatifitas dan kerja sama yang merupakan pedoman kami dalam
              menjalankan bisnis ini.
            </Text>
          </View>
          <View style={styles.View_338_379}>
            <Text style={styles.Text_338_379}>
              Head Office : JL. Semampir Selatan V A NO.18 Surabaya 60119
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_338_380}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_338_381}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_338_382}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df61/ace3/bf82e3652bf326b512e8925e929670d6"
            }}
            style={styles.ImageBackground_338_383}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_338_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_338_388}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_338_389}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_338_390}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e354/3c03/f5c08e580aa26655282d3ef27b8d5cad"
            }}
            style={styles.ImageBackground_338_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c7b/950a/9f7b792573bb66294649e70ac743332d"
            }}
            style={styles.ImageBackground_338_392}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a09/8813/fb8b4de80808c5b29a60d270849c2af6"
            }}
            style={styles.ImageBackground_338_397}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d52/69b3/d56b63754ba82a2aaac61bf1432e337b"
            }}
            style={styles.ImageBackground_338_401}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dea/5d57/396ef57f766f21f878be1059a2afe8ae"
            }}
            style={styles.ImageBackground_338_403}
          />
          <View style={styles.View_338_406} />
          <View style={styles.View_338_407}>
            <Text style={styles.Text_338_407}>email</Text>
          </View>
          <View style={styles.View_338_408} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdc2/6cf6/9c7d3ba34b589d9e5bca0695301915b3"
            }}
            style={styles.ImageBackground_338_409}
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
          style={styles.ImageBackground_338_411}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/68d8/50d1cf2831aa3420a696872a80bffb0f"
        }}
        style={styles.ImageBackground_338_412}
      />
      <View style={styles.View_338_414}>
        <Text style={styles.Text_338_414}>ID</Text>
      </View>
      <View style={styles.View_338_415}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffa0/b554/42148e2627afa2179cb22492583b77fc"
          }}
          style={styles.ImageBackground_338_416}
        />
      </View>
      <View style={styles.View_338_420}>
        <View style={styles.View_338_421}>
          <Text style={styles.Text_338_421}>Profil</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
          }}
          style={styles.ImageBackground_338_422}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d40/cf8b/1e423a1d2ed75428500e7fb3cd800b18"
        }}
        style={styles.ImageBackground_338_423}
      />
      <View style={styles.View_338_424} />
      <View style={styles.View_338_425}>
        <Text style={styles.Text_338_425}>GET A FREE CONSULTATION</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a33/9f66/c07464b1d7d8dcc62140312e89dd2c5a"
        }}
        style={styles.ImageBackground_338_426}
      />
      <View style={styles.View_338_427}>
        <View style={styles.View_338_428} />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("239_3"))
          }
        >
          <View style={styles.View_338_429}>
            <View style={styles.View_338_430} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/b7d6/417bdbf9ba8608d34aa65a29c915dc55"
              }}
              style={styles.ImageBackground_338_431}
            />
            <View style={styles.View_338_432}>
              <Text style={styles.Text_338_432}>Service Required</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_338_433}>
          <Text style={styles.Text_338_433}>Submit</Text>
        </View>
        <View style={styles.View_338_434}>
          <View style={styles.View_338_435} />
          <View style={styles.View_338_436} />
          <View style={styles.View_338_437}>
            <Text style={styles.Text_338_437}>Nama</Text>
          </View>
          <View style={styles.View_338_438}>
            <Text style={styles.Text_338_438}>Company</Text>
          </View>
        </View>
        <View style={styles.View_338_439}>
          <View style={styles.View_338_440} />
          <View style={styles.View_338_441} />
          <View style={styles.View_338_442}>
            <Text style={styles.Text_338_442}>Email</Text>
          </View>
          <View style={styles.View_338_443}>
            <Text style={styles.Text_338_443}>Phone</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_338_444}>
        <Text style={styles.Text_338_444}>We’re ready to help you today !</Text>
      </View>
      <View style={styles.View_338_445}>
        <Text style={styles.Text_338_445}>08112345687</Text>
      </View>
      <View style={styles.View_338_446}>
        <Text style={styles.Text_338_446}>info-sn@shelternusantara.co.id</Text>
      </View>
      <View style={styles.View_338_447}>
        <View style={styles.View_338_448}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d42/8c3c/e67e843680037a9862803255ff9d951e"
            }}
            style={styles.ImageBackground_338_449}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc64/5f76/1e2c974a88108017f858046f87062b67"
        }}
        style={styles.ImageBackground_338_451}
      />
      <View style={styles.View_338_468} />
      <View style={styles.View_341_56} />
      <View style={styles.View_341_57}>
        <Text style={styles.Text_341_57}>
          Pelatihan dasar Satuan Pengamanan bagi anggota/calon anggota Satuan
          Pengamanan yang belum pernah mengikuti pelatihan di bidang Satuan
          Pengamanan.
        </Text>
      </View>
      <View style={styles.View_341_58}>
        <Text style={styles.Text_341_58}>Pelatihan GADA PRATAMA</Text>
      </View>
      <View style={styles.View_341_87}>
        <View style={styles.View_341_88} />
        <View style={styles.View_341_89} />
        <View style={styles.View_341_90} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7981/de62/a8c81b0d6cf30b847b43068859b0ebff"
          }}
          style={styles.ImageBackground_341_91}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f2a/8d77/d180d194bd021e08a23884008070555c"
          }}
          style={styles.ImageBackground_341_93}
        />
        <View style={styles.View_341_95}>
          <Text style={styles.Text_341_95}>Facebook</Text>
        </View>
        <View style={styles.View_341_96}>
          <Text style={styles.Text_341_96}>Linkedin</Text>
        </View>
        <View style={styles.View_341_97}>
          <Text style={styles.Text_341_97}>Twitter</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fa2/cc45/0ef351c7c80603689ef0f69aeb4536ed"
          }}
          style={styles.ImageBackground_341_98}
        />
        <View style={styles.View_341_100} />
        <View style={styles.View_341_101} />
        <View style={styles.View_341_102}>
          <View style={styles.View_341_103}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85cf/441a/f2b48dedf41a2428da6a265edce837da"
              }}
              style={styles.ImageBackground_341_104}
            />
          </View>
        </View>
        <View style={styles.View_341_106}>
          <Text style={styles.Text_341_106}>WhatsApp</Text>
        </View>
        <View style={styles.View_341_107}>
          <Text style={styles.Text_341_107}>Email</Text>
        </View>
        <View style={styles.View_341_108}>
          <View style={styles.View_341_109}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048e/d39e/dc30f1e43afa5d73d5e19dce63aede4a"
              }}
              style={styles.ImageBackground_341_110}
            />
          </View>
          <View style={styles.View_341_112}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a27/b777/62453600a0658e0f998fd598785345a9"
              }}
              style={styles.ImageBackground_341_113}
            />
          </View>
          <View style={styles.View_341_115}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/718f/dfbd/780b1d6b251722c2695e8b87446950a3"
              }}
              style={styles.ImageBackground_341_116}
            />
          </View>
          <View style={styles.View_341_118}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b33d/6c69/c33bb694b3accab734d3186039e0f06e"
              }}
              style={styles.ImageBackground_341_119}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_341_162}>
        <View style={styles.View_341_161}>
          <View style={styles.View_341_59} />
          <View style={styles.View_341_67}>
            <Text style={styles.Text_341_67}>
              Pelatihan Gada Pratama Selanjutnya
            </Text>
          </View>
          <View style={styles.View_341_121}>
            <Text style={styles.Text_341_121}>Jadwal</Text>
          </View>
          <View style={styles.View_341_69}>
            <Text style={styles.Text_341_69}>25 Mei 2021 | Angkatan 44</Text>
          </View>
          <View style={styles.View_341_75}>
            <Text style={styles.Text_341_75}>Bulan</Text>
          </View>
          <View style={styles.View_341_76}>
            <Text style={styles.Text_341_76}>Hari</Text>
          </View>
          <View style={styles.View_341_77}>
            <Text style={styles.Text_341_77}>Jam</Text>
          </View>
          <View style={styles.View_341_78}>
            <Text style={styles.Text_341_78}>Menit</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c64c/6388/aab797c5a7379cb8b5764052afb819c0"
            }}
            style={styles.ImageBackground_341_70}
          />
          <View style={styles.View_341_71} />
          <View style={styles.View_341_72} />
          <View style={styles.View_341_73} />
          <View style={styles.View_341_79}>
            <Text style={styles.Text_341_79}>00</Text>
          </View>
          <View style={styles.View_341_80}>
            <Text style={styles.Text_341_80}>03</Text>
          </View>
          <View style={styles.View_341_81}>
            <Text style={styles.Text_341_81}>11</Text>
          </View>
          <View style={styles.View_341_82}>
            <Text style={styles.Text_341_82}>15</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_341_124}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_341_137}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_341_135}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_341_141}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_341_138}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_341_145}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_341_149}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_341_142}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_341_146}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_341_155}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_341_150}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/30a2/fc32f9f112e17603acba8b0f1358e882"
            }}
            style={styles.ImageBackground_341_156}
          />
          <View style={styles.View_341_134}>
            <Text style={styles.Text_341_134}>25 Mei - 05 Juni 2021</Text>
          </View>
          <View style={styles.View_341_139}>
            <Text style={styles.Text_341_139}>24 Juni - 04 Juli 2021</Text>
          </View>
          <View style={styles.View_341_143}>
            <Text style={styles.Text_341_143}>27 Juli - 07 Agustus 2021</Text>
          </View>
          <View style={styles.View_341_147}>
            <Text style={styles.Text_341_147}>27 Juli - 07 Agustus 2021</Text>
          </View>
          <View style={styles.View_341_151}>
            <Text style={styles.Text_341_151}>27 Juli - 07 Agustus 2021</Text>
          </View>
          <View style={styles.View_341_157}>
            <Text style={styles.Text_341_157}>27 Juli - 07 Agustus 2021</Text>
          </View>
          <View style={styles.View_341_136}>
            <Text style={styles.Text_341_136}>Gada Pratama Angkatan - 44</Text>
          </View>
          <View style={styles.View_341_140}>
            <Text style={styles.Text_341_140}>Gada Pratama Angkatan - 45</Text>
          </View>
          <View style={styles.View_341_144}>
            <Text style={styles.Text_341_144}>Gada Pratama Angkatan - 46</Text>
          </View>
          <View style={styles.View_341_148}>
            <Text style={styles.Text_341_148}>Gada Pratama Angkatan - 47</Text>
          </View>
          <View style={styles.View_341_152}>
            <Text style={styles.Text_341_152}>Gada Pratama Angkatan - 48</Text>
          </View>
          <View style={styles.View_341_158}>
            <Text style={styles.Text_341_158}>Gada Pratama Angkatan - 49</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_341_160}>
        <Text style={styles.Text_341_160}>
          a. Surat Izin Kapolri Nomor : SI/ 3021 /VI/YAN.2.14./2020 tentang Izin
          Operasiona Badan Usaha Jasa Pengamanan Bidang Pelatihan Keamanan b.
          Sertifikasi ISO 9001 : 2015 No.50200071 QM15 tentang Sistem Manajemen
          Mutu{" "}
        </Text>
      </View>
      <View style={styles.View_341_163}>
        <Text style={styles.Text_341_163}>
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
      <View style={styles.View_341_169}>
        <Text style={styles.Text_341_169}>Persyaratan</Text>
      </View>
      <View style={styles.View_341_170}>
        <Text style={styles.Text_341_170}>Fasilitas</Text>
      </View>
      <View style={styles.View_347_0}>
        <Text style={styles.Text_347_0}>Tanda Kelulusan</Text>
      </View>
      <View style={styles.View_341_171}>
        <Text style={styles.Text_341_171}>Menerapkan Protokol Kesehatan</Text>
      </View>
      <View style={styles.View_347_6} />
      <View style={styles.View_347_8}>
        <Text style={styles.Text_347_8}>Galeri</Text>
      </View>
      <View style={styles.View_347_9} />
      <View style={styles.View_347_14} />
      <View style={styles.View_347_17} />
      <View style={styles.View_347_12} />
      <View style={styles.View_347_15} />
      <View style={styles.View_347_18} />
      <View style={styles.View_347_13} />
      <View style={styles.View_347_16} />
      <View style={styles.View_347_19} />
      <View style={styles.View_341_168}>
        <Text style={styles.Text_341_168}>
          a. Ruang Belajar &amp; Kamar Istirahat b. Makan dan minum c. Topi dan
          Pakaian Olahraga d. Topi dan Kaos dalam PDL e. Buku dan alat tulis f.
          Obat-obatan ringan
        </Text>
      </View>
      <View style={styles.View_341_172}>
        <Text style={styles.Text_341_172}>
          a. Pengecekan Suhu Tubuh b. Physical Distancing c. Memakai Masker d.
          Memakai Hand sanitizer dan mencuci tangan
        </Text>
      </View>
      <View style={styles.View_347_1}>
        <Text style={styles.Text_347_1}>
          a. Ijazah / sertifikat dari Polda Jatim b. Skep Lulus &amp; Daftar
          Nilai c. Pin Gada Pratama d. Kartu Tanda Anggota Satpam
        </Text>
      </View>
      <View style={styles.View_347_2}>
        <Text style={styles.Text_347_2}>Pembayaran</Text>
      </View>
      <View style={styles.View_347_5}>
        <Text style={styles.Text_347_5}>
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
  View_338_323: {
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
  View_338_324: {
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
  View_338_325: {
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
  View_338_326: {
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
  ImageBackground_338_327: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111143%")
  },
  ImageBackground_338_329: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444443%")
  },
  View_338_331: {
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
  View_338_332: {
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
  ImageBackground_338_333: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_338_334: {
    width: wp("0.5033365885416666%"),
    height: hp("0.9650058433657787%"),
    top: hp("0.9344048838797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5816650390624858%")
  },
  ImageBackground_338_335: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_338_339: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6527777777777715%")
  },
  View_338_342: {
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
  View_338_343: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_338_343: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_338_344: {
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
  View_338_345: {
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
  View_338_346: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_338_346: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_338_347: {
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
  View_338_348: {
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
  View_338_349: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_338_349: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_338_350: {
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
  View_338_351: {
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
  View_338_352: {
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
  View_338_353: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_338_353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_338_354: {
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
  ImageBackground_338_355: {
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
  View_338_356: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%"),
    top: hp("9.01639344262295%")
  },
  Text_338_356: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_338_357: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.66666666666667%"),
    top: hp("9.01639344262295%")
  },
  Text_338_357: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_338_358: {
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
  View_338_359: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_338_359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_338_360: {
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
  View_338_361: {
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
  View_338_362: {
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
  View_338_363: {
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
  ImageBackground_338_364: {
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
  View_338_365: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("21.038251366120107%")
  },
  Text_338_365: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_366: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.888888888888886%"),
    top: hp("6.010928961748618%")
  },
  Text_338_366: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_367: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("10.109289617486183%")
  },
  Text_338_367: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_368: {
    width: wp("8.958333333333334%"),
    minWidth: wp("8.958333333333334%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("14.207650273223976%")
  },
  Text_338_368: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_369: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("26.775956284152926%")
  },
  Text_338_369: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_370: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("30.874316939890605%")
  },
  Text_338_370: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_371: {
    width: wp("11.527777777777779%"),
    minWidth: wp("11.527777777777779%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("34.972677595628284%")
  },
  Text_338_371: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_372: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("0%")
  },
  Text_338_372: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_373: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("0%")
  },
  Text_338_373: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_374: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("18.715846994535468%")
  },
  Text_338_374: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_375: {
    width: wp("14.374999999999998%"),
    minWidth: wp("14.374999999999998%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("56.14754098360652%")
  },
  Text_338_375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_376: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("42.21311475409823%")
  },
  Text_338_376: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_377: {
    width: wp("9.86111111111111%"),
    minWidth: wp("9.86111111111111%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("49.04371584699447%")
  },
  Text_338_377: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_378: {
    width: wp("28.47222222222222%"),
    minWidth: wp("28.47222222222222%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.295081967213036%")
  },
  Text_338_378: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_379: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.46994535519116%")
  },
  Text_338_379: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_338_380: {
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
  ImageBackground_338_381: {
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
  ImageBackground_338_382: {
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
  ImageBackground_338_383: {
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
  ImageBackground_338_387: {
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
  ImageBackground_338_388: {
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
  ImageBackground_338_389: {
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
  ImageBackground_338_390: {
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
  ImageBackground_338_391: {
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
  ImageBackground_338_392: {
    width: wp("2.7083333333333335%"),
    height: hp("4.781420765027322%"),
    top: hp("4.918032786885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.41666666666667%")
  },
  ImageBackground_338_397: {
    width: wp("2.569444444444444%"),
    height: hp("5.05464480874317%"),
    top: hp("4.644808743169278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.013888888888886%")
  },
  ImageBackground_338_401: {
    width: wp("2.569444444444444%"),
    height: hp("4.781420765027322%"),
    top: hp("4.918032786885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.611111111111114%")
  },
  ImageBackground_338_403: {
    width: wp("3.680555555555556%"),
    height: hp("6.967213114754098%"),
    top: hp("3.8251366120217654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.95833333333334%")
  },
  View_338_406: {
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
  View_338_407: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.16666666666667%"),
    top: hp("23.49726775956276%")
  },
  Text_338_407: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_408: {
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
  ImageBackground_338_409: {
    width: wp("1.5277777777777777%"),
    height: hp("3.0054644808743167%"),
    top: hp("23.63387978142066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.48611111111111%")
  },
  ImageBackground_338_411: {
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
  ImageBackground_338_412: {
    width: wp("1.3194444444444444%"),
    height: hp("2.5923911339598273%"),
    top: hp("1.8678758965163935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%")
  },
  View_338_414: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.79166666666667%"),
    top: hp("1.2295081967213115%")
  },
  Text_338_414: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_415: {
    width: wp("1.3245985243055556%"),
    height: hp("5.374150719147562%"),
    top: hp("11.654579704576502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("218.95833333333331%")
  },
  ImageBackground_338_416: {
    width: wp("1.3245985243055556%"),
    height: hp("5.374150719147562%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_338_420: {
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
  View_338_421: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_338_421: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_338_422: {
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
  ImageBackground_338_423: {
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
  View_338_424: {
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
  View_338_425: {
    width: wp("33.88888888888889%"),
    minWidth: wp("33.88888888888889%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%"),
    top: hp("630.4644808743169%")
  },
  Text_338_425: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_338_426: {
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
  View_338_427: {
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
  View_338_428: {
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
  View_338_429: {
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
  View_338_430: {
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
  ImageBackground_338_431: {
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
  View_338_432: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222214%"),
    top: hp("1.5027322404372399%")
  },
  Text_338_432: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_338_433: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%"),
    top: hp("26.229508196721326%")
  },
  Text_338_433: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_338_434: {
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
  View_338_435: {
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
  View_338_436: {
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
  View_338_437: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: hp("1.775956284152926%")
  },
  Text_338_437: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_338_438: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444443%"),
    top: hp("1.775956284152926%")
  },
  Text_338_438: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_338_439: {
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
  View_338_440: {
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
  View_338_441: {
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
  View_338_442: {
    width: wp("2.430555555555556%"),
    minWidth: wp("2.430555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222214%"),
    top: hp("1.7759562841530396%")
  },
  Text_338_442: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_338_443: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444443%"),
    top: hp("1.7759562841530396%")
  },
  Text_338_443: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_338_444: {
    width: wp("21.73611111111111%"),
    minWidth: wp("21.73611111111111%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.805555555555557%"),
    top: hp("641.8032786885246%")
  },
  Text_338_444: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_445: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.34722222222222%"),
    top: hp("660.1092896174864%")
  },
  Text_338_445: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_446: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.34722222222222%"),
    top: hp("668.1693989071039%")
  },
  Text_338_446: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_338_447: {
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
  View_338_448: {
    width: wp("2.4305574099222818%"),
    height: hp("4.781427539762904%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_338_449: {
    width: wp("2.4305574099222818%"),
    height: hp("4.781427539762904%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_338_451: {
    width: wp("2.361111111111111%"),
    height: hp("4.644808743169399%"),
    top: hp("667.0765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.361111111111114%")
  },
  View_338_468: {
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
  View_341_56: {
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
  View_341_57: {
    width: wp("53.95833333333333%"),
    minWidth: wp("53.95833333333333%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: hp("116.80327868852459%")
  },
  Text_341_57: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_58: {
    width: wp("33.125%"),
    minWidth: wp("33.125%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.541666666666664%"),
    top: hp("108.19672131147541%")
  },
  Text_341_58: {
    color: "rgba(14, 99, 180, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_341_87: {
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
  View_341_88: {
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
  View_341_89: {
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
  View_341_90: {
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
  ImageBackground_341_91: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("2.049180327868953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.263888888888886%")
  },
  ImageBackground_341_93: {
    width: wp("1.597222222222222%"),
    height: hp("3.1420765027322406%"),
    top: hp("2.322404371584753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.291666666666666%")
  },
  View_341_95: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555555%"),
    top: hp("2.322404371584753%")
  },
  Text_341_95: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_96: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("2.322404371584753%")
  },
  Text_341_96: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_97: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.361111111111114%"),
    top: hp("2.322404371584753%")
  },
  Text_341_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_341_98: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.513888888888886%")
  },
  View_341_100: {
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
  View_341_101: {
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
  View_341_102: {
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
  View_341_103: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_341_104: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_341_106: {
    width: wp("5.763888888888889%"),
    minWidth: wp("5.763888888888889%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77777777777777%"),
    top: hp("2.322404371584753%")
  },
  Text_341_106: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_107: {
    width: wp("5.763888888888889%"),
    minWidth: wp("5.763888888888889%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.51388888888889%"),
    top: hp("2.185792349726853%")
  },
  Text_341_107: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_108: {
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
  View_341_109: {
    width: wp("0.5852866172790527%"),
    height: hp("1.486509224104751%"),
    top: hp("0.9665567366803316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1508517795138857%")
  },
  ImageBackground_341_110: {
    width: wp("0.5852866172790527%"),
    height: hp("1.486509224104751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_341_112: {
    width: wp("0.5852864848242866%"),
    height: hp("1.486509224104751%"),
    top: hp("0.9665567366803316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_341_113: {
    width: wp("0.5852864848242866%"),
    height: hp("1.486509224104751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_341_115: {
    width: wp("1.7296008268992105%"),
    height: hp("1.3025102719583146%"),
    top: hp("0.5336407103825422%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0032552083333285964%")
  },
  ImageBackground_341_116: {
    width: wp("1.7296008268992105%"),
    height: hp("1.3025102719583146%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_341_118: {
    width: wp("1.7291669050852456%"),
    height: hp("1.027791487063215%"),
    top: hp("1.853867827868953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0034586588541714036%")
  },
  ImageBackground_341_119: {
    width: wp("1.7291669050852456%"),
    height: hp("1.027791487063215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_341_162: {
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
  View_341_161: {
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
  View_341_59: {
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
  View_341_67: {
    width: wp("18.125%"),
    minWidth: wp("18.125%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.38888888888889%"),
    top: hp("4.644808743169392%")
  },
  Text_341_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_121: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("5.464480874316962%")
  },
  Text_341_121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_69: {
    width: wp("20.13888888888889%"),
    minWidth: wp("20.13888888888889%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.48611111111111%"),
    top: hp("43.98907103825138%")
  },
  Text_341_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_75: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.416666666666668%"),
    top: hp("32.65027322404373%")
  },
  Text_341_75: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_76: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.51388888888889%"),
    top: hp("32.65027322404373%")
  },
  Text_341_76: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_77: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.98611111111111%"),
    top: hp("32.65027322404373%")
  },
  Text_341_77: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_78: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.11111111111111%"),
    top: hp("32.65027322404373%")
  },
  Text_341_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_341_70: {
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
  View_341_71: {
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
  View_341_72: {
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
  View_341_73: {
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
  View_341_79: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.11111111111111%"),
    top: hp("21.721311475409834%")
  },
  Text_341_79: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_80: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.65277777777778%"),
    top: hp("21.721311475409834%")
  },
  Text_341_80: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_81: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.47222222222222%"),
    top: hp("21.721311475409834%")
  },
  Text_341_81: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_82: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.736111111111114%"),
    top: hp("21.721311475409834%")
  },
  Text_341_82: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_341_124: {
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
  ImageBackground_341_137: {
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
  ImageBackground_341_135: {
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
  ImageBackground_341_141: {
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
  ImageBackground_341_138: {
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
  ImageBackground_341_145: {
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
  ImageBackground_341_149: {
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
  ImageBackground_341_142: {
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
  ImageBackground_341_146: {
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
  ImageBackground_341_155: {
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
  ImageBackground_341_150: {
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
  ImageBackground_341_156: {
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
  View_341_134: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77777777777778%"),
    top: hp("14.480874316939918%")
  },
  Text_341_134: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_139: {
    width: wp("9.23611111111111%"),
    minWidth: wp("9.23611111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.84722222222222%"),
    top: hp("20.08196721311475%")
  },
  Text_341_139: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_143: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.84722222222222%"),
    top: hp("25.68306010928964%")
  },
  Text_341_143: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_147: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.84722222222222%"),
    top: hp("31.284153005464475%")
  },
  Text_341_147: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_151: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.84722222222222%"),
    top: hp("36.885245901639365%")
  },
  Text_341_151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_157: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.84722222222222%"),
    top: hp("42.48633879781423%")
  },
  Text_341_157: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_136: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("14.480874316939918%")
  },
  Text_341_136: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_140: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("19.94535519125685%")
  },
  Text_341_140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_144: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("25.546448087431713%")
  },
  Text_341_144: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_148: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("31.147540983606547%")
  },
  Text_341_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_152: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("36.74863387978144%")
  },
  Text_341_152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_158: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("42.34972677595627%")
  },
  Text_341_158: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_160: {
    width: wp("53.40277777777778%"),
    minWidth: wp("53.40277777777778%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.166666666666668%"),
    top: hp("132.37704918032787%")
  },
  Text_341_160: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_341_163: {
    width: wp("46.18055555555556%"),
    minWidth: wp("46.18055555555556%"),
    minHeight: hp("81.01092896174863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("219.672131147541%")
  },
  Text_341_163: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_169: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("212.56830601092895%")
  },
  Text_341_169: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_170: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("288.5245901639344%")
  },
  Text_341_170: {
    color: "rgba(14, 99, 180, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_347_0: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("373.4972677595629%")
  },
  Text_347_0: {
    color: "rgba(14, 99, 180, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_171: {
    width: wp("36.666666666666664%"),
    minWidth: wp("36.666666666666664%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("336.88524590163934%")
  },
  Text_341_171: {
    color: "rgba(14, 99, 180, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_347_6: {
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
  View_347_8: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.25%"),
    top: hp("468.03278688524597%")
  },
  Text_347_8: {
    color: "rgba(14, 99, 180, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_347_9: {
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
  View_347_14: {
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
  View_347_17: {
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
  View_347_12: {
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
  View_347_15: {
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
  View_347_18: {
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
  View_347_13: {
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
  View_347_16: {
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
  View_347_19: {
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
  View_341_168: {
    width: wp("25.90277777777778%"),
    minWidth: wp("25.90277777777778%"),
    minHeight: hp("62.568306010928964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%"),
    top: hp("293.1693989071038%")
  },
  Text_341_168: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_172: {
    width: wp("37.15277777777778%"),
    minWidth: wp("37.15277777777778%"),
    minHeight: hp("53.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.972222222222221%"),
    top: hp("344.53551912568304%")
  },
  Text_341_172: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_347_1: {
    width: wp("27.500000000000004%"),
    minWidth: wp("27.500000000000004%"),
    minHeight: hp("30.191256830601095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.76388888888889%"),
    top: hp("379.23497267759564%")
  },
  Text_347_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_347_2: {
    width: wp("14.097222222222221%"),
    minWidth: wp("14.097222222222221%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.291666666666664%"),
    top: hp("417.62295081967216%")
  },
  Text_347_2: {
    color: "rgba(14, 99, 180, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_347_5: {
    width: wp("38.75%"),
    minWidth: wp("38.75%"),
    minHeight: hp("18.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.236111111111114%"),
    top: hp("428.551912568306%")
  },
  Text_347_5: {
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
