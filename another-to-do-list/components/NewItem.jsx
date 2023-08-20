import { Button, TextInput, View, StyleSheet, Alert } from "react-native";

const NewItem = ({ text, setText, setVisible, addItem }) => {

    const hide = () => {
        setText("");
        setVisible(false);
    }

    const changeHandler = (data) => {
        setText(data);
    }

    const submitHandler = () => {
        if (text.length < 1) {
            const msg = "👉Please enter a task or press Cancel";
            const buttons = [
                {
                    text: "Back",
                    style: "cancel"
                },
                {
                    text: "Cancel",
                    onPress: hide,
                    style: "cancel"
                }

            ]
            Alert.alert(
                "😂Empty Task",
                msg,
                buttons
            );
            return;
        }
        console.log(`Adding ${text}`);
        addItem((prevItems) => [...prevItems, text]);
        setText("");
        setVisible(false);
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Add new task"
                defaultValue={text}
                onChangeText={changeHandler}
                style={styles.textBox}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.buttons}>
                    <Button title="Add Task"
                    onPress={submitHandler}
                />
                </View>
                <View style={styles.buttons}>
                <Button
                    title="Cancel"
                    onPress={hide}
                    
                />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        textBox: {
            width: 300,
            borderWidth: 1,
            borderColor: "blue",
            margin: 2,
            padding: 2
        },
        buttons: {
            margin: 2
        },
        buttonContainer: {
            flexDirection: "row",
        }

    }
)

export default NewItem;