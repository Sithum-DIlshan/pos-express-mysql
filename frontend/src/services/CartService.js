import axios from "../axios";


class CartService {
    fetchCart = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('cart')
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        })
        return await promise;
    }
    postCart = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('cart', {data: data})
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

export default new CartService()