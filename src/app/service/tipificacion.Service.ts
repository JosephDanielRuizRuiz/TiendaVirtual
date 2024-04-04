import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TipificacionService {

  API_URI1 ='';

  constructor(private http1: HttpClient) { }

  envio(){
    return this.http1.get(`${this.API_URI1}`);
  }
}
