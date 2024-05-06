import { ACCESS_TOKEN, BASE_URL } from '@/constant/endpoint'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}` // Ganti dengan token Bearer yang sesuai

export default axiosInstance
