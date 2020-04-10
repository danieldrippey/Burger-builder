import React, { useEffect } from "react";
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import Order from './Order/Order';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = props => {
  const { onFetchOrders, token, userId } = props;
    useEffect(() => {
        onFetchOrders(token, userId);
    }, [onFetchOrders, token, userId]);
  
  let orders = <Spinner />
  if (!props.loading) {
    orders = props.orders.map(order => (
      <Order 
        orderId={order.id}
        key={order.id}
        ingredients={order.ingredients} 
        price={order.price}
        clicked={() => props.onDeleteOrder(props.token, order.id)}
      />
  ))}
    
  return (
    <div>
      {orders}
    </div> 
  )
};

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId)),
    onDeleteOrder: (token, id) => dispatch(actions.deleteOrder(token, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
