import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { MEAT_API } from "app/app.api"
import {ErrorHandler} from '../app.error-handler'
import { errorHandler } from '@angular/platform-browser/src/browser';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-intem.model';


@Injectable()
export class RestaurantsService{
    
    constructor( private http: Http){}

    restaurants(): Observable<Restaurant[]>{
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
    restaurantById(id: String):Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
    reviewsOfRestourant(id:string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

    }
}