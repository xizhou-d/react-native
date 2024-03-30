import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    SafeAreaView,
    ActivityIndicator,
    SectionList,
} from "react-native";
import { useState, useEffect } from "react";

import { inTheaters, comingSoons, top250 } from "../data/movies00";
import { queryMoview, randowRefreshMoview } from "../data/service";
import MovieItem from "./MovieItem";

const width = Dimensions.get("window");

// let currIndex = 1;
// let pageSize = 10;
// let totalIndex = Math.ceil(inTheaters.movies.length / pageSize);
// console.log("totalIndex", totalIndex);

export default function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // 设置状态：是否下拉刷新了
    const [isHeadRefreshing, setIsHeadRefreshing] = useState(false);
    const [isFooterRefreshing, setIsFooterRefreshing] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMovies([inTheaters, comingSoons, top250]);
            setLoading(false);
        }, 1000);
    }, []);
    // 渲染标题
    function renderTitle() {
        return (
            <View style={styles.barStyle}>
                <Text style={styles.textStyle}>电影列表</Text>
            </View>
        );
    }
    // 加载条
    function renderLoad() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="small" color="" />
                <Text style={{ color: "#666", paddingLeft: 10 }}>努力加载中</Text>
            </View>
        );
    }
    // 渲染列表
    function renderList() {
        return (
            <SectionList
                sections={movies}
                renderSectionHeader={({ section: {title} }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                renderItem={({ item }) => (
                    <MovieItem
                        movie={item}
                        onPress={() => alert("点击的电影名称：" + item.title)}
                    />
                )}
                keyExtractor={(item) => item.movieId}
                stickySectionHeadersEnabled
            />
        );
    }
    return (
        <SafeAreaView style={styles.flex}>
            {renderTitle()}
            {loading && renderLoad()}
            {renderList()}
            {/* 上拉加载的 loading */}
            {isFooterRefreshing && pulluploading()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: "skyblue",
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    barStyle: {
        height: 48,
        justifyContent: "center",
        backgroundColor: "#262dcd",
        //alignItems: 'center'
    },
    textStyle: {
        width: width,
        textAlign: "center",
        fontSize: 18,
        color: "#fff",
    },
    footerStyle: {
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
    },
    sectionHeader: {
        padding: 10,
        backgroundColor: '#268dcd',
        color: '#fff'
    }
});
