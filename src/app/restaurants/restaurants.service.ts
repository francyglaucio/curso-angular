import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { MEAT_API } from "app/app.api"
import {ErrorHandler} from '../app.error-handler'
import { errorHandler } from '@angular/platform-browser/src/browser';


@Injectable()
export class RestaurantsService{
    
    constructor( private http: Http){}

    restaurants(): Observable<Restaurant[]>{
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}