import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddbookserviceService {
  apiUrl: string=environment.API_URL;
  constructor(private httpClient: HttpClient) { }
  getPersonDetails() {
    return this.httpClient.get(`${this.apiUrl}/addressbookservice/get`);
  }
}
