import axios from "../axios";


class ProductService {
    fetchProduct = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('product')
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        })
        return await promise;
    }
    postProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('product', {data: data})
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

export default new ProductService()