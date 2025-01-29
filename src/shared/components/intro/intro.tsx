import styles from './intro.module.scss'
import { MSlide } from '@/shared/components/mslide/mslide'

export const Intro = () => {


	return (
		<section
			className={styles.intro}
			id={'intro'}
		>
			<div className={styles.slide1}>
				<MSlide url={'/images/permanent1.jpg'} height={190} width={190} />
			</div>
			<div className={styles.slide2}>
				<MSlide url={'/images/permanent2.jpg'} height={210} width={210}/>
			</div>

			<div className={styles.title}>
				<h1>Beauty-студия</h1>
				<h2>перманентного макияжа и дизайна бровей </h2>
			</div>

		</section>
	)
}
