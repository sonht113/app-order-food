import { Message } from '../models';
import axiosClient from './axiosClient';

const messageApi = {
  add(data: Message): Promise<Message> {
    const url = '/message/create-mess'
    return axiosClient.post(url, data)
  },
  getAll(): Promise<Message[]> {
    const url = '/message/all-mess'
    return axiosClient.get(url)
  },
  getId(id: string): Promise<Message> {
    const url = `/message/mess-detail/${id}`
    return axiosClient.get(url)
  },
  delete(id: string): Promise<any> {
    const url = `/message/delete-mess/${id}`
    return axiosClient.delete(url)
  }
}

export default messageApi;
