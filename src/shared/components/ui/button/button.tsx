import styles from './button.module.scss'
import { FC } from 'react'
type ButtonProps={
	title:string
}
export const Button:FC<ButtonProps> = ({title}) => {


	return (
		<button
			className={styles.button}
		>

			{title}
		</button>
	)
}
