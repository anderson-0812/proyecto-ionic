import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import{ LugaresService} from"./lugares.service";
import { Lugar } from './lugar.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

 places : Lugar []

  constructor(private lugaresServicio: LugaresService, private router: Router) { }

  ngOnInit() {
    // this.places = this.lugaresServicio.getLugares()
    // this.lugaresServicio.getLugares()
    // this.getLugares();
    this.places = this.lugaresServicio.getLugares();

  }
  // Recarga la vista con los datos actualizados sirve para que lso datos q se eliminaron o cambiaron se reflejen
  ionViewWillEnter(){
    this.places = this.lugaresServicio.getLugares();
    // this.lugaresServicio.getLugares();
    // this.getLugares();
  }

  // getLugares(){
  //   console.log('Hola desde compoente metodo get');
  //   this.lugaresServicio.getLugares().subscribe(
  //     (res) => {
  //       console.log('Hola desde compoente metodo get dentro del res');
  //       console.log(res);
  //       // this.roleService.roles = res.roleDB as Role[];
  //     }
  //     , error => console.log(error as any));
  // }

  agregarLugar(){
    console.log('Crear lugar');
    this.router.navigate(['/nuevo-lugar']);
  }

}
