import { serialize } from '../filters'
import { BooleanOperation, FilterOperation } from '../model/filters'
import { EmployeeFields } from '../model'

describe('the filtering api', () => {
	it('can serialize an equality filter on the employee function field', () => {
		const result = serialize({
			field: EmployeeFields.Function,
			op: FilterOperation.Equals,
			value: 'Research',
		})
		expect(result).toEqual("function eq 'Research'")
	})

	it('can serialize an equality filter on the employee org field', () => {
		const result = serialize({
			field: EmployeeFields.Organization,
			op: FilterOperation.Equals,
			value: 'Research',
		})
		expect(result).toEqual("organization eq 'Research'")
	})

	it('can serialize an equality filter on the employee region field', () => {
		const result = serialize({
			field: EmployeeFields.Region,
			op: FilterOperation.Equals,
			value: 'North',
		})
		expect(result).toEqual("region eq 'North'")
	})

	it('can serialize an equality filter on the employee skill field', () => {
		const result = serialize({
			field: EmployeeFields.Skills,
			op: FilterOperation.Equals,
			value: 'Management',
		})
		expect(result).toEqual("skills/any(t: t eq 'Management')")
	})

	it('can serialize an equality filter on the employee projects field', () => {
		const result = serialize({
			field: EmployeeFields.Projects,
			op: FilterOperation.Equals,
			value: 'Bing',
		})
		expect(result).toEqual("projects/any(t: t eq 'Bing')")
	})

	it('can serialize a boolean equality filter on the employee projects field', () => {
		const result = serialize({
			op: BooleanOperation.OR,
			clauses: [
				{
					field: EmployeeFields.Projects,
					op: FilterOperation.Equals,
					value: 'Bing',
				},
				{
					field: EmployeeFields.Projects,
					op: FilterOperation.Equals,
					value: 'CSEO',
				},
			],
		})
		expect(result).toEqual(
			"projects/any(t: t eq 'Bing') or projects/any(t: t eq 'CSEO')",
		)
	})

	it('can serialize a filter on employee topics', () => {
		const result = serialize({
			op: FilterOperation.Equals,
			field: EmployeeFields.Topics,
			value: 'Claims Management',
		})
		expect(result).toEqual("topics/any(t: t eq 'Claims Management')")
	})

	it('can serialize a filter on pagerank', () => {
		const result = serialize({
			op: FilterOperation.Equals,
			field: EmployeeFields.PageRank,
			value: 0.8,
		})
		expect(result).toEqual('pagerank eq 0.8')
	})

	it('can serialize a boolean filter on pagerank', () => {
		const result = serialize({
			op: BooleanOperation.AND,
			clauses: [
				{
					op: FilterOperation.GreaterThan,
					field: EmployeeFields.PageRank,
					value: 0.8,
				},
				{
					op: FilterOperation.LessThan,
					field: EmployeeFields.PageRank,
					value: 0.95,
				},
			],
		})
		expect(result).toEqual('pagerank gt 0.8 and pagerank lt 0.95')
	})

	it('can serialize a boolean filter on betweennness', () => {
		const result = serialize({
			op: BooleanOperation.AND,
			clauses: [
				{
					op: FilterOperation.GreaterThan,
					field: EmployeeFields.Betweennees,
					value: 0.8,
				},
				{
					op: FilterOperation.LessThan,
					field: EmployeeFields.Betweennees,
					value: 0.95,
				},
			],
		})
		expect(result).toEqual('betweenness gt 0.8 and betweenness lt 0.95')
	})

	it('can serialize an equality filter on a string field using a boolean expression', () => {
		const result = serialize({
			op: BooleanOperation.OR,
			clauses: [
				{
					field: EmployeeFields.Function,
					op: FilterOperation.Equals,
					value: 'Research',
				},
				{
					field: EmployeeFields.Function,
					op: FilterOperation.Equals,
					value: 'Operations',
				},
			],
		})
		expect(result).toEqual("function eq 'Research' or function eq 'Operations'")
	})
})
