import querystring from 'query-string'
import {
	Kudo,
	Employee,
	Skill,
	Project,
	Topic,
	FilterExpression,
	ExpertConnection,
	InfluencerConnection,
} from './model'
import { serialize } from './filters'

enum Endpoint {
	Employee = 'Employee',
	Skills = 'Skills',
	Projects = 'Projects',
	Topics = 'Topics',
	Kudos = 'Kudos',
	EmployeeRewards = 'EmployeeRewards',
	ExpertConnection = 'ExpertConnection',
	InfluencerConnection = 'InfluencerConnection',
}

enum HttpMethod {
	POST = 'POST',
	PUT = 'PUT',
}

const JsonHeaders = {
	'Content-Type': 'application/json',
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
			method: HttpMethod.POST,
			headers: JsonHeaders,
			body: JSON.stringify(employee),
		})
		this.inspectResponse(response)
	}

	public async updateEmployee(employee: Employee): Promise<void> {
		const response = await fetch(this.endpoint(Endpoint.Employee), {
			method: HttpMethod.PUT,
			headers: JsonHeaders,
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

	public async getKudos(email: string): Promise<Kudo[]> {
		const response = await fetch(this.endpoint(Endpoint.Kudos, { email }))
		this.inspectResponse(response)
		const json = await response.json()
		return json as Kudo[]
	}

	public async addKudo(kudo: Kudo): Promise<void> {
		const response = await fetch(this.endpoint(Endpoint.Kudos), {
			method: HttpMethod.POST,
			headers: JsonHeaders,
			body: JSON.stringify(kudo),
		})
		this.inspectResponse(response)
	}

	public async updateKudo(kudo: Kudo): Promise<void> {
		const response = await fetch(this.endpoint(Endpoint.Kudos), {
			method: HttpMethod.PUT,
			headers: JsonHeaders,
			body: JSON.stringify(kudo),
		})
		this.inspectResponse(response)
	}

	public async addRewardPoints(
		email: string,
		rewardPointsToAdd: number,
	): Promise<void> {
		const response = await fetch(this.endpoint(Endpoint.EmployeeRewards), {
			method: HttpMethod.PUT,
			headers: JsonHeaders,
			body: JSON.stringify({
				email,
				rewardPointsToAdd,
			}),
		})
		this.inspectResponse(response)
	}

	public async getExpertConnections(
		email: string,
	): Promise<ExpertConnection[]> {
		const response = await fetch(
			this.endpoint(Endpoint.ExpertConnection, { email }),
		)
		this.inspectResponse(response)
		const json = await response.json()
		return json as ExpertConnection[]
	}

	public async addExpertConnection(
		connection: ExpertConnection,
	): Promise<void> {
		const response = await fetch(this.endpoint(Endpoint.ExpertConnection), {
			method: HttpMethod.POST,
			headers: JsonHeaders,
			body: JSON.stringify(connection),
		})
		this.inspectResponse(response)
	}

	public async getInfluencerConnections(
		email: string,
	): Promise<InfluencerConnection[]> {
		const response = await fetch(
			this.endpoint(Endpoint.InfluencerConnection, { email }),
		)
		this.inspectResponse(response)
		const json = await response.json()
		return json as InfluencerConnection[]
	}

	public async addInfluencerConnection(
		connection: InfluencerConnection,
	): Promise<void> {
		const response = await fetch(this.endpoint(Endpoint.InfluencerConnection), {
			method: HttpMethod.PUT,
			headers: JsonHeaders,
			body: JSON.stringify(connection),
		})
		this.inspectResponse(response)
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
