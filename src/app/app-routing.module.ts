import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { FormPersonComponent } from './form-person/form-person.component';
import { HomeComponent } from './home/home.component';
import { PersonGuard } from './person.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, resolve: { people: PersonGuard } },
  { path: 'admin', component: AdminComponent },
  { path: 'add', component: FormPersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PersonGuard]
})
export class AppRoutingModule { }
