import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Users } from './users';

@Injectable()
export class AccessService {

  constructor( private http: HttpClient ) { }

  addNewUser(param) {
    this.http.post('http://localhost:3000/addUser', param).subscribe((data) => console.log(data) );

  }

}
