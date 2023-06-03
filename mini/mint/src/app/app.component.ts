import { Component, OnInit } from '@angular/core';
import { CryptoService } from './crypto.service';
import { UserService } from './user.service';
import { IUser } from './IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mint';
  users$!: IUser[];
  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
    });
  }
}
