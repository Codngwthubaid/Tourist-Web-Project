// import { useState, useEffect } from 'react';

// const PlacesAutocomplete = ({
//   onAddressSelect,
// }) => {
//   const autocompleteResultsId = `places-autocomplete-${Math.random().toString(36).substr(2, 9)}`;
//   const [ready, setReady] = useState(false);
//   const [value, setValue] = useState('');
//   const [suggestions, setSuggestions] = useState({ status: '', data: [] });

//   useEffect(() => {
//     const requestOptions = {
//       componentRestrictions: { country: 'gr' },
//     };
//     const debounce = 300;
//     const cache = 86400;

//     const fetchSuggestions = async (searchTerm) => {
//       // implement Google Places API request here
//       // for demonstration purposes, I'll use a mock response
//       const response = await fetch(`https://example.com/places-api/${searchTerm}`);
//       const data = await response.json();
//       setSuggestions({ status: 'OK', data });
//     };

//     const handleInputChange = (e) => {
//       const searchTerm = e.target.value;
//       setValue(searchTerm);
//       clearTimeout(timeoutId);
//       const timeoutId = setTimeout(() => {
//         fetchSuggestions(searchTerm);
//       }, debounce);
//     };

//     const clearSuggestions = () => {
//       setSuggestions({ status: '', data: [] });
//     };

//     return () => {
//       clearSuggestions();
//     };
//   }, [debounce, cache]);

//   const renderSuggestions = () => {
//     return suggestions.data.map((suggestion) => {
//       const { place_id, structured_formatting: { main_text, secondary_text }, description } = suggestion;
//       return (
//         <li
//           key={place_id}
//           onClick={() => {
//             setValue(description, false);
//             clearSuggestions();
//             onAddressSelect && onAddressSelect(description);
//           }}
//           className="focus:bg-orange-300 py-1 px-2 hover:bg-gray-300 border-b border-gray-500"
//           role="option"
//         >
//           <strong>{main_text}</strong> <small>{secondary_text}</small>
//         </li>
//       );
//     });
//   };

//   return (
//     <div className="p-3">
//       <input
//         value={value}
//         className="w-full h-full py-3 px-4 border-gray-400 border rounded-md focus:ring-3 outline-none focus:ring focus:ring-blue-300"
//         disabled={!ready}
//         onChange={handleInputChange}
//         placeholder="Search address..."
//         role="combobox"
//         aria-controls={autocompleteResultsId}
//       />
//       {suggestions.status === 'OK' && (
//         <ul
//           id={autocompleteResultsId}
//           className="focus:bg-yellow-100"
//           role="listbox"
//           aria-label="Suggestions"
//         >
//           {renderSuggestions()}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default PlacesAutocomplete;


// import { useState, useEffect } from 'react';

// const PlacesAutocomplete = ({ onAddressSelect }) => {
//   const autocompleteResultsId = `places-autocomplete-${Math.random().toString(36).substr(2, 9)}`;
//   const [ready, setReady] = useState(false);
//   const [value, setValue] = useState('');
//   const [suggestions, setSuggestions] = useState({ status: '', data: [] });
//   let timeoutId; // Declare timeoutId outside of the function

//   useEffect(() => {
//     // Assuming the component is ready after initial render
//     setReady(true);

//     const requestOptions = {
//       componentRestrictions: { country: 'gr' },
//     };

//     const debounce = 300;

//     const fetchSuggestions = async (searchTerm) => {
//       // Implement Google Places API request here
//       // For demonstration purposes, I'll use a mock response
//       const response = await fetch(`https://example.com/places-api/${searchTerm}`);
//       const data = await response.json();
//       setSuggestions({ status: 'OK', data });
//     };

//     const handleInputChange = (e) => {
//       const searchTerm = e.target.value;
//       setValue(searchTerm);
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         fetchSuggestions(searchTerm);
//       }, debounce);
//     };

//     const clearSuggestions = () => {
//       setSuggestions({ status: '', data: [] });
//     };

//     return () => {
//       clearSuggestions();
//       clearTimeout(timeoutId); // Clear the timeout on cleanup
//     };
//   }, []);

//   const renderSuggestions = () => {
//     return suggestions.data.map((suggestion) => {
//       const { place_id, structured_formatting: { main_text, secondary_text }, description } = suggestion;
//       return (
//         <li
//           key={place_id}
//           onClick={() => {
//             setValue(description);
//             clearSuggestions();
//             onAddressSelect && onAddressSelect(description);
//           }}
//           className="focus:bg-orange-300 py-1 px-2 hover:bg-gray-300 border-b border-gray-500"
//           role="option"
//         >
//           <strong>{main_text}</strong> <small>{secondary_text}</small>
//         </li>
//       );
//     });
//   };

//   return (
//     <div className="p-3">
//       <input
//         value={value}
//         className="w-full h-full py-3 px-4 border-gray-400 border rounded-md focus:ring-3 outline-none focus:ring focus:ring-blue-300"
//         disabled={!ready}
//         onChange={handleInputChange}
//         placeholder="Search address..."
//         role="combobox"
//         aria-controls={autocompleteResultsId}
//       />
//       {suggestions.status === 'OK' && (
//         <ul
//           id={autocompleteResultsId}
//           className="focus:bg-yellow-100"
//           role="listbox"
//           aria-label="Suggestions"
//         >
//           {renderSuggestions()}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default PlacesAutocomplete;

import { useState, useEffect } from 'react';

const PlacesAutocomplete = ({ onAddressSelect }) => {
  const autocompleteResultsId = `places-autocomplete-${Math.random().toString(36).substr(2, 9)}`;
  const [ready, setReady] = useState(false);
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState({ status: '', data: [] });
  let timeoutId;

  const fetchSuggestions = async (searchTerm) => {
    // Implement Google Places API request here
    // For demonstration purposes, I'll use a mock response
    const response = await fetch(`https://example.com/places-api/${searchTerm}`);
    const data = await response.json();
    setSuggestions({ status: 'OK', data });
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setValue(searchTerm);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fetchSuggestions(searchTerm);
    }, 300);
  };

  const clearSuggestions = () => {
    setSuggestions({ status: '', data: [] });
  };

  useEffect(() => {
    // Assuming the component is ready after initial render
    setReady(true);

    const requestOptions = {
      componentRestrictions: { country: 'gr' },
    };

    const debounce = 300;

    return () => {
      clearSuggestions();
      clearTimeout(timeoutId); // Clear the timeout on cleanup
    };
  }, []);

  const renderSuggestions = () => {
    return suggestions.data.map((suggestion) => {
      const { place_id, structured_formatting: { main_text, secondary_text }, description } = suggestion;
      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
          className="focus:bg-orange-300 py-1 px-2 hover:bg-gray-300 border-b border-gray-500"
          role="option"
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div className="p-3">
      <input
        value={value}
        className="w-full h-full py-3 px-4 border-gray-400 border rounded-md focus:ring-3 outline-none focus:ring focus:ring-blue-300"
        disabled={!ready}
        onChange={handleInputChange}
        placeholder="Search address..."
        role="combobox"
        aria-controls={autocompleteResultsId}
      />
      {suggestions.status === 'OK' && (
        <ul
          id={autocompleteResultsId}
          className="focus:bg-yellow-100"
          role="listbox"
          aria-label="Suggestions"
        >
          {renderSuggestions()}
        </ul>
      )}
    </div>
  );
};

export default PlacesAutocomplete;