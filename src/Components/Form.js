import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import '../App.css';

const FormComponent = () => {
	const [formData, setFormData] = useState({
		name: '',
		country: '',
		notes: '',
		imageUrl: '',
	});
	const [destinations, setDestinations] = useState([]);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');


	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				'/destinations',
				formData
			);
			setDestinations([...destinations, response.data]);
			setSuccess('Entry added successfully!');
			setError('');
			setFormData({
				name: '',
				country: '',
				description: '',
				image_url: '',
			});
		} catch (err) {
			setError('Failed to add entry.');
			setSuccess('');
		}
	};

	const handleDelete = async (id) => {
		try {
			await axios.delete(
				`/destination${id}`
			);
			setDestinations(
				destinations.filter((destination) => destination.id !== id)
			);
			setSuccess('Entry deleted successfully!');
			setError('');
		} catch (err) {
			setError('Failed to delete entry.');
			setSuccess('');
		}
	};

	return (
		<div>
			<h2 className='ADD_DEST'>ADD DESTINATION</h2>
			<form onSubmit={handleSubmit}>
				<div className='Name'>
					{/* <label htmlFor='name'>Name:</label> */}
					<input
						className='input'
						type='text'
						placeholder='Enter destination name ...'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='Country'>
					{/* <label htmlFor='country'>Country:</label> */}
					<input
						type='text'
						placeholder='Enter Country name ...'
						id='country'
						name='country'
						value={formData.country}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='Description'>
					<textarea
						id='notes'
						name='notes'
						placeholder='Enter description...'
						value={formData.notes}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='Image_Url'>
					{/* <label htmlFor='imageUrl'>Image URL:</label> */}
					<input
						type='text'
						id='imageUrl'
						placeholder='paste image url here ...'
						name='imageUrl'
						value={formData.imageUrl}
						onChange={handleChange}
						required
					/>
				</div>
				<button type='submit'>Add Destination</button>
			</form>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{success && <p style={{ color: 'green' }}>{success}</p>}

			<h2 className='text-center'></h2>
			<ul className='listcard'>
				{destinations.map((destination) => (
					<li
						className='card'
						key={destination.id}
					>
						<img
							className='img_add'
							src={destination.imageUrl}
							alt={destination.name}
							style={{ width: '100px', height: 'auto' }}
						/>

						<h3>
							<strong className='strong'>Name:</strong> {destination.name}
						</h3>
						<p>
							<strong className='strong'>Country:</strong> {destination.country}
						</p>

						<p>
							<strong className='strong'>Description:</strong> {destination.description}
						</p>

						<button
							className='del'
							onClick={() => handleDelete(destination.id)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FormComponent;
