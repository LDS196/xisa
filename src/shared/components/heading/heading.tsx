import styles from './heading.module.scss'
import NavItem from '@/shared/components/heading/nav-item'
import { navList } from '@/shared/constants/appConfig'
import Link from 'next/link'

export const Heading = () => {

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<ul>
						{navList.map(navItem => {
							return (
								<NavItem
									key={navItem.id}
									href={navItem.id}
									title={navItem.title}
								/>
							)
						})}
					</ul>
				</nav>
				<Link
					href={'/'}
					className={styles.logo}>
					<span>XISA</span>
					<span>permanent studio & school</span>
				</Link>


			</div>
		</header>
	)
}
