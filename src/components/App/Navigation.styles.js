import { ColorPalette } from '../../styles'

export const jsStyles = isExpanded => {
	return {
		sidePanel: {
			flex: isExpanded ? '0 1 280px' : '0 1 50px',
			padding: 0,
			margin: 0,
		},
		navContainer: {
			backgroundColor: ColorPalette.coolGray__dark,
			height: '100vh',
			width: isExpanded ? '280px' : '50px',
			transition: 'all 0.2s ease-in-out',
			transitionProperty: 'width',
		},
		toggleNavBtnCnt: {
			height: '36px',
			padding: '8px 8px 0px',
		},
		navToggleBtn: {
			rootHovered: {
				backgroundColor: 'transparent',
				color: 'rgb(0, 120, 212)',
			},
			icon: {
				color: ColorPalette.coolGray__light,
			},
		},
		nav: {
			link: {
				color: ColorPalette.white,
				fontSize: '14px',
				fontWeight: 400,
				lineHeight: '20px',
				padding: '25px 10px 25px 5px',
				selectors: {
					'.ms-Nav-compositeLink:hover &': {
						backgroundColor: ColorPalette.coolGray__rich,
						color: ColorPalette.white,
					},
					'.ms-Nav-compositeLink.is-selected:hover &': {
						color: ColorPalette.yellow__tertiary,
					},
					'i.ms-Button-icon, &:hover i.ms-Button-icon': {
						color: ColorPalette.white,
						fontSize: '20px',
						padding: '0 10px 0 4px',
					},
					'.is-selected &': {
						color: ColorPalette.yellow__tertiary,
						backgroundColor: ColorPalette.coolGray__rich,
						selectors: {
							'i.ms-Button-icon': {
								color: ColorPalette.yellow__tertiary,
							},
						},
					},
					'&::after': {
						border: 0,
					},
				},
			},
			linkText: {
				transition: 'visibility 0s, opacity 0.5s linear',
				opacity: isExpanded ? 1 : 0,
				visibility: isExpanded ? 'visible' : 'hidden',
			},
			compositeLink: {
				backgroundColor: 'transparent',
			},
			navItems: {
				margin: 0,
			},
		},
	}
}
