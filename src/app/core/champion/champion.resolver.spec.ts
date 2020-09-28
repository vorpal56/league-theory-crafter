import { TestBed } from '@angular/core/testing';

import { ChampionResolver } from './champion.resolver';

describe('ChampionResolver', () => {
	let service: ChampionResolver;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ChampionResolver);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
