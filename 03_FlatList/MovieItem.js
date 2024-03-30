import { View, StyleSheet, Text, Pressable, Image } from 'react-native'

export default function MovieItem(props) {
    const { movie } = props

    return (
        <Pressable onPress={props.onPress}>
            <View style={styles.container}>
                {/* 左边 */}
                <Image source={{uri: movie.image ?? movie.images?.medium}} style={styles.thumbnail}></Image>
                {/* 右边 */}
                <View style={styles.rightContainer}>
                    {/* 标题 */}
                    <Text style={styles.horizentalView}>{movie?.title}</Text>
                    {/* 上映时间 */}
                    <Text style={styles.horizentalView}>{movie?.year}</Text>
                    {/* 评分 */}
                    {
                        movie?.average === 0 ? 
                            <Text style={styles.horizentalView}>暂无评分</Text> : 
                            <Text style={styles.horizentalView}>评分：<Text style={styles.titleTag}>{movie?.average ?? movie?.rating?.average}</Text></Text>
                    } 
                    <Text style={styles.horizentalView}>导演：<Text style={styles.titleTag}>{movie?.director}</Text></Text>
                    <Text style={styles.horizentalView}>
                        导演：
                        <Text style={styles.titleTag}>
                            {movie?.casts.length > 13 ? movie?.casts.slice(0, 13) + '...' : movie?.casts.length}
                        </Text>
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#F5FCFF',
        borderBottomWidth: 1,
        borderColor: '#e0e0e0'
    },
    thumbnail: {
        width: 110,
        height: 150,
        backgroundColor: '#f0f0f0'
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#f0f0f0'
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        color: '#333333',
        fontWeight: 'bold'
    },
    year: {
        textAlign: 'left',
        color: '#777777',
        marginTop: 10
    },
    horizentalView: {
        flexDirection: 'row',
        marginTop: 10,
    },
    titleTag: {
        color: '#666'
    },
    score: {
        color: '#ff8800',
        fontWeight: 'bold'
    },
    name: {
        color: '#333',
        flex: 1
    }
})