import axios from 'axios';



export const fetchData = () => {
    return axios.get('/user')   // 获取用户数据
}