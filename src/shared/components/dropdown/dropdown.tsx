'use client'
import styles from './dropdown.module.scss'
import React, { FC, useState } from 'react'
import {  DropdownContent } from '@/shared/components/dropdown/dropdown-content/dropdown-content'
import { MdArrowDownward } from 'react-icons/md'

type DropdownType = {
	children: React.ReactNode
	title:string
}
export const Dropdown:FC<DropdownType> = ({children,title}) => {
	const [visible, setVisible] = useState(false)

	const handleVisible = () => {
		setVisible(prev => !prev)
	}

	return (
		<div className={styles.dropdown}>
			<div className={styles.item} onClick={handleVisible}>
				<MdArrowDownward color={'var(--accent)'} size={35} style={{rotate:`${visible? '180deg':'360deg'}`}} />
				<p>{title}</p>
			</div>

			<DropdownContent isOpen={visible} >
				{children}
			</DropdownContent>
		</div>
	)
}