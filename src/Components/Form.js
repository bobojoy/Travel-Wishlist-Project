import React, { useState, useEffect } from 'react';
import axios from 'axios'; // This is a generalised name of GET,POST,PUT,DELETE
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

	useEffect(() => {
		// Fetch existing destinations when the component mounts
		const fetchDestinations = async () => {
			try {
				const response = await axios.get('http://localhost:3000/destinations');
				setDestinations(response.data);
			} catch (err) {
				setError('Failed to fetch destinations.');
			}
		};

		fetchDestinations();
	}, []);

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
				'http://localhost:3000/destinations',
				formData
			);
			setDestinations([...destinations, response.data]);
			setSuccess('Entry added successfully!');
			setError('');
			setFormData({
				name: '',
				country: '',
				notes: '',
				imageUrl: '',
			});
		} catch (err) {
			setError('Failed to add entry.');
			setSuccess('');
		}
	};

	const handleDelete = async (id) => {
		try {
			await axios.delete(`http://localhost:3000/destinations/${id}`);
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
			<h2>ADD NEW ENTRY</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor='country'>Country:</label>
					<input
						type='text'
						id='country'
						name='country'
						value={formData.country}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor='notes'>Notes:</label>
					<textarea
						id='notes'
						name='notes'
						value={formData.notes}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor='imageUrl'>Image URL:</label>
					<input
						type='text'
						id='imageUrl'
						name='imageUrl'
						value={formData.imageUrl}
						onChange={handleChange}
						required
					/>
				</div>
				<button type='submit'>Add Entry</button>
			</form>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{success && <p style={{ color: 'green' }}>{success}</p>}

			<h2>Existing Destinations</h2>
			<ul>
				{destinations.map((destination) => (
					<li key={destination.id}>
						<p>
							<strong>Name:</strong> {destination.name}
						</p>
						<p>
							<strong>Country:</strong> {destination.country}
						</p>
						<p>
							<strong>Notes:</strong> {destination.notes}
						</p>
						<p>
							<strong>Image URL:</strong>{' '}
							<img
								src={destination.imageUrl}
								alt={destination.name}
								style={{ width: '100px', height: 'auto' }}
							/>
						</p>
						<button onClick={() => handleDelete(destination.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FormComponent;
