import axios from "axios"

const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
    axios.defaults.baseURL = 'http://localhost:8091/nc/test_j5qg/api/v1'
        //  添加实例方法
    Vue.prototype.$http = axios.create({
        headers: {
            'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjE4NzI5MzU5NzFAcXEuY29tIiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY0OTU2MTgzMX0.3Af8SdEWaI5T8bbSkL12zjPZt-cETlyl1-9Bfku9uu8'
        }
    })
}

export default MyHttpServer