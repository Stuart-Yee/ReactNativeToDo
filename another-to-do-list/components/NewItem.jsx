import { Button, TextInput, View, StyleSheet } from "react-native";

const NewItem = ({text, setText, setVisible, addItem}) => {

    const hide = () => {
        setText("");
        setVisible(false);
    }

    const changeHandler = (data) => {
        setText(data);
    }

    const submitHandler = () => {
        if (text.length < 1) {
            alert("Please enter a task or press Cancel");
            return;
        }
        console.log(`Adding ${text}`);
        addItem((prevItems)=>[...prevItems, text]);
        setText("");
        setVisible(false);
    }

    return(
        <View style={styles.container}>
            <TextInput 
                placeholder="Add new task"
                defaultValue={text}
                onChangeText={changeHandler}
                />
            <Button title="Add Task"
                onPress={submitHandler}
                />
            <Button 
                title="Cancel"
                onPress={hide}
                />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }
    }
)

export default NewItem;