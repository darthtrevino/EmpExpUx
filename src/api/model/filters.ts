export enum BooleanOperation {
	AND = 'and',
	OR = 'or',
}

export interface Field {
	name: string
	iterable?: boolean
	numeric?: boolean
}

export const EmployeeFields: Record<string, Field> = {
	Function: { name: 'function' },
	Region: { name: 'region' },
	Organization: { name: 'organization' },
	Skills: { name: 'skills', iterable: true },
	Projects: { name: 'projects', iterable: true },
	Topics: { name: 'topics', iterable: true },
	PageRank: { name: 'pagerank', numeric: true },
	Betweennees: { name: 'betweenness', numeric: true },
}

export enum FilterOperation {
	Equals = 'eq',
	LessThan = 'lt',
	GreaterThan = 'gt',
	LessThanOrEqualTo = 'lte',
	GreaterThanOrEqualTO = 'gte',
}

export interface FieldExpression {
	field: Field
	op: FilterOperation
	value: string
}

export interface BooleanExpression {
	op: BooleanOperation
	clauses: FilterExpression[]
}

export type FilterExpression = FieldExpression | BooleanExpression
