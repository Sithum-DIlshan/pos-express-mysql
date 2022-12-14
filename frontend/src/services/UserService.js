import axios from "../axios";


class UserService {
    fetchUser = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('user')
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        })
        return await promise;
    }
    postUser = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('user', {data: data})
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        })
        return await promise;
    }
}

export default new UserService()