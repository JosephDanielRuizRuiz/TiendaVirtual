import { Component, OnInit } from '@angular/core';
import { Tipificacion } from '../models/tipificacion';
import { tipificacionService } from '../service/tipificacion.Service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  tipificacion: Tipificacion = {};
  //Para Recibir
  datos: any = [];
  constructor(private tipificacionService: tipificacionService) {

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
