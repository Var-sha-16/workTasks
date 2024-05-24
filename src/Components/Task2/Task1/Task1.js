
import React, { useEffect, useState } from 'react';

const Task1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (

    <table border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
            </tr>

        </thead>
        <tbody>
            {products.map(product=>(
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.body}</td>
                </tr>
            ))}
        </tbody>
    </table>
  );
};

export default Task1;
