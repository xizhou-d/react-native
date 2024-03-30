import { inTheaters } from './movies'

// 分页查询电影
export function queryMoview(currentPage = 1, pageSize = 10) {
    return inTheaters.movies.slice((currentPage - 1) * pageSize, pageSize * currentPage)
}

// 随机刷新两部电影
export function randowRefreshMoview() {
    const randomStartIndex = Math.floor(Math.random() * (inTheaters.movies.length) - 2)
    return inTheaters.movies.slice(randomStartIndex, randomStartIndex + 2)
}

