import React from 'react';
import styles from './Main.module.css';

const Main = () => {
	return (
		<main>
			<h1>
				Buy from businesses on social media and <span>spread the Payment</span>
			</h1>
			<p>Shop on your terms , pay later</p>
			<div>
				{' '}
				<button>
					<img src="" alt="" />
					<h3>Get it on Google Play</h3>
				</button>
				<button>
					<img src="" alt="" />
					<h3>Get it on the App store</h3>
				</button>
				<div>Coming soon</div>
			</div>
			<div className={styles.container}>
				{' '}
				<input
					type="search"
					placeholder="Input your email address"
					className={styles.text_input}
				/>
				<button className={styles.btn}>Join Waitlist</button>
			</div>
		</main>
	);
};

export default Main;
