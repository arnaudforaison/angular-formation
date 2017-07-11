import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';

@Injectable()
export class PeopleService {

  constructor(private http: Http) { }

  retrievePeople() {
    return this.http.get(`${environment.api.collaborateur}/`).map(resp => <Person>resp.json().data);
  }

  deletePerson(id: number) {
    console.log('Delete person');
    return this.http.delete(`${environment.api.collaborateur}/${id}`).do(() => {
      console.log('Deleted succesfully');
    }).map(resp => <Person[]>resp.json().data);
  }

  retrievePerson(id: number) {
    return this.http.get(`${environment.api.collaborateur}/${id}`)
      .map(response => response.json().data);
  }
}

export interface Person {
  firstname: string;
  lastname: string;
  isCDS: boolean;
}
