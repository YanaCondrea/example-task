import apiInstance from '../services/api';

export async function getProducts() {
  const res = await apiInstance.get('/products');
  return res.data.products;
}
