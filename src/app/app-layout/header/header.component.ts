import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DashboardComponent } from '../content/dashboard/dashboard.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DashboardComponent,{
    width:'30%'
    })
  }
}
