import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() person: any;
  @Output() onDelete: EventEmitter<void>;

  constructor() {
    this.onDelete = new EventEmitter<void>();
  }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit();
  }

}
