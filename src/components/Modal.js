import React, { useState } from "react";
import "./Modal.css";
import "../App.css";
import data from "../data";
import success from "./success.mp3";

export default function Modal({ menuItems, setMenuItems, setCurrentItems }) {
	const [modal, setModal] = useState(false);
	const [newItem, setNewItem] = useState({
		title: "",
		desc: "",
		img: "",
		price: "",
		category: "",
		id: "",
	});

	const toggleModal = () => {
		setModal(!modal);
	};

	if (modal) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}
	const handleChange = e => {
		setNewItem(prevState => {
			const { name, value } = e.target;

			return {
				...prevState,
				[name]: value,
			};
		});
		console.log(menuItems);
	};

	const handleSubmit = e => {
		data.push(newItem);
		toggleModal();
		const audio = new Audio(success);
		audio.play();
		setCurrentItems(`${newItem.category}`);
	};

	return (
		<>
			<button onClick={toggleModal} className="btn-modal plus-btn">
				+ Add New Meal
			</button>
			{modal && (
				<div className="modal">
					<div onClick={toggleModal} className="overlay"></div>
					<div className="modal-content">
						<h4>Add new meal</h4>
						<input
							onChange={handleChange}
							name="id"
							value={newItem.id}
							className="input"
							type="text"
							placeholder="ID"
						></input>
						<input
							onChange={handleChange}
							name="title"
							value={newItem.title}
							className="input"
							type="text"
							placeholder="Name"
						></input>
						<input
							onChange={handleChange}
							name="category"
							value={newItem.category}
							className="input"
							type="text"
							placeholder="Category"
						></input>
						<input
							onChange={handleChange}
							name="desc"
							value={newItem.desc}
							className="input"
							type="text"
							placeholder="Description"
						></input>
						<input
							onChange={handleChange}
							name="img"
							value={newItem.img}
							className="input"
							type="text"
							placeholder="image url"
						></input>
						<input
							onChange={handleChange}
							name="price"
							value={newItem.price}
							className="input"
							type="text"
							placeholder="price"
						></input>
						<button onClick={handleSubmit} className="plus-btn" type="submit">
							submit
						</button>

						<button className="close-modal plus-btn" onClick={toggleModal}>
							CLOSE
						</button>
					</div>
				</div>
			)}
		</>
	);
}
