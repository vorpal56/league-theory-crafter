import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { BasicChampion } from 'src/app/core/models/champion';

import { ApiService } from 'src/app/core/services/api.service';

@Injectable()
export class BasicChampionResolver implements Resolve<BasicChampion[]> {

	constructor(private dataService: ApiService) { }

	resolve(route: ActivatedRouteSnapshot): Observable<BasicChampion[]> {
		return this.dataService.getBasicChampions();
	}
}
