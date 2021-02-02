import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {Lugar} from './lugar.model';

import { Global } from './../global';

// Para consume rest
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  public url: string;

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
    },
    {
      id: '3',
      title: 'Quito',
      imagenURL: 'https://i0.wp.com/www.sinmapa.net/wp-content/uploads/2018/01/Quito-FACEBOOK.jpg?fit=1500%2C831&ssl=1',
      comentarios:['carita de dios','Ciudad capital','region sierrra','comida deliciosa','bastante chocho']
    },
    {
      id: '4',
      title: 'Guayaquil',
      imagenURL: 'https://d22uy85tnpcynx.cloudfront.net/2019/07/guayaquil-1024x678.jpg',
      comentarios:['calor','Gente calida','Mujeres hermosas','playas','sol','arena','mucho encebollado']
    },
    {
      id: '5',
      title: 'Esmeraldas',
      imagenURL: 'https://i.ytimg.com/vi/NjB4FC_Y2mw/maxresdefault.jpg',
      comentarios:['calor por todo lado','salsa y sabor','Gente alegre','morenas hermosas','encocado']
    },
    {
      id: '6',
      title: 'Riobamba',
      imagenURL: '',
      comentarios:['Cultural','tradiciones hermosas','ciudad de gente amable','clima frio','lugares asomrosos']
    },
    {
      id: '7',
      title: 'Santo Domingo',
      imagenURL: 'https://i.eldiario.com.ec/fotos-manabi-ecuador/2017/11/20171116040000_el-cerro-tura-stico.jpg',
      comentarios:['dodne vive inluencer de comiedia a Simon :D','ciudad de variedad cultural','gente tradicional','gente divertida']
    },
    {
      id: '8',
      title: 'Manabi',
      imagenURL: 'https://www.entornoturistico.com/wp-content/uploads/2018/07/Comuna-Salango-en-Manab%C3%AD-Ecuador-1280x720.jpg',
      comentarios:['region costa','Playas demasiado bellas','clima caliente','Gente calida','Mujeres HERMOSAS']
    },
    {
      id: '9',
      title: 'Yantzaza',
      imagenURL: 'https://img.goraymi.com/2019/02/27/e091d8db19d5637b9665726ebbc67885_lg.jpg',
      comentarios:['gente amable','clima calido humedo','lugares amazonicos','Comidas riquisimas','lugar turistico']
    },
    {
      id: '10',
      title: 'Yasuni',
      imagenURL: 'https://www.sachawarmi.org/wp-content/uploads/amazonia-rebelda.jpg',
      comentarios:['Lugar amazonico','Reserva forestal','diversidad de animales y especies','Lugar rico en minerales','Peligroso debidoa  animales salvajes','rustico']
    },
    {
      id: '11',
      title: 'Galapagos',
      imagenURL: 'https://elproductor.com/wp-content/uploads/2019/03/Galapagos-696x463.jpg',
      comentarios:['Turstico almaximo','Archipielago hermoso','Biodiversidad marina','lugar caro pero hermoso','Tiene tortugas gigantes','hermosa vista']
    }
  ];
  constructor(public http: HttpClient) {
    this.url = Global.url;

   }

  getLugares(){
    return [...this.places];
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
    });
    console.log(this.places);
  }

  }
