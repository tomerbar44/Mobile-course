import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
  message: {
    fontSize: 26,
    textAlign: 'center'
  },
  activityIndator: {
    flex: 1,
    justifyContent: 'center'
  },
  searchBarContainer: {
    backgroundColor: '#FFFFFF',
    height: 45,
    fontSize: 22,
    borderColor: '#DCDDDD',
    borderWidth: 7,
    borderStyle: "solid",
  },
  itemList: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
    },
    searchItem: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      padding:10,
      },
    imgList: {
      margin: 10,
      width: 60,
      height: 60
    },
    textArea: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 5,
      paddingLeft: 8
    },
    textList: {
      flex: 1,
      fontSize: 14,
      color: 'grey'
    },
    titleList: {
      flex: 1,
      fontSize: 18,
      fontWeight: 'bold'
    },
    buttonStyle:{
      paddingBottom:20
    }
})

export default styles