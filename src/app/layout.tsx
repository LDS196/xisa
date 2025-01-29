import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.scss'
import '@/shared/styles/styles.scss'

const montserrat = Montserrat({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'XISA',
	description: 'XISA',
}

export default function RootLayout({
																		 children,
																	 }: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
		<body className={montserrat.className}>
		{children}
		</body>
		</html>
	)
}
