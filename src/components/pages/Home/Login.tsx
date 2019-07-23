import React, { useMemo, useState, useCallback } from 'react'
import { ComboBox, PrimaryButton } from 'office-ui-fabric-react'
import { useAvailableUsers } from '../../../hooks/useAvailableUsers'
import { useHandleLogin } from '../../../hooks/useHandleLogin'
import styles from './Login.module.scss'

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
		<div className={styles.container}>
			<div className={styles.title}>Select a user to log in</div>
			<div className={styles.row}>
				<ComboBox
					options={comboBoxOptions}
					onChange={handleComboBoxChange}
					selectedKey={selectedUser}
				/>
				<PrimaryButton onClick={handleLoginClick}>Go</PrimaryButton>
			</div>
		</div>
	)
}
