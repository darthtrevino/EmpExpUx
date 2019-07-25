import React, { memo } from 'react'
import { Kudo } from '../../../api'
import classnames from 'classnames'
import {
	Text,
	PersonaSize,
	Persona,
	PrimaryButton,
} from 'office-ui-fabric-react'
import { KudoThumb } from './KudoThumb'
import styles from './KudoView.module.scss'

export interface KudoByMeViewProps {
	kudo: Kudo
}

export const KudoByMeView: React.FC<KudoByMeViewProps> = memo(({ kudo }) => {
	const textStyles = {
		root: {
			fontStyle: kudo.kudoState === 'kudoSent' ? 'italic' : 'normal',
			color: kudo.kudoState === 'kudoSent' ? 'inherit' : '#808080',
			fontWeight: kudo.kudoState === 'kudoSent' ? '400' : '700',
		},
	} as any

	const btnStyles = {
		root: {
			margin: '23px 10px',
		},
	} as any

	const sendKudosIcon =
		kudo.kudoState === 'kudoSent' ? (
			<KudoThumb />
		) : (
			<PrimaryButton text="Send" styles={btnStyles} />
		)

	const kudoMessage =
		kudo.kudoState === 'kudoSent'
			? kudo.actualkudoMessage
			: kudo.suggestedkudoMessage

	console.log('here', kudo)
	return (
		<div className={classnames(styles.container, 'ms-depth-8')}>
			<div className={styles.kudoDetail}>
				<Persona size={PersonaSize.size32} text={kudo.suggestedFromEmail} />
				<div className={styles.textContainer}>
					<Text variant="mediumPlus" styles={textStyles}>
						{kudoMessage}
					</Text>
				</div>
			</div>
			{sendKudosIcon}
		</div>
	)
})
