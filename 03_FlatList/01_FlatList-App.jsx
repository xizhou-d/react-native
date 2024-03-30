import { View, Text, StyleSheet, FlatList, Dimensions, SafeAreaView, ActivityIndicator, SectionList } from "react-native";
import { useState, useEffect } from 'react'

import { inTheaters } from '../data/movies00'
import { queryMoview, randowRefreshMoview } from '../data/service'
import MovieItem from "./MovieItem";

const width = Dimensions.get('window')

let currIndex = 1;
let pageSize = 10;
let totalIndex = Math.ceil(inTheaters.movies.length / pageSize)
console.log('totalIndex', totalIndex)

export default function App() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    // 设置状态：是否下拉刷新了
    const [isHeadRefreshing, setIsHeadRefreshing] = useState(false)
    const [isFooterRefreshing, setIsFooterRefreshing] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setMovies(queryMoview())
            setLoading(false)
        }, 1000)
    }, []) 
    // 渲染标题
    function renderTitle() {
        return (
            <View style={styles.barStyle}>
                <Text style={styles.textStyle}>电影列表</Text>
            </View>
        )
    }
    // 加载条
    function renderLoad() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="small" color="" />
                <Text style={{ color: '#666', paddingLeft: 10 }}>努力加载中</Text>
            </View>
        )
    }

    function beginHeadRefresh() {
        // 重新请求数据
        setIsHeadRefreshing(true)
        const newMovies = randowRefreshMoview()
        setTimeout(() => {
            setMovies([...newMovies, ...movies])
            setIsHeadRefreshing(false)
        }, 1000)
    }

    // 上拉加载
    function beginFooterRefresh() {
        console.log('上啦加载')
        setIsFooterRefreshing(true)

        if (currIndex < totalIndex) {
            currIndex++
            const newMovies = queryMoview(currIndex, pageSize)
            setTimeout(() => {
                setMovies([...newMovies, ...movies])
                setIsFooterRefreshing(false)
            }, 1000)
        } else {
            setIsFooterRefreshing(false)
        }
    }

    function pulluploading() {
        return (
            <View style={styles.footerStyle}>
                <ActivityIndicator size="small" color="" />
                <Text style={{ color: '#666', paddingLeft: 10 }}>努力加载中</Text>
            </View>
        )
    }
    // 渲染列表
    function renderList() {
        return ( 
            <FlatList
                onRefresh={beginHeadRefresh}
                data={movies}
                renderItem={({item}) => <MovieItem movie={item} onPress={() => alert('点击的电影名称：' + item.title)} />}
                keyExtractor={(item, index) => item.id + item.index}
                refreshing={isHeadRefreshing}
                onEndReached={beginFooterRefresh}
                onEndReachedThreshold={0.1}
            />
        )
    }
    return (
        <SafeAreaView style={styles.flex}>
            {renderTitle()} 
            {loading && renderLoad()}
            {renderList()}
            {/* 上拉加载的 loading */}
            {isFooterRefreshing && pulluploading()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    barStyle: {
        height: 48,
        justifyContent: 'center',
        backgroundColor: '#262dcd',
        //alignItems: 'center'
    },
    textStyle: {
        width: width,
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    },
    footerStyle: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    }
})