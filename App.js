import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Images, Profiles } from './App/Themes';

export default function App() {
  const haroldProfile = Profiles.harold;
  const [profileImage] = useState(haroldProfile.image);
  const [name] = useState(haroldProfile.name);
  const [age] = useState(haroldProfile.age);
  const [occupation] = useState(haroldProfile.occupation);

  return (
    <View style={styles.container}>
      <View style={styles.topPanel}>
        <Image source={Images.cog} style={styles.greyedOut}/>
        <Image source={Images.logo} style={styles.tinderContainer}/>
        <Image source={Images.chat} style={styles.greyedOut}/>
      </View>
      <View style={styles.middle}>
        {/* Prof pic goes around the whole thing */}
        <View style={styles.profPic}>
          {/* Just goes around the photo */}
          <View style={styles.photoContainer}>
            <Image source={Images.harold} style={styles.photo}/>
          </View>
          <View style={styles.textView}>
            <Text style={styles.nameText}>
              Harold,
              <Text style={styles.ageText}> 65</Text>
              </Text>
              <Text style = {styles.jobText}>Internet meme</Text>
          </View>
        </View>
      </View> 
      <View style={styles.bottom}>
        <View style={styles.try}>
          <View style={styles.circleSmall}>
            <Image source={Images.rewind} style={styles.smallButtons}></Image>
          </View>
        </View>
        
        <View style={styles.circleBig}>
          <Image source={Images.nope} style={styles.bigButtons}></Image>
        </View>
        <View style={styles.try}>
          <View style={styles.circleSmall}>
            <Image source={Images.boost} style={styles.smallButtons}></Image>
          </View>
        </View>
        <View style={styles.circleBig}>
        <Image source={Images.like} style={styles.bigButtons}></Image>
        </View>
        <View style={styles.try}>
        <View style={styles.circleSmall}>
          <Image source={Images.superLike} style={styles.smallButtons}></Image>
          </View>
        </View>
      </View>           
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  try:{
    paddingTop:5
  },
  smallButtons:{
    width:28,
    height:28,
    resizeMode:"contain",
    alignSelf:"center"
  },
  bigButtons:{
    width:35,
    height:35,
    resizeMode:"contain",
    alignSelf:"center",
  },
  circleBig:{
    width:60,
    height:60,
    borderRadius:150/2,
    backgroundColor:'white',
    paddingTop:13
  },
  circleSmall:{
    width:50,
    height:50,
    borderRadius:150/2,
    backgroundColor:'white',
    paddingTop:11
  },
  jobText:{
    fontSize:18,
    color:'gray'
  },
  nameText:{
    fontWeight:'bold',
    fontSize:24
  },
  ageText:{
    fontWeight:'normal',
    fontSize:24
  },
  textView:{
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    backgroundColor:'white',
    paddingLeft:5,
    paddingTop:5,
    paddingBottom:5,
    borderBottomWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
    borderColor:"gray"
  },
  topPanel:{
    paddingTop:45,
    flex:1,
    backgroundColor:'#d3d3d3',
    flexDirection:'row',
    borderBottomWidth:2,
    borderColor:"gray",
    height:Platform.OS == 'ios'? 44 : 56,
    justifyContent:"space-between",
  },
  profPic:{
    justifyContent:"center",
    flex:1,
  },
  tinderContainer:{
    width: 88,
    height: 44,
    resizeMode:"contain",
    flex:1,
  },
  greyedOut:{
    width: 88,
    height: 44,
    resizeMode:"contain",
    flex:1,
    tintColor:"gray"
  },
  photoContainer:{
    width:350,
    height:350,
    resizeMode:"contain",
    alignSelf:"center",
    borderLeftWidth:2,
    borderRightWidth:2,
    borderTopWidth:2,
    borderColor:"gray"
  },
  middle:{
    flex:15.5,
    alignItems:'center',
    backgroundColor:'#d3d3d3',
  },
  bottom:{
    paddingLeft:50,
    paddingRight:50,
    flex:1.9,
    backgroundColor:'#d3d3d3',
    justifyContent:"space-between",
    flexDirection:'row',
  },
  photo:{
    width:346,
    height:348,
    resizeMode:"contain",
    alignSelf:"center",
  }
  
});