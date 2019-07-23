import React, { memo } from 'react'
import { Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { FindExperts } from '../pages/FindExperts'
import { Kudos } from '../pages/Kudos'
import { SkillsMarketplace } from '../pages/SkillsMarketplace'
import { Profile } from '../pages/Profile'

export const Routes: React.FC = memo(() => (
	<>
		<Route path="/" exact component={Home} />
		<Route path="/experts" component={FindExperts} />
		<Route path="/kudos" component={Kudos} />
		<Route path="/skills-marketplace" component={SkillsMarketplace} />
		<Route path="/profile" component={Profile} />
	</>
))
