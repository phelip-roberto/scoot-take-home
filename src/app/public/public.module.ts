import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public.routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';

const PublicComponents: any = [
  DashboardComponent
];

@NgModule({
  declarations: PublicComponents,
  imports: [
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
