import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-intem.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuIntem: MenuItem
  @Output() add = new EventEmitter() 

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuIntem)
  }
}
