import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WireframeComponent } from './wireframe/wireframe.component';
import { GridComponent } from './grid/grid.component';
import { ListViewComponent } from './list-view/list-view.component';

const routes: Routes = [
  { path: 'home', component: ListViewComponent},
  { path:'wireframe', component: WireframeComponent },
  { path:'grid', component: GridComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
