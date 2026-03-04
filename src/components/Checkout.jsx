import React, {useState} from 'react'
import Layout from "./common/Layout";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ProductImgOne from '../assets/image/Mens/five.jpg'
import ProductImgTwo from '../assets/image/Mens/six.jpg'
import ProductImgThree from '../assets/image/Mens/seven.jpg'
import { Rating } from 'react-simple-star-rating'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Checkout = () => {
    const[paymentMethod, setPaymentMethod] = useState('cod');
    const handlePaymentMethod =(e) =>{
        setPaymentMethod(e.target.value)
    }
  return (
    <Layout>
        <div className='container pb-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='col-md-12'>
                     <nav aria-label="breadcrumb" className='py-4'>
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                    </ol>
                </nav>
             </div>
                    
                </div>

            </div>
            <div className='row'>
                <div className='col-md-7'>
                    <h3 className='border-bottom pb-3'>Billing Details</h3>
                        <form action="">
                            <div className='row pt-3'>
                                <div className='col-md-6'>
                                    <div className='mb-3'> 
                                        <input type="text" className='form-control' placeholder='Name' />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                   <div className='mb-3'> 
                                        <input type="text" className='form-control' placeholder='Email' />
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <textarea className='form-control' placeholder='Adress'></textarea>

                                </div>

                                <div className='col-md-6'>
                                    <div className='mb-3'> 
                                        <input type="text" className='form-control' placeholder='City' />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                   <div className='mb-3'> 
                                        <input type="text" className='form-control' placeholder='State' />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='mb-3'> 
                                        <input type="text" className='form-control' placeholder='zip' />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                   <div className='mb-3'> 
                                        <input type="text" className='form-control' placeholder='Mobile' />
                                    </div>
                                </div>

                            </div>
                        </form>
                  </div>
                  <div className='col-md-5'>
                    <h3 className='border-bottom pb-3'><strong>Items</strong></h3>
                      <table className='table'>
                        <tbody>
                            <tr>
                            <td>
                                <img src={ProductImgOne} width={80} alt=""/>
                            </td>
                            <td width={600}>
                                <h4> Dummy Product Titles</h4>
                                <div className='d-flex align-items-center pt-3'>
                                    <span>$10</span>
                                    <div className='ps-3'>
                                        <button className='btn btn-size'>S</button>
                                    </div>
                                    <div className='ps-3'>X 1</div>
                                </div>
                            </td>
                            </tr>

                            <tr>
                            <td>
                                <img src={ProductImgOne} width={80} alt=""/>
                            </td>
                            <td width={600}>
                                <h4> Dummy Product Titles</h4>
                                <div className='d-flex align-items-center pt-3'>
                                    <span>$10</span>
                                    <div className='ps-3'>
                                        <button className='btn btn-size'>S</button>
                                    </div>
                                    <div className='ps-3'>X 1</div>
                                </div>
                            </td>
                            </tr>
                        </tbody>

                    </table>

                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='d-flex justify-content-between border-bottom pb-2'>
                                <div>Subtotal</div>
                                <div>$20</div>
                            </div>

                            <div className='d-flex justify-content-between border-bottom py-2'>
                                <div>Shipping</div>
                                <div>$5</div>
                            </div>

                            <div className='d-flex justify-content-between border-bottom py-2'>
                                <div><strong>Grand Total</strong></div>
                                <div>$25</div>
                            </div>
                        </div>

                    </div>

                    <h3 className='border-bottom pt-4 pb-3'><strong>Payment Method</strong></h3>

                    <div>
                        <input type="radio" onClick={handlePaymentMethod} checked={paymentMethod=='stripe'} value={'stripe'}/>
                        <label html="" className='form-label ps-2'>Stripe</label>
                        <input type="radio" onClick={handlePaymentMethod} checked={paymentMethod=='cod'} value={'cod'} className='ms-3'/>
                        <label html="" className='form-label ps-2'>COD</label>
                    </div>
                    <div className='d-flex py-3'>
                                <button className='btn btn-primary'>Pay Now</button>
                            </div>

                  </div>
                
            </div>

        </div>

    </Layout>
  )
}

export default Checkout