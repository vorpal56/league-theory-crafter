import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Item } from 'src/app/core/models/item';

import { ApiService } from '../services/api.service';

@Injectable()
export class ItemSelectorResolver {

	constructor(private apiService: ApiService) { }
	resolve(route: ActivatedRouteSnapshot): Observable<Item[]> {
		return this.apiService.getItems();
	}
}
