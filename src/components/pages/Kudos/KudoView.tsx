import React, { memo } from 'react'
import { Kudo } from '../../../api'
import classnames from 'classnames'
import { Text, PersonaSize, Persona } from 'office-ui-fabric-react'
import { KudoThumb } from './KudoThumb'
import styles from './KudoView.module.scss'

export interface KudoViewProps {
	kudo: Kudo
}

export const KudoView: React.FC<KudoViewProps> = memo(({ kudo }) => {
	const textStyles = {
		root: {
			fontStyle: 'italic',
		},
	} as any
	return (
		<div className={classnames(styles.container, 'ms-depth-8')}>
			<div className={styles.kudoDetail}>
				<Persona size={PersonaSize.size32} text={kudo.suggestedFromEmail} />
				<div className={styles.textContainer}>
					<Text variant="mediumPlus" styles={textStyles}>
						{kudo.actualkudoMessage}
					</Text>
				</div>
			</div>
			<KudoThumb />
		</div>
	)
})
