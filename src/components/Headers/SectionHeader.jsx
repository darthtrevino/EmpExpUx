import React from 'react'
import PropTypes from 'prop-types'
import styles from './Headers.module.scss'

export const SectionHeader = props => {
	const { title, number } = props
	return (
		<div className={styles.headerCnt}>
			{number && <div className={styles.numberCnt}>{number.toString()}</div>}
			<div className={styles.titleCnt}>{title}</div>
		</div>
	)
}

SectionHeader.propTypes = {
	title: PropTypes.string.isRequired,
	number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
