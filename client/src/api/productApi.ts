import axiosClient from './axiosClient';
import { ListResponse, Product } from '../models';

const productApi = {
  add(data: Product): Promise<Product> {
    const url = '/products/create-product'
    return axiosClient.post(url, data)
  },
  getAll(): Promise<ListResponse<Product>> {
    const url = '/products/list-product'
    return axiosClient.get(url, {
      params: {
        page: 1,
        limit: 10
      }
    })
  },
  getId(id: string): Promise<Product> {
    const url = `/products/info-product/${id}`
    return axiosClient.get(url)
  },
  update(id: string, data: Product): Promise<Product> {
    const url = `/products/upd-product/${id}`
    return axiosClient.put(url, data)
  },
  delete(id: string): Promise<any> {
    const url = `/products/delete-product/${id}`
    return axiosClient.delete(url)
  }
}

export default productApi;