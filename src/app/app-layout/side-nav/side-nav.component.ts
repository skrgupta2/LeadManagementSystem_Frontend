import { Component, Inject, OnInit } from '@angular/core';
import { LeaddialogComponent } from '../content/leaddialog/leaddialog.component';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RequirementComponent } from '../content/manage-lead/requirement/requirement.component';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  generatelead:boolean=false;
  constructor(private dialog:MatDialog) { }
 
  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(LeaddialogComponent,{
    width:'30%'
    });
  }
  openDialogRequirements() {
    this.dialog.open(RequirementComponent,{
    width:'30%'
    });
  }
}
