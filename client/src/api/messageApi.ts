import { Message } from '../models';
import axiosClient from './axiosClient';

const messageApi = {
  add: async (data: Message): Promise<Message> => {
    const url = '/message/create-mess'
    return await axiosClient.post(url, data)
  },
  getAll: async (): Promise<Message[]> => {
    const url = '/message/all-mess'
    return await axiosClient.get(url)
  },
  getId: async (id: string): Promise<Message> => {
    const url = `/message/mess-detail/${id}`
    return await axiosClient.get(url)
  },
  delete: async (id: string): Promise<any> => {
    const url = `/message/delete-mess/${id}`
    return await axiosClient.delete(url)
  }
}

export default messageApi;
