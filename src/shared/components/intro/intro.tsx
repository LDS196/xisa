import styles from './intro.module.scss'
import { MSlide } from '@/shared/components/mslide/mslide'
import { Button } from '@/shared/components/ui/button/button'

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
				<MSlide url={'/images/permanent2.jpg'} height={210} width={210} delay={0.7}/>
			</div>

			<div className={styles.title}>
				<h1>Beauty-студия</h1>
				<h2>эстетического перманентного макияжа</h2>
			</div>
			<div className={styles.button}>
				<Button title={'записаться'}/>
			</div>


		</section>
	)
}
