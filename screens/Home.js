import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const Home = () => {

    return (
        <View style={styles.container}>
            {/** New Plants */}
            <View style={{ height: '30%', backgroundColor: COLORS.white }}>

                <View 
                style={{
                    flex: 1,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    backgroundColor: COLORS.primary
                }}>
                    <View style={{ marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding }}>
                        <View>
                            <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plant</Text>
                            <TouchableOpacity
                            onPress={() => {console.log("Focus on password")}}>
                                <Image
                                source={icons.focus}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>

            {/** Todays Share */}
            <View style={{ height: '50%', backgroundColor: COLORS.lightGray }}></View>

            {/** Added Friend */}
            <View style={{ height: '20%', backgroundColor: COLORS.lightGray }}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Home