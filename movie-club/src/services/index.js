// comments table 
export const baseURL1 = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/comments`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};


// movie info table 

export const baseURL2 = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/movies`;
export const config2 = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};
