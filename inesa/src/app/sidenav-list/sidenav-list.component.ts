import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.sass']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
