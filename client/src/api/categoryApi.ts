import axiosClient from './axiosClient';
import { Category } from '../models';

const categoryApi = {
  add(data: Category): Promise<Category> {
    const url = '/category/create-category'
    return axiosClient.post(url, data)
  },
  getAll(): Promise<Category[]> {
    const url = '/category/all-category'
    return axiosClient.get(url)
  },
  update(id: string, data: Category): Promise<Category> {
    const url = `/category/update-category/${id}`
    return axiosClient.put(url, data)
  },
  delete(id: string): Promise<any> {
    const url = `/category/del-category/${id}`
    return axiosClient.delete(url)
  }
}

export default categoryApi;
