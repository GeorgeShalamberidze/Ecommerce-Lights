import Layout from "@/components/Layout";
import React from "react";

const ReturnPolicy = () => {
  return (
    <Layout title="Return Policy">
      <div className="flex justify-center items-center m-20">
        <div className=" max-w-2xl">
          <h1 className="text-3xl font-bold mb-10  text-center">
            Return Policy
          </h1>
          <h3>
            <p>
              We understand that projects change and we try to make returns as
              painless as possible. We can accept returns of any order within 60
              days of the order being placed. All products must be new and
              unused.
            </p>
            <br />
            <p>
              If you received a defective item please notify us immediately at
              gshalamberidze@lights.com. We will need you to send the item in
              for verification, so you will need to cover shipping to us and
              we'll cover shipping of the return item going back to you (if
              defective).
            </p>
            <br />
            <p>
              Please do an inventory of your order once it arrives. If anything
              is missing from your order please let us know within 30 days,
              after that we will consider the order received in full.
            </p>
            <br />
            <p>
              If you need to return an item, simply login to your account, view
              the order using the "Complete Orders" link under the My Account
              menu and click the Return Item(s) button. We'll notify you via
              e-mail of your refund once we've received and processed the
              returned item. Returns typically take 3-5 business days to process
              once we receive them.
            </p>
            <br />
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnPolicy;
