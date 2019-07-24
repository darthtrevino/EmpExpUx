import React, { memo, lazy, Suspense } from 'react'
import { Kudos } from '../pages/Kudos'

import { Route } from 'react-router-dom'
const Home = lazy(() => import('../pages/Home'))
const FindExperts = lazy(() => import('../pages/FindExperts'))
const SkillsMarketplace = lazy(() => import('../pages/SkillsMarketplace'))
const Profile = lazy(() => import('../pages/Profile'))

export const Routes: React.FC = memo(() => (
	<Suspense fallback={<div></div>}>
		<Route path="/" exact component={Home} />
		<Route path="/experts" component={FindExperts} />
		<Route path="/kudos" component={Kudos} />
		<Route path="/skills-marketplace" component={SkillsMarketplace} />
		<Route path="/profile" component={Profile} />
	</Suspense>
))
