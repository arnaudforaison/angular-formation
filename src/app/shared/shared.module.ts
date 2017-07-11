import { PeopleService } from './services/people.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PeopleService]
})
export class SharedModule { }
