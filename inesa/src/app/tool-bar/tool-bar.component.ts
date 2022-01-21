import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.sass']
})
export class ToolBarComponent implements OnInit {
  
  @Output() public sidenavToggle = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();

  }

}
