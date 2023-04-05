import React, { Fragment, useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import MetaData from "../../common/Metadata";
import Button from "@mui/material/Button";

const Payment = () => {
  const [totalPrice, setTotalPrice] = useState(10);

  return (
    <>
      <MetaData title="Payment" />
      <Typography>Card Info</Typography>
      <CreditCardIcon />
      <CardNumberElement className="paymentInput" />
      <EventIcon />
      <CardExpiryElement className="paymentInput" />
      <VpnKeyIcon />
      <CardCvcElement className="paymentInput" />
      <Button size="small" varient="outlined">{`Pay - ₹${totalPrice}`}</Button>
    </>
  );
};

export default Payment;
