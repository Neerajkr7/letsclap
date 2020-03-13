import React, { useState } from 'react'
import Container from '../Layouts/Container'
import UserDP from '../Assets/Images/man.svg'

import './indexStyle.css'
const Index = () => {
  const [formvalues, setFormValues] = useState({})
  const handleFormChange = (name, value) => {
    setFormValues({ ...formvalues, [name]: value })
  }
  const handleFormSubmit = () => {
    console.log({ formvalues })
  }
  return (
    <Container>
      <div className="row">
        <div className="col-md-12">
          <div className="king-nav">
            <div className="b-logo">
              Logo
         </div>
          </div>
        </div>
      </div>
      <div className="parent-container">
        <div className="row">
          <div className="col-md-12">
            <div className="round">
              <img src={UserDP} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="clap-one-wrapper">
              <label htmlFor="" className="clap-label">Let's Clap for</label>
              <input
                type="text"
                className="clap-input"
                placeholder="Tomy"
                name="personName"
                autoFocus
                onChange={({ target: { name, value } }) => handleFormChange(name, value)}
              />
            </div>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="clap-reason"
              placeholder="For his new title"
              name="clapReason"
              onChange={({ target: { name, value } }) => handleFormChange(name, value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 col-sm-12">
            <input
              className="clap-submit"
              type="submit"
              value="Let's Celebrate"
              onClick={() => handleFormSubmit()} />
          </div>
        </div>
      </div>
    </Container>
  )
}


export default Index