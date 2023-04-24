import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public.routing.module';


const PublicComponents: any = [
];

@NgModule({
  declarations: PublicComponents,
  imports: [
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
