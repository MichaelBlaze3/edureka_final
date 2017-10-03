import { Component, OnInit } from '@angular/core';

import { AccessService } from '../access/accessServices/access.service';

export class loginCredentials {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AccessService]
})
export class LoginComponent implements OnInit {

  constructor( private loginService: AccessService )  { }

  ngOnInit() {
  }

  credentials = new loginCredentials();
  // credentials : {
  //   username: string,
  //   password: string
  // }

  login() {
    this.loginService.loginUser(this.credentials);
  }

}
