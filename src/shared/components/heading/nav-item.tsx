import Link from 'next/link'
import type { FC } from 'react'

type NavItemType = {
	title: string
	href: string
}
const NavItem: FC<NavItemType> = ({ title, href }) => {
	return (
		<li>
			<Link href={`#${href}`}>{title}</Link>
		</li>
	)
}

export default NavItem
