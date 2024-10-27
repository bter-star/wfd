import React, { useCallback, useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

/* const stripePromise = loadStripe(
  "pk_test_51QCDLsJtb2lH8M2FX3Fq7fe22gTNfRKBLOwVGi6ghOR6wO12vSWAPG0YgewbwUn9sCprW0QQa3IkA0yBOHZFmmUl00OSoXWgFC"
);

const CheckoutForm = () => {
  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    try {
      const res = await fetch(
        "https://vobp147hvg.execute-api.us-east-1.amazonaws.com/stripe_payment/create-checkout-session",
        {
          method: "POST",
        }
      );
      const data = await res.json();
      return data.clientSecret;
    } catch (err) {
      return console.log(err);
    }
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}; */

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    );
  }

  return null;
};

const Donate = () => {
  return (
    <>
      {/* <TitleSection asset={"/group_photo.jpg"} title="DONATE" /> */}
      {/* <CheckoutForm /> */}
    </>
  );
};

export default Donate;
