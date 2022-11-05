import React from "react";
import "../App.css";

const MenuItem = ({ menuItems }) => {
	return (
		<>
			{menuItems.map(function (item, index) {
				return (
					<article key={menuItems.id} className="menu-item">
						<img src={item.img} className="photo" alt={item.title} />
						<div className="item-info">
							<header>
								<h4>{item.title}</h4>
								<h4 className="price">{item.price}$</h4>
							</header>
							<p className="item-text">{item.desc}</p>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default MenuItem;
