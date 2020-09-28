import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Champion } from '../models/champion';

import { ApiService } from '../services/api.service';

@Injectable()
export class ChampionResolver implements Resolve<Champion> {

	constructor(private apiService: ApiService) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Champion> {
		return this.apiService.getChampionByUrl(route.data["championUrl"]);
	}
}
