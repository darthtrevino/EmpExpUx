import React, { memo } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { FindExperts } from '../pages/FindExperts'
import { FindInfluencers } from '../pages/FindInfluencers'
import { SkillsMarketplace } from '../pages/SkillsMarketplace'
import { Profile } from '../pages/Profile'
import { Navigation } from './Navigation'

export const Routes: React.FC = memo(() => (
	<BrowserRouter>
		<Navigation />
		<Route path="/" exact component={Home} />
		<Route path="/experts" component={FindExperts} />
		<Route path="/influencers" component={FindInfluencers} />
		<Route path="/skills-marketplace" component={SkillsMarketplace} />
		<Route path="/profile" component={Profile} />
	</BrowserRouter>
))
