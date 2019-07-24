export interface Employee {
	/**
	 * Unique identifier for the employee
	 */
	id: string

	/**
	 * The employee's email address
	 */
	email: string

	/**
	 * The functional area this employee works in
	 */
	function: string

	/**
	 * The organization this employee works in
	 */
	organization: string

	/**
	 * The region this employee works in.
	 */
	region: string

	/**
	 * Key technical or nontechnical skills that this employee
	 * is proficient with
	 */
	skills: Skill[]

	/**
	 * Projects that this employee has been attached to.
	 */
	projects: Project[]

	/**
	 * Topical areas of expertise
	 */
	topics: Topic[]

	/**
	 * The employee's eigenvector centrality
	 * https://en.wikipedia.org/wiki/Eigenvector_centrality
	 */
	eigenCentrality: number

	/**
	 * The employee's betweenness centrality
	 * https://en.wikipedia.org/wiki/Betweenness_centrality
	 *
	 */
	betweenness: number

	/**
	 * The employee's pagerank
	 * https://en.wikipedia.org/wiki/PageRank
	 */
	pageRank: number

	/**
	 * The ExpertScore of this user, indicating how well they respond to requests
	 */
	rewardPoints: number
}

export type Skill = string
export type Project = string
export type Topic = string

export interface Kudo {
	id: string
	email: string
	actualkudoMessage: string
	suggestedFromEmail: string
	suggestedToEmail: string
	ActionTaken: string
	kudoState: string
}

export interface ExpertConnection {
	// not required on create
	id?: string

	requestGroupId: string
	requestorEmail: string
	suggestedExpertEmail: string
	suggestionSource: string
	requestorMessage: string
	expertResponseStatus: string
	expertResponseMessage?: string
	referredToEmail: string
	responseTimeInHours: number
	type: string
}

export interface InfluencerConnection {
	// not required on create
	id?: string
	requestGroupId: string
	transformationLeaderEmail: string
	suggestedInfluencerEmail: string
	transformationRequestMessage: string
	influencerResponseStatus: string
	influencerResponseMessage?: string
	responseTimeInHours: number
	type: string
}
