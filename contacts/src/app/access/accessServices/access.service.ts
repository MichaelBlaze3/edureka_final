import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


import { Users } from './users';

@Injectable()
export class AccessService {

  constructor ( 
    private http: HttpClient, 
    private router: Router, 
    private route: ActivatedRoute ) { }

  addNewUser(param) {
    this.http.post('http://localhost:3000/addUser', param).subscribe((data) => console.log(data) );

  }

  parameters = new HttpParams();

  loginUser(param){
    // console.log(param);
    this.parameters = this.parameters.append('username', param.username);
    this.parameters = this.parameters.append('password', param.password);
    this.http.get('http://localhost:3000/login', {params: this.parameters}).subscribe(
      (data) => { 
        // console.log(data[0]._id);
        localStorage.setItem('user', data[0]);
        this.redirect();  
        console.log(data);

      } ,
      (error) => console.log(error)
    );
  }

  redirect():void {
    this.router.navigate(['/dashboard']);
  }

}
