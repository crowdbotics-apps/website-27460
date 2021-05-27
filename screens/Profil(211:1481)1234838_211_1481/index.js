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
      <View style={styles.View_220_72}>
        <View style={styles.View_220_70} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa90/ad1e/0c8fe74194e3e72fea0efa7561a56f01"
          }}
          style={styles.ImageBackground_220_73}
        />
      </View>
      <View style={styles.View_211_1485} />
      <View style={styles.View_211_1491} />
      <View style={styles.View_211_1510} />
      <View style={styles.View_211_1511}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8437/7632/afb2bd31f93bd029d201bd055e617468"
          }}
          style={styles.ImageBackground_211_1512}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d5/0368/0eff6fc75931d0d77716b6fc9af38485"
          }}
          style={styles.ImageBackground_211_1514}
        />
        <View style={styles.View_211_1516}>
          <View style={styles.View_211_1517} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eeca/a031/38f0b0d8d94815a6f7719c10d38609c4"
            }}
            style={styles.ImageBackground_211_1518}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5837/1c2e/a9153adac1d37af38a59fdfb8fd73a5b"
            }}
            style={styles.ImageBackground_211_1519}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93ea/01d6/816793a846cd8495076b572c07e18fae"
          }}
          style={styles.ImageBackground_211_1520}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beec/9652/0e847db693027e73c509c3d6da637b59"
          }}
          style={styles.ImageBackground_211_1524}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("191_36"))
        }
      >
        <View style={styles.View_211_1528}>
          <View style={styles.View_211_1529}>
            <Text style={styles.Text_211_1529}>Layanan Kami </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33c0/509b/3256009b5ab7497a8fc0d91e8a3a444a"
            }}
            style={styles.ImageBackground_211_1530}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_211_1531}>
        <View style={styles.View_211_1532}>
          <Text style={styles.Text_211_1532}>Karir</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_69"))
        }
      >
        <View style={styles.View_211_1533}>
          <View style={styles.View_211_1534}>
            <View style={styles.View_211_1535}>
              <Text style={styles.Text_211_1535}>Investasi</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/c3f0/ef3eb252067614865e8264d3b1b439e1"
              }}
              style={styles.ImageBackground_211_1536}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_8"))
        }
      >
        <View style={styles.View_211_1537}>
          <View style={styles.View_211_1538}>
            <View style={styles.View_211_1539}>
              <Text style={styles.Text_211_1539}>PELATIHAN</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/c3f0/ef3eb252067614865e8264d3b1b439e1"
              }}
              style={styles.ImageBackground_211_1540}
            />
          </View>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a992/9126/d51233806dc98d5de24b022d9ec984fc"
        }}
        style={styles.ImageBackground_211_1541}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_125"))
        }
      >
        <View style={styles.View_211_1542}>
          <Text style={styles.Text_211_1542}>Artikel</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_802"))
        }
      >
        <View style={styles.View_211_1543}>
          <Text style={styles.Text_211_1543}>contact</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("173_2"))
        }
      >
        <View style={styles.View_211_1544}>
          <View style={styles.View_211_1545}>
            <Text style={styles.Text_211_1545}>Profil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
            }}
            style={styles.ImageBackground_211_1546}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_211_1548}>
        <View style={styles.View_211_1549} />
        <View style={styles.View_211_1550}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d40/cf8b/1e423a1d2ed75428500e7fb3cd800b18"
            }}
            style={styles.ImageBackground_211_1551}
          />
          <View style={styles.View_211_1552}>
            <Text style={styles.Text_211_1552}>About Us</Text>
          </View>
          <View style={styles.View_211_1553}>
            <Text style={styles.Text_211_1553}>Gada Utama</Text>
          </View>
          <View style={styles.View_211_1554}>
            <Text style={styles.Text_211_1554}>Gada Madya</Text>
          </View>
          <View style={styles.View_211_1555}>
            <Text style={styles.Text_211_1555}>Gada Pratama</Text>
          </View>
          <View style={styles.View_211_1556}>
            <Text style={styles.Text_211_1556}>Our Service</Text>
          </View>
          <View style={styles.View_211_1557}>
            <Text style={styles.Text_211_1557}>Our Partner</Text>
          </View>
          <View style={styles.View_211_1558}>
            <Text style={styles.Text_211_1558}>Our Vision &amp; Mission</Text>
          </View>
          <View style={styles.View_211_1559}>
            <Text style={styles.Text_211_1559}>Pelatihan</Text>
          </View>
          <View style={styles.View_211_1560}>
            <Text style={styles.Text_211_1560}>Follow Us :</Text>
          </View>
          <View style={styles.View_211_1561}>
            <Text style={styles.Text_211_1561}>Suscribe </Text>
          </View>
          <View style={styles.View_211_1562}>
            <Text style={styles.Text_211_1562}>Lowongan Kerja</Text>
          </View>
          <View style={styles.View_211_1563}>
            <Text style={styles.Text_211_1563}>Tips &amp; News</Text>
          </View>
          <View style={styles.View_211_1564}>
            <Text style={styles.Text_211_1564}>Contact Us</Text>
          </View>
          <View style={styles.View_211_1565}>
            <Text style={styles.Text_211_1565}>
              Kepercayaan yang telah diberikan customer kepada kami merupakan
              komitmen bagi kami yang wajib dijalankan dengan integritas,
              kreatifitas dan kerja sama yang merupakan pedoman kami dalam
              menjalankan bisnis ini.
            </Text>
          </View>
          <View style={styles.View_211_1566}>
            <Text style={styles.Text_211_1566}>
              Head Office : JL. Semampir Selatan V A NO.18 Surabaya 60119
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_211_1567}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_211_1568}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_211_1569}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df61/ace3/bf82e3652bf326b512e8925e929670d6"
            }}
            style={styles.ImageBackground_211_1570}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_211_1574}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_211_1575}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_211_1576}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_211_1577}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e354/3c03/f5c08e580aa26655282d3ef27b8d5cad"
            }}
            style={styles.ImageBackground_211_1578}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c7b/950a/9f7b792573bb66294649e70ac743332d"
            }}
            style={styles.ImageBackground_211_1579}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a09/8813/fb8b4de80808c5b29a60d270849c2af6"
            }}
            style={styles.ImageBackground_211_1584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d52/69b3/d56b63754ba82a2aaac61bf1432e337b"
            }}
            style={styles.ImageBackground_211_1588}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dea/5d57/396ef57f766f21f878be1059a2afe8ae"
            }}
            style={styles.ImageBackground_211_1590}
          />
          <View style={styles.View_211_1593} />
          <View style={styles.View_211_1594}>
            <Text style={styles.Text_211_1594}>email</Text>
          </View>
          <View style={styles.View_211_1595} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdc2/6cf6/9c7d3ba34b589d9e5bca0695301915b3"
            }}
            style={styles.ImageBackground_211_1596}
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
          style={styles.ImageBackground_211_1606}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/68d8/50d1cf2831aa3420a696872a80bffb0f"
        }}
        style={styles.ImageBackground_211_1607}
      />
      <View style={styles.View_211_1609}>
        <Text style={styles.Text_211_1609}>ID</Text>
      </View>
      <View style={styles.View_211_1610}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffa0/b554/42148e2627afa2179cb22492583b77fc"
          }}
          style={styles.ImageBackground_211_1611}
        />
      </View>
      <View style={styles.View_211_1615}>
        <View style={styles.View_211_1616}>
          <Text style={styles.Text_211_1616}>Profil</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
          }}
          style={styles.ImageBackground_211_1617}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d40/cf8b/1e423a1d2ed75428500e7fb3cd800b18"
        }}
        style={styles.ImageBackground_211_1666}
      />
      <View style={styles.View_211_2004} />
      <View style={styles.View_211_2005}>
        <Text style={styles.Text_211_2005}>GET A FREE CONSULTATION</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a33/9f66/c07464b1d7d8dcc62140312e89dd2c5a"
        }}
        style={styles.ImageBackground_211_2006}
      />
      <View style={styles.View_211_2007}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_0"))
          }
        >
          <View style={styles.View_211_2008} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("239_3"))
          }
        >
          <View style={styles.View_211_2009}>
            <View style={styles.View_211_2010} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/b7d6/417bdbf9ba8608d34aa65a29c915dc55"
              }}
              style={styles.ImageBackground_211_2011}
            />
            <View style={styles.View_211_2012}>
              <Text style={styles.Text_211_2012}>Service Required</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_211_2013}>
          <Text style={styles.Text_211_2013}>Submit</Text>
        </View>
        <View style={styles.View_211_2014}>
          <View style={styles.View_211_2015} />
          <View style={styles.View_211_2016} />
          <View style={styles.View_211_2017}>
            <Text style={styles.Text_211_2017}>Nama</Text>
          </View>
          <View style={styles.View_211_2018}>
            <Text style={styles.Text_211_2018}>Company</Text>
          </View>
        </View>
        <View style={styles.View_211_2019}>
          <View style={styles.View_211_2020} />
          <View style={styles.View_211_2021} />
          <View style={styles.View_211_2022}>
            <Text style={styles.Text_211_2022}>Email</Text>
          </View>
          <View style={styles.View_211_2023}>
            <Text style={styles.Text_211_2023}>Phone</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_211_2024}>
        <Text style={styles.Text_211_2024}>
          We’re ready to help you today !
        </Text>
      </View>
      <View style={styles.View_211_2025}>
        <Text style={styles.Text_211_2025}>08112345687</Text>
      </View>
      <View style={styles.View_211_2026}>
        <Text style={styles.Text_211_2026}>info-sn@shelternusantara.co.id</Text>
      </View>
      <View style={styles.View_211_2027}>
        <View style={styles.View_211_2028}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d42/8c3c/e67e843680037a9862803255ff9d951e"
            }}
            style={styles.ImageBackground_211_2029}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc64/5f76/1e2c974a88108017f858046f87062b67"
        }}
        style={styles.ImageBackground_211_2031}
      />
      <View style={styles.View_216_3}>
        <View style={styles.View_216_4}>
          <Text style={styles.Text_216_4}>
            PT. SHELTER NUSANTARA fokus pada jasa keamanan untuk keseluruhan
            proses pengelolaan SATPAM (Satuan Pengamanan) mulai rekruitment,
            pendidikan satpam (gada pratama - gada madya - gada utama),
            penempatan, design pengamanan dan implementasi sistem operasional
            hingga supervisi serta pengembangan personil dan kapabilitas
            operasional secara berkelanjutan. Dalam Menjalankan operasionalnya
            PT SHELTER NUSANTARA banyak menangani pengamanan secara profesional
            dalam bidang : Perkantoran, Perindustrian, Pergudangan, Perhotelan,
            Restoran, Rumah Sakit, PMA, BUMN, Instansi Pemerintah, Pertokoan
            Sekolah, dll
          </Text>
        </View>
      </View>
      <View style={styles.View_211_2158}>
        <Text style={styles.Text_211_2158}>Tentang Kami</Text>
      </View>
      <View style={styles.View_220_57}>
        <Text style={styles.Text_220_57}>Dewan Komisaris</Text>
      </View>
      <View style={styles.View_211_1490} />
      <View style={styles.View_220_32} />
      <View style={styles.View_220_23} />
      <View style={styles.View_220_33} />
      <View style={styles.View_211_1618}>
        <Text style={styles.Text_211_1618}>WE Provide Best Service</Text>
      </View>
      <View style={styles.View_219_1}>
        <Text style={styles.Text_219_1}>Dewan Komisaris</Text>
      </View>
      <View style={styles.View_220_34}>
        <Text style={styles.Text_220_34}>Dewan Direksi</Text>
      </View>
      <View style={styles.View_220_160}>
        <Text style={styles.Text_220_160}>Strutur Organisasi</Text>
      </View>
      <View style={styles.View_230_11}>
        <Text style={styles.Text_230_11}>Milestone</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d9/91ff/02b7f92d419b83c7f565a69632386de3"
        }}
        style={styles.ImageBackground_220_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d9/91ff/02b7f92d419b83c7f565a69632386de3"
        }}
        style={styles.ImageBackground_220_35}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d9/91ff/02b7f92d419b83c7f565a69632386de3"
        }}
        style={styles.ImageBackground_220_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d9/91ff/02b7f92d419b83c7f565a69632386de3"
        }}
        style={styles.ImageBackground_220_37}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d9/91ff/02b7f92d419b83c7f565a69632386de3"
        }}
        style={styles.ImageBackground_220_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d9/91ff/02b7f92d419b83c7f565a69632386de3"
        }}
        style={styles.ImageBackground_220_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d9/91ff/02b7f92d419b83c7f565a69632386de3"
        }}
        style={styles.ImageBackground_220_51}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d9/91ff/02b7f92d419b83c7f565a69632386de3"
        }}
        style={styles.ImageBackground_220_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d9/91ff/02b7f92d419b83c7f565a69632386de3"
        }}
        style={styles.ImageBackground_220_41}
      />
      <View style={styles.View_220_19}>
        <Text style={styles.Text_220_19}>Lorem Ipsum</Text>
      </View>
      <View style={styles.View_220_43}>
        <Text style={styles.Text_220_43}>Lorem Ipsum</Text>
      </View>
      <View style={styles.View_220_28}>
        <Text style={styles.Text_220_28}>Lorem Ipsum</Text>
      </View>
      <View style={styles.View_220_44}>
        <Text style={styles.Text_220_44}>Lorem Ipsum</Text>
      </View>
      <View style={styles.View_220_21}>
        <Text style={styles.Text_220_21}>Lorem Ipsum</Text>
      </View>
      <View style={styles.View_220_45}>
        <Text style={styles.Text_220_45}>Lorem Ipsum</Text>
      </View>
      <View style={styles.View_220_53}>
        <Text style={styles.Text_220_53}>Lorem Ipsum</Text>
      </View>
      <View style={styles.View_220_29}>
        <Text style={styles.Text_220_29}>Lorem Ipsum</Text>
      </View>
      <View style={styles.View_220_46}>
        <Text style={styles.Text_220_46}>Lorem Ipsum</Text>
      </View>
      <View style={styles.View_220_20}>
        <Text style={styles.Text_220_20}>Lorem Ipsum dolor</Text>
      </View>
      <View style={styles.View_220_47}>
        <Text style={styles.Text_220_47}>Lorem Ipsum dolor</Text>
      </View>
      <View style={styles.View_220_30}>
        <Text style={styles.Text_220_30}>Lorem Ipsum dolor</Text>
      </View>
      <View style={styles.View_220_48}>
        <Text style={styles.Text_220_48}>Lorem Ipsum dolor</Text>
      </View>
      <View style={styles.View_220_22}>
        <Text style={styles.Text_220_22}>Lorem Ipsum dolor</Text>
      </View>
      <View style={styles.View_220_49}>
        <Text style={styles.Text_220_49}>Lorem Ipsum dolor</Text>
      </View>
      <View style={styles.View_220_54}>
        <Text style={styles.Text_220_54}>Lorem Ipsum dolor</Text>
      </View>
      <View style={styles.View_220_31}>
        <Text style={styles.Text_220_31}>Lorem Ipsum dolor</Text>
      </View>
      <View style={styles.View_220_50}>
        <Text style={styles.Text_220_50}>Lorem Ipsum dolor</Text>
      </View>
      <View style={styles.View_220_55} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca5f/4ac7/ae5dffdb71694f1ca8f164bcdc87a918"
        }}
        style={styles.ImageBackground_220_56}
      />
      <View style={styles.View_220_58}>
        <Text style={styles.Text_220_58}>Visi </Text>
      </View>
      <View style={styles.View_220_60}>
        <Text style={styles.Text_220_60}>Misi</Text>
      </View>
      <View style={styles.View_220_59}>
        <Text style={styles.Text_220_59}>
          Menjadi perusahaan pengamanan yang terbaik, terbesar dan terpercaya
          dalam skala global.”
        </Text>
      </View>
      <View style={styles.View_220_61}>
        <Text style={styles.Text_220_61}>
          Memberi pelayanan yang tertata, terukur dan profesional serta selalu
          berinovasi guna memberi kepuasan.”
        </Text>
      </View>
      <View style={styles.View_220_77} />
      <View style={styles.View_220_159} />
      <View style={styles.View_220_167} />
      <View style={styles.View_220_175} />
      <View style={styles.View_220_168} />
      <View style={styles.View_220_161}>
        <Text style={styles.Text_220_161}>
          Direktur Keuangan Andri Krisnanto
        </Text>
      </View>
      <View style={styles.View_220_176}>
        <Text style={styles.Text_220_176}>Manager FTL Fifit Novih</Text>
      </View>
      <View style={styles.View_220_170}>
        <Text style={styles.Text_220_170}>
          Direktur Bisnis &amp; Operasional Hari Wahyudin
        </Text>
      </View>
      <View style={styles.View_220_171}>
        <Text style={styles.Text_220_171}>Direktur Utama Akhmad Setiadi</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf11/bd4e/1f66ff45581f131a7b90788e80aa48d0"
        }}
        style={styles.ImageBackground_220_162}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32ff/49dc/811ebb7438b830c8b7d1b9c73c6460de"
        }}
        style={styles.ImageBackground_220_164}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30c7/c075/82a056db54b841d1aa64d65a23a08033"
        }}
        style={styles.ImageBackground_220_165}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fa/c8ca/b37f4a4eae3200dd4087180f7d650bbb"
        }}
        style={styles.ImageBackground_220_172}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdb7/0e81/282de3eb3fb149ef733a00280eed30e6"
        }}
        style={styles.ImageBackground_220_173}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccff/ca90/3e180d2dcbf4c665e2028b1392e6b77f"
        }}
        style={styles.ImageBackground_230_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30c7/c075/82a056db54b841d1aa64d65a23a08033"
        }}
        style={styles.ImageBackground_220_166}
      />
      <View style={styles.View_220_182} />
      <View style={styles.View_220_183} />
      <View style={styles.View_220_184} />
      <View style={styles.View_220_186} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/352c/155b/9df5baf9920159c07e8fca7ba22e2f0c"
        }}
        style={styles.ImageBackground_220_179}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd18/ddae/aceb55f708e567c22f2e24277feb5168"
        }}
        style={styles.ImageBackground_220_181}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26de/24b8/023856999a63fb010a5ef2c3443ad2dd"
        }}
        style={styles.ImageBackground_228_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3f/8f39/de09ffaa032dd179184aa3db7abf6aad"
        }}
        style={styles.ImageBackground_228_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3f/8f39/de09ffaa032dd179184aa3db7abf6aad"
        }}
        style={styles.ImageBackground_228_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3f/8f39/de09ffaa032dd179184aa3db7abf6aad"
        }}
        style={styles.ImageBackground_228_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0618/57c5/e5a50e5cf4afd4339e8c544175802e7c"
        }}
        style={styles.ImageBackground_228_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0618/57c5/e5a50e5cf4afd4339e8c544175802e7c"
        }}
        style={styles.ImageBackground_228_7}
      />
      <View style={styles.View_230_2}>
        <Text style={styles.Text_230_2}>Manager Ops M. Fuadi</Text>
      </View>
      <View style={styles.View_230_5}>
        <Text style={styles.Text_230_5}>Manager SDT Iwan Sujatmiko</Text>
      </View>
      <View style={styles.View_230_3}>
        <Text style={styles.Text_230_3}>Manager Sales Asmunir</Text>
      </View>
      <View style={styles.View_230_6}>
        <Text style={styles.Text_230_6}>Manager HR &amp; GA M. Imron Huda</Text>
      </View>
      <View style={styles.View_230_8}>
        <View style={styles.View_230_7} />
        <View style={styles.View_220_178}>
          <Text style={styles.Text_220_178}>
            Manager ACC &amp; Tax Saifuddin Zuhri
          </Text>
        </View>
      </View>
      <View style={styles.View_220_185} />
      <View style={styles.View_230_4}>
        <Text style={styles.Text_230_4}>
          Manager Branch Miftahul Arif Uwi Safrudin Theresia Pramesti Annanta
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea91/1ba3/995edbb848b17b79385b05afd2837bce"
        }}
        style={styles.ImageBackground_230_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e565/8537/73deb5064dbc46efd11351a3b5e9316c"
        }}
        style={styles.ImageBackground_230_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e565/8537/73deb5064dbc46efd11351a3b5e9316c"
        }}
        style={styles.ImageBackground_257_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e565/8537/73deb5064dbc46efd11351a3b5e9316c"
        }}
        style={styles.ImageBackground_257_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e565/8537/73deb5064dbc46efd11351a3b5e9316c"
        }}
        style={styles.ImageBackground_257_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e565/8537/73deb5064dbc46efd11351a3b5e9316c"
        }}
        style={styles.ImageBackground_257_11}
      />
      <View style={styles.View_230_14} />
      <View style={styles.View_257_0} />
      <View style={styles.View_257_3} />
      <View style={styles.View_257_6} />
      <View style={styles.View_257_9} />
      <View style={styles.View_230_16}>
        <Text style={styles.Text_230_16}>
          2002 Pendirian PT Shelter Nusantara{" "}
        </Text>
      </View>
      <View style={styles.View_257_5}>
        <Text style={styles.Text_257_5}>
          2002 Pendirian PT Shelter Nusantara{" "}
        </Text>
      </View>
      <View style={styles.View_257_7}>
        <Text style={styles.Text_257_7}>
          2002 Pendirian PT Shelter Nusantara{" "}
        </Text>
      </View>
      <View style={styles.View_257_10}>
        <Text style={styles.Text_257_10}>
          2002 Pendirian PT Shelter Nusantara{" "}
        </Text>
      </View>
      <View style={styles.View_257_1}>
        <Text style={styles.Text_257_1}>
          2002 Pendirian PT Shelter Nusantara{" "}
        </Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("766.5300546448087%") },
  View_220_72: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93.16939890710383%"),
    minHeight: hp("93.16939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579235%")
  },
  View_220_70: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93.16939890710383%"),
    minHeight: hp("93.16939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_220_73: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93.16939890710383%"),
    minHeight: hp("93.16939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_211_1485: {
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
  View_211_1491: {
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
  View_211_1510: {
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
  View_211_1511: {
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
  ImageBackground_211_1512: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111143%")
  },
  ImageBackground_211_1514: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444443%")
  },
  View_211_1516: {
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
  View_211_1517: {
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
  ImageBackground_211_1518: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_211_1519: {
    width: wp("0.5033365885416666%"),
    height: hp("0.9650058433657787%"),
    top: hp("0.9344382364241801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5816650390624858%")
  },
  ImageBackground_211_1520: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_211_1524: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6527777777777715%")
  },
  View_211_1528: {
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
  View_211_1529: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_211_1529: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_211_1530: {
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
  View_211_1531: {
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
  View_211_1532: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_211_1532: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_211_1533: {
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
  View_211_1534: {
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
  View_211_1535: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_211_1535: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_211_1536: {
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
  View_211_1537: {
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
  View_211_1538: {
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
  View_211_1539: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_211_1539: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_211_1540: {
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
  ImageBackground_211_1541: {
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
  View_211_1542: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%"),
    top: hp("9.01639344262295%")
  },
  Text_211_1542: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_211_1543: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.66666666666667%"),
    top: hp("9.01639344262295%")
  },
  Text_211_1543: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_211_1544: {
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
  View_211_1545: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_211_1545: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_211_1546: {
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
  View_211_1548: {
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
  View_211_1549: {
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
  View_211_1550: {
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
  ImageBackground_211_1551: {
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
  View_211_1552: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("21.038251366120107%")
  },
  Text_211_1552: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1553: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.888888888888886%"),
    top: hp("6.010928961748618%")
  },
  Text_211_1553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1554: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("10.109289617486183%")
  },
  Text_211_1554: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1555: {
    width: wp("8.958333333333334%"),
    minWidth: wp("8.958333333333334%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("14.207650273223976%")
  },
  Text_211_1555: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1556: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("26.775956284152926%")
  },
  Text_211_1556: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1557: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("30.874316939890605%")
  },
  Text_211_1557: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1558: {
    width: wp("11.527777777777779%"),
    minWidth: wp("11.527777777777779%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("34.972677595628284%")
  },
  Text_211_1558: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1559: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("0%")
  },
  Text_211_1559: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1560: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("0%")
  },
  Text_211_1560: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1561: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("18.715846994535468%")
  },
  Text_211_1561: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1562: {
    width: wp("14.374999999999998%"),
    minWidth: wp("14.374999999999998%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("56.14754098360652%")
  },
  Text_211_1562: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1563: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("42.21311475409823%")
  },
  Text_211_1563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1564: {
    width: wp("9.86111111111111%"),
    minWidth: wp("9.86111111111111%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("49.04371584699447%")
  },
  Text_211_1564: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1565: {
    width: wp("28.47222222222222%"),
    minWidth: wp("28.47222222222222%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.295081967213036%")
  },
  Text_211_1565: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1566: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.46994535519116%")
  },
  Text_211_1566: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_211_1567: {
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
  ImageBackground_211_1568: {
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
  ImageBackground_211_1569: {
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
  ImageBackground_211_1570: {
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
  ImageBackground_211_1574: {
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
  ImageBackground_211_1575: {
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
  ImageBackground_211_1576: {
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
  ImageBackground_211_1577: {
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
  ImageBackground_211_1578: {
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
  ImageBackground_211_1579: {
    width: wp("2.7083333333333335%"),
    height: hp("4.781420765027322%"),
    top: hp("4.918032786885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.41666666666667%")
  },
  ImageBackground_211_1584: {
    width: wp("2.569444444444444%"),
    height: hp("5.05464480874317%"),
    top: hp("4.644808743169278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.013888888888886%")
  },
  ImageBackground_211_1588: {
    width: wp("2.569444444444444%"),
    height: hp("4.781420765027322%"),
    top: hp("4.918032786885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.611111111111114%")
  },
  ImageBackground_211_1590: {
    width: wp("3.680555555555556%"),
    height: hp("6.967213114754098%"),
    top: hp("3.8251366120217654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.95833333333334%")
  },
  View_211_1593: {
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
  View_211_1594: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.16666666666667%"),
    top: hp("23.49726775956276%")
  },
  Text_211_1594: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1595: {
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
  ImageBackground_211_1596: {
    width: wp("1.5277777777777777%"),
    height: hp("3.0054644808743167%"),
    top: hp("23.63387978142066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.48611111111111%")
  },
  ImageBackground_211_1606: {
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
  ImageBackground_211_1607: {
    width: wp("1.3194444444444444%"),
    height: hp("2.5923911339598273%"),
    top: hp("1.8678342058358948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%")
  },
  View_211_1609: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.79166666666667%"),
    top: hp("1.2295081967213115%")
  },
  Text_211_1609: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1610: {
    width: wp("1.3245985243055556%"),
    height: hp("5.374150719147562%"),
    top: hp("11.654621395257001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("218.95833333333331%")
  },
  ImageBackground_211_1611: {
    width: wp("1.3245985243055556%"),
    height: hp("5.374150719147562%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_211_1615: {
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
  View_211_1616: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_211_1616: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_211_1617: {
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
  ImageBackground_211_1666: {
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
  View_211_2004: {
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
  View_211_2005: {
    width: wp("33.88888888888889%"),
    minWidth: wp("33.88888888888889%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%"),
    top: hp("630.4644808743169%")
  },
  Text_211_2005: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_211_2006: {
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
  View_211_2007: {
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
  View_211_2008: {
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
  View_211_2009: {
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
  View_211_2010: {
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
  ImageBackground_211_2011: {
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
  View_211_2012: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222214%"),
    top: hp("1.5027322404372399%")
  },
  Text_211_2012: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_211_2013: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%"),
    top: hp("26.229508196721326%")
  },
  Text_211_2013: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_211_2014: {
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
  View_211_2015: {
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
  View_211_2016: {
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
  View_211_2017: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: hp("1.775956284152926%")
  },
  Text_211_2017: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_211_2018: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444443%"),
    top: hp("1.775956284152926%")
  },
  Text_211_2018: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_211_2019: {
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
  View_211_2020: {
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
  View_211_2021: {
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
  View_211_2022: {
    width: wp("2.430555555555556%"),
    minWidth: wp("2.430555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222214%"),
    top: hp("1.7759562841530396%")
  },
  Text_211_2022: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_211_2023: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444443%"),
    top: hp("1.7759562841530396%")
  },
  Text_211_2023: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_211_2024: {
    width: wp("21.73611111111111%"),
    minWidth: wp("21.73611111111111%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.805555555555557%"),
    top: hp("641.8032786885246%")
  },
  Text_211_2024: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_2025: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.34722222222222%"),
    top: hp("660.1092896174864%")
  },
  Text_211_2025: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_2026: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.34722222222222%"),
    top: hp("668.1693989071039%")
  },
  Text_211_2026: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_2027: {
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
  View_211_2028: {
    width: wp("2.4305574099222818%"),
    height: hp("4.781427539762904%"),
    top: hp("-0.00006670508878414694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_211_2029: {
    width: wp("2.4305574099222818%"),
    height: hp("4.781427539762904%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_211_2031: {
    width: wp("2.361111111111111%"),
    height: hp("4.644808743169399%"),
    top: hp("667.0765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.361111111111114%")
  },
  View_216_3: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: hp("34.42622950819672%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.041666666666666%"),
    top: hp("113.79781420765028%")
  },
  View_216_4: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_216_4: {
    color: "rgba(101, 101, 101, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_2158: {
    width: wp("16.25%"),
    minWidth: wp("16.25%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.875%"),
    top: hp("102.18579234972678%")
  },
  Text_211_2158: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_57: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.65277777777778%"),
    top: hp("178.82513661202185%")
  },
  Text_220_57: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_1490: {
    width: wp("9.70120112101237%"),
    minWidth: wp("9.70120112101237%"),
    height: hp("5.644661220696454%"),
    minHeight: hp("5.644661220696454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.481580946180557%"),
    top: hp("271.72352941961236%")
  },
  View_220_32: {
    width: wp("9.70120112101237%"),
    minWidth: wp("9.70120112101237%"),
    height: hp("5.644661220696454%"),
    minHeight: hp("5.644661220696454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.24546983506945%"),
    top: hp("271.72352941961236%")
  },
  View_220_23: {
    width: wp("9.70120112101237%"),
    minWidth: wp("9.70120112101237%"),
    height: hp("5.644661220696454%"),
    minHeight: hp("5.644661220696454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.481580946180557%"),
    top: hp("304.100561923668%")
  },
  View_220_33: {
    width: wp("9.70120112101237%"),
    minWidth: wp("9.70120112101237%"),
    height: hp("5.644661220696454%"),
    minHeight: hp("5.644661220696454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.87046983506944%"),
    top: hp("304.100561923668%")
  },
  View_211_1618: {
    width: wp("30.833333333333336%"),
    minWidth: wp("30.833333333333336%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("275.6830601092896%")
  },
  Text_211_1618: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_219_1: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.944444444444446%"),
    top: hp("257.24043715846994%")
  },
  Text_219_1: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_34: {
    width: wp("15.972222222222221%"),
    minWidth: wp("15.972222222222221%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.111111111111114%"),
    top: hp("257.24043715846994%")
  },
  Text_220_34: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_160: {
    width: wp("20.34722222222222%"),
    minWidth: wp("20.34722222222222%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.958333333333336%"),
    top: hp("331.9672131147541%")
  },
  Text_220_160: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_230_11: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06944444444444%"),
    top: hp("448.224043715847%")
  },
  Text_230_11: {
    color: "rgba(10, 141, 223, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_220_0: {
    width: wp("8.680555555555555%"),
    height: hp("17.076502732240435%"),
    top: hp("269.672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.277777777777779%")
  },
  ImageBackground_220_35: {
    width: wp("8.680555555555555%"),
    height: hp("17.076502732240435%"),
    top: hp("269.672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.041666666666664%")
  },
  ImageBackground_220_24: {
    width: wp("8.680555555555555%"),
    height: hp("17.076502732240435%"),
    top: hp("302.0491803278689%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.277777777777779%")
  },
  ImageBackground_220_37: {
    width: wp("8.680555555555555%"),
    height: hp("17.076502732240435%"),
    top: hp("302.0491803278689%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.666666666666664%")
  },
  ImageBackground_220_17: {
    width: wp("8.680555555555555%"),
    height: hp("17.076502732240435%"),
    top: hp("269.672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.055555555555557%")
  },
  ImageBackground_220_39: {
    width: wp("8.680555555555555%"),
    height: hp("17.076502732240435%"),
    top: hp("269.672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.81944444444444%")
  },
  ImageBackground_220_51: {
    width: wp("8.680555555555555%"),
    height: hp("17.076502732240435%"),
    top: hp("269.672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.48611111111111%")
  },
  ImageBackground_220_26: {
    width: wp("8.680555555555555%"),
    height: hp("17.076502732240435%"),
    top: hp("302.0491803278689%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.055555555555557%")
  },
  ImageBackground_220_41: {
    width: wp("8.680555555555555%"),
    height: hp("17.076502732240435%"),
    top: hp("302.0491803278689%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%")
  },
  View_220_19: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.416666666666668%"),
    top: hp("286.74863387978144%")
  },
  Text_220_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_43: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.18055555555555%"),
    top: hp("286.74863387978144%")
  },
  Text_220_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_28: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.416666666666668%"),
    top: hp("319.1256830601093%")
  },
  Text_220_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_44: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80555555555556%"),
    top: hp("319.1256830601093%")
  },
  Text_220_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_21: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.333333333333332%"),
    top: hp("286.74863387978144%")
  },
  Text_220_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_45: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.09722222222223%"),
    top: hp("286.74863387978144%")
  },
  Text_220_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_53: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.76388888888889%"),
    top: hp("286.74863387978144%")
  },
  Text_220_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_29: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.333333333333332%"),
    top: hp("319.1256830601093%")
  },
  Text_220_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_46: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.72222222222221%"),
    top: hp("319.1256830601093%")
  },
  Text_220_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_20: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.23611111111111%"),
    top: hp("289.8907103825137%")
  },
  Text_220_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_47: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("289.8907103825137%")
  },
  Text_220_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_30: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.23611111111111%"),
    top: hp("322.26775956284155%")
  },
  Text_220_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_48: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.625%"),
    top: hp("322.26775956284155%")
  },
  Text_220_48: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_22: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.152777777777775%"),
    top: hp("289.8907103825137%")
  },
  Text_220_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_49: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.916666666666664%"),
    top: hp("289.8907103825137%")
  },
  Text_220_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_54: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.58333333333333%"),
    top: hp("289.8907103825137%")
  },
  Text_220_54: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_31: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.152777777777775%"),
    top: hp("322.26775956284155%")
  },
  Text_220_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_50: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.54166666666667%"),
    top: hp("322.26775956284155%")
  },
  Text_220_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_55: {
    width: wp("102.49999999999999%"),
    minWidth: wp("102.49999999999999%"),
    height: hp("82.24043715846994%"),
    minHeight: hp("82.24043715846994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.5%"),
    top: hp("156.14754098360655%"),
    backgroundColor: "rgba(14, 99, 180, 1)"
  },
  ImageBackground_220_56: {
    width: wp("30.416666666666664%"),
    minWidth: wp("30.416666666666664%"),
    height: hp("73.08743169398907%"),
    minHeight: hp("73.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.097222222222221%"),
    top: hp("165.30054644808743%"),
    resizeMode: "cover"
  },
  View_220_58: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.166666666666664%"),
    top: hp("165.5737704918033%")
  },
  Text_220_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_60: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.166666666666664%"),
    top: hp("198.36065573770492%")
  },
  Text_220_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_59: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.166666666666664%"),
    top: hp("174.18032786885246%")
  },
  Text_220_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_61: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.166666666666664%"),
    top: hp("206.9672131147541%")
  },
  Text_220_61: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_77: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("78.14207650273224%"),
    minHeight: hp("78.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087433%")
  },
  View_220_159: {
    width: wp("15.069444444444443%"),
    minWidth: wp("15.069444444444443%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.416666666666664%"),
    top: hp("341.2568306010929%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_220_167: {
    width: wp("15.069444444444443%"),
    minWidth: wp("15.069444444444443%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("374.8633879781421%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_220_175: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.73611111111111%"),
    top: hp("408.6065573770492%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_220_168: {
    width: wp("15.069444444444443%"),
    minWidth: wp("15.069444444444443%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.86111111111111%"),
    top: hp("374.8633879781421%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_220_161: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.583333333333332%"),
    top: hp("377.0491803278689%")
  },
  Text_220_161: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_176: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.875%"),
    top: hp("409.83606557377044%")
  },
  Text_220_176: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_170: {
    width: wp("11.527777777777779%"),
    minWidth: wp("11.527777777777779%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.01388888888889%"),
    top: hp("375.54644808743166%")
  },
  Text_220_170: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_171: {
    width: wp("11.180555555555555%"),
    minWidth: wp("11.180555555555555%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.22222222222222%"),
    top: hp("343.44262295081967%")
  },
  Text_220_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_220_162: {
    width: wp("20.868055555555557%"),
    minWidth: wp("20.868055555555557%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.875%"),
    top: hp("354.37158469945354%")
  },
  ImageBackground_220_164: {
    width: wp("19.72222222222222%"),
    minWidth: wp("19.72222222222222%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%"),
    top: hp("366.9398907103825%")
  },
  ImageBackground_220_165: {
    width: wp("1.7605973173178629e-7%"),
    minWidth: wp("1.7605973173178629e-7%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.875%"),
    top: hp("366.9398907103825%")
  },
  ImageBackground_220_172: {
    width: wp("3.2783544965140106e-7%"),
    minWidth: wp("3.2783544965140106e-7%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.875%"),
    top: hp("387.7049180327869%")
  },
  ImageBackground_220_173: {
    width: wp("8.819444444444445%"),
    minWidth: wp("8.819444444444445%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.055555555555554%"),
    top: hp("402.3224043715847%")
  },
  ImageBackground_230_9: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.875%"),
    top: hp("402.3224043715847%")
  },
  ImageBackground_220_166: {
    width: wp("1.7605973173178629e-7%"),
    minWidth: wp("1.7605973173178629e-7%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.43055555555556%"),
    top: hp("366.9398907103825%")
  },
  View_220_182: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.208333333333336%"),
    top: hp("408.6065573770492%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_220_183: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.5%"),
    top: hp("421.448087431694%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_220_184: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.375%"),
    top: hp("408.6065573770492%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_220_186: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.09722222222223%"),
    top: hp("408.46994535519127%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_220_179: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.43055555555556%"),
    top: hp("387.9781420765027%")
  },
  ImageBackground_220_181: {
    width: wp("17.15277777777778%"),
    minWidth: wp("17.15277777777778%"),
    height: hp("0.0000030812944948439144%"),
    minHeight: hp("0.0000030812944948439144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27777777777778%"),
    top: hp("402.4590163934426%")
  },
  ImageBackground_228_2: {
    width: wp("12.638905843098957%"),
    minWidth: wp("12.638905843098957%"),
    height: hp("0.13017498893164545%"),
    minHeight: hp("0.13017498893164545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.43055555555556%"),
    top: hp("402.3288414126537%")
  },
  ImageBackground_228_3: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("6.079234972677596%"),
    minHeight: hp("6.079234972677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27777777777778%"),
    top: hp("402.4590163934426%")
  },
  ImageBackground_228_4: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("6.079234972677596%"),
    minHeight: hp("6.079234972677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.20833333333333%"),
    top: hp("402.4590163934426%")
  },
  ImageBackground_228_5: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("6.079234972677596%"),
    minHeight: hp("6.079234972677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.06944444444444%"),
    top: hp("402.4590163934426%")
  },
  ImageBackground_228_6: {
    width: wp("4.219364452890457e-7%"),
    minWidth: wp("4.219364452890457e-7%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.63888888888889%"),
    top: hp("402.4590163934426%")
  },
  ImageBackground_228_7: {
    width: wp("4.219364452890457e-7%"),
    minWidth: wp("4.219364452890457e-7%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.333333333333336%"),
    top: hp("402.4590163934426%")
  },
  View_230_2: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.13888888888889%"),
    top: hp("409.97267759562845%")
  },
  Text_230_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_230_5: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77777777777778%"),
    top: hp("422.9508196721311%")
  },
  Text_230_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_230_3: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.30555555555556%"),
    top: hp("409.97267759562845%")
  },
  Text_230_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_230_6: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.23611111111111%"),
    top: hp("409.97267759562845%")
  },
  Text_230_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_230_8: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("408.3333333333333%")
  },
  View_230_7: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_220_178: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: hp("1.7759562841530396%")
  },
  Text_220_178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_185: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    height: hp("17.89617486338798%"),
    minHeight: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.80555555555556%"),
    top: hp("420.90163934426226%"),
    backgroundColor: "rgba(14, 99, 180, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_230_4: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    minHeight: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.94444444444444%"),
    top: hp("422.5409836065574%")
  },
  Text_230_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_230_12: {
    width: wp("0.0000036729711104675917%"),
    minWidth: wp("0.0000036729711104675917%"),
    height: hp("165.30054644808743%"),
    minHeight: hp("165.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.51388888888889%"),
    top: hp("458.6065573770492%")
  },
  ImageBackground_230_13: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.75%"),
    top: hp("467.89617486338796%")
  },
  ImageBackground_257_2: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.75%"),
    top: hp("501.6393442622951%")
  },
  ImageBackground_257_4: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.75%"),
    top: hp("528.8251366120219%")
  },
  ImageBackground_257_8: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.75%"),
    top: hp("558.1967213114754%")
  },
  ImageBackground_257_11: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.75%"),
    top: hp("585.3825136612022%")
  },
  View_230_14: {
    width: wp("28.26388888888889%"),
    minWidth: wp("28.26388888888889%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.166666666666668%"),
    top: hp("459.42622950819674%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_257_0: {
    width: wp("28.26388888888889%"),
    minWidth: wp("28.26388888888889%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.80555555555556%"),
    top: hp("490.71038251366116%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_257_3: {
    width: wp("28.26388888888889%"),
    minWidth: wp("28.26388888888889%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.444444444444446%"),
    top: hp("518.032786885246%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_257_6: {
    width: wp("28.26388888888889%"),
    minWidth: wp("28.26388888888889%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.66666666666667%"),
    top: hp("545.9016393442622%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_257_9: {
    width: wp("28.26388888888889%"),
    minWidth: wp("28.26388888888889%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.166666666666668%"),
    top: hp("573.0874316939891%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_230_16: {
    width: wp("13.125%"),
    minWidth: wp("13.125%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("463.11475409836066%")
  },
  Text_230_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_257_5: {
    width: wp("13.125%"),
    minWidth: wp("13.125%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("521.5846994535519%")
  },
  Text_257_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_257_7: {
    width: wp("13.125%"),
    minWidth: wp("13.125%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.47222222222222%"),
    top: hp("549.4535519125683%")
  },
  Text_257_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_257_10: {
    width: wp("13.125%"),
    minWidth: wp("13.125%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.97222222222222%"),
    top: hp("576.639344262295%")
  },
  Text_257_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_257_1: {
    width: wp("13.125%"),
    minWidth: wp("13.125%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.888888888888886%"),
    top: hp("494.3989071038251%")
  },
  Text_257_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
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
