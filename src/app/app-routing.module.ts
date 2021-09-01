import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminGuard } from './_guards/admin.guard';
import { MainComponent } from './main/main.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'example', component: ExampleComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard]},
      {path: 'main', component: MainComponent, canActivate: [AdminGuard]},
      { path: '**', redirectTo: '' }
    ]
  },
      { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
