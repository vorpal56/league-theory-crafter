import { TestBed } from '@angular/core/testing';

import { BasicChampionResolver } from './basic-champion.resolver';

describe('BasicChampionResolver', () => {
	let service: BasicChampionResolver;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(BasicChampionResolver);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
