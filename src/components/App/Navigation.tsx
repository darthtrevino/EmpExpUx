import React, { memo, useCallback, useState } from 'react'
import { IconButton, Nav, INavLink } from 'office-ui-fabric-react'
import { withRouter } from 'react-router-dom'
import { jsStyles } from './Navigation.styles'

const ICON_PROPS = { iconName: 'GlobalNavButton' }

export const Navigation = memo(
	withRouter(({ history }) => {
		let [isOpen, setIsOpen] = useState(true)
		let toggleNav = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen])
		const styles = jsStyles(isOpen)

		const handleLinkClick = useCallback(
			(ev, el) => {
				ev.preventDefault()
				history.push(el.url)
			},
			[history],
		)

		return (
			<div style={styles.sidePanel}>
				<div style={styles.navContainer}>
					<div style={styles.toggleNavBtnCnt}>
						<IconButton
							title="Toggle Nav"
							ariaLabel="Toggle Nav"
							iconProps={ICON_PROPS}
							onClick={toggleNav}
							styles={styles.navToggleBtn as any}
						/>
					</div>
					<Nav
						selectedKey={history.location.pathname}
						onLinkClick={handleLinkClick}
						groups={NavigationGroups}
						styles={styles.nav as any}
					/>
				</div>
			</div>
		)
	}),
)

const NavigationGroups: Array<{ links: INavLink[] }> = [
	{
		links: [
			{
				name: 'Home',
				url: '/',
				key: '/',
				icon: 'Home',
			},
			{
				name: 'Find Experts',
				url: '/experts',
				key: '/experts',
				icon: 'SearchNearby',
			},
			{
				name: 'Find Influencers',
				url: '/influencers',
				key: '/influencers',
				icon: 'Headset',
			},

			{
				name: 'Skills Marketplace',
				url: '/skills-marketplace',
				key: '/skill-marketplace',
				icon: 'Globe', // or Devices2
			},
			{
				name: 'My Expertise',
				url: '/profile',
				key: '/profile',
				icon: 'Contact',
			},
		],
	},
]
