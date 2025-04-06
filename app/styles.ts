import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    bg: {
        //opacity: 0.5, // This affects all child elements
        height: height,
        width: width,
        justifyContent: 'center',
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center', // Added to center content vertically
        opacity: 1,
        alignSelf: 'center',
    },
    text: {
        color: 'white',
        fontSize: width * 0.05,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginBottom: height * 0.03,
    },
    smallText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: width * 0.1,
        marginBottom: height * 0.03,
    },
    button: {
        marginTop: height * 0.025,
        marginBottom: height * 0.025, 
        alignItems: 'center',
    },
    image: {
        marginTop: height * 0.025,
        marginBottom: height * 0.025, 
        alignItems: 'center',
    },
    textInput: {
        height: width * 0.06, 
        borderColor: 'white', 
        borderWidth: 3, 
        margin: width * 0.03, 
        fontSize: width * 0.05,
        color: 'white',
    },
    // Home style
    title: {
        color: 'rgba(247, 247, 247,1)',
        fontSize: width * 0.1,
        textAlign: 'center',
    },
    subtitle: {
        color: 'red',
        fontSize: width * 0.05,
    },
    // store style
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        color: 'white',
      },
    summary: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: height * 0.02,
        padding: width * 0.03,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
    },
    summaryText: {
        fontFamily: "openSansBold",
        fontSize: width * 0.045,
    },
    amount: {
        color: "#C2185B",
    },
});


export default styles;