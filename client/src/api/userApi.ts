import axiosClient from './axiosClient';
import { User } from '../models';

const userApi = {
  add: async (data: User): Promise<User> => {
    const url = '/users/register'
    return await axiosClient.post(url, data)
  },
  getAll: async (): Promise<User[]> => {
    const url = '/users/all-user'
    return await axiosClient.get(url)
  },
  update: async (data: User, id: string): Promise<User> => {
    const url = `/users/update-user/${id}`
    return await axiosClient.put(url, data)
  },
  delete: async (id: string): Promise<any> => {
    const url = `/users/delete-user/${id}`
    return await axiosClient.delete(url)
  }
}

export default userApi;