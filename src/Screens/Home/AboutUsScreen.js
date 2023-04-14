import React from 'react'
import Header from '../../Components/Header'

const AboutUsScreen = (props) => {
  return (
    <div className="Screen">
      <Header title="About Us"/>
      <div className="info">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12" Style="padding : 25px">
            <h5 className="text-center">Vision</h5>
            <p>
              To be an independent, innovative, honest and sustainable company in which customers are able to choose from a wide range of dairy products at reasonable prices.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12" Style="padding : 25px">
            <h5 className="text-center">Mission</h5>
            <p>To satisfy our customers with a unique shopping experience offering quality products, variety of categories, fair price and best service,</p>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12" Style="padding : 25px">
            <h5 className="text-center">Serving At</h5>
            <ul>
            <table Style="width: 100%">
                <tr>
                  <td><li></li></td>
                  <td>Sangli</td>
                  <td> Shivaji nagar, College Corner </td>
                  <td className="text-center"> 10:00 to 19:00 Hrs</td>
                </tr>

                <tr>
                  <td><li></li></td>
                  <td>Kolhapur</td>
                  <td>Rankala Tower, Kolhapur</td>
                  <td className="text-center"> 09:00 to 23:00 Hrs</td>
                </tr>

                <tr>
                  <td><li></li></td>
                  <td>Pune</td>
                  <td> Gokhale chowk, Magarpatta </td>
                  <td className="text-center"> 09:00 to 22:00 Hrs</td>
                </tr>
              </table>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12" Style="padding : 25px">
            <h5 className="text-center">Values</h5>
            <ul>
              <li>To listen to the customers,the employees,to provide products,information</li> and 
              <li>to be responsible through commitment, and respect.</li>
            </ul>
          </div>
          <hr/>

        </div>
      </div>
    </div>
  )
}

export default AboutUsScreen
