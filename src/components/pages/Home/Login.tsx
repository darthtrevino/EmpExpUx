import React, { useMemo, useState, useCallback } from 'react'
import styled from 'styled-components'
import { ComboBox, PrimaryButton } from 'office-ui-fabric-react'
import { useAvailableUsers } from '../../../hooks/useAvailableUsers'
import { useHandleLogin } from '../../../hooks/useHandleLogin'

export interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
	const users = useAvailableUsers()
	const [selectedUser, setSelectedUser] = useState('')
	const comboBoxOptions = useMemo(
		() =>
			users
				.filter(t => !!t)
				.map(u => ({
					key: u,
					text: u,
				})),
		[users],
	)
	const handleComboBoxChange = useCallback(
		(props, item) => setSelectedUser(item.key),
		[setSelectedUser],
	)
	const handleLogin = useHandleLogin()
	const handleLoginClick = useCallback(() => handleLogin(selectedUser), [
		handleLogin,
		selectedUser,
	])
	return (
		<Container>
			<Title>Select a user to log in</Title>
			<Row>
				<ComboBox
					options={comboBoxOptions}
					onChange={handleComboBoxChange}
					selectedKey={selectedUser}
				>
					{users.map(u => (
						<option key={u}>{u}</option>
					))}
				</ComboBox>
				<PrimaryButton onClick={handleLoginClick}>Go</PrimaryButton>
			</Row>
		</Container>
	)
}

const Container = styled.div`
	margin-top: 40px;
`

const Row = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 10px;
`

const Title = styled.div`
	font-size: 16px;
	font-weight: 300;
`
