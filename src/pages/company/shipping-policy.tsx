import Layout from "@/components/Layout";
import React from "react";

const ShippingPolicy = () => {
  return (
    <Layout title="Shipping Policy">
      <div className="flex text-center justify-center items-center m-20">
        <div className=" max-w-2xl">
          <h1 className="text-3xl font-bold mb-10 flex justify-center">
            Shipping Policy
          </h1>
          <h3>
            <p>
              Thank you for shopping with us! We offer shipping services to
              customers located in Georgia and select international countries.
              Below are the details of our shipping policy.
            </p>
            <br />
            <p>
              <span className="font-bold">Processing Time</span>: All orders are
              processed within 1-2 business days after they are placed. Orders
              are not shipped or delivered on weekends or holidays. If we are
              experiencing a high volume of orders, shipments may be delayed by
              a few days. Please allow additional days in transit for delivery.
              Shipping Rates & Delivery Estimates: Shipping charges for your
              order will be calculated and displayed at checkout based on the
              weight of your order and your shipping location. We offer both
              standard and express shipping options, with delivery estimates
              ranging from 2-7 business days depending on your location.
            </p>
            <br />
            <p>
              <span className="font-bold">International Shipping:</span>
              We offer international shipping to select countries. Please note
              that international shipments may be subject to import duties and
              taxes, which are the responsibility of the customer. We recommend
              that you contact your local customs office for more information
              before placing your order. Order Tracking: Once your order has
              shipped, you will receive a shipping confirmation email with a
              tracking number that you can use to track your package.
            </p>
            <br />
            <p>
              <span className="font-bold">Shipping Carriers:</span>
              We work with reputable shipping carriers to ensure that your
              package is delivered safely and on time. Our shipping carriers
              include [insert names of shipping carriers]. Shipping
              Restrictions: We currently do not offer shipping to P.O. boxes or
              APO/FPO addresses. Additionally, we reserve the right to refuse or
              cancel any orders that we believe may be fraudulent or in
              violation of our terms of service.
            </p>
            <br />
            <p>
              If you have any questions or concerns about our shipping policy,
              please do not hesitate to contact us. Please note that this is
              just an example and you may need to modify the text to fit your
              specific business needs and shipping arrangements.
            </p>
            <br />
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingPolicy;
