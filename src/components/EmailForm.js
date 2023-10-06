import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import "../App.css";

const SERVICE_ID = "service_7w25izl";
const TEMPLATE_ID = "template_32wl565";
const PUBLIC_KEY = "MvX13eQq96VDlyjId";
const EmailForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "costum-confirm-button",
          },
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "costum-confirm-button",
          },
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="EmailForm">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Email Me"
          name="from_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label=""
          name="from_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label=""
          name="message"
          placeholder="Message…"
          required
        />
        <div class="button-container">
          <Button type="submit" color="green">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default EmailForm;
