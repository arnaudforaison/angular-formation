import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Person } from 'app/collaborateur';

import { environment } from '../environments/environment';

@Injectable()
export class PersonGuard implements Resolve<Person> {
  constructor(private http: Http) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.get(`${environment.api.collaborateur}/`).map(resp => <Person>resp.json().data);
  }
}
