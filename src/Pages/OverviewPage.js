import React from 'react'
import Container from '../Layouts/Container'
import { useParams } from 'react-router-dom'
import UserDP from '../Assets/Images/man.svg'
import Socials from '../Components/SocialLinks'

const OverViewPage = (props) => {
  const { id } = useParams()
  return (
    <Container>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div >
            <h3 className="overview-label"> Ta da !</h3>
          </div>
        </div>
        <div className="col-md-12 col-sm-12">
          <div className="round">
            <img src={UserDP} alt="" />
          </div>
        </div>
        <div className="col-md-12">
          <h5 className="invitation-label">Lets Invite friends</h5>
        </div>
      </div>
      <Socials url={id} className="social-wrapper" />
    </Container>
  )
}

export default OverViewPage