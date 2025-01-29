import React, { FC } from 'react'
import styles from './title.module.scss'

const Title: FC<{ title: string }> = ({ title }) => {
	return (
		<div className={styles.title}>{title}</div>

	)
}

export default Title
