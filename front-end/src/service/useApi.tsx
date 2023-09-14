import axios from "axios";
import UseHeader from "./useHeader";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

async function get<ResType>(url: string): Promise<ResType> {
    try {
        const header = UseHeader();
        const response = await api.get<ResType>(url, header);
        return response.data;
    }
    catch (err: any) {
        throw err;
    }

}

async function post<ReqType, ResType>(url: string, payload: ReqType | null = null): Promise<ResType> {
    try {
        const header = UseHeader();
    const response = await api.post<ResType>(url, payload, header);
    return response.data;
    }
    catch (err: any) {
        throw err;
    }
}

const useApi = {
    get, post,
}

export default useApi;