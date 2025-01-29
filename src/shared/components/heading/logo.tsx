import logo from '/public/images/logo-small.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


import styles from './heading.module.scss'

export const Logo = () => {

	return (
		<div className={styles.logoBlock}>
			<Link
				className={styles.logo}
				href={'/'}
			>
				<Image
					src={logo}
					alt={'Логотип'}
					width={120}
					height={60}
				/>
			</Link>
		</div>
	)
}
