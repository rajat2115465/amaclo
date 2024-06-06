import React, { useState } from 'react';

function NameList() {
  const [names] = useState(['John', 'Paul', 'George', 'Ringo', 'Jane', 'Jill', 'Jack']);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNames = names.filter(name => name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search names" 
        value={searchTerm}
        onChange={handleSearchChange} 
      />
      {searchTerm && (<ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default NameList;
