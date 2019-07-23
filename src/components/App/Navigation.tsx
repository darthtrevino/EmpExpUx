import React, { memo } from 'react'
import { Nav, INavLink } from 'office-ui-fabric-react'
import { withRouter } from 'react-router-dom'

export const Navigation: React.FC<any> = memo(
	withRouter(({ history }) => (
		<Nav
			onLinkClick={(event: any, element: any) => {
				event.preventDefault()
				history.push(element.url)
			}}
			selectedKey="find-experts"
			expandButtonAriaLabel="Expand or collapse"
			styles={styles}
			groups={NavigationGroups}
		/>
	)),
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
const NavigationGroups: NavLinkGroup = [
	{
		links: [
			{
				name: 'Home',
				url: '/',
				key: 'home',
				links: [
					{
						name: 'Find Experts',
						url: '/experts',
						key: 'experts',
					},
					{
						name: 'Find Influencers',
						url: '/influencers',
						key: 'influencers',
					},

					{
						name: 'Skills Marketplace',
						url: '/skills-marketplace',
						key: 'skill-marketplace',
					},
				],
				isExpanded: true,
			},
			{
				name: 'My Expertise',
				url: '/profile',
				key: 'profile',
			},
		],
	},
]
