import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient'

const Home = (navigation) => {
    return (
        <View style={{
            backgroundColor: "#FFF",
            flex: 1
        }}>
            <View style={{
                backgroundColor: "#00a46c",
                height: "28%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 20
            }}>
                <Image
                    source={'../images/p1.png'}
                    style={{
                        height: 0,
                        width: 20,
                        marginTop: 15,
                    }}
                />
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 25,
                    width: "100%",
                }}>
                    <View
                        style={{ width: "50%" }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#FFF",
                            fontWeight: "bold"
                        }}>kitchen n Decor</Text>
                    </View>
                    <View style={{ width: "50%", alignItems: "flex-end" }}>
                        <Image
                            source={require('../images/logo.png')}
                            style={{ height: 60, width: 100 }}
                        />

                    </View>

                </View>
            </View>
            <LinearGradient
                colors={["rgba(0,164,109,0.4)", "transparent"]}
                style={{
                    left: 0,
                    right: 0,
                    height: 90,
                    marginTop: -45
                }}
            >
                <View style={{
                    backgroundColor: "#FFF",
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                    marginHorizontal: 20,
                    borderRadius: 15,
                    marginTop: 15,
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#b1e5d3"
                        style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            width: 260,
                            marginLeft: 10
                        }}
                    />
                    <Image
                        style={{ height: 20, width: 20, }}
                        source={require('../images/3.png')}
                    />
                </View>
            </LinearGradient>
            
            <View style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                width: "100%",
                alignItems: "center"
            }}>

                <View style={{ width: "50%" }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        color: "#585a61",
                    }}>Recomended</Text>
                    <View style={{
                        height: 4,
                        backgroundColor: "b1e5d3",
                        width: 115,
                        marginTop: -5
                    }}>

                    </View>
                </View>
                <View style={{ width: "50%", alignItems: "flex-end" }}>
                    <View style={{
                        backgroundColor: "#00a46c",
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderRadius: 15
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 13,
                            color: "#FFF"
                        }}>More</Text>
                    </View>

                </View>
            </View>

            <ScrollView
                horizontal
                showHorizontalScrollIndicator={false}
                style={{ height: 400 }}
            >
                <LinearGradient
                    colors={["rgba (0,164,109,0.99)", "tansparent"]}
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        height: 100,
                        marginTop: 200,
                        top: 0
                    }}
                />
                <ScrollView
                    onPress={() => navigation.navigate("Detail")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../images/4.png')}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>

                        <Text style={{
                            fontWeight: "bold"
                        }}>SAMANTHA</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 10
                        }}>$800</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3

                    }}>RUSSIA</Text>
                </ScrollView>

                <View
                    onPress={() => navigation.navigate("Detail")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../images/5.png')}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>

                        <Text style={{
                            fontWeight: "bold"
                        }}>ANGELICA</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 10
                        }}>$700</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3

                    }}>RUSSIA</Text>
                </View>
                <View
                    onPress={() => navigation.navigate("Detail")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../images/6.png')}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>

                        <Text style={{
                            fontWeight: "bold"
                        }}>ANGELICA</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 10
                        }}>$400</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3

                    }}>RUSSIA</Text>
                </View>
            </ScrollView>

            <View style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                width: "100%",
                alignItems: "center"
            }}>

                <View style={{ width: "50%" }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        color: "#585a61",
                    }}>Featured Items</Text>
                    <View style={{
                        height: 4,
                        backgroundColor: "b1e5d3",
                        width: 115,
                        marginTop: -5
                    }}>

                    </View>
                </View>
                <View style={{ width: "50%", alignItems: "flex-end" }}>
                    <View style={{
                        backgroundColor: "#00a46c",
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderRadius: 15
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 13,
                            color: "#FFF"
                        }}>More</Text>
                    </View>

                </View>
            </View>
            <ScrollView
                horizontal
                showHorizontalScrollIndicator={false}
                style={{ marginBottom: -100 }}
            >
                <Image source={require('../images/18.png')}
                    style={{ marginTop: 20, marginHorizontal: 20 }}
                />
                <Image source={require('../images/19.png')}
                    style={{ marginTop: 20, borderRadius: 10 }}
                />

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Home;