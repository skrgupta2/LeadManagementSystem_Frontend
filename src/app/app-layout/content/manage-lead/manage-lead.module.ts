import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLeadRoutingModule } from './manage-lead-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { RequirementComponent } from './requirement/requirement.component';
import { ManageLeadComponent } from './manage-lead/manage-lead.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProfileComponent,
    TimelineComponent,
    RequirementComponent,
    ManageLeadComponent
  ],
  imports: [
    CommonModule,
    ManageLeadRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class ManageLeadModule { }
