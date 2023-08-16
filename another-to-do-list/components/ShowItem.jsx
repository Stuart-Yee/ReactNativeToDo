import {Text, View, Pressable, StyleSheet} from "react-native"

const ShowItem = ({item, setItems, idx}) => {

    const deleteHandler = () => {
        console.log(idx);
        setItems(prev=>{
            prev.splice(idx, 1);
            return [...prev];
        })
    }

    return(
        <View style={styles.container}>
            <Pressable 
                style={styles.delete}
                onPress={deleteHandler}
                >
                <Text style={styles.deleteX}>X</Text>
            </Pressable>
        <Text style={styles.text}>{item}</Text>
        </View>
    )
}

export default ShowItem;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "blue",
        flexDirection: "row",
        borderRadius: 8,
        margin: 3
    },
    delete: {
        margin: 2,
        backgroundColor: "red",
        borderRadius: 6,
        padding: 1
    },
    deleteX: {
        color: "#fff",
    },
    text: {
        margin: 2
    }
})