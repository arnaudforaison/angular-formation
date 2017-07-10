import { Component, OnInit } from '@angular/core';
import { admin } from './collaborateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  admin: any;
  constructor() {
    this.admin = admin;
  }

  ngOnInit() {
  }

  deletePerson() {
    console.log('Person deleted');
  }

}
