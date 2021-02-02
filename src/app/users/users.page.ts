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

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  // Recarga la vista con los datos actualizados sirve para que lso datos q se eliminaron o cambiaron se reflejen
  ionViewWillEnter(){
    // this.places = this.lugaresServicio.getLugares();
    // this.lugaresServicio.getLugares();
    this.getUsers();
  }

  getUsers(){
    console.log('Hola desde compoente metodo get user');
    this.userService.getUsers().subscribe(
      (res) => {
        console.log('Hola desde compoente metodo get dentro del res');
        console.log(res);
        // this.roleService.roles = res.roleDB as Role[];
      }
      , error => console.log(error as any));
  }

}
