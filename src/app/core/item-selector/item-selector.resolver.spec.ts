import { TestBed } from '@angular/core/testing';

import { ItemSelectorResolver } from './item-selector.resolver';

describe('ItemSelectorResolver', () => {
	let service: ItemSelectorResolver;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ItemSelectorResolver);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
