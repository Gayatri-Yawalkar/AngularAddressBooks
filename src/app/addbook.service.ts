import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AddbookService {

  apiUrl: string=environment.API_URL;
  constructor(private httpClient:HttpClient) { }
  getPersonDetails() {
    return this.httpClient.get(`${this.apiUrl}/addressbookservice/get`);
  }
}
