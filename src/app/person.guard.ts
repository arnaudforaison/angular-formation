import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PeopleService, Person } from 'app/shared/services/people.service';

@Injectable()
export class PersonGuard implements Resolve<Person> {
  constructor(private peopleService: PeopleService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.peopleService.retrievePeople();
  }
}
