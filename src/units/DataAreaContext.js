import React from "react";

const DataAreaContext = React.createContext({
    filteredUsers: [],
    headings: [
      { name: 'Image', width: '20%' },
      { name: 'Name', width: '20%' },
      { name: 'Phone', width: '22%' },
      { name: 'Email', width: '22%' },
      { name: 'dob', width: '20%' },
    ],
  });

export default DataAreaContext;