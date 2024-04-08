import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WServiceService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  geturl(){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Almaty&appid=5cad434697f1def9900049dc08df685a');
  }
}
