import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from 'node_modules/@angular/router/router';
import { ActivatedRoute } from '@angular/router';
import { Lugar } from '../lugar.model';
import { LugaresService } from '../lugares.service';

@Component({
  selector: 'app-lugar-detalle',
  templateUrl: './lugar-detalle.page.html',
  styleUrls: ['./lugar-detalle.page.scss'],
})
export class LugarDetallePage implements OnInit {

  lugar: Lugar;

  constructor(private activatedRoute: ActivatedRoute, private lugaresService: LugaresService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('lugarId');
      // console.log('recipeId');
      // console.log(recipeId);
      this.lugar = this.lugaresService.getLugar(recipeId);
      console.log(this.lugar);

    });
  }

}
