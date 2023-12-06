import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../../../mf-docs/team-docs/src/app/app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { IconModule } from 'carbon-components-angular';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: 'mf-docs',
    component: AppComponent,
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), IconModule],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
