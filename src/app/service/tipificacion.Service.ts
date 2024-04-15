import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TipificacionService {

  API_URI1 ='http://localhost/BACK/recepcion.php';

  constructor(private http: HttpClient) { }

  envio(){
    return this.http.get(`${this.API_URI1}`);
  }
}
