import { Component, OnInit } from '@angular/core';
import{ UserService} from"./user.service";
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: any;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.getUsers();
  }

  // Recarga la vista con los datos actualizados sirve para que lso datos q se eliminaron o cambiaron se reflejen
  ionViewWillEnter(){
    // this.places = this.lugaresServicio.getLugares();
    // this.lugaresServicio.getLugares();
    // this.getUsers();
    this.users = this.getUsers();

  }

  getUsers(){
    console.log('Hola desde compoente metodo get user');
    this.userService.getUsers().subscribe(
      (res) => {
        console.log('Hola desde compoente metodo get dentro del res');
        console.log(res);
        // this.users = res;
        this.userService.users = res as User[];
        this.users = this.userService.users;
      }
      , error => console.log(error as any));
  }
  agregarUser(){
    console.log('Agregar usuario ');
    console.log(this.users);
  }

}
