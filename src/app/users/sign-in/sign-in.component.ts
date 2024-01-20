import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  dontShow=false;
  createForm = new FormGroup({
    "username": new FormControl(),
    "password" : new FormControl()
  });
  constructor(private usersService: UsersService, private router: Router) { }

  validate():void{
    this.usersService.validateUser(this.createForm.value).subscribe((data)=>{
      console.log("hii")
      console.log(data)
    })
    this.router.navigate(['/home']);
  }
}
