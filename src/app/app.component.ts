import 'rxjs/Rx';

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';

import { admin } from './collaborateur';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  admin: any;
  constructor(private http: Http) {
    this.admin = {};
  }

  ngOnInit() {
    const endpoint = `${environment.api.collaborateur}/1`;
    this.http.get(endpoint)
      .map(response => response.json().data)
      .subscribe(person => {
        this.admin = person;
      });
  }

  deletePerson() {
    console.log('Delete person');
    this.http.delete(`${environment.api.collaborateur}/1`).subscribe(() => {
      this.admin = undefined;
      console.log('Deleted succesfully');
    });
  }

}
