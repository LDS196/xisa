import React, { FC } from 'react'
import styles from './subtitle.module.scss'

const Subtitle: FC<{ title: string }> = ({ title }) => {
	return (
		<div className={styles.subtitle}><p>{title}</p></div>

	)
}

export default Subtitle
