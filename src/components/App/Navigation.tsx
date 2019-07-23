import React, { memo, useCallback } from 'react'
import { Nav, INavLink } from 'office-ui-fabric-react'
import { withRouter } from 'react-router-dom'

export const Navigation: React.FC<any> = memo(
	withRouter(({ history }) => {
		const handleLinkClick = useCallback(
			(event: any, element: any) => {
				event.preventDefault()
				history.push(element.url)
			},
			[history],
		)
		return (
			<Nav
				onLinkClick={handleLinkClick}
				selectedKey={pathToKeyMap[history.location.pathname]}
				expandButtonAriaLabel="Expand or collapse"
				styles={styles}
				groups={NavigationGroups}
			/>
		)
	}),
)

const styles: Record<string, React.CSSProperties> = {
	root: {
		width: 208,
		height: 350,
		boxSizing: 'border-box',
		border: '1px solid #eee',
		overflowY: 'auto',
	},
}

type NavLinkGroup = { links: INavLink[] }[]
const pathToKeyMap: Record<string, string> = {}

const NavigationGroups: NavLinkGroup = [{ links: [] }]

const registerPath = (name: string, key: string, url?: string) => {
	url = url ? url : `/${key}`
	NavigationGroups[0].links.push({ name, key, url })
	pathToKeyMap[url] = key
}

registerPath('Home', 'home', '/')
registerPath('Find Experts', 'experts')
registerPath('Find Influencers', 'influencers')
registerPath('Skills Marketplace', 'skills-marketplace')
registerPath('My Expertise', 'profile')
