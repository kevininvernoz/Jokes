import axios from 'axios';



const ERR_BAD_REQUEST = 409;
const ERR_BAD_REQUEST_NO_CONTROLLED = 400;
const ERR_NETWORK = "ERR_NETWORK";


export default (params: any = null) => {


    let options = {
        baseURL: import.meta.env.VITE_BASE_URL ?? (window as any).__env.BASE_URL,
        validateStatus: function (status: number) {
            return status >= 200 && status < 300;
        },
    }

    params && (options = { ...options, ...params })

    let instance = axios.create(options)


    instance.interceptors.response.use(
        response => {
            return response
        },
        async error => {
            const status = error.response?.status || error?.code;
          
            if (status === ERR_BAD_REQUEST) {
                console.log("🚀 ~ ERR_BAD_REQUEST:", ERR_BAD_REQUEST)
                error.response.data.errors.forEach(element => {
                    console.log("🚀 ~ ERR_BAD_REQUEST:", element.msg)
                });
            }
            if (status === ERR_NETWORK) {
                console.log("🚀 ~ ERR_NETWORK:", ERR_NETWORK)

            }

            if (status === ERR_BAD_REQUEST_NO_CONTROLLED) {
                error.response.data.errors.forEach(element => {
                    console.log("🚀 ~ ERR_BAD_REQUEST_NO_CONTROLLED:", element.msg)    
                });

            }

            return Promise.reject(error);
        }
    );

    return instance

}
