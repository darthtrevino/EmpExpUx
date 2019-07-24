import {
	Skill,
	Project,
	FilterExpression,
	BooleanOperation,
	FilterOperation,
	EmployeeFields,
} from '../../../api'

export function buildFilter(
	organization: string | undefined,
	selectedSkills: Skill[],
	selectedProjects: Project[],
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
		],
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
