import './styles/normalize.css';
import './styles/index.css';
import { getProducts } from './requests/products';

// console.log(await getProducts());
getProducts().then(res => console.log(res));
