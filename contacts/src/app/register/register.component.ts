import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccessService } from '../access/accessServices/access.service';
import { Users } from '../access/accessServices/users';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AccessService]
})
export class RegisterComponent implements OnInit {

  constructor(
    private registerService: AccessService,
    private router: Router) { }

  registerUser = new Users();

  ngOnInit() {
  }

  register() {
    let result = this.registerService.addNewUser(this.registerUser);
    console.log(result);
    // this.router.navigate['/access/login'];
  }

}
