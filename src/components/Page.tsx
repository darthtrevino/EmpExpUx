import React, { memo } from 'react'
import styles from './Page.module.scss'

export interface PageProps {
	name: string
}
export const Page: React.FC<PageProps> = memo(({ name, children }) => (
	<div className={styles.pageContainer}>
		<div className={styles.contentCnt}>{children}</div>
	</div>
))
