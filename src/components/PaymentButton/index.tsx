import React from "react";
import * as S from "./styles";
import { ReactSVG } from "react-svg";
import { PaymentButtonProps } from "./types";

const PaymentButton = ({ payment_link_id }: PaymentButtonProps) => {
  const openPaymentWindow = () => {
    var windowFeatures = "height=600,width=600";
    var targetURL = `http://localhost:3000/pay?id=${payment_link_id}&externalPaymentButtonSource=true`;

    window.open(targetURL, "_blank", windowFeatures);
  };

  return (
    <S.PaymentButtonContainer onClick={() => openPaymentWindow()}>
      <ReactSVG src="/assets/payabl-transparent.svg" />
      <S.BodyText>Pay with Payabl.cc</S.BodyText>
    </S.PaymentButtonContainer>
  );
};

export default PaymentButton;
