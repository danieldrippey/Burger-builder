import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
}

const purchaseInit = (state, action) => {
  return updateObject(state, {purchased:false});
};

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, {loading: true});
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, {id: action.orderId});
  return updateObject(state, {
    loading: false,
    orders: state.orders.concat(newOrder),
    purchased: true
  });
};

const purchaseBurgerFail = (state, action) => {
  return updateObject(state, {loading: false}); 
};

const fetchOrderStart = (state, action) => {
      return updateObject(state, {loading: true});
}

const fetchOrderSuccess = (state, action) => {
  return updateObject(state, {orders: action.orders, loading: false});
};

const fetchOrdersFail = (state, action) => {
  return updateObject(state, {loading: false});
};

const deleteOrderFail = (state, action) => {
  return updateObject(state, {loading: false})
}

const deleteOrderStart = (state, action) => {
  return updateObject(state, {loading: true})
}

const deleteOrderSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    orders: state.orders.filter(order => order.id !== action.id)
  });
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrderStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrderSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    case actionTypes.DELETE_ORDER_START:
      return deleteOrderStart(state, action);
    case actionTypes.DELETE_ORDER_FAIL:
      return deleteOrderFail(state, action);
    case actionTypes.DELETE_ORDER_SUCCESS:
      return deleteOrderSuccess(state, action);  
    default: 
      return state;  
  };
 };

 export default reducer;
