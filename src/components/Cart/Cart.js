import React, { useContext, useState, useRef } from 'react';
import { CartContext } from '../../cartContext/cartContext';
import CartContainer from '../CartContainer/CartContainer';
import { NavLink, Link } from 'react-router-dom';
import { sendOrder, updateOrder } from '../../firebase';

const Cart = () => {
  
  const {cart,cartCount,CartArray,orderArray, setOrderArray,donation,TotalDonation,calculateTotalDonation} = useContext(CartContext);

  const [orderId, setOrderId] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userEmail2, setUserEmail2] = useState();
  const [userPhone, setUserPhone] = useState();
  const [formMessage, setFormMessage] = useState();
  const [showForm, setShowForm] = useState(true);
  const ref = useRef(null);


  const onChangeName = (e) => {
    setUserName(e.target.value);
  }
  const onChangeEmail = (e) => {
    setUserEmail(e.target.value);
  }
  const onChangeEmail2 = (e) => {
    setUserEmail2(e.target.value);
  }
  const onChangePhone = (e) => {
    setUserPhone(e.target.value);
  }

  // Show input error message
  function showError(message) {
    setFormMessage(message);
  }

  // Show success outline
  function showSuccess() {
    setFormMessage('Formulario enviado');
    setShowForm(false);
  }

  const submitOrder = (e) => {
    e.preventDefault();
    let check1= checkRequired(userPhone, 'Teléfono');
    let check2= checkRequiredEmail(userEmail, 'Email', ".com");
    let check3=checkRequiredEmail2(userEmail, userEmail2, 'Repetir email');
    let check4= checkRequired(userName, 'Nombre y apellido');
    const order = { userName, userEmail, userPhone, TotalDonation, CartArray };
     if(check1== true && check2== true && check3== true && check4 == true) {
    sendOrder(order)
    showSuccess('Formulario enviado')
    const _orderArray = orderArray.concat(order);
    setOrderArray(_orderArray)
    }
    updateOrder(order.id, { userName:userName, userEmail: userEmail, userPhone:userPhone})
  }

  const checkRequired = (input, label) => {
        if (input == undefined || input == ' ' || input == '') {
            showError(`${(label)} es inválido. Error al enviar`);
            return false;
        } else if (input != '') {
          return true;
        }
    }

    const checkRequiredEmail = (input, label, char) => {        
          if (input == undefined) {
            showError(`${(label)} es inválido. Error al enviar`);
            return false;
          } else if ((input.includes(char) == false) && (input.includes('@') == false)) {
              showError(`${(label)} es inválido, debe contener @ y .com. Error al enviar`);
              return false;
          } else if (input != '') {
            return true;
          }
      }

      const checkRequiredEmail2 = (input1, input2, label) => {        
        if (input1 !== input2) {
          showError(`${(label)}. No son iguales.`);
          return false;
        } else if (input1 == input2) {
          return true;
        }
    }

  calculateTotalDonation();


  if(cartCount === 0) {
    return (
      <div className='container'>
     <NavLink to={"/category/"}
              className={"breadcrumb-link"}>
              Volver a todos los rescatados
      </NavLink>
      <h3 className='mt-5'>No hay donaciones en el carrito</h3>
      </div>
    )
  }

  return (
    <div className='container'>
     <NavLink to={"/category/"}
              className={"breadcrumb-link"}>
              Volver a todos los rescatados
      </NavLink>

  
    <h3 className='mt-5'>{cartCount} donaciones añadidas</h3>
     
    <CartContainer items={CartArray} key={CartArray.id}/> 
    <h1 className='text-right'>Total: ${TotalDonation}</h1>
    
    { showForm ? (
    <div className='mt-5 paymentsection container-fluid pt-2 pb-1'>
    <h3 className='text-right'>Para pagar enviar el formulario </h3>
    <h6>Recibirás un correo con instrucciones.</h6>
        <form id="formpayment">
          <div class="form-group mt-3">
            <label for="exampleinputName">Nombre y apellido*</label>
            <input required type="name" class="form-control" id="exampleinputName" placeholder="Ejemplo: Juan Pérez" onChange={onChangeName}/>
          </div>
          <div class="form-group mt-3">
            <label for="exampleInputEmail">Email*</label>
            <input required type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Ejemplo: juan@gmail.com" onChange={onChangeEmail}/>
          </div>
          <div class="form-group mt-3">
            <label for="exampleInputEmail2">Repetir email*</label>
            <input required type="email2" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp2" placeholder="Ejemplo: juan@gmail.com" onChange={onChangeEmail2}/>
          </div>
          <div class="form-group mt-3">
            <label for="exampleInputPhone">Teléfono</label>
            <input required type="number" maxlength="13"  min="0"  max="9999999999999" className="form-control" id="exampleInputPhone" placeholder="Ej.5491123456789" onChange={onChangePhone}/>
          </div>
         
          <button to={''} onClick={submitOrder} type="submit" class="btn btn-primary mt-3">Submit</button>
        </form>
        <h6 className='mt-2 mb-5'>{formMessage}</h6>
    </div>
    ) : (
      <>
      <h3 className='mt-5 mb-1 alert-success'>{formMessage} </h3>
      <h6 className='mt-2 mb-5'>Recibirás un correo con instrucciones.</h6> 
      </>
    )}


    </div>
  )
}

export default Cart;
