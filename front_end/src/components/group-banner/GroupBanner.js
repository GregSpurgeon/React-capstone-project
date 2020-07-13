import React from 'react'
import { Card, Image, Button, Jumbotron } from 'react-bootstrap'
import './GroupBanner.css'

export const GroupBanner = () =>{
  return(
    <div className="groupBanner">
     
        <Card>
         <Card.Header>Group Name</Card.Header>
          <Card.Body>
            <Card.Title>About</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur arcu enim, sed accumsan urna gravida at. Nulla semper nisi a justo auctor, at consequat dolor luctus. Aliquam sagittis massa ut tellus rutrum tincidunt ac vel arcu. Pellentesque mattis gravida mauris, id suscipit sapien sodales vitae. Vivamus porta erat sit amet semper aliquam. Vestibulum aliquet mollis ultricies.
              </Card.Text>
            <Card.Title>Location</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </Card.Text>
          </Card.Body>
         <Button variant="primary">Join</Button>
         </Card>
         <Image src="https://thumbs.dreamstime.com/b/cyclists-bike-race-banner-style-colorful-illustration-bunch-taking-part-white-background-56476672.jpg" rounded/>
    
  </div>
  )
}