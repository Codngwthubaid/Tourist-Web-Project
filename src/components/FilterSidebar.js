import { useState } from 'react';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    starRating: [],
    reviewScore: [],
  });

  const handleFilterChange = (category, value) => {
    const updatedFilters = { ...selectedFilters };
    const isSelected = updatedFilters[category].includes(value);

    if (isSelected) {
      updatedFilters[category] = updatedFilters[category].filter(
        (filter) => filter !== value
      );
    } else {
      updatedFilters[category].push(value);
    }

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="border rounded-lg p-4 w-64 shadow-lg">
      <h3 className="font-bold text-lg mb-2">Filter by:</h3>
      <hr className="mb-4" />
      {/* Star Rating */}
      <div className="mb-4">
        <h4 className="font-bold mb-2">Star Rating</h4>
        {filters.starRating.map((rating) => (
          <label key={rating} className="block">
            <input
              type="checkbox"
              value={rating}
              onChange={() => handleFilterChange('starRating', rating)}
              checked={selectedFilters.starRating.includes(rating)}
              className="mr-2"
            />
            {rating} stars
          </label>
        ))}
      </div>

      {/* Review Score */}
      <div className="mb-4">
        <h4 className="font-bold mb-2">Review Score</h4>
        {filters.reviewScore.map((score) => (
          <label key={score} className="block">
            <input
              type="checkbox"
              value={score}
              onChange={() => handleFilterChange('reviewScore', score)}
              checked={selectedFilters.reviewScore.includes(score)}
              className="mr-2"
            />
            {score}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
