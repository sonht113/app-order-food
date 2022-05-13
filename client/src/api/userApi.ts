import axiosClient from './axiosClient';
import { User } from '../models';

const userApi = {
  add(data: User): Promise<User> {
    const url = '/users/register'
    return axiosClient.post(url, data)
  },
  getAll(): Promise<User[]> {
    const url = '/users/all-user'
    return axiosClient.get(url)
  },
  update(data: User, id: string): Promise<User> {
    const url = `/users/update-user/${id}`
    return axiosClient.put(url, data)
  },
  delete(id: string): Promise<any> {
    const url = `/users/delete-user/${id}`
    return axiosClient.delete(url)
  }
}

export default userApi;