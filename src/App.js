import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data";
import MenuItem from "./components/MenuItem";
import Modal from "./components/Modal";

function App() {
	const [menuItems, setMenuItems] = useState(
		JSON.parse(localStorage.getItem("menuItems")) || data
	);
	const [currentItems, setCurrentItems] = useState("all");

	const handleBtns = e => {
		let word = e.target.id;
		setCurrentItems(word);
		console.log(word);
	};

	useEffect(() => {
		if (currentItems === "all") {
			setMenuItems(data);
		} else {
			const filtered = data.filter(item => {
				return (
					item.category === currentItems || item.category.includes(currentItems)
				);
			});
			setMenuItems(filtered);
		}
	}, [currentItems]);

	return (
		<>
			<Modal
				setCurrentItems={setCurrentItems}
				menuItems={menuItems}
				setMenuItems={setMenuItems}
			/>
			<h2 className="header">🍔 Kev's 🍨</h2>
			<section className="btn-container">
				<button id="all" onClick={handleBtns} className="filter-btn">
					All
				</button>
				<button id="dinner" onClick={handleBtns} className="filter-btn">
					Dinner
				</button>
				<button id="lunch" onClick={handleBtns} className="filter-btn">
					Lunch
				</button>
				<button id="breakfast" onClick={handleBtns} className="filter-btn">
					Breakfast
				</button>
				<button id="shakes" onClick={handleBtns} className="filter-btn">
					Shakes
				</button>
			</section>
			<section className="section-center">
				<MenuItem menuItems={menuItems} />
			</section>
		</>
	);
}

export default App;
