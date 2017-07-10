import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { admin } from './collaborateur';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  admin: any;
  endpoint: string;

  constructor(private http: Http) {
    this.admin = {};
    this.endpoint = 'http://31.ip-51-254-217.eu:3001/api/v1/people';
  }

  ngOnInit() {
    const endpoint = `${this.endpoint}/1`;
    this.http.get(endpoint)
      .map(response => response.json().data)
      .subscribe(person => {
        this.admin = person;
      });
  }

  deletePerson() {
    console.log('Delete person');
    this.http.delete(`${this.endpoint}/1`).subscribe(() => {
      this.admin = undefined;
      console.log('Deleted succesfully');
    });
  }

}
