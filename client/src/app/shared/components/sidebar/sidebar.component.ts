import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ExternalService } from '../../services/external.service';
// import variablesMenu from '../../../data/dataset.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public services: ExternalService, private dialog: MatDialog) {
    // this.menu = variablesMenu.menu;
  }

  ngOnInit() {
    // console.log('variablesMenu', variablesMenu);
    fetch('assets/menu.json')
      .then(r => r.json())
      .then(rr => {
        this.services.menu = rr;
        console.log('menu', this.services.menu);
      });
  }
}
