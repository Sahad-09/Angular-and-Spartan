import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Client } from '../model/class/Client';
import { APIResponseModel } from '../model/interface/roles';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/" + "GetAllClients")
  }

  addUpdate(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/" + "AddUpdateClient", obj)
  }

  deletClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/" + "DeleteClientByClientId?clientId=" + id)
  }


}
