import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;


  export const getBooks = async (page,search) => {
    const api = `${apiUrl}/books/?page=${page}`;
    console.log(search)
    const params = {
      page,
      search,
      headers: {
        'Content-Type': 'application/json',
   //   'Authorization': `Bearer ${apiKey}`,
     }
    };
  
    try {
      const response = await axios.get(api, {params});
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  };

  export const getBook = async (id) => {
    const api = `${apiUrl}/books/${id}?format=json`;
    try {
      const response = await axios.get(api, {
        // headers: {
        //   'Authorization': `Bearer ${apiKey}`,
        // },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching book:', error);
      throw error;
    }
  };

  export const createBook = async (book) => {
    const api = `${apiUrl}/books/`;

    try {
      const response = await axios.post(api, book, {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${apiKey}`,
        },
      });
      return response.data;

    } catch (error) {
      console.error('Error creating book:', error);
      throw error;
    }
  };


  export const updateBook = async (id, book) => {
    const api = `${apiUrl}/books/${id}/`;
    try {
      const response = await axios.put(api, book, {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating book:', error);
      throw error;
    }
  };


  export const deleteBook = async (id) => {
    const api = `${apiUrl}/books/${id}/`;
    try {
      const response = await axios.delete(api, {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error deleting book:', error);
      throw error;
    }
  };