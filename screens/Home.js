import React,{useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,

    Image,ImageBackground, FlatList
} from 'react-native';
import{images,SIZES,FONTS,icons, COLORS, dummyData} from '../constants'
const Home = ({ navigation }) => {

 const[trending,setTrending] = useState(dummyData.trendingCurrencies)

 const renderItem = ({item,index}) => (
    <TouchableOpacity
    style={{
        width:180,
        paddingVertical:SIZES.padding,
        paddingHorizontal:SIZES.padding,
        marginLeft: index === 0 ? SIZES.padding :0,
        marginRight:SIZES.radius,
        borderRadius:10,
        backgroundColor:COLORS.white
    }}>

        {/* currency */}
        <View style={{flexDirection:"row"}}>
            <View>
                <Image 
                source={item.image} 
                resizeMode="cover"
                style={{
                    marginTop:5,
                    width:25,
                    height:25
                }}   />
            </View>
            <View>

            </View>
              

        </View>


        {/* value */}



    </TouchableOpacity>
 )


    function renderHeader() {
        return(
            <View style={{width:'100%',height:290,
            ...styles.shadow}}>

                <ImageBackground
                source={images.banner}
                resizeMode="cover"
                style={{
                    flex:1,
                    alignItems:'center'
                }}
                
                 >
                    {/* HeaderBar */}

                    <View style={{
                        marginTop:SIZES.padding ,
                        width:"100%",
                        alignItems:"flex-end",
                        paddingHorizontal:SIZES.padding
                    }}>

                        <TouchableOpacity style={{
                            width:35,
                            height:35,
                            alignItems:"center",
                            justifyContent:'center'

                        }}
                        onPress={()=> console.log("Notification Pressed on")}
                        
                        >
                            <Image
                            source={icons.notification_white} 
                            resizeMode="contain"
                            style={{flex:1}}
                            
                            />

                        </TouchableOpacity>

                    </View>

                    {/* Balance Section */}
                    <View  style={{
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <Text  style={{
                          ...FONTS.h3,
                            color:COLORS.white
                        }}> Your Portifolio Balance</Text>
                        <Text  style={{
                           ...FONTS.h1,
                            color:COLORS.white
                        }}   >${dummyData.portfolio.balance}</Text>
                        <Text  style={{
                            ...FONTS.body5,
                            color:COLORS.white
                        }}>{dummyData.portfolio.changes} Last 24 hours </Text>


                    </View>

                    {/* Trending Session */}
                    <View style={{
                        position:"absolute",
                        bottom:"-30%"
                    }}>
                        <Text style={{marginLeft:SIZES.padding, color:COLORS.white,...FONTS.h2}}  >Trending</Text>
                        <FlatList 
                        contentContainerStyle={{marginTop:SIZES}} 
                        data={trending}
                        renderItem={renderItem}
                        keyExtractor= {item=>`${item.id}`} 
                        horizontal
                        showsHorizontalScrollIndicator={false}  />
                    </View>




                </ImageBackground>

            </View>
        )
    }






    return (
        <ScrollView >
            <View  style={{flex:1,paddingBottom:130}}>
                {renderHeader()}

            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Home;