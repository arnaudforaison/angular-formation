import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'app/shared/services/people.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  people: Observable<Person[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.people = this.route.data.map(data => data['people']);
  }

}
