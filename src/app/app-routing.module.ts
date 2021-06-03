import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaletteDetailComponent } from './components/palette-detail/palette-detail.component';
import { PaletteListComponent } from './components/palette-list/palette-list.component';

const routes: Routes = [
  { path: '', component: PaletteListComponent },
  { path: ':id', component: PaletteDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
