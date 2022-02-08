import axios, {AxiosResponse, AxiosRequestConfig} from "axios";

const getNews = (): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: {q: 'Elon Musk', lang: 'en'},
    headers: {
        'x-rapidapi-host': 'free-news.p.rapidapi.com',
        'x-rapidapi-key': '7dc30cc7ffmshaf480e233302f36p10a310jsn48727bad69e4'
    }
    };

    return axios.request(options)
}
export default getNews;
