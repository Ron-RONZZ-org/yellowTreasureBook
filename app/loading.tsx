import React from 'react'; 
import {View, StyleSheet, Text , 
		ActivityIndicator} from 'react-native'; 

export default function App() { 
return ( 
	<View style={styles.container}> 
	<ActivityIndicator size="large" color="lightgreen"/> 
	<Text style={styles.text}>404...</Text> 
	</View> 
); 
} 

const styles = StyleSheet.create({ 
container: { 
	flex: 1, 
	justifyContent: 'center', 
	alignItems: 'center', 
}, 
text : { 
    color: 'white',
	marginTop : 10, 
} 
	
});
