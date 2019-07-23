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

	eigenCentrality: number
	betweenness: number
	pageRank: number
}

export type Skill = string
export type Project = string
export type Topic = string
