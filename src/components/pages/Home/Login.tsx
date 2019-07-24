import React, { useMemo, useState, useCallback } from 'react'
import { ComboBox, PrimaryButton } from 'office-ui-fabric-react'
import { useAvailableUsers } from '../../../hooks/useAvailableUsers'
import { useHandleLogin } from '../../../hooks/useHandleLogin'
import styles from './Home.module.scss'

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
		<div>
			<div className={styles.flexRowCnt}>
				<div className={styles.flexCentered}>
					<div className={styles.textfieldCnt}>
						<ComboBox
							label="Select a user to log in"
							options={comboBoxOptions}
							onChange={handleComboBoxChange}
							selectedKey={selectedUser}
						/>
					</div>
					<div className={styles.btnCnt}>
						<PrimaryButton
							text="Go"
							onClick={handleLoginClick}
							styles={{ root: { marginTop: '29px' } }}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
