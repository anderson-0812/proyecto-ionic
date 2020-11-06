import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import{ LugaresService} from"./lugares.service";
import { Lugar } from './lugar.model';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

 places : Lugar []

  constructor(private lugaresServicio : LugaresService) { }

  ngOnInit() {
    this.places = this.lugaresServicio.getLugares()
  }

}
