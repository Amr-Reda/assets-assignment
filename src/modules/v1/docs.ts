export const routes = {
	'/api/v1/assets_classifications_with_capacities': {
		get: {
			tags: ['assets_classifications_with_capacities'],
			summary: 'get all assets classifications with capacities',
			responses: {
				200: {
					description: 'OK',
				},
				500: {
					description: 'Server Error',
				},
			},
			parameters: [
				{
					in: 'query',
					name: 'config',
					required: false,
					type: 'string',
					schema: {
						example: 'Config_9',
					},
				},
			],
		},
	},
	'/api/v1/composition_limit': {
		get: {
			tags: ['composition_limit'],
			summary: 'get all composition limit',
			responses: {
				200: {
					description: 'OK',
				},
				500: {
					description: 'Server Error',
				},
			},
			parameters: [
				{
					in: 'query',
					name: 'size',
					required: false,
					type: 'number',
					schema: {
						example: 50,
					},
				},
				{
					in: 'query',
					name: 'page',
					required: false,
					type: 'number',
					schema: {
						example: 1,
					},
				},
				{
					in: 'query',
					name: 'config',
					required: false,
					type: 'string',
					schema: {
						example: 'Config_9',
					},
				},
				{
					in: 'query',
					name: 'asset',
					required: false,
					type: 'string',
					schema: {
						example: 'HSW',
					},
				},
				{
					in: 'query',
					name: 'from',
					required: false,
					type: 'number',
					schema: {
						example: 0,
					},
				},
				{
					in: 'query',
					name: 'to',
					required: false,
					type: 'number',
					schema: {
						example: 10,
					},
				},
			],
		},
	},
	'/api/v1/avg_composition': {
		get: {
			tags: ['avg_composition'],
			summary: 'get all avg composition',
			responses: {
				200: {
					description: 'OK',
				},
				500: {
					description: 'Server Error',
				},
			},
			parameters: [
				{
					in: 'query',
					name: 'size',
					required: false,
					type: 'number',
					schema: {
						example: 50,
					},
				},
				{
					in: 'query',
					name: 'page',
					required: false,
					type: 'number',
					schema: {
						example: 1,
					},
				},
				{
					in: 'query',
					name: 'config',
					required: false,
					type: 'string',
					schema: {
						example: 'Config_9',
					},
				},
				{
					in: 'query',
					name: 'asset',
					required: false,
					type: 'string',
					schema: {
						example: 'HSW',
					},
				},
			],
		},
	},
	'/api/v1/extracted_data': {
		get: {
			tags: ['extracted_data'],
			summary: 'get all extracted data',
			responses: {
				200: {
					description: 'OK',
				},
				500: {
					description: 'Server Error',
				},
			},
			parameters: [
				{
					in: 'query',
					name: 'size',
					required: false,
					type: 'number',
					schema: {
						example: 50,
					},
				},
				{
					in: 'query',
					name: 'page',
					required: false,
					type: 'number',
					schema: {
						example: 1,
					},
				},
				{
					in: 'query',
					name: 'country',
					required: false,
					type: 'string',
					schema: {
						example: 'Algeria',
					},
				},
			],
		},
	},
};
