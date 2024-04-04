import { Component, OnInit } from '@angular/core';
import { Tipificacion } from '../models/tipificacion';
import { TipificacionService } from '../service/tipificacion.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  tipificacion: Tipificacion = {};
  //Para Recibir
  datos: any = [];
  constructor(private tipificacionService: TipificacionService) {

  }

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(){
    this.tipificacionService.envio().subscribe(
      res => {
        this.datos = res;
      },
      err => console.log(err)
    );
  }

}
