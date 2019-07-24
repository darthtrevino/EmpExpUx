import React, { useMemo, useState, useCallback, memo } from 'react'
import { ComboBox, PrimaryButton, IButtonStyles } from 'office-ui-fabric-react'
import { useAvailableUsers } from '../../../hooks/useAvailableUsers'
import { useHandleLogin } from '../../../hooks/useHandleLogin'
import styles from './Home.module.scss'

const loginButtonStyles: IButtonStyles = { root: { marginTop: '29px' } }
const makeCbOption = (name: string) => ({ key: name, text: name })

export const Login: React.FC = memo(() => {
	const users = useAvailableUsers()
	const [selectedUser, setSelectedUser] = useState('')
	const comboBoxOptions = useMemo(
		() => users.filter(t => !!t).map(u => makeCbOption(u)),
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
							styles={loginButtonStyles}
						/>
					</div>
				</div>
			</div>
		</div>
	)
})
