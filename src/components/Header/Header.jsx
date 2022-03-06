import React from 'react';
import styles from'./Header.module.css';

const Header = () => {
	return (
		<>
			<header>
				<nav>
					<div>
						<img className={styles.img} src="/images/Haggle real logo 10.png" alt="" />
					</div>

					<div className={styles.navbar__links}>
						<ul>
							<li>
								<button>Buy</button>
							</li>
							<li>
								<button>Sell</button>
							</li>
							<li>
								<button href="#">
									MarketPlace <span className={styles.span}>Coming soon</span>
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
