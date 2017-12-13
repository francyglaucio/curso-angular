import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-intem.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>
  constructor(private restourantsService: RestaurantsService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restourantsService
    .menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }

}
