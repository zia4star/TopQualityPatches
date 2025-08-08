'use client'
import { useRef, useState } from "react";
// import "aos/dist/aos.css";
import TextField from "@mui/material/TextField";
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";


const ContactForm = ({successMsg,failedMsg})=>{

    // SMTP///
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] =useState(false)

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true)
    

    const SERVER_ID ='service_1fpezao'
    const TEMPLATE_ID ='template_v5vn0l9'
    const PUBLIC_KEY ='IHFEJOZCQSCrdc_5_'
      emailjs.sendForm(
        SERVER_ID, 
        TEMPLATE_ID, 
        form.current, 
        { publicKey: PUBLIC_KEY })
            .then(() => {
                setIsLoading(false);
                setSubmissionStatus("success");
                console.log('SUCCESS!');
            })

      .then(
        () => {
          setIsLoading(false)
          setSubmissionStatus("success");
          console.log('SUCCESS!');

          return
        },
        (error) => {
          setIsLoading(false)
          setSubmissionStatus("failed");
          console.log('FAILED...', error.text);
          return
        },
      );
  };
    return(
        <>
         {isLoading ? <div className="loader"></div> :(
                      <form ref={form} onSubmit={sendEmail}>
                      {/* <h1>{vri}</h1> */}
                        <Container>
                          <Row className="mb-2">
                            <Col>
                            <TextField
                              placeholder="Enter your name"
                              label="Name"
                              variant="outlined"
                              fullWidth
                              required
                              name="from_name"
                            />
                            </Col>
                          </Row>
                          <Row className="mb-2">
                            <Col>
                            <TextField
                              className="col-6"
                              type="email"
                              placeholder="Enter email"
                              label="Email"
                              variant="outlined"
                              fullWidth
                              required
                              name="user_email"
                            />
                            </Col>
                            <Col>
                            <TextField
                              className="col-6"
                              type="number"
                              placeholder="Enter phone number"
                              label="Phone"
                              variant="outlined"
                              fullWidth
                              name="user_phone"
                              required
                            />
                            </Col>
                          </Row>
                          <Row className="mb-2">
                            <Col>
                            <TextField
                              placeholder="Write subject"
                              label="Subject"
                              variant="outlined"
                              fullWidth
                              name="subject"
                              required
                            />
                            </Col>
                          </Row>
                          <Row className="mb-2">
                            <Col>
                            <TextField
                              label="Message"
                              multiline
                              rows={4}
                              placeholder="Type your message here"
                              variant="outlined"
                              fullWidth
                              required
                              name="message"
                            />
                            </Col>
                          </Row>
                          <Row className=" d-flex justify-content-center">
                            <button className="w-50 btn btn-primary" type="submint">
                              Send
                            </button>
                          </Row>
                          </Container>
                      </form>
                      )}
                      {submissionStatus === "success" && (
                        <div
                        className=" bg-success text-white w-75 p-2 m-auto shadow rounded mt-2 text-center " 
                        >
                         {successMsg}
                        </div>
                      )}
                      {submissionStatus === "failed" && (
                        <div 
                        className=" bg-danger text-white w-75 p-2 m-auto shadow rounded mt-2 text-center " 
                        >
                          {failedMsg}
                        </div>
                      )}
        </>
    )
}
export default ContactForm