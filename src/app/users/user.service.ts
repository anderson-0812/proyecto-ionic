import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {User} from './user.model';

import { Global } from './../global';


// Para consume rest
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;

  constructor(public http: HttpClient) {
    this.url = Global.url;

   }

   getUsers(){

    // const headers = new HttpHeaders().set('Content-Type', 'application/json')

    //  ledigo q mi peticion tiene cabeceras de tipo aplicacion/json y le envio un token
    const headers = new HttpHeaders().set('Content-Type', 'aplication/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization')
    // .set('token', token);

    console.log('Users desde api django');
    console.log(this.url + 'api/user');
    console.log(this.http.get(this.url + 'api/user', {headers}));
    return this.http.get(this.url + 'api/user', {headers});
  }
}
