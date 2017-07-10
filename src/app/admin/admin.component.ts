import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';

import 'rxjs/Rx';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  admin: any;

  constructor(private http: Http) { }

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
