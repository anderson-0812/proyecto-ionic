import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from 'node_modules/@angular/router/router';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lugar } from '../lugar.model';
import { LugaresService } from '../lugares.service';

@Component({
  selector: 'app-lugar-detalle',
  templateUrl: './lugar-detalle.page.html',
  styleUrls: ['./lugar-detalle.page.scss'],
})
export class LugarDetallePage implements OnInit {

  lugar: Lugar;

  constructor(private activatedRoute: ActivatedRoute, private lugaresService: LugaresService, private router: Router, private alerta: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('lugarId');
      // console.log('recipeId');
      // console.log(recipeId);
      this.lugar = this.lugaresService.getLugar(recipeId);
      console.log(this.lugar);

    });
  }

  async eliminarLugar(){
    console.log('Eliminar lugar');
    const alertaElemento = await this.alerta.create({
      header: 'Estas seguro de eliminar este lugar?? ',
      message: 'recuerda que no se podra recuperar despues ',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.lugaresService.deletLugar(this.lugar.id);
            this.router.navigate(['/lugares']);
          }
        },
      ]
    });

    await alertaElemento.present();
  }

}
