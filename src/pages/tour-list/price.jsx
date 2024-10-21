import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { Form } from 'react-bootstrap';
import imgbars from "./../../../public/assets/img/price-bars.png";

const PriceRangeSlider = () => {
  const [values, setValues] = useState([100, 1600]);
  const MIN = 0;
  const MAX = 2000;

  return (
    <Form>
      <Form.Group>
        <p style={{
            textAlign: 'center'
          }}>Your budget (per night)</p>
          <img src={imgbars} alt="Your budget" className='d-block w-100' style={{
            marginBottom: '-15px'
          }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            margin: '0'
          }}
        >
          <Range
            values={values}
            step={1}
            min={MIN}
            max={MAX}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: '36px',
                  display: 'flex',
                  width: '100%'
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: '5px',
                    width: '100%',
                    borderRadius: '4px',
                    background: getTrackBackground({
                      values,
                      colors: ['#ccc', '#0d6efd', '#ccc'],
                      min: MIN,
                      max: MAX
                    }),
                    alignSelf: 'center'
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ index, props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '24px',
                  width: '24px',
                  borderRadius: '12px',
                  backgroundColor: '#FFF',
                  border: '1px solid #0d6efd'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '12px',
                    color: '#000'
                  }}
                >
                </div>
              </div>
            )}
          />
        </div>
        <Form.Label className='mb-5 text-center d-block'>Price Range: ${values[0]} - ${values[1]}</Form.Label>
      </Form.Group>
    </Form>
  );
};

export default PriceRangeSlider;
