import ShowItem from "./ShowItem";
import { View, Text } from "react-native";

const ItemList = ({items, setItems}) => {

    return (
        <View>
            <Text>Look at Your Items:</Text>
            {items.map((item, idx)=>{
                return(
                    <ShowItem 
                        item={item} 
                        key={idx} 
                        idx={idx}
                        setItems={setItems}
                        />
                )
            })}
        </View>
    )

}

export default ItemList;