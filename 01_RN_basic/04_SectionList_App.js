import { View, Text, SectionList, StyleSheet, StatusBar, Button } from 'react-native'

export default function App() {
    const DATA = [
        {
            title: 'Main dishes',
            data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
            title: 'Sides',
            data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
            title: 'Drinks',
            data: ['Water', 'Coke', 'Beer'],
        },
        {
            title: 'Desserts',
            data: ['Cheese Cake', 'Ice Cream'],
        },
    ];

    function getData() {
        fetch('http://123.207.32.32:8000/home/multidata')
            .then(res => res.json())
            .then(res => {
                console.log('res', res)
            })
    }

    return (
        <View style={styles.container}>
            <SectionList 
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
            <Button
                title='get data'
                onPress={getData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ccc',
        paddingTop: StatusBar.currentHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        width: '100%'
    }
})