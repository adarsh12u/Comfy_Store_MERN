import { useSelector } from 'react-redux';
import { CartItemsList, Sectiontitle, CartTotals } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {
  const user = useSelector((state) => state.userstate.user);

  const {numberofitem} = useSelector((state) => state.cartstate);

  if (numberofitem === 0) {
    return <Sectiontitle text='Your cart is empty' />;
  }

  return (
    <>
      <Sectiontitle text='Shopping Cart' />
      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {user ? (
            <Link  className='btn btn-primary btn-block mt-8'>
              proceed to checkout
            </Link>
          ) : (
            <Link to='/login' className='btn btn-primary btn-block mt-8'>
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
