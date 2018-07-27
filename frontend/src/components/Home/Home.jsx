import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Typist from 'react-typist'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import './home.css'

class Home extends Component {

  render() {
    return (
      <div>
        <Nav />

        <div className='container center'>
          <Typist>
            <h1 id='quote' className='MyTypist'> 
              I CAN AND I WILL&nbsp;
              <span id='number'>22</span>
            </h1>
          </Typist>
          <main id='homeInfo'>
            At the age of 17, Raphael Alcoreza has impacted the lives of many including, his family, friends and especially the community. Raphael was born in Saudi Arabia on August 24, 2000 and moved to Canada with his parents and two older brothers. As an active member of the community, he joined several sport leagues including football and most importantly basketball. At an early age his older brother Ian, had taught him how to play along with his cousin Wowie. As he continued to play throughout elementary school and high school, his level of the game excelled and he was amazing to watch on the court. A natural talent that was acknowledged by many that even gave him the opportunity to play overseas in the Philippines for the summer.
            <br />
            <br />
            Returning to his senior year, Raphael was a humble 6’1 point guard at his high school Panorama ridge. Not only was he talented but he was passionate about the game, involved all his team members and positively impacted his coaches and even teams that were playing against him. It was made known by the community that Raphael affected the lives of many on and off the court from his kind, caring and humorous personality.
            <br />
            <br />
            On November 28th, at an exhibition game at Holy Cross Regional High School, Raphael complained he felt dizzy and lightheaded. Leaving the game to catch some fresh air, Raphael was rushed to the hospital due to collapsing moments after leaving the game due to cardiac arrest. Eight days after, he passed away at Royal Columbian Hospital surrounded by family, friends, teammates, teachers and community members. There was a generous and overwhelming amount of love and support for Raphael’s family.
            </main>
        </div>
        <br />
        <br />

        <div className='container center'>
          <div className='row'>
            <div className='col s12 m12 l6'>
              <div className='card-panel grey lighten-3'>
                <p id='donateInfo' className='cyan-text text-darken-1'>
                  Apart from being an all-star basketball player, Raphael was a loving son, brother and a trusted friend to many. Not only was he part of the RCMP community, Raph had received the Volunteer Scholarship Award for his selfless dedicated time and service. He had many dreams and one of them was to become a fireman after graduation. He was highly involved in the Surrey community and also volunteered for multiple organizations.
                  <br />
                  <br />
                  Raphael’s legacy will continue to grow and never be forgotten. As he is an inspiration to many among the community, several organizations and schools have created tournaments and awards in his honour. The Surrey Crime Prevention Society has renamed their Annual Volunteer Award in memory of Raphael. This award is given out every year to a selected volunteer; this year Raphael’s two older brothers presented it to the current awardee.
                  Please feel free to donate, any amount is appreciated to give back to those who continue to live as humble and selfless as Raph.
                </p>
                <Link to='/donate'
                  className='home btn waves-effect waves-light white-text cyan darken-1'>
                  DONATE
                </Link>
              </div>
            </div>

            <div className='col s12 m12 l6'>
              <video loop muted autoPlay id='ball' className='responsive-video'>
                <source src='/video/ball.mp4' type='video/mp4' />
              </video>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
