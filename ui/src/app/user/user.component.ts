import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { User } from '../User';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : Observable<User[]>
  user = new User();
  submitted = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.getUsers();
  }

  save() {
    this.userService.createUser(this.user)
    .subscribe(data => console.log(data), error => console.log(error))
    this.gotoUserList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoUserList() {
    this.router.navigate(['/user'])
  }

}
