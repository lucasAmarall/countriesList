import axios, { AxiosInstance } from "axios";
import { IAPIService } from "@interfaces/IAPIService.interface";
class APIService implements IAPIService {
  service: AxiosInstance = axios.create({
    baseURL: "https://restcountries.eu/rest/v2",
    timeout: 30000
  });

  async get<T>(resource: string, params?: object){
    return this.service.get<T>(resource, params);
  }

  async post<T>(resource: string, params: object){
    return this.service.post<T>(resource, params);
  }

  async put<T>(resource: string, params: object){
    return this.service.put<T>(resource, params);
  }

  async delete<T>(resource: string){
    return this.service.delete<T>(resource);
  }

  async patch<T>(resource: string, params?: object){
    return this.service.patch<T>(resource, params);
  }
}
export default APIService;