import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { BasicChampion, Champion } from '../models/champion';
import { Item } from '../models/item';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private http: HttpClient) { }
	getChampionByUrl(championUrl: string): Observable<Champion> {
		return this.http.get<Champion>(championUrl).pipe(
			shareReplay({ refCount: true, bufferSize: 1 })
		);
	}
	getBasicChampions(): Observable<BasicChampion[]> {
		return this.http.get<BasicChampion[]>(`${environment.apiBasicChampionsUrl}`).pipe(
			shareReplay({ refCount: true, bufferSize: 1 })
		);
	}
	getItems(): Observable<Item[]> {
		return this.http.get<Item[]>(`${environment.apiItemsUrl}`).pipe(
			shareReplay({ refCount: true, bufferSize: 1 })
		);
	}
	getLivePatchVersion(): Observable<string> {
		return this.http.get<string>("https://ddragon.leagueoflegends.com/api/versions.json").pipe(
			first()
		);
	}
}
