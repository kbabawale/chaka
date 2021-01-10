import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  newkey = environment.apikey;

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<any>('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=' + this.newkey).toPromise();

  }
}
