
import { routes } from './modules/v1/docs';

const CONFIG = {
	swagger: '2.0',
	info: {
		version: '1.0.0',
		title: 'APSARC Task',
		description: 'API for the APSARC Task',
		contact: {
			name: 'APSARC Team',
			url: '',
			email: '',
		},
	},
    basePath: '/',
    hostname: 'localhost:3000',
	tags: [],
	schemes: ['http', 'https'],
	consumes: ['application/json'],
	produces: ['application/json'],
};

export const swaggerDocs = {
	...CONFIG,
	paths: {
		...routes,
    },
};