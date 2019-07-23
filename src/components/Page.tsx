import React, { memo } from 'react'
import styles from './Page.module.scss'
import { Helmet } from 'react-helmet'

export interface PageProps {
	name: string
}
export const Page: React.FC<PageProps> = memo(({ name, children }) => (
	<div className={styles.pageContainer}>
		<Helmet>
			<title>{name}</title>
		</Helmet>
		<div className={styles.contentCnt}>{children}</div>
	</div>
))
