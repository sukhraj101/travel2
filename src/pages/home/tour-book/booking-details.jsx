import React from 'react'
import { Accordion, Card } from 'react-bootstrap';

export default function BookingDetails() {
  return (
    <Accordion defaultActiveKey="0" className="booking-accordion">
      <Card className="border-top-0 border-left-0 border-right-0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="card-btn font-size-17 font-weight-bold text-dark">
            Booking Detail
            <span className="card-btn-arrow font-size-14 text-dark">
              <i className="fas fa-chevron-down"></i>
            </span>
          </Accordion.Header>
          <Accordion.Body className="px-4 py-4">
            <ul className="list-unstyled font-size-1 mb-0 font-size-16">
              <li className="d-flex justify-content-between py-2">
                <span className="font-weight-medium">Date <br /> 22/09/2020</span>
                <span className="text-secondary"><a href="#" className="text-underline">Edit</a></span>
              </li>
              <li className="d-flex justify-content-between py-2">
                <span className="font-weight-medium">Duration</span>
                <span className="text-secondary">26 days</span>
              </li>
              <li className="d-flex justify-content-between py-2">
                <span className="font-weight-medium">Tour Type</span>
                <span className="text-secondary">Daily Activity</span>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Card>

      <Card className="border-top-0 border-left-0 border-right-0">
        <Accordion.Item eventKey="1">
          <Accordion.Header className="card-btn font-size-17 font-weight-bold text-dark">
            Extra
            <span className="card-btn-arrow font-size-14 text-dark">
              <i className="fas fa-chevron-down"></i>
            </span>
          </Accordion.Header>
          <Accordion.Body className="px-4 py-4">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
          </Accordion.Body>
        </Accordion.Item>
      </Card>

      <Card className="border-top-0 border-left-0 border-right-0">
        <Accordion.Item eventKey="2">
          <Accordion.Header className="card-btn font-size-17 font-weight-bold text-dark">
            Coupon Code
            <span className="card-btn-arrow font-size-14 text-dark">
              <i className="fas fa-chevron-down"></i>
            </span>
          </Accordion.Header>
          <Accordion.Body className="px-4 py-4">
            <form className="js-focus-state">
              <label className="sr-only" htmlFor="CouponCodeExample1">Coupon Code</label>
              <div className="input-group">
                <input type="number" className="form-control" name="email" id="CouponCodeExample1" placeholder="" aria-label="" aria-describedby="CouponCodeExample2" required />
                <div className="input-group-append">
                  <button className="btn btn-primary py-2" type="button" id="CouponCodeExample2">Apply</button>
                </div>
              </div>
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Card>

      <Card className="border-top-0 border-left-0 border-right-0">
        <Accordion.Item eventKey="3">
          <Accordion.Header className="card-btn font-size-17 font-weight-bold text-dark">
            Payment
            <span className="card-btn-arrow font-size-14 text-dark">
              <i className="fas fa-chevron-down"></i>
            </span>
          </Accordion.Header>
          <Accordion.Body className="px-4 py-4">
            <ul className="list-unstyled font-size-1 mb-0 font-size-16">
              <li className="d-flex justify-content-between py-2">
                <span className="font-weight-medium">Adult Price</span>
                <span className="text-secondary">€580,00</span>
              </li>
              <li className="d-flex justify-content-between py-2">
                <span className="font-weight-medium">Children Price</span>
                <span className="text-secondary">€0,00</span>
              </li>
              <li className="d-flex justify-content-between py-2">
                <span className="font-weight-medium">Infant Price</span>
                <span className="text-secondary">€0,00</span>
              </li>
              <li className="d-flex justify-content-between py-2">
                <span className="font-weight-medium">Subtotal</span>
                <span className="text-secondary">€580,00</span>
              </li>
              <li className="d-flex justify-content-between py-2">
                <span className="font-weight-medium">Tax</span>
                <span className="text-secondary">0 %</span>
              </li>
              <li className="d-flex justify-content-between py-2 font-size-17 font-weight-bold">
                <span className="font-weight-bold">Pay Amount</span>
                <span>€580,00</span>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Card>
    </Accordion>
  )
}
