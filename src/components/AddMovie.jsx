import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovieForm = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Movie added successfully (hypothetical)');
    navigate('/');
  };

  return (
    <div>
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" required />
        </div>
        <div>
          <label>Director:</label>
          <input type="text" name="director" required />
        </div>
        <div>
          <label>Genre:</label>
          <select name="genre" required>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
          </select>
        </div>
        <div>
          <label>Release Year:</label>
          <input type="number" name="releaseYear" required />
        </div>
        <div>
          <label>Synopsis:</label>
          <textarea name="synopsis" required></textarea>
        </div>
        <div>
          <label>Poster Image URL:</label>
          <input type="url" name="posterUrl" required />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovieForm;