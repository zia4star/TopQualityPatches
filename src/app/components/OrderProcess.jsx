import { FaFirstOrder } from "react-icons/fa";

export default function OrderProcess() {
    return (
      <div className="order_proces bg-lgrey items-center text-center p-5">


        <h2 className="text-primary ">The Order Process</h2>
        <p>One Click to Elevate Your Style – Order Now!</p>

        <div className=" row  ">

          <div className=" arrow_icon px-4 col-sm-12 col-md-6 col-lg-3">
            <div className=" d-flex flex-column align-items-center justify-content-center h-100 text-center">
              <img
              src='./placeOrder.png'
              width={80}
              height={80}
              />
              <h4>Order Placement</h4>
              <p>Upload your designs, logos, or even a rough sketch. Choose your product, colors, size, and style to bring your ideas to life</p>
            </div>
          </div>

          <div className=" arrow_icon px-4 col-sm-12 col-md-6 col-lg-3">
            <div className=" d-flex flex-column align-items-center justify-content-center h-100 text-center">
              <img
              src='./approved.png'
              width={80}
              height={80}
              />
              <h4>Approve Your Proof</h4>
              <p>Collaboration is key. Our designers will create a digital proof. Tell us what you think, and we’ll work together until you love it.</p>
            </div>
          </div>

          <div className=" arrow_icon px-4 col-sm-12 col-md-6 col-lg-3">
            <div className=" d-flex flex-column align-items-center justify-content-center h-100 text-center">
              <img
              src='./wait.png'
              width={80}
              height={80}
              />
              <h4>The Wait is Almost Over
              </h4>
              <p>With your approval in hand, our production team will meticulously bring your custom</p>
            </div>
          </div>

          <div className="px-5 col-sm-12 col-md-6 col-lg-3">
            <div className=" d-flex flex-column align-items-center justify-content-center h-100 text-center">
              <img
              src='./unbox.png'
              width={80}
              height={80}
              />
              <h4>Unbox and Enjoy
              </h4>
              <p>With your approval in hand, our production team will meticulously bring your custom</p>
            </div>
          </div>

        </div>
      </div>
    )
  }