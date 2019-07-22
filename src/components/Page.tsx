import React from 'react'

export interface PageProps {
	name: string
}
export const Page: React.FC<PageProps> = ({ name, children }) => (
	<div className="page">
		<Title text={name} />
		{children}
	</div>
)

export interface TitleProps {
	text: string
}
const Title: React.FC<TitleProps> = ({ text }) => <div>{text}</div>
