import React from 'react'
import Container from '../Layouts/Container'
import UserDP from '../Assets/Images/man.svg'
import Socials from '../Components/SocialLinks'

const OverViewPage = (props) => {
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
        <div className="col-md-12">
          <Socials />
        </div>
      </div>
    </Container>
  )
}

export default OverViewPage