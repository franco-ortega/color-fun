import styles from './page.module.css';

export default function ColorMix() {
	return (
		<main className={styles['color-mix']}>
			<header>
				<h1>Color Mix</h1>
			</header>
			<section className={styles.colors}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</section>
			<section className={styles.brand}>
				<header>
					<h2>Brand Stuff</h2>
				</header>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum,
					perferendis facilis veniam ipsum repudiandae accusantium pariatur
					minus optio in quis minima eligendi nam quaerat atque, perspiciatis
					dolor illum beatae!
				</div>
			</section>
		</main>
	);
}
