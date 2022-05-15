import { Auth } from '../models';
import axiosClient from './axiosClient';

const authApi = {
  login: async (data: Auth): Promise<any> => {
    const url = '/auth/login'
    return await axiosClient.post(url, data)
  },
  logout: async (): Promise<any> => {
    const url = '/auth/logout'
    return await axiosClient.post(url)
  }
}

export default authApi;
