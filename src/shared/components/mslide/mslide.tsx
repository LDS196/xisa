'use client'
import styles from './mslide.module.scss'
import { motion } from 'framer-motion'
import { FC } from 'react'

type MSlideProps = {
	url: string
	height: number
	width: number
}
export const MSlide: FC<MSlideProps> = ({ url, height, width }) => {
	const style = { backgroundImage: `url(${url})`, height, width }

	return (
		<motion.div
			style={style}
			className={styles.slide}
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				delay: 0.5,
				ease: [0, 0.71, 0.2, 1.01],
			}}
		/>

	)
}
