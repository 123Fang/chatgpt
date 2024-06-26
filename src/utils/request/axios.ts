import axios, { type AxiosResponse } from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
  timeout: !isNaN(+import.meta.env.VITE_GLOB_API_TIMEOUT) ? Number(import.meta.env.VITE_GLOB_API_TIMEOUT) : 60 * 1000,
})

service.interceptors.request.use(
  (config) => {
    // todo 
    // 后期可在这里做 token 的统一处理
    return config
  },
  (error) => {
    return Promise.reject(error.response)
  },
)

service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.status === 200)
      return response

    throw new Error(response.status.toString())
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
