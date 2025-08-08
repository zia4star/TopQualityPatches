'use client'

import { useState } from 'react'
import { Button, Card, CardHeader, Col, Form, InputGroup, Row } from 'react-bootstrap'

export const metadata = {
  title: 'Request a Quote | Top Quality Patches',
  description: 'Get a free quote for your embroidery digitizing or vector design project.',
}

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    width: '',
    height: '',
    instructions:'',
    Quantity:'',
    service: '',
    service1: '',
    service2: '',
    Budget:'',
    artwork: null
  })

//   const [submitted, setSubmitted] = useState(false)
  const [file, setFile] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      artwork: e.target.files[0]
    }))
  }

//   const handleSubmit = (e) => {
//     e.preventDefault()
    // Here you would typically send the form data to your backend
//     console.log('Form submitted:', formData)
//     setSubmitted(true)
//   }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email) {
      alert('Please fill all fields and upload a file.')
      return
    }

    const waMessage = `Hello! I’d like to place an order:\n
    Name: ${formData.name}
    Email: ${formData.email}
    Contact: ${formData.phone}
    Width: ${formData.width}
    Height: ${formData.height}
    Service: ${formData.service}
    Service1: ${formData.service1}
    Service2: ${formData.service2}
    Budget: ${formData.Budget}
    Quantity: ${formData.Quantity}
    Instructions: ${formData.instructions}
    File: [attached separately]
    `
    const waURL = `https://wa.me/+923310230227?text=${encodeURIComponent(waMessage)}`
    window.open(waURL, '_blank')
    window.location.href = '/order/confirmation'
    setSubmitted(true)
  }

  return (
    <>
        <Card className="get_quote shadow">
              <h2 className=''>Get a Quote Now</h2>
            <Card.Body className=''>
          {submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Thank you!</strong>
              <span className="block sm:inline"> Your quote request has been submitted. We'll get back to you soon.</span>
            </div>
          ) : (
            <Form onSubmit={handleSubmit} className="">
                <Row className="mb-2">
                    <Form.Group as={Col}
                        // md="4"
                        
                    >
                        <Form.Control
                            placeholder='Enter your name'
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            // isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Control  
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email" />
                    </Form.Group>
                </Row>

                <Row className="mb-2">
                    <Form.Group as={Col} >
                    <Form.Control
                     id="width"
                     name="width"
                     required
                     value={formData.width}
                     onChange={handleChange}
                     type="number" 
                     placeholder="Width cm" />
                    </Form.Group>

                    <Form.Group as={Col} >
                    <Form.Control 
                     id="height"
                     name="height"
                     required
                     value={formData.height}
                     onChange={handleChange}
                     type="number" 
                     placeholder="Height cm" />
                    </Form.Group>
                </Row>

                <Row className="mb-2">
                    <Form.Group as={Col} >
                        <Form.Select 
                         id="service"
                         name="service"
                         required
                         value={formData.service}
                         onChange={handleChange}
                        //  defaultValue="Embroidered Patches"
                         >
                            <option value="Embroidered Patches">Embroidered Patches</option>
                            <option value="Sublimated Patches">Sublimated Patches</option>
                            <option value="Woven Patches">Woven Patches</option>
                            <option value="Leather Patches">Leather Patches</option>
                            <option value="PVC Patches/Keychains">PVC Patches/Keychains</option>
                            <option value="Enamel Pins">Enamel Pins</option>
                            <option value="Chenille Patches">Chenille Patches</option>

                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Select
                         id="service1"
                         name="service1"
                         required
                         value={formData.service1}
                         onChange={handleChange}
                        //  defaultValue="Iron on / Heat Seal"
                         >
                            <option value="Iron on / Heat Seal">Iron on / Heat Seal</option>
                            <option value="Hook and Loop (Both Hook &amp; Loop)">Hook and Loop (Both Hook &amp; Loop)</option>
                            <option value="Peel &amp; Stick / Self Adhesive">Peel &amp; Stick / Self Adhesive</option>
                            <option value="Sew on">Sew on</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group as={Col} >
                    <Form.Control 
                     id="quantity"
                     name="Quantity"
                     required
                     value={formData.Quantity}
                     onChange={handleChange}
                     type="number" 
                     placeholder="Quantity" />
                    </Form.Group>

                    <Form.Group as={Col} >
                    <Form.Control 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contact No." 
                    pattern="[0-9]{10,15}" 
                    required  />
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group>
                        <Form.Control 
                         as="textarea" 
                         id="instructions"
                         name="instructions"
                         required
                         value={formData.instructions}
                         onChange={handleChange}
                         type="text" 
                         rows={3} 
                         placeholder='Instructions' />
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group>
                        <Form.Select 
                         id="service2"
                         name="service2"
                         required
                         value={formData.service2}
                         onChange={handleChange}
                        //  defaultValue="How did you hear about us ?"
                        >
                            <option value="How did you hear about us ?">How did you hear about us ?</option>
                            <option value="Google">Google</option>
                            <option value="ASI">ASI</option>
                            <option value="SAGE">SAGE</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Referred by someone">Referred by someone</option>
                            <option value="Already Registered">Already Registered</option>
                            <option value="Don't Remember">Don't Remember</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className='mb-3'>
                    <Form.Group className="" as={Col} >
                        <Form.Control
                            id="Budget"
                            name="Budget"
                            value={formData.Budget}
                            onChange={handleChange}
                            type="number"
                            placeholder="Target your Budget for these?"
                            min="0"
                            step="0.01"
                            required
                        />
                    </Form.Group>
                </Row>

                <Row className='mb-3'>
                    <Form.Group>
                        <Form.Control
                            required
                            type="file"
                            id="artwork"
                            name="artwork"
                            onChange={handleFileChange}
                            accept=".jpg,.jpeg,.png,.pdf,.ai,.eps,.svg"
                        // isInvalid={!!errors.file}
                        />
                        {/* <Form.Control.Feedback type="invalid" tooltip>
                            {errors.file}
                        </Form.Control.Feedback> */}
                    </Form.Group>
                </Row>
                <div className=' text-center mt-2'>
                <Button type="submit">Submit Quote</Button>
                </div>
            </Form>
          )}
          </Card.Body>
        </Card>
    </>
  )
}