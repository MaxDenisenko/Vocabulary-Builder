import React from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import colors from "../../assets/styles/colors";
import NavigationHeader from "../../components/NavigationHeader";
import RadialButton from "../../components/Buttons/RadialButton/";
import { connect } from "react-redux";
import { ADD_LIST_SCREEN } from "../../../constants";

function Lists({ listsCount, wordsCount, navigation }) {
  return (
    <>
      <SafeAreaView style={styles.Area1}>
        <NavigationHeader barStyle="light" />
        <View style={styles.header}>
          <View style={styles.infoblock}>
            <View style={styles.list}>
              <Text style={styles.count}>{listsCount}</Text>
              <Text style={styles.label}>Lists</Text>
            </View>
            <View style={styles.word}>
              <Text style={styles.count}>{wordsCount}</Text>
              <Text style={styles.label}>Words</Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentsText}>My dictionary</Text>
          <FlatList style={styles.contentFlatList}></FlatList>
          <RadialButton onPress={() => navigation.navigate(ADD_LIST_SCREEN)} />
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.Area2}></SafeAreaView>
    </>
  );
}
function mapStateToProps({ LISTS: lists, WORDS: words }) {
  return {
    lists: lists,
    wordsCount: words.length,
    listsCount: lists.length,
  };
}
export default connect(mapStateToProps)(Lists);

const styles = {
  Area1: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  Area2: {
    flex: 0,
    backgroundColor: colors.blue1,
  },
  header: {
    flex: 0.5,
    paddingBottom: 25,
    paddingLeft: 20,
  },
  infoblock: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    maxHeight: 40,
  },
  list: {
    width: 66,
    alignItems: "center",
    justifyContent: "center",
  },
  word: {
    width: 81,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 2,
    borderColor: colors.white,
  },
  count: {
    fontSize: 22,
    color: colors.white,
    fontFamily: "RobotoBold",
  },
  label: {
    fontSize: 12,
    color: colors.blue2,
    fontFamily: "RobotoRegular",
  },
  content: {
    flex: 8,
    backgroundColor: colors.blue1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  contentsText: {
    fontSize: 20,
    color: colors.black,
    fontFamily: "RobotoRegular",
    marginTop: 26,
    marginLeft: 16,
  },
  contentFlatList: {
    marginVertical: 21,
  },
};
