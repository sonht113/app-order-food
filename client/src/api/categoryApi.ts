import axiosClient from './axiosClient';
import { Category } from '../models';

const categoryApi = {
  add: async (data: Category): Promise<Category> => {
    const url = '/category/create-category'
    return await axiosClient.post(url, data)
  },
  getAll: async (): Promise<Category[]> => {
    const url = '/category/all-categories'
    return await axiosClient.get(url)
  },
  update: async (id: string, data: Category): Promise<Category> => {
    const url = `/category/update-category/${id}`
    return await axiosClient.put(url, data)
  },
  delete: async (id: string): Promise<any> => {
    const url = `/category/del-category/${id}`
    return await axiosClient.delete(url)
  }
}

export default categoryApi;
