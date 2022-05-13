import { Auth } from '../models';
import axiosClient from './axiosClient';

const authApi = {
  login(data: Auth): Promise<any> {
    const url = '/auth/login'
    return axiosClient.post(url, data)
  },
  logout(): Promise<any> {
    const url = '/auth/logout'
    return axiosClient.post(url)
  }
}

export default authApi;
