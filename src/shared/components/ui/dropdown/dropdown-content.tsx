'use client'
import React, { FC } from 'react'
import styles from './dropdown-content.module.scss'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'

type DropdownProps = {
	isOpen: boolean;
	children?: React.ReactNode;
}

export const DropdownContent: FC<DropdownProps> = ({ isOpen,children }) => {

	return (


			<AnimatePresence initial={false}>
				{isOpen ? (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{
							duration: 0.3,
							ease: [0, 0.71, 0.2, 1.01],
						}}
					>{children}</motion.div>
				) : null}
			</AnimatePresence>


	)
}
