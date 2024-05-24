import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AngularMaterialModule } from '../angular-material/angular-material/angular-material.module';

@NgModule({
  declarations: [UserDetailsComponent, FilterComponent],
  imports: [AngularMaterialModule, FormsModule, CommonModule],
  exports: [UserDetailsComponent, FilterComponent,CommonModule],
})
export class ComponentsModule {}
