import { useState } from 'react';
import './App.scss';
import productsFromServer from './api/productsFromServer.json';
import commentsFromServer from './api/comments.json';
import { List } from './components/List';
import { NewProduct } from './components/NewProduct';

export const App = () => {
  const [products, setProducts] = useState([...productsFromServer]);
  const [comments, setComments] = useState([...commentsFromServer]);
  const [hideShowForm, setHideShowForm] = useState(false);

  const addProduct = (product) => {
    const tempId =  Date.now();

    setProducts((current) => [...current, {...product, id: tempId}]);
    setComments((current) => [...current, { 
      "productId": tempId,
      "description": product.comment,
      "date": new Date().toTimeString().slice(0, 5) 
        + ' ' + new Date().toLocaleDateString().slice(2, 4) 
        + '.' + new Date().toLocaleDateString().slice(0, 1)
        + '.' + new Date().toLocaleDateString().slice(-4),
    }]);
  };

  const deleteProduct = (id) => {
    console.log(id);
    const productsTemp = [...products.filter(p => p.id !== id)];
    const commentsTemp = [...comments.filter(k => k.productId !== id)];
    setProducts([...productsTemp]);
    setComments([...commentsTemp]); 
  }

  const edit = (e, parametr, b) => {
    if (parametr !== 'description') {
      const temp = [...products]
      temp.map(product => product[parametr] = (product.id === e.productId) ? b : product[parametr])
      setProducts(temp)
    } else {
      const temp = [...comments]
      temp.map(comment => comment[parametr] = (comment.productId === e.productId) ? b : comment[parametr])
      setComments(temp)
    }

  }

  return (
    <>
      <div>
        <button 
          className='button is-small button-custom'
          onClick={() => setHideShowForm(!hideShowForm)}
        >
          {!hideShowForm ? 'START ADDING' : 'DONE'}
        </button>
      </div>
      <div className={hideShowForm ? "page" : "page-x"}>
        <div className="page-content">
          <List
            products={products}
            comments={comments}
            delete={deleteProduct}
            edit={edit} />
        </div>
        {hideShowForm && (<div className="sidebar">
          <NewProduct addNew={addProduct} comments={comments} />
        </div>)}
      </div>
    </>
  );
};
