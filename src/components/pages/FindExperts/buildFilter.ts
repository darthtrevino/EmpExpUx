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
	organization: string | undefined,
	selectedSkills: Skill[],
	selectedProjects: Project[],
	selectedTopics: Topic[],
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
	if (organization) {
		result.clauses.push({
			op: FilterOperation.Equals,
			field: EmployeeFields.Organization,
			value: organization,
		})
	}
	return result
}
