import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }
  API_URL: string = environment.apiUrl;

  getWorkTerms() {
    const workTerms = this.httpClient.get(this.API_URL + '/workTerms');
    console.log(workTerms);
    return workTerms;
  }
}
