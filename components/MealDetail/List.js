import { StyleSheet, Text, View } from "react-native";

function List({data}) {
    return (
        data.map((dataPoint) => (
            <View style={styles.listItem} key={dataPoint}>
                <Text style={styles.itemText}>{dataPoint}</Text>
            </View>
        ))
    );
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    itemText: {
        color: '#352401',
        textAlign: 'center'
    }
});