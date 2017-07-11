import { PeopleService } from '../shared/services/people.service';

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

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    const endpoint = `${environment.api.collaborateur}/1`;
    this.peopleService.retrievePerson(1).subscribe(person => {
      this.admin = person;
    });
  }

  deletePerson() {
    this.peopleService.deletePerson(1);
  }

}
