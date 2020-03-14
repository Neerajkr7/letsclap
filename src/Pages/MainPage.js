import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Container from '../Layouts/Container'
import { addEvent } from '../Redux/Actions/events'
import UserDP from '../Assets/Images/man.svg'

import './indexStyle.css'
const Index = () => {
  const [formvalues, setFormValues] = useState({})
  const dispatch = useDispatch()
  const userState = useSelector(({ user }) => user)
  const history = useHistory()
  const handleFormChange = (name, value) => {
    setFormValues({ ...formvalues, [name]: value })
  }
  const handleFormSubmit = () => {
    dispatch(addEvent(formvalues))
      .then(res => {
        history.push(`/${res._id}`)
      })
      .catch(err => console.log(err))
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
              name="resonForClap"
              onChange={({ target: { name, value } }) => handleFormChange(name, value)}
            />
          </div>
        </div>
        <div className="row">

          <div className="col-md-10 col-sm-12">
            <div
              className={formvalues.personName && formvalues.resonForClap ?
                'clap-submit' : 'clap-submit clap-submit-disabled'}
              type="submit"
              disabled={!formvalues.personName || !formvalues.resonForClap}
              onClick={() => handleFormSubmit()} >
              {userState.loader ?
                <div className="spinner-border text-light" role="status">
                  <span className="sr-only">Loading...</span>
                </div> : 'Lets Celebrate'}
            </div>
          </div>
        </div>
        {/* <SocialIcons /> */}
      </div>
    </Container>
  )
}


export default Index