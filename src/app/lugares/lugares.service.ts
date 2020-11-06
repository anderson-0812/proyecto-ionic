import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {Lugar} from './lugar.model'

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  private places : Lugar[] = [
    {
      id: '1',
      title: 'Loja',
      imagenURL: 'https://belife.ec/wp-content/uploads/2018/07/banner-blog2.jpg',
      comentarios:['ciudad castellana','cuna de artistas','lugares asomrosos']
    },
    {
      id: '2',
      title: 'Cuenca',
      imagenURL: 'https://portada.ec/wp-content/uploads/2020/11/Cuenca-sign.jpg',
      comentarios:['ciudad castellana','cuna de artistas','lugares asomrosos']
    }
  ]
  constructor() { }

  getLugares(){
    return [...this.places]
  }

  getLugar(lugarId: string) {
    return{
      ...this.places.find(lugar => {
        return lugar.id === lugarId
      })
    }
  }

  addLugar(title: string, imagenURL: string) {
    this.places.push({
      title,
      imagenURL,
      comentarios: [],
      id: this.places.length + 1+ ''

    });
  }

  deletLugar(lugarId: string){
    this.places = this.places.filter(lugar =>{
      return lugar.id !== lugarId
    })
  }

  }
