import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './components/form/form.component';
import {ManagerComponent} from './components/manager/manager.component';
import {LoginComponent} from './components/login/login.component';
import {BooksComponent} from './components/books/books.component';
import {CartComponent} from './components/cart/cart.component';
import {CongratulationsComponent} from './components/congratulations/congratulations.component';
import {ValidationFormComponent} from './components/validation-form/validation-form.component';
import {TableComponent} from './components/table/table.component';

const routes: Routes = [
  {path: '', component: ValidationFormComponent},
  {path: 'table/:city', component: TableComponent},
  {path: 'login', component: LoginComponent},
  {path: 'books', component: BooksComponent},
  {path: 'cart', component: CartComponent},
  {path: 'congrats', component: CongratulationsComponent},
  {path: 'book-now', component: FormComponent},
  {path: 'manager', component: ManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
