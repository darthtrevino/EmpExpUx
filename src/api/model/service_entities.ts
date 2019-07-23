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
