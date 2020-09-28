import { trigger, animate, group, transition, style, query } from '@angular/animations';

// from https://stackblitz.com/edit/angular-router-fade-transitions

export const fadeAnimation = trigger('fadeAnimation', [
	// transition(':enter', [
	// 	style({ opacity: 0 }),
	// 	animate('5s ease-in-out', style({ opacity: 1 })),
	// ]),
	// transition(':leave', [
	// 	style({ opacity: 1 }),
	// 	animate('10s ease-in-out', style({ opacity: 0 })),
	// ]),


	transition('* <=> *', [
		query(':enter', style({ display: 'block' }), { optional: true }),
		query(':leave', style({ display: 'none' }), { optional: true }),
		group([
			query(':enter', [
				style({ opacity: 0 }),
				animate('0.5s ease-in-out', style({ opacity: 1 }))
			], { optional: true }),
			query(':leave', [
				style({ opacity: 1 }),
				animate('0.5s ease-in-out', style({ opacity: 0 }))
			], { optional: true }),
		])
	])
]);