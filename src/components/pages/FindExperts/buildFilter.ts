import {
	Skill,
	Project,
	Topic,
	FilterExpression,
	BooleanOperation,
	FilterOperation,
	EmployeeFields,
} from '../../../api'

export function buildFilter(
	employeeFunction: string | undefined,
	region: string | undefined,
	organization: string | undefined,
	selectedSkills: Skill[],
	selectedProjects: Project[],
	selectedTopics: Topic[],
	eigenRange: [number, number] | undefined,
	betweennessRange: [number, number] | undefined,
	pageRankRange: [number, number] | undefined,
) {
	const result: FilterExpression = {
		op: BooleanOperation.AND,
		clauses: [
			...selectedSkills.map(s => ({
				op: FilterOperation.Equals,
				field: EmployeeFields.Skills,
				value: s,
			})),
			...selectedProjects.map(p => ({
				op: FilterOperation.Equals,
				field: EmployeeFields.Projects,
				value: p,
			})),
			...selectedTopics.map(t => ({
				op: FilterOperation.Equals,
				field: EmployeeFields.Topics,
				value: t,
			})),
		],
	}

	if (employeeFunction) {
		result.clauses.push({
			op: FilterOperation.Equals,
			field: EmployeeFields.Function,
			value: employeeFunction,
		})
	}
	if (region) {
		result.clauses.push({
			op: FilterOperation.Equals,
			field: EmployeeFields.Region,
			value: region,
		})
	}
	if (organization) {
		result.clauses.push({
			op: FilterOperation.Equals,
			field: EmployeeFields.Organization,
			value: organization,
		})
	}

	if (eigenRange) {
		result.clauses.push(
			{
				op: FilterOperation.GreaterThan,
				field: EmployeeFields.EigenCentrality,
				value: eigenRange[0] || 0,
			},
			{
				op: FilterOperation.LessThan,
				field: EmployeeFields.EigenCentrality,
				value: eigenRange[1] || 1,
			},
		)

		if (betweennessRange) {
			result.clauses.push(
				{
					op: FilterOperation.GreaterThan,
					field: EmployeeFields.Betweenness,
					value: betweennessRange[0] || 0,
				},
				{
					op: FilterOperation.LessThan,
					field: EmployeeFields.Betweenness,
					value: betweennessRange[1] || 1,
				},
			)
		}

		if (pageRankRange) {
			result.clauses.push(
				{
					op: FilterOperation.GreaterThan,
					field: EmployeeFields.PageRank,
					value: pageRankRange[0] || 0,
				},
				{
					op: FilterOperation.LessThan,
					field: EmployeeFields.PageRank,
					value: pageRankRange[1] || 1,
				},
			)
		}
	}
	return result
}
