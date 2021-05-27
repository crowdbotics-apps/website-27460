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
      <View style={styles.View_211_129} />
      <View style={styles.View_211_135} />
      <View style={styles.View_211_154} />
      <View style={styles.View_211_155}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8437/7632/afb2bd31f93bd029d201bd055e617468"
          }}
          style={styles.ImageBackground_211_156}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d5/0368/0eff6fc75931d0d77716b6fc9af38485"
          }}
          style={styles.ImageBackground_211_158}
        />
        <View style={styles.View_211_160}>
          <View style={styles.View_211_161} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eeca/a031/38f0b0d8d94815a6f7719c10d38609c4"
            }}
            style={styles.ImageBackground_211_162}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5837/1c2e/a9153adac1d37af38a59fdfb8fd73a5b"
            }}
            style={styles.ImageBackground_211_163}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93ea/01d6/816793a846cd8495076b572c07e18fae"
          }}
          style={styles.ImageBackground_211_164}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beec/9652/0e847db693027e73c509c3d6da637b59"
          }}
          style={styles.ImageBackground_211_168}
        />
      </View>
      <View style={styles.View_211_172}>
        <View style={styles.View_211_173}>
          <Text style={styles.Text_211_173}>Layanan Kami </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33c0/509b/3256009b5ab7497a8fc0d91e8a3a444a"
          }}
          style={styles.ImageBackground_211_174}
        />
      </View>
      <View style={styles.View_211_175}>
        <View style={styles.View_211_176}>
          <Text style={styles.Text_211_176}>Karir</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_69"))
        }
      >
        <View style={styles.View_211_177}>
          <View style={styles.View_211_178}>
            <View style={styles.View_211_179}>
              <Text style={styles.Text_211_179}>Investasi</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/c3f0/ef3eb252067614865e8264d3b1b439e1"
              }}
              style={styles.ImageBackground_211_180}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("211_8"))
        }
      >
        <View style={styles.View_211_181}>
          <View style={styles.View_211_182}>
            <View style={styles.View_211_183}>
              <Text style={styles.Text_211_183}>PELATIHAN</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/c3f0/ef3eb252067614865e8264d3b1b439e1"
              }}
              style={styles.ImageBackground_211_184}
            />
          </View>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a992/9126/d51233806dc98d5de24b022d9ec984fc"
        }}
        style={styles.ImageBackground_211_185}
      />
      <View style={styles.View_211_186}>
        <Text style={styles.Text_211_186}>Artikel</Text>
      </View>
      <View style={styles.View_211_187}>
        <Text style={styles.Text_211_187}>contact</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("173_2"))
        }
      >
        <View style={styles.View_211_188}>
          <View style={styles.View_211_189}>
            <Text style={styles.Text_211_189}>Profil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
            }}
            style={styles.ImageBackground_211_190}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_211_191} />
      <View style={styles.View_211_192}>
        <View style={styles.View_211_193} />
        <View style={styles.View_211_194}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d40/cf8b/1e423a1d2ed75428500e7fb3cd800b18"
            }}
            style={styles.ImageBackground_211_195}
          />
          <View style={styles.View_211_196}>
            <Text style={styles.Text_211_196}>About Us</Text>
          </View>
          <View style={styles.View_211_197}>
            <Text style={styles.Text_211_197}>Gada Utama</Text>
          </View>
          <View style={styles.View_211_198}>
            <Text style={styles.Text_211_198}>Gada Madya</Text>
          </View>
          <View style={styles.View_211_199}>
            <Text style={styles.Text_211_199}>Gada Pratama</Text>
          </View>
          <View style={styles.View_211_200}>
            <Text style={styles.Text_211_200}>Our Service</Text>
          </View>
          <View style={styles.View_211_201}>
            <Text style={styles.Text_211_201}>Our Partner</Text>
          </View>
          <View style={styles.View_211_202}>
            <Text style={styles.Text_211_202}>Our Vision &amp; Mission</Text>
          </View>
          <View style={styles.View_211_203}>
            <Text style={styles.Text_211_203}>Pelatihan</Text>
          </View>
          <View style={styles.View_211_204}>
            <Text style={styles.Text_211_204}>Follow Us :</Text>
          </View>
          <View style={styles.View_211_205}>
            <Text style={styles.Text_211_205}>Suscribe </Text>
          </View>
          <View style={styles.View_211_206}>
            <Text style={styles.Text_211_206}>Lowongan Kerja</Text>
          </View>
          <View style={styles.View_211_207}>
            <Text style={styles.Text_211_207}>Tips &amp; News</Text>
          </View>
          <View style={styles.View_211_208}>
            <Text style={styles.Text_211_208}>Contact Us</Text>
          </View>
          <View style={styles.View_211_209}>
            <Text style={styles.Text_211_209}>
              Kepercayaan yang telah diberikan customer kepada kami merupakan
              komitmen bagi kami yang wajib dijalankan dengan integritas,
              kreatifitas dan kerja sama yang merupakan pedoman kami dalam
              menjalankan bisnis ini.
            </Text>
          </View>
          <View style={styles.View_211_210}>
            <Text style={styles.Text_211_210}>
              Head Office : JL. Semampir Selatan V A NO.18 Surabaya 60119
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_211_211}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_211_212}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_211_213}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df61/ace3/bf82e3652bf326b512e8925e929670d6"
            }}
            style={styles.ImageBackground_211_214}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_211_218}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_211_219}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_211_220}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5bb/4109/c16fb04decf6e7e3b44c720904ade2d7"
            }}
            style={styles.ImageBackground_211_221}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e354/3c03/f5c08e580aa26655282d3ef27b8d5cad"
            }}
            style={styles.ImageBackground_211_222}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c7b/950a/9f7b792573bb66294649e70ac743332d"
            }}
            style={styles.ImageBackground_211_223}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a09/8813/fb8b4de80808c5b29a60d270849c2af6"
            }}
            style={styles.ImageBackground_211_228}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d52/69b3/d56b63754ba82a2aaac61bf1432e337b"
            }}
            style={styles.ImageBackground_211_232}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dea/5d57/396ef57f766f21f878be1059a2afe8ae"
            }}
            style={styles.ImageBackground_211_234}
          />
          <View style={styles.View_211_237} />
          <View style={styles.View_211_238}>
            <Text style={styles.Text_211_238}>email</Text>
          </View>
          <View style={styles.View_211_239} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdc2/6cf6/9c7d3ba34b589d9e5bca0695301915b3"
            }}
            style={styles.ImageBackground_211_240}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e0f/ee12/4a0d35b88fae71e1a6d71dddead6299a"
        }}
        style={styles.ImageBackground_211_250}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/68d8/50d1cf2831aa3420a696872a80bffb0f"
        }}
        style={styles.ImageBackground_211_251}
      />
      <View style={styles.View_211_253}>
        <Text style={styles.Text_211_253}>ID</Text>
      </View>
      <View style={styles.View_211_254}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffa0/b554/42148e2627afa2179cb22492583b77fc"
          }}
          style={styles.ImageBackground_211_255}
        />
      </View>
      <View style={styles.View_211_259}>
        <View style={styles.View_211_260}>
          <Text style={styles.Text_211_260}>Profil</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
          }}
          style={styles.ImageBackground_211_261}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d40/cf8b/1e423a1d2ed75428500e7fb3cd800b18"
        }}
        style={styles.ImageBackground_211_310}
      />
      <View style={styles.View_211_648} />
      <View style={styles.View_211_649}>
        <Text style={styles.Text_211_649}>GET A FREE CONSULTATION</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a33/9f66/c07464b1d7d8dcc62140312e89dd2c5a"
        }}
        style={styles.ImageBackground_211_650}
      />
      <View style={styles.View_211_651}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_0"))
          }
        >
          <View style={styles.View_211_652} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("239_3"))
          }
        >
          <View style={styles.View_211_653}>
            <View style={styles.View_211_654} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/b7d6/417bdbf9ba8608d34aa65a29c915dc55"
              }}
              style={styles.ImageBackground_211_655}
            />
            <View style={styles.View_211_656}>
              <Text style={styles.Text_211_656}>Service Required</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_211_657}>
          <Text style={styles.Text_211_657}>Submit</Text>
        </View>
        <View style={styles.View_211_658}>
          <View style={styles.View_211_659} />
          <View style={styles.View_211_660} />
          <View style={styles.View_211_661}>
            <Text style={styles.Text_211_661}>Nama</Text>
          </View>
          <View style={styles.View_211_662}>
            <Text style={styles.Text_211_662}>Company</Text>
          </View>
        </View>
        <View style={styles.View_211_663}>
          <View style={styles.View_211_664} />
          <View style={styles.View_211_665} />
          <View style={styles.View_211_666}>
            <Text style={styles.Text_211_666}>Email</Text>
          </View>
          <View style={styles.View_211_667}>
            <Text style={styles.Text_211_667}>Phone</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_211_668}>
        <Text style={styles.Text_211_668}>We’re ready to help you today !</Text>
      </View>
      <View style={styles.View_211_669}>
        <Text style={styles.Text_211_669}>08112345687</Text>
      </View>
      <View style={styles.View_211_670}>
        <Text style={styles.Text_211_670}>info-sn@shelternusantara.co.id</Text>
      </View>
      <View style={styles.View_211_671}>
        <View style={styles.View_211_672}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d42/8c3c/e67e843680037a9862803255ff9d951e"
            }}
            style={styles.ImageBackground_211_673}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc64/5f76/1e2c974a88108017f858046f87062b67"
        }}
        style={styles.ImageBackground_211_675}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d6/fc6d/e839fd8f2cd46a949c30d6b8bbe28c01"
        }}
        style={styles.ImageBackground_297_1}
      />
      <View style={styles.View_302_0} />
      <View style={styles.View_303_0} />
      <View style={styles.View_302_2} />
      <View style={styles.View_303_1} />
      <View style={styles.View_302_3} />
      <View style={styles.View_303_2} />
      <View style={styles.View_302_1} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5579/a1cd/6b06c070fd673b54c3a2802828c21970"
        }}
        style={styles.ImageBackground_302_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5579/a1cd/6b06c070fd673b54c3a2802828c21970"
        }}
        style={styles.ImageBackground_303_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0017/8467/3f1cd65067e2f3b40a2833bd9b93a6ee"
        }}
        style={styles.ImageBackground_302_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0017/8467/3f1cd65067e2f3b40a2833bd9b93a6ee"
        }}
        style={styles.ImageBackground_303_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb15/7cc2/c66b9ea1084ebc54a05598e56fae55db"
        }}
        style={styles.ImageBackground_302_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb15/7cc2/c66b9ea1084ebc54a05598e56fae55db"
        }}
        style={styles.ImageBackground_303_6}
      />
      <View style={styles.View_302_9}>
        <Text style={styles.Text_302_9}>
          Apa itu Agile Leadership? Agile Leadership adalah gaya manajemen yang
          melibatkan penerapan prinsip pengembangan software dengan metode
          tangkas (Agile Software Development) dalam menjalankan sebuah tim.
        </Text>
      </View>
      <View style={styles.View_303_7}>
        <Text style={styles.Text_303_7}>
          Apa itu Agile Leadership? Agile Leadership adalah gaya manajemen yang
          melibatkan penerapan prinsip pengembangan software dengan metode
          tangkas (Agile Software Development) dalam menjalankan sebuah tim.
        </Text>
      </View>
      <View style={styles.View_302_17} />
      <View style={styles.View_303_8} />
      <View style={styles.View_302_25} />
      <View style={styles.View_303_9} />
      <View style={styles.View_302_27} />
      <View style={styles.View_303_10} />
      <View style={styles.View_302_20}>
        <Text style={styles.Text_302_20}>Read More</Text>
      </View>
      <View style={styles.View_303_11}>
        <Text style={styles.Text_303_11}>Read More</Text>
      </View>
      <View style={styles.View_302_26}>
        <Text style={styles.Text_302_26}>Read More</Text>
      </View>
      <View style={styles.View_303_12}>
        <Text style={styles.Text_303_12}>Read More</Text>
      </View>
      <View style={styles.View_302_28}>
        <Text style={styles.Text_302_28}>Read More</Text>
      </View>
      <View style={styles.View_303_13}>
        <Text style={styles.Text_303_13}>Read More</Text>
      </View>
      <View style={styles.View_302_12}>
        <Text style={styles.Text_302_12}>March 18, 2021</Text>
      </View>
      <View style={styles.View_303_14}>
        <Text style={styles.Text_303_14}>March 18, 2021</Text>
      </View>
      <View style={styles.View_302_10}>
        <Text style={styles.Text_302_10}>Penutupan Gada Pratama</Text>
      </View>
      <View style={styles.View_303_15}>
        <Text style={styles.Text_303_15}>Penutupan Gada Pratama</Text>
      </View>
      <View style={styles.View_302_13}>
        <Text style={styles.Text_302_13}>March 3, 2021</Text>
      </View>
      <View style={styles.View_303_16}>
        <Text style={styles.Text_303_16}>March 3, 2021</Text>
      </View>
      <View style={styles.View_302_23}>
        <Text style={styles.Text_302_23}>
          Pada tanggal 2 Maret 2021, Gada Pratama Angkatan 42 telah resmi
          ditutup. Sebanyak 126 orang siswa dinyatakan lulus dari pelatihan
          selama 12 hari ini, dan meraih sertifikasi Gada Pratama dari Polda
          Jawa Timur.{" "}
        </Text>
      </View>
      <View style={styles.View_303_17}>
        <Text style={styles.Text_303_17}>
          Pada tanggal 2 Maret 2021, Gada Pratama Angkatan 42 telah resmi
          ditutup. Sebanyak 126 orang siswa dinyatakan lulus dari pelatihan
          selama 12 hari ini, dan meraih sertifikasi Gada Pratama dari Polda
          Jawa Timur.{" "}
        </Text>
      </View>
      <View style={styles.View_302_11}>
        <Text style={styles.Text_302_11}>Pembukaan Gada Madya</Text>
      </View>
      <View style={styles.View_303_18}>
        <Text style={styles.Text_303_18}>Pembukaan Gada Madya</Text>
      </View>
      <View style={styles.View_302_14}>
        <Text style={styles.Text_302_14}>March 1, 2021</Text>
      </View>
      <View style={styles.View_303_19}>
        <Text style={styles.Text_303_19}>March 1, 2021</Text>
      </View>
      <View style={styles.View_302_24}>
        <Text style={styles.Text_302_24}>
          Pada tanggal 1 Maret 2021, Shelter Nusantara mengadakan pembukaan
          Pelatihan Gada Madya angkatan ke 6. Pelatihan lanjutan ini berlangsung
          selama kurang lebih 7 hari, dengan peserta sejumlah 54 orang.{" "}
        </Text>
      </View>
      <View style={styles.View_303_20}>
        <Text style={styles.Text_303_20}>
          Pada tanggal 1 Maret 2021, Shelter Nusantara mengadakan pembukaan
          Pelatihan Gada Madya angkatan ke 6. Pelatihan lanjutan ini berlangsung
          selama kurang lebih 7 hari, dengan peserta sejumlah 54 orang.{" "}
        </Text>
      </View>
      <View style={styles.View_303_26}>
        <Text style={styles.Text_303_26}>Annual meeting</Text>
      </View>
      <View style={styles.View_303_27}>
        <Text style={styles.Text_303_27}>21 November 2020</Text>
      </View>
      <View style={styles.View_305_2}>
        <View style={styles.View_305_1} />
        <View style={styles.View_315_0}>
          <Text style={styles.Text_315_0}>Upcoming Events</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98c6/147d/f97798a968719d18ad4ad3d2c052dc63"
          }}
          style={styles.ImageBackground_315_2}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98c6/147d/f97798a968719d18ad4ad3d2c052dc63"
          }}
          style={styles.ImageBackground_315_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98c6/147d/f97798a968719d18ad4ad3d2c052dc63"
          }}
          style={styles.ImageBackground_315_6}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("766.5300546448087%") },
  View_211_129: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("23.633879781420767%"),
    minHeight: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-7.240437158469945%"),
    backgroundColor: "rgba(18, 26, 37, 1)"
  },
  View_211_135: {
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
  View_211_154: {
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
  View_211_155: {
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
  ImageBackground_211_156: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111143%")
  },
  ImageBackground_211_158: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444443%")
  },
  View_211_160: {
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
  View_211_161: {
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
  ImageBackground_211_162: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_211_163: {
    width: wp("0.5033365885416666%"),
    height: hp("0.9650058433657787%"),
    top: hp("0.9344382364241801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5815972222222143%")
  },
  ImageBackground_211_164: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_211_168: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6527777777777715%")
  },
  View_211_172: {
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
  View_211_173: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_211_173: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_211_174: {
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
  View_211_175: {
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
  View_211_176: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_211_176: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_211_177: {
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
  View_211_178: {
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
  View_211_179: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_211_179: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_211_180: {
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
  View_211_181: {
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
  View_211_182: {
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
  View_211_183: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_211_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_211_184: {
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
  ImageBackground_211_185: {
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
  View_211_186: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%"),
    top: hp("9.01639344262295%")
  },
  Text_211_186: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_211_187: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.66666666666667%"),
    top: hp("9.01639344262295%")
  },
  Text_211_187: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_211_188: {
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
  View_211_189: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_211_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_211_190: {
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
  View_211_191: {
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
  View_211_192: {
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
  View_211_193: {
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
  View_211_194: {
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
  ImageBackground_211_195: {
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
  View_211_196: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("21.038251366120107%")
  },
  Text_211_196: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_197: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.888888888888886%"),
    top: hp("6.010928961748618%")
  },
  Text_211_197: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_198: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("10.109289617486183%")
  },
  Text_211_198: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_199: {
    width: wp("8.958333333333334%"),
    minWidth: wp("8.958333333333334%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("14.207650273223976%")
  },
  Text_211_199: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_200: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("26.775956284152926%")
  },
  Text_211_200: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_201: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("30.874316939890605%")
  },
  Text_211_201: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_202: {
    width: wp("11.527777777777779%"),
    minWidth: wp("11.527777777777779%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.02777777777777%"),
    top: hp("34.972677595628284%")
  },
  Text_211_202: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_203: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("0%")
  },
  Text_211_203: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_204: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("0%")
  },
  Text_211_204: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_205: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.888888888888886%"),
    top: hp("18.715846994535468%")
  },
  Text_211_205: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_206: {
    width: wp("14.374999999999998%"),
    minWidth: wp("14.374999999999998%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("56.14754098360652%")
  },
  Text_211_206: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_207: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("42.21311475409823%")
  },
  Text_211_207: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_208: {
    width: wp("9.86111111111111%"),
    minWidth: wp("9.86111111111111%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("49.04371584699447%")
  },
  Text_211_208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_209: {
    width: wp("28.47222222222222%"),
    minWidth: wp("28.47222222222222%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.295081967213036%")
  },
  Text_211_209: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_210: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.46994535519116%")
  },
  Text_211_210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_211_211: {
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
  ImageBackground_211_212: {
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
  ImageBackground_211_213: {
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
  ImageBackground_211_214: {
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
  ImageBackground_211_218: {
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
  ImageBackground_211_219: {
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
  ImageBackground_211_220: {
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
  ImageBackground_211_221: {
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
  ImageBackground_211_222: {
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
  ImageBackground_211_223: {
    width: wp("2.7083333333333335%"),
    height: hp("4.781420765027322%"),
    top: hp("4.918032786885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.41666666666667%")
  },
  ImageBackground_211_228: {
    width: wp("2.569444444444444%"),
    height: hp("5.05464480874317%"),
    top: hp("4.644808743169278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.013888888888886%")
  },
  ImageBackground_211_232: {
    width: wp("2.569444444444444%"),
    height: hp("4.781420765027322%"),
    top: hp("4.918032786885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.611111111111114%")
  },
  ImageBackground_211_234: {
    width: wp("3.680555555555556%"),
    height: hp("6.967213114754098%"),
    top: hp("3.8251366120217654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.95833333333334%")
  },
  View_211_237: {
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
  View_211_238: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.16666666666667%"),
    top: hp("23.49726775956276%")
  },
  Text_211_238: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_239: {
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
  ImageBackground_211_240: {
    width: wp("1.5277777777777777%"),
    height: hp("3.0054644808743167%"),
    top: hp("23.63387978142066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.48611111111111%")
  },
  ImageBackground_211_250: {
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
  ImageBackground_211_251: {
    width: wp("1.3194444444444444%"),
    height: hp("2.5923911339598273%"),
    top: hp("1.8678342058358948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%")
  },
  View_211_253: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.79166666666667%"),
    top: hp("1.2295081967213115%")
  },
  Text_211_253: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_254: {
    width: wp("1.3245985243055556%"),
    height: hp("5.374150719147562%"),
    top: hp("11.654621395257001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("218.95833333333331%")
  },
  ImageBackground_211_255: {
    width: wp("1.3245985243055556%"),
    height: hp("5.374150719147562%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_211_259: {
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
  View_211_260: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_211_260: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_211_261: {
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
  ImageBackground_211_310: {
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
  View_211_648: {
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
  View_211_649: {
    width: wp("33.88888888888889%"),
    minWidth: wp("33.88888888888889%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%"),
    top: hp("630.4644808743169%")
  },
  Text_211_649: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_211_650: {
    width: wp("21.59722222222222%"),
    minWidth: wp("21.59722222222222%"),
    height: hp("52.18579234972678%"),
    minHeight: hp("52.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.638888888888889%"),
    top: hp("640.983606557377%")
  },
  View_211_651: {
    width: wp("33.19444444444444%"),
    minWidth: wp("33.19444444444444%"),
    height: hp("30.46448087431694%"),
    minHeight: hp("30.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.81944444444444%"),
    top: hp("648.4972677595629%")
  },
  View_211_652: {
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
  View_211_653: {
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
  View_211_654: {
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
  ImageBackground_211_655: {
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
  View_211_656: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222285%"),
    top: hp("1.5027322404372399%")
  },
  Text_211_656: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_211_657: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%"),
    top: hp("26.229508196721326%")
  },
  Text_211_657: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_211_658: {
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
  View_211_659: {
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
  View_211_660: {
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
  View_211_661: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("1.775956284152926%")
  },
  Text_211_661: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_211_662: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444443%"),
    top: hp("1.775956284152926%")
  },
  Text_211_662: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_211_663: {
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
  View_211_664: {
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
  View_211_665: {
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
  View_211_666: {
    width: wp("2.430555555555556%"),
    minWidth: wp("2.430555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222285%"),
    top: hp("1.7759562841530396%")
  },
  Text_211_666: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_211_667: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444443%"),
    top: hp("1.7759562841530396%")
  },
  Text_211_667: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_211_668: {
    width: wp("21.73611111111111%"),
    minWidth: wp("21.73611111111111%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.805555555555557%"),
    top: hp("641.8032786885246%")
  },
  Text_211_668: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_669: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.34722222222222%"),
    top: hp("660.1092896174864%")
  },
  Text_211_669: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_670: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.34722222222222%"),
    top: hp("668.1693989071039%")
  },
  Text_211_670: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_671: {
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
  View_211_672: {
    width: wp("2.4305574099222818%"),
    height: hp("4.781427539762904%"),
    top: hp("-0.00006670508878414694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_211_673: {
    width: wp("2.4305574099222818%"),
    height: hp("4.781427539762904%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_211_675: {
    width: wp("2.361111111111111%"),
    height: hp("4.644808743169399%"),
    top: hp("667.0765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.361111111111114%")
  },
  ImageBackground_297_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("73.224043715847%"),
    minHeight: hp("73.224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.846994535519126%")
  },
  View_302_0: {
    width: wp("53.68055555555556%"),
    minWidth: wp("53.68055555555556%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("98.77049180327869%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_303_0: {
    width: wp("53.68055555555556%"),
    minWidth: wp("53.68055555555556%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("195.3551912568306%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_302_2: {
    width: wp("53.68055555555556%"),
    minWidth: wp("53.68055555555556%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("130.19125683060108%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_303_1: {
    width: wp("53.68055555555556%"),
    minWidth: wp("53.68055555555556%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("226.775956284153%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_302_3: {
    width: wp("53.68055555555556%"),
    minWidth: wp("53.68055555555556%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("161.61202185792348%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_303_2: {
    width: wp("53.68055555555556%"),
    minWidth: wp("53.68055555555556%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("258.1967213114754%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_302_1: {
    width: wp("21.319444444444443%"),
    minWidth: wp("21.319444444444443%"),
    height: hp("60.5191256830601%"),
    minHeight: hp("60.5191256830601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38888888888889%"),
    top: hp("98.08743169398907%"),
    backgroundColor: "rgba(14, 99, 180, 1)"
  },
  ImageBackground_302_8: {
    width: wp("24.375%"),
    minWidth: wp("24.375%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("98.77049180327869%"),
    resizeMode: "cover"
  },
  ImageBackground_303_4: {
    width: wp("24.375%"),
    minWidth: wp("24.375%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("195.3551912568306%"),
    resizeMode: "cover"
  },
  ImageBackground_302_16: {
    width: wp("24.375%"),
    minWidth: wp("24.375%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("130.19125683060108%"),
    resizeMode: "cover"
  },
  ImageBackground_303_5: {
    width: wp("24.375%"),
    minWidth: wp("24.375%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("226.775956284153%"),
    resizeMode: "cover"
  },
  ImageBackground_302_15: {
    width: wp("24.375%"),
    minWidth: wp("24.375%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("161.74863387978144%"),
    resizeMode: "cover"
  },
  ImageBackground_303_6: {
    width: wp("24.375%"),
    minWidth: wp("24.375%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("258.33333333333337%"),
    resizeMode: "cover"
  },
  View_302_9: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.638888888888886%"),
    top: hp("97.81420765027322%")
  },
  Text_302_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_7: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.638888888888886%"),
    top: hp("193.16939890710384%")
  },
  Text_303_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_17: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("119.80874316939891%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_303_8: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("216.39344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_302_25: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("152.3224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_303_9: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("248.9071038251366%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_302_27: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("183.46994535519124%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_303_10: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("280.46448087431696%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_302_20: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.263888888888886%"),
    top: hp("120.76502732240438%")
  },
  Text_302_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_11: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.263888888888886%"),
    top: hp("217.34972677595627%")
  },
  Text_303_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_26: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.263888888888886%"),
    top: hp("153.27868852459017%")
  },
  Text_302_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_12: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.263888888888886%"),
    top: hp("249.8633879781421%")
  },
  Text_303_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_28: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.263888888888886%"),
    top: hp("184.4262295081967%")
  },
  Text_302_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_13: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.263888888888886%"),
    top: hp("281.4207650273224%")
  },
  Text_303_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_12: {
    width: wp("6.805555555555555%"),
    minWidth: wp("6.805555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.638888888888886%"),
    top: hp("102.86885245901641%")
  },
  Text_302_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_14: {
    width: wp("6.805555555555555%"),
    minWidth: wp("6.805555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.638888888888886%"),
    top: hp("198.63387978142077%")
  },
  Text_303_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_10: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("131.69398907103823%")
  },
  Text_302_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_15: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("228.27868852459017%")
  },
  Text_303_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_13: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("134.4262295081967%")
  },
  Text_302_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_16: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("230.87431693989072%")
  },
  Text_303_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_23: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("137.70491803278688%")
  },
  Text_302_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_17: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.77777777777778%"),
    top: hp("234.28961748633878%")
  },
  Text_303_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_11: {
    width: wp("12.430555555555555%"),
    minWidth: wp("12.430555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("162.43169398907105%")
  },
  Text_302_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_18: {
    width: wp("12.430555555555555%"),
    minWidth: wp("12.430555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("259.016393442623%")
  },
  Text_303_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_14: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("165.0273224043716%")
  },
  Text_302_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_19: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("261.61202185792354%")
  },
  Text_303_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_24: {
    width: wp("26.111111111111114%"),
    minWidth: wp("26.111111111111114%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("168.44262295081967%")
  },
  Text_302_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_20: {
    width: wp("26.111111111111114%"),
    minWidth: wp("26.111111111111114%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("265.0273224043716%")
  },
  Text_303_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_26: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.847222222222221%"),
    top: hp("32.37704918032787%")
  },
  Text_303_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_27: {
    width: wp("9.51388888888889%"),
    minWidth: wp("9.51388888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.847222222222221%"),
    top: hp("35.79234972677596%")
  },
  Text_303_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_305_2: {
    width: wp("21.38888888888889%"),
    minWidth: wp("21.38888888888889%"),
    height: hp("66.12021857923497%"),
    minHeight: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.31944444444444%"),
    top: hp("163.11475409836063%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_305_1: {
    width: wp("21.11111111111111%"),
    minWidth: wp("21.11111111111111%"),
    height: hp("65.84699453551912%"),
    minHeight: hp("65.84699453551912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888573%"),
    top: hp("0.27322404371588505%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_315_0: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222285%"),
    top: hp("2.5956284153005527%")
  },
  Text_315_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_315_2: {
    width: wp("18.819444444444443%"),
    minWidth: wp("18.819444444444443%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("13.251366120218592%")
  },
  ImageBackground_315_4: {
    width: wp("18.819444444444443%"),
    minWidth: wp("18.819444444444443%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222285%"),
    top: hp("22.13114754098362%")
  },
  ImageBackground_315_6: {
    width: wp("18.819444444444443%"),
    minWidth: wp("18.819444444444443%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222285%"),
    top: hp("31.010928961748647%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
