import React from 'react'
import HomeHeader from './HomeHeader'
import styles from '../Styles/Home.module.css'
import HomeMid from './HomeMid'
import HomeAccordion from './HomeAccordion'
import TextField from '@material-ui/core/TextField';
import HomeFooter from './HomeFooter'
import { Redirect } from 'react-router-dom'

const data = 
[
  {
    "id": 1,
    "title": "Enjoy on your TV.",
    "subTitle": "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    "image": "/images/tv.png",
    "video": "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v",
    "alt": "Watch on Netflix",
    "direction": "row"
  },
  {
    "id": 2,
    "title": "Download your programmes to watch on the offline.",
    "subTitle": "Save your favourites easily and always have something to watch.",
    "image": "/images/mobile.jpg",
    "alt": "Watch on mobile",
    "direction": "row-reverse"
  },
  {
    "id": 3,
    "title": "Watch everywhere.",
    "subTitle": "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    "image": "/images/imac.png",
    "video": "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v",
    "alt": "TV shows on Netflix",
    "direction": "row"
  }
]

const faq = [
  {
    "id": 1,
    "header": "What is Netflix?",
    "body": "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!"
  },
  {
    "id": 2,
    "header": "How much does Netflix cost?",
    "body": "Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from £5.99 a month. No extra costs or contracts."
  },
  {
    "id": 3,
    "header": "Where can I watch?",
    "body": "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  },
  {
    "id": 4,
    "header": "How do I cancel?",
    "body": "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time."
  },
  {
    "id": 5,
    "header": "What can I watch on Netflix?",
    "body": "Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want."
  }
]

const Home = () => {
  const token = localStorage.getItem("token")
    return (
      token ? <Redirect to="/browse" /> :
        <div className={styles.home}>
          <HomeHeader/>
          {
            data?.map(item => <HomeMid key={item.id} data={item}/>)
          }
          <div className={styles.home_accordion}>
            <h1>Frequently Asked Questions</h1>
            {
              faq?.map(item => <HomeAccordion key={item.id} data={item} />)
            }
            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className={styles.cover_content_get_started}>
                <div>
                  <TextField variant="filled" label="Email address" className={styles.input} color='secondary' type='email' />
                </div>
                <button>GET STARTED &gt;</button>
            </div>
          </div>
          <HomeFooter/>
        </div>
    )
}

export default Home
