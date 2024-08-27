import axios from "axios";
import endpoints from "../config";

export const getNews = async () => {
    try {
        const { data } = await axios.get(endpoints.news);
        return data
    } catch (error) {
        console.error(error);
        return null;
    }
}