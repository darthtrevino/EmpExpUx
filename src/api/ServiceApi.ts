import querystring from 'query-string'
import { Employee, Skill, Project, Topic, FilterExpression } from './model'
import { serialize } from './filters'

enum Endpoint {
	Employee = 'Employee',
	Skills = 'Skills',
	Projects = 'Projects',
	Topics = 'Topics',
}

export class ServiceApi {
	public constructor(private serviceRoot: string) {}

	public async getEmployees(filter?: FilterExpression): Promise<Employee[]> {
		const queryArgs = filter ? { $query: serialize(filter) } : undefined
		const response = await fetch(this.endpoint(Endpoint.Employee, queryArgs))
		this.inspectResponse(response)
		const json = await response.json()
		return json as Employee[]
	}

	public async addEmployee(employee: Employee): Promise<void> {
		const response = await fetch(this.endpoint(Endpoint.Employee), {
			method: 'POST',
			body: JSON.stringify(employee),
		})
		this.inspectResponse(response)
	}

	public async updateEmployee(employee: Employee): Promise<void> {
		const response = await fetch(this.endpoint(Endpoint.Employee), {
			method: 'PUT',
			body: JSON.stringify(employee),
		})
		this.inspectResponse(response)
	}

	public async getSkills(): Promise<Skill[]> {
		const response = await fetch(this.endpoint(Endpoint.Skills))
		this.inspectResponse(response)
		const json = await response.json()
		return json as Skill[]
	}

	public async getProjects(): Promise<Project[]> {
		const response = await fetch(this.endpoint(Endpoint.Projects))
		this.inspectResponse(response)
		const json = await response.json()
		return json as Skill[]
	}

	public async getTopics(): Promise<Topic[]> {
		const response = await fetch(this.endpoint(Endpoint.Topics))
		this.inspectResponse(response)
		const json = await response.json()
		return json as Skill[]
	}

	private endpoint(endpoint: Endpoint, queryArgs?: Record<string, string>) {
		let result = `${this.serviceRoot}/${endpoint}`
		if (queryArgs) {
			result += `?${querystring.stringify(queryArgs)}`
		}
		return result
	}

	private inspectResponse(response: Response) {
		if (response.status > 400) {
			throw new Error(
				`error interacting with services: ${response.status} - ${response.statusText}`,
			)
		}
	}
}
