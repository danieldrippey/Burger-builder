import React from 'react';
import styles from './Order.module.css';
import DeleteButton from '../../../components/UI/DeleteButton/DeleteButton'

const order = (props) => {
  const ingredients = [];
  
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName, 
      amount: props.ingredients[ingredientName]})
  };

  const ingredientOutput = ingredients.map(ig => {
    return <span
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '5px'
      }} 
      key={ig.name}>{ig.name} ({ig.amount}) </span>;
  })

  return (
    <div className={styles.Order}>
      <p>Order Id: {props.orderId} </p>
      <p>Ingredients: {ingredientOutput} </p>
      <p>Price: <strong>{Number.parseFloat(props.price.toFixed(2))} USD</strong></p>
      <DeleteButton clicked={props.clicked} />
    </div>
  )
}

export default order;
