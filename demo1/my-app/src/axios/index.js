import JsonP from 'jsonp'
import { Modal } from 'antd'
import axios from 'axios'
export default class Axios{
    static jsonp(options){
        return new Promise((resolve, reject)=>{
            JsonP(options.url,{
                param: 'callback'
            },function(err,response){
                if(response.status === 'success'){
                    resolve(response);
                }else{
                    reject(response.message);
                }
            })
        })
    }

    static ajax(options){
        let loading;
        if(options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        let baseApi = "https://travel-platform-api-qa.hzqykeji.com";
        return new Promise((resolve,reject) => {
            axios({
                url: options.url,
                method: 'post',
                baseURL: baseApi,
                timeout: 5000,
                params:(options.data && options.data.params) || ''
            }).then((response)=>{
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                console.log(response);
            })
        })
    }
}