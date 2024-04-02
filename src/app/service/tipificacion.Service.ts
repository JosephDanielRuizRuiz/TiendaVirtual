import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class tipificacionService {

    API_URI1 = '';

  envio: any;

    constructor(private http: HttpClient){

        envio() {
            return this.http.get(`${this.API_URI1}`);
        }

    }
}