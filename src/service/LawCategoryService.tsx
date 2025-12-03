import { CategoryModel } from '@/data/categories';
import axios from 'axios';


const API_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const getLawCategories = async() =>{
    const response = await axios.get<CategoryModel[]>(`${API_URL}/${import.meta.env.VITE_REACT_APP_LAW_CATEGORIES}`);
    return response.data;

}