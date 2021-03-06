import React, { Component } from 'react';
import Countdown from 'react-countdown';
import { GamePanel, SlayTheSpire } from './GamePanel';
import { motion } from "framer-motion";
import './App.css';

// Welcome section images
import moon from './img/mm-moon.png';
import arrow from './img/white-arrow.png';

// Banner images
import tftBanner from './img/tftBanner.png';
import stsBanner from './img/stsBanner.png';
import plaBanner from './img/plaBanner.png';
import sm64Banner from './img/sm64Banner.png';
import chessBanner from './img/chessBanner.png';

// Floating images
import tftFloatingImage from './img/tftFloatingImage.png';
import stsFloatingImage1 from './img/stsFloatingImage1.png';
import stsFloatingImage2 from './img/stsFloatingImage2.png';
import stsFloatingImage3 from './img/stsFloatingImage3.png';
import stsFloatingImage4 from './img/stsFloatingImage4.png';
import plaFloatingImage from './img/plaFloatingImage.png';
import sm64FloatingImage from './img/sm64FloatingImage.png';
import chessFloatingImage from './img/chessFloatingImage.png';

// Winning clips and screenshots
import ironcladWinngingClip from './img/ironcladWinningClip.mp4';
import silentWinningClip from './img/silentWinningClip.mp4';
import plaCompletedImage from './img/plaCompletedImage.png';

const stsFloatingImages = [
  stsFloatingImage1,
  stsFloatingImage2,
  stsFloatingImage3,
  stsFloatingImage4,
];

const stsWinningClips = [
  ironcladWinngingClip,
  silentWinningClip,
]

const stsCharactersCompleted = [
  1,1,0,0
]

const quote = "'Begin with the end in mind' - Stephen Covey"

const sentence = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const letter = {
  hidden: {opacity: 0, y: 50},
  visible: {
    opacity: 1,
    y: 0,
  },
}

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Display blinking countdown
  } else {
    return <div>
            -{days} Days {hours} Hours {minutes} Minutes {seconds} Seconds Remain-
          </div>
  }
};

function Welcome() {
  return (
    <div>
      <img className='moon' src={moon} />
      <h1 className='title'>2022 God Gamer Challenge</h1>
      <div className='tag-line'>by Andy Johnson</div>
      <motion.div
        className='quote'
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
          {quote.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
      </motion.div>
      <div className='timer'>
          <Countdown 
            date={new Date(2023, 0, 1)}
            renderer={CountdownRenderer}  
          />
      </div>
      <div className='arrow-container'>
          <img className='arrow' src={arrow} />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Welcome />
      </header>
      <div className='panel-container'>
        <GamePanel 
          title="Teamfight Tactics"
          goal="Achieve Masters Rank"
          bannerImage={tftBanner}
          floatingImage={tftFloatingImage}
          accountLink="https://lolchess.gg/profile/na/liluzihorizonal"
        />
      </div>
      <div className='panel-container'>
        <SlayTheSpire
          title="Slay the Spire"
          goal="Ascension 20 wins with every character"
          bannerImage={stsBanner}
          floatingImages={stsFloatingImages}
          charactersCompleted={stsCharactersCompleted}
          winningClips={stsWinningClips}
        />
      </div>
      <div className='panel-container'>
        <GamePanel 
          title="Pokemon Legends: Arceus"
          goal="KILL GOD"
          bannerImage={plaBanner}
          floatingImage={plaFloatingImage}
          completedImage={plaCompletedImage}
        />
      </div>
      <div className='panel-container'>
        <GamePanel 
          title="Super Mario 64"
          goal="Sub 22 minute 16 star speedrun"
          bannerImage={sm64Banner}
          floatingImage={sm64FloatingImage}
        />
      </div>
      <div className='panel-container'>
        <GamePanel 
          title="Chess"
          goal="1100 ELO on chess.com"
          bannerImage={chessBanner}
          floatingImage={chessFloatingImage}
          accountLink="https://www.chess.com/member/andyjohnson70"
        />
      </div>
    </div>
  );
}

export default App;
