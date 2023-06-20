import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PaymentButton from "..";
import '@testing-library/jest-dom'

describe("PaymentButton", () => {
  test("renders button text", () => {
    const { getByText } = render(<PaymentButton payment_link_id="123" />);
    const buttonText = getByText("Pay with Payabl.cc");
    expect(buttonText).toBeInTheDocument();
  });

  test("opens payment window on button click", () => {
    const { getByText } = render(<PaymentButton payment_link_id="123" />);
    const paymentButton = getByText("Pay with Payabl.cc");
    window.open = jest.fn(); // Mock the window.open method

    fireEvent.click(paymentButton);
    expect(window.open).toHaveBeenCalledWith(
      "https://payabl.cc/pay?id=123&externalPaymentButtonSource=true",
      "_blank",
      "height=600,width=600"
    );
  });
});
