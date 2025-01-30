import { Intro } from '@/shared/components/intro/intro'
import { Heading } from '@/shared/components/heading/heading'
import { Dropdown } from '@/shared/components/dropdown/dropdown'

export const Main = () => {
	return (
		<div className={'main'}>
			<Heading />
			<Intro />
			<Dropdown title={'О студии'}><div style={{height:'150px', padding:'20px'}}>about</div></Dropdown>
			<Dropdown  title={'Портфолио'}><div style={{height:'150px'}}>portfolio</div></Dropdown>
			<Dropdown title={'Контакты'}><div style={{height:'150px'}}>contacts</div></Dropdown>
		</div>
	)
}
