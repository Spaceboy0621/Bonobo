import React from "react"
import "./LandingPage.scss"
import { useState, useEffect } from "react"
import Grid from '@material-ui/core/Grid';

import g6 from "./img/Group 6.svg"
import g71 from "./img/Group 7.svg"
import leaf_sun from "./img/leaf-sun.svg"

import twitterIcon from "./img/twitterIcon.svg"
import redditIcon from "./img/redditIcon.svg"
import telegramIcon from "./img/telegramIcon.svg"
import mediumIcon from "./img/mediumIcon.svg"
import discordIcon from "./img/discordIcon.svg"
import facebookIcon from "./img/facebookIcon.svg"
import instagramIcon from "./img/instagramIcon.svg"
import youtubuIcon from "./img/youtubuIcon.svg"
import tiktokIcon from "./img/tiktokIcon.svg"
import githubIcon from "./img/githubIcon.svg"
import firstText from "./img/firstText.svg"
import scamscan from "./img/scamscan.svg"
import ape from "./img/ape.svg"
import opensourse from "./img/opensourse.svg"
import openknow from "./img/openknow.svg"
import decent from "./img/decent.svg"
import secondText from "./img/secondText.svg"
import thirdText from "./img/thirdText.svg"
import incGraph from "./img/increaseGraph.svg"

import coins from "./img/coins.svg"
import bonobo from "./img/bonobo.png"
import heart_vector from "./img/heart.svg"
import handshake_vector from "./img/handshake.svg"
import idea_vector from "./img/idea.svg"
import bonobo_monkey_png from "./img/monkey.png"
import bonobo_face_png from "./img/bonobo_face.png"
import coin_svg from "./img/coin 2.svg"
import speedometer_svg from "./img/speedometer1.svg"
import S11 from "./img/s11.svg"
import s12_1 from "./img/s12-1.svg"
import s12_2 from "./img/s12-2.svg"
import s12_3 from "./img/s12-3.png"
import s12_4 from "./img/s12-4.svg"
import s12_5 from "./img/s12-5.svg"
import calendar_png from "./img/calendar.svg"
import next_png from "./img/next.svg"
import prev_png from "./img/prev.svg"
import logo from "./img/logo.svg"
import monkeyy from "./img/10.png"
import team1 from "./img/team1.png"
import team2 from "./img/team2.png"
import team3 from "./img/team3.png"
import team4 from "./img/team4.png"
import welcomeText from "./img/welcome.svg"
import { Link } from 'react-scroll'

function LandingPage2() {
  const [menuLeft, setMenu] = useState(-1 * document.body.clientWidth)

  const [numLeft, setNum] = useState(0)
  const [winWidth, setWidth] = useState(document.body.clientWidth)
  const [moveleft, setLeft] = useState(0)

  const moveLeft = () => {
    if (numLeft === 3) {
      return
    }
    var unitLeft =
      winWidth > 767 ? ((14.27 + 2.03) / 100) * winWidth : 0.9 * winWidth
    var val = moveleft - unitLeft
    setLeft(val)
    setNum(numLeft + 1)
  }
  const moveRight = () => {
    if (numLeft === 0) {
      return
    }
    var unitLeft =
      winWidth > 767 ? ((14.27 + 2.03) / 100) * winWidth : 0.9 * winWidth
    var val = moveleft + unitLeft
    setLeft(val)
    setNum(numLeft - 1)
  }

  useEffect(() => {
    function handle() {
      setWidth(document.body.clientWidth)
    }
    window.addEventListener("resize", handle)
  }, [])

  const closeMenu = () => {
    setMenu(-1 * document.body.clientWidth)
  }
  const openMenu = () => {
    setMenu(0)
  }
  return (
    <div>
      <div className="topmenu">
        <div className="bonobo-header">
          <div className="menu">
            <img className="logo" src={logo} alt="logo" />
            <span className="menuButton open" onClick={openMenu}>
              ☰
            </span>
            <ul className="menutab">
              <li className="main_tab_pointer"><Link
                activeClass="active"
                to="BONOBO"
                spy={true}
                smooth={true}
              >Whitepaper</Link></li>
              <li className="main_tab_pointer"><Link
                activeClass="active"
                to="Tokenomics"
                spy={true}
                smooth={true}
              >Roadmap</Link></li>
              <li className="main_tab_pointer"><Link
                activeClass="active"
                to="Roadmap"
                spy={true}
                smooth={true}
              >Marketing</Link></li>
              {/* <li className="main_tab_pointer"><Link
                activeClass="active"
                to="Roadmap"
                spy={true}
                smooth={true}
              >Adult Service</Link></li>
              <li className="main_tab_pointer"><Link
                activeClass="active"
                to="Roadmap"
                spy={true}
                smooth={true}
              >Charity</Link></li> */}
              <li className="main_tab_pointer"><Link
                activeClass="active"
                to="Roadmap"
                spy={true}
                smooth={true}
              >Voting</Link></li>
              <li className="main_tab_pointer ">
                <div className="connectBtn">
                <Link
                activeClass="active"
                to="Roadmap"
                spy={true}
                smooth={true}
              >Connect</Link>
              </div>
              </li>
            </ul>
            <ul className="mobilemenu" style={{ left: menuLeft + "px" }}>
              <li>
                <span className="menuButton" onClick={closeMenu}>
                  ✖
                </span>
              </li>
              <li>
                <a href="buyBonobo">Buy BONOBO</a>
              </li>
              <li>
                <a href="tokenomics">Tokenomics</a>
              </li>
              <li>
                <a href="roadmap">Roadmap</a>
              </li>
              <li>
                <a href="story">White Paper</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-block">
        <section>
          <div className="content">
            <div className="bonobo-content-card">
              
              <div className="col-md-9 float-left">
              <img src={welcomeText} alt="welcomeText" className="welcomeText" />
                <div className="bonobo-content" >
                  <span className="worldText">
                    <img src={firstText} alt="firstText" className="firstText" />
                    {/* The world’s 1st community driven Marketing Launchpad with Decentralized Auditing */}
                  </span>
                  <ul className="symbols">
                    <li className="symbol mr17"><Link to={'https://twitter.com'}><img src={twitterIcon} alt="twitterIcon"/></Link></li>
                    <li className="symbol mr17"><img src={redditIcon} alt="redditIcon"/></li>
                    <li className="symbol mr17"><img src={telegramIcon} alt="telegramIcon"/></li>
                    <li className="symbol mr17"><img src={mediumIcon} alt="mediumIcon"/></li>
                    <li className="symbol mr17"><img src={discordIcon} alt="discordIcon"/></li>
                    <li className="symbol mr17"><img src={facebookIcon} alt="facebookIcon"/></li>
                    <li className="symbol mr17"><img src={instagramIcon} alt="instagramIcon"/></li>
                    <li className="symbol mr17"><img src={youtubuIcon} alt="youtubuIcon"/></li>
                    <li className="symbol mr17"><img src={tiktokIcon} alt="tiktokIcon"/></li>
                    <li className="symbol mr17"><img src={githubIcon} alt="githubIcon"/></li>
                  </ul>
                </div><br />
                <div className="bonobo-button" >
                  <img src={scamscan} className="mr17" alt="scamscan"/>
                  <img src={coins} className="mr17" alt="coins"/>
                  <img src={ape} className="mr17" alt="ape"/>
                </div>
                <div className="bonobo-button mt30" >
                  <img src={opensourse} className="mr17" alt="opensourse"/>
                  <img src={openknow} className="mr17" alt="openknow"/>
                  <img src={decent} className="" alt="decent"/>
                </div>
              </div>
              <div className="col-md-3 float-left">
                <img className="bonobo pt290" src={bonobo} alt="bonobo" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="s2-bonobo-content-card float-left">
            <div className="content">
              <img src={secondText} className="" alt="secondText"/>
            </div>
          </div>
          <div className="imgs float-left">
            <img src={g6} width="50%" alt="g6" />
            <img src={g71} width="50%" alt="g7" />
            <img className="leftsun" src={leaf_sun} width="100%" alt="leftsun" />
          </div>
        </section>
        <div className="social-network-block">
          <div className="flex-end">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={4}>
              <img src={thirdText} alt="thirdText" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <div className="align-center">
                <button className="green-btn w180">Join</button>
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <img src={incGraph} alt="incGraph" />
            </Grid>
          </Grid>
          </div>
        </div>
        <section>
          <div className="content">
            <div className="s3-bonobo-heading-block">
              <h2 className="font-Somatic">Core values</h2>
            </div>
            <div className="s3-bonobo-main-block">
              <div className="card">
                <div className="card-svg">
                  <img
                    src={heart_vector}
                    className="heart-img"
                    alt="heart_vector"
                  />
                </div>
                <div className="card-heading">
                  <span>Distributed</span>
                </div>
                <div className="card-content">
                  <p>
                  Earn rewards by participating in ScamScan and Distributed Marketing and more. Community building by transcending the value of the platform through positive performance.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-svg">
                  <img
                    className="handshake-img"
                    src={handshake_vector}
                    alt="handshake_vector"
                  />
                </div>
                <div className="card-heading">
                  <span>Democratic</span>
                </div>
                <div className="card-content">
                  <p>
                  Building towards a fully Decentralized Autonomous Organization with fair participation equity. No owners, merit based curation and platform evolution on demand.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-svg">
                  <img src={idea_vector} className="idea-img" alt="idea_vector" />
                </div>
                <div className="card-heading">
                  <span>Transparency</span>
                </div>
                <div className="card-content">
                  <p>
                  Scalability requires transparency in all aspects of the platform. Accounting, decision making, open source code and open knowledge. This is the long term commitment towards a sustainable future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="social-network-block">
          <div className="flex-end">
            <Grid container spacing={3}>
              <Grid item xs={6} sm={4}>
                <img src={thirdText} alt="thirdText" />
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className="align-center">
                  <button className="green-btn w180">Join</button>
                </div>
              </Grid>
              <Grid item xs={6} sm={4}>
                <img src={incGraph} alt="incGraph" />
              </Grid>
            </Grid>
          </div>
        </div> */}
        <section id="Tokenomics">
          <div className="container-fluid">
            <div className="heading row">
              <strong className="linear_gradient_font_color">LEARN MORE ABOUT OUR</strong>
              <h2 className="linear_gradient_font_color2">Tokenomics</h2>
            </div>
            <div className="s5-bonobo-content-main-block">
              <div className="s5-bonobo-content-block-1 float-left">
                <div className="card-1">
                  <div>
                    <strong>10 %</strong>
                    <span className="c">Transaction Fee (TX)</span>
                  </div>
                  <div>
                    <strong>3 %</strong>
                    <span className="c1">auto distributed among holders</span>
                  </div>
                  <div>
                    <strong>3%</strong>
                    <span className="c1">Wildlife Conservation Fund</span>
                  </div>
                  <div>
                    <strong>2 %</strong>
                    <span className="c1">
                      auto added to the liquidity pool and locked 3 years.
                    </span>
                  </div>
                  <div>
                    <strong>1 %</strong>
                    <span className="c1">Project Fund</span>
                  </div>
                  <div>
                    <strong>2 %</strong>
                    <span className="c1">Burned</span>
                  </div>
                </div>
                <div className="s5-bonobo-content-block-sub-child">
                  <div className="card-2 ">
                    <div className="card-heading">Max Supply</div>
                    <div className="card-body">
                      <div>
                        <strong>Max Supply:</strong>
                        <br />
                        <span>100% - 7,900,000,000 Token</span>
                      </div>
                      <div>
                        <strong>Public Supply:</strong>
                        &nbsp;95%
                        <br />
                        &nbsp;&nbsp;&nbsp;Pre-sale: 20%
                        <br />
                        &nbsp;&nbsp;&nbsp;ILO: 75%
                        <br />
                      </div>
                      <div>
                        <strong>Community Incentives:</strong>
                        <span> &nbsp;5%</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-3 ">
                    <div className="card-heading">Token Release Schedule</div>
                    <ul>
                      <li>
                        LP is released 3 years from lock date. After 3 years these
                        funds are released with a set schedule to the team and/or
                        DAO, whichever is in place.
                      </li>
                      <li>
                        Team tokens are released according to a set schedule tbd
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="s5-bonobo-content-block-2 float-left">
                <div className="bonobo-head-svg-block">
                  <img className="face" src={bonobo_face_png} alt="bonobo_face" />
                  <img
                    className="monkey"
                    src={bonobo_monkey_png}
                    alt="bonobo_monkey"
                  />
                </div>
                <div className="card-1">
                  <div className="card-heading">Tokenomics Explanation</div>
                  <p>
                    When you purchase BONOBO Tokens, 10% is used as a transaction
                    fee.
                  </p>
                  <ul>
                    <li>
                      <span>3%</span>
                      &nbsp;is distributed to everyone that has a token, so that
                      whenever someone transacts BONOBOs, you also get a
                      percentage! The more BONOBOs you hold, the more rewards you
                      receive.
                    </li>
                    <li>
                      <span>2%</span> is added to the Liquidity Pool to better
                      leverage BONOBO tokens. After 3 years these funds are
                      released with a set schedule to the team and/or DAO,
                      whichever is in place.
                    </li>
                    <li>
                      <span>3%</span> goes to our Wildlife Conservation Fund of
                      which the community works together in strategies to help
                      animals in danger around the world.
                    </li>
                    <li>
                      <span>1%</span> for development.
                    </li>
                    <li>
                      <span>1%</span> is burned to lessen the total supply and
                      increase the value of held tokens.
                    </li>
                  </ul>
                  <p>There will only be 7,900,000,000 Tokens minted.</p>
                  <ul>
                    <li>
                      <span>95%</span> is public supply, 20% of which will be
                      available during pre-sale.
                    </li>
                    <li>
                      <span>5%</span> is held to for the community to incentivize
                      each other.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="social-info-block">
          <div className="content">
            <div className="content-block">
              <div className="coin-card">
                <div className="coin-svg">
                  <img src={coin_svg} alt="coin_svg" />
                </div>
                <div className="txt-heading">
                  Anti-Whale
                  <br />
                  Measures
                </div>
                <div className="txt-content">
                  <p>
                    Transfers more than 0.5% (current ratio) of the total supply
                    will be rejected. As the total supply grows, this ratio will
                    be reduced. Deposit or withdraw tokens to the farms will not
                    be subject to this restriction.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-block">
              <div className="speedometer-card">
                <div className="speedometer-svg">
                  <img src={speedometer_svg} alt="speedometer_svg" />
                </div>
                <div className="txt-heading">
                  Rug <br />
                  proof
                </div>
                <div className="txt-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus malesuada iaculis bibendum. Integer et erat interdum
                    sapien commodo fringilla ut sed nisi. Pellentesque efficitur
                    tempus lectus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="content">
            <div className="s5-bonobo-heading-block">
              <div>
                <div className="sub linear_gradient_font_color">HOW TO BUY</div>
                <div className="main linear_gradient_font_color2">Bonobo</div>
              </div>
            </div>
            <div className="bonobo-content-block">
              <div className="card step-1">
                <div className="child-card c1">
                  <div className="step step-num-1">
                    <div>
                      <span>step</span>
                      <strong>1</strong>
                    </div>
                  </div>
                  <div className="step-heading">
                    Download MetaMask or use‍ an existing wallet‍
                  </div>
                  <div className="step-content">
                    Head to <a href="metamask.io">metamask.io</a> and download
                    their wallet to your phone or chrome/firefox browser.
                  </div>
                </div>
              </div>
              <div className="card step-2">
                <div className="child-card c2">
                  <div className="step step-num-2">
                    <div>
                      <span>step</span>
                      <strong>2</strong>
                    </div>
                  </div>
                  <div className="step-heading">Go to pancakeswap.finance ‍</div>
                  <div className="step-content">
                    PancakeSwap is where you’ll be performing the swap of your
                    current tokens to BONOBO
                  </div>
                </div>
              </div>
              <div className="card step-3">
                <div className="child-card c3">
                  <div className="step step-num-3">
                    <div>
                      <span>step</span>
                      <strong>3</strong>
                    </div>
                  </div>
                  <div className="step-heading">
                    <span>Get to</span>
                    <br />
                    <span>the trade screen‍</span>
                  </div>
                  <div className="step-content">
                    Click “Connect” at the top right of the screen, and then
                    navigate to “Trade” on the left sidebar.
                  </div>
                </div>
              </div>
              <div className="card step-4">
                <div className="child-card c4">
                  <div className="step step-num-4">
                    <div>
                      <span>step</span>
                      <strong>4</strong>
                    </div>
                  </div>
                  <div className="step-heading">Select the BONOBO token‍</div>
                  <div className="step-content">
                    Click on the “Select a Currency” button, and enter the BONOBO
                    token contract
                  </div>
                </div>
              </div>
              <div className="card step-5 col-4">
                <div className="child-card c5">
                  <div className="step step-num-5">
                    <div>
                      <span>step</span>
                      <strong>5</strong>
                    </div>
                  </div>
                  <div className="step-heading">Adjust your slippage to 13%</div>
                  <div className="step-content">
                    Click “Settings” at the top right, and adjust your slippage to
                    13%(sometimes it may be a bit more, depending on how much
                    demand there is).
                  </div>
                </div>
              </div>
              <div className="card step-6 col-4">
                <div className="child-card c6">
                  <div className="step step-num-6">
                    <div>
                      <span>step</span>
                      <strong>6</strong>
                    </div>
                  </div>
                  <div className="step-heading">
                    Swap and swing into the community
                  </div>
                  <div className="step-content">
                    <p>Enter the amount you want to buy and swap away!</p>
                    <p>Remember to have enough BNB for gas fees!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="content">
            <div className="heading">
              <strong className="linear_gradient_font_color">See our</strong>
              <h2 className="linear_gradient_font_color"><span className="linear_gradient_font_color2">Milestones</span> Ticker</h2>
              <p>
                We implemented a concesus to visualize our Community Effort to
                push elbonobo all over the internet (mark please update)
              </p>
            </div>
            <div className="card-flow">
              <div className="card-section" style={{ left: moveleft + "px" }}>
                <div className="card">
                  <div className="cards-header">
                    <div className="d-flex justify-content-start text-center">
                      <img src={calendar_png} alt="" />
                      <span>20 May, 2020</span>
                    </div>
                  </div>
                  <div className="cards-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada iaculis bibendum
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cards-header">
                    <div className="d-flex justify-content-start text-center">
                      <img src={calendar_png} alt="" />
                      <span>20 May, 2020</span>
                    </div>
                  </div>
                  <div className="cards-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada iaculis bibendum
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cards-header">
                    <div className="d-flex justify-content-start text-center">
                      <img src={calendar_png} alt="" />
                      <span>20 May, 2020</span>
                    </div>
                  </div>
                  <div className="cards-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada iaculis bibendum
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cards-header">
                    <div className="d-flex justify-content-start text-center">
                      <img src={calendar_png} alt="" />
                      <span>20 May, 2020</span>
                    </div>
                  </div>
                  <div className="cards-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada iaculis bibendum
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cards-header">
                    <div className="d-flex justify-content-start text-center">
                      <img src={calendar_png} alt="" />
                      <span>20 May, 2020</span>
                    </div>
                  </div>
                  <div className="cards-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada iaculis bibendum
                    </p>
                  </div>
                  <div className={`${numLeft === 0 ? "overlay" : ""}`}></div>
                </div>
                <div className="card">
                  <div className="cards-header">
                    <div className="d-flex justify-content-start text-center">
                      <img src={calendar_png} alt="" />
                      <span>20 May, 2020</span>
                    </div>
                  </div>
                  <div className="cards-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada iaculis bibendum
                    </p>
                  </div>
                  <div className={`${numLeft === 1 ? "overlay" : ""}`}></div>
                </div>
                <div className="card">
                  <div className="cards-header">
                    <div className="d-flex justify-content-start text-center">
                      <img src={calendar_png} alt="" />
                      <span>20 May, 2020</span>
                    </div>
                  </div>
                  <div className="cards-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada iaculis bibendum
                    </p>
                  </div>
                  <div className={`${numLeft === 2 ? "overlay" : ""}`}></div>
                </div>
                <div className="card">
                  <div className="cards-header">
                    <div className="d-flex justify-content-start text-center">
                      <img src={calendar_png} alt="" />
                      <span>20 May, 2020</span>
                    </div>
                  </div>
                  <div className="cards-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada iaculis bibendum
                    </p>
                  </div>
                  <div className={`${numLeft === 3 ? "overlay" : ""}`}></div>
                </div>
              </div>
            </div>
            <div className="btns">
              <img
                className={`${numLeft === 0 ? "greenbtn" : "yellowbtn"}`}
                src={prev_png}
                alt=""
                onClick={moveRight}
              />
              <img
                className={`${numLeft === 3 ? "greenbtn" : "yellowbtn"}`}
                src={next_png}
                alt=""
                onClick={moveLeft}
              />
            </div>
          </div>
        </section>
        <section id="Roadmap">
          <div className="content">
            <div className="s9-bonobo-heading-block">
              <div>
                <div className="sub linear_gradient_font_color">OUR</div>
                <div className="main linear_gradient_font_color2">Roadmap</div>
              </div>
            </div>

            <div className="content-card-blocks row">
              <div className="content-card-block-1 col-6">
                <div className="content-block-1-card-1 card">
                  <div>
                    <div> 2021 Q3 </div>
                    <ul>
                      <li>BSC checker audit</li>
                      <li>Release Bonobo easy meme | comic maker Ai & PSD</li>

                      <li>
                        Start El Bonobo’s Adventures Comic Strip competition
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-block-1-card-2 card">
                  <div>
                    <div> 2022 Q1</div>
                    <ul>
                      <li>Add El Bonobo Team members from community</li>

                      <li>First Mission: Rescue El bonobo’s friends</li>
                      <li>Start album of rescued animals</li>
                    </ul>
                  </div>
                </div>
                <div className="content-block-1-card-3 card">
                  <div>
                    <div> 2022 Q3</div>
                    <ul>
                      <li>Finalize DAO smart contracts with community</li>

                      <li>Semi DAO new developer participation</li>

                      <li>First ticket to meet El Bonobo’s family in the DRC</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content-card-block-2 col-6">
                <div className="content-block-2-card-1 card">
                  <div>
                    <div>2021 Q2</div>
                    <ul>
                      <li>Launch Website</li>
                      <li>Token Launch on Pancake Swap</li>

                      <li>Start social networking community and marketing</li>
                      <li>Dashboard implementation</li>
                    </ul>
                  </div>
                </div>
                <div className="content-block-2-card-2 card">
                  <div>
                    <div> 2021 Q4</div>
                    <ul>
                      <li>Introduce El Bonobo’s family</li>

                      <li>Pool Conservation Ideas from community</li>

                      <li>New listing locations</li>
                      <li>NFT El Bonobo’s Adventures Comic Strips</li>
                    </ul>
                  </div>
                </div>
                <div className="content-block-2-card-3 card">
                  <div>
                    <div> 2022 Q2</div>
                    <ul>
                      <li>Doxing. Team reveal</li>

                      <li>Define DAO smart agreements</li>

                      <li>Audit bonobo conservation and rescue missions</li>

                      <li>Enhance community and conservation engagement</li>
                    </ul>
                  </div>
                </div>
                <div className="content-block-2-card-4 card">
                  <div>
                    <div> 2022 Q4</div>
                    <ul>
                      <li>Semi DAO review | Audit</li>

                      <li>Full DAO | All power goes to community</li>

                      <li>Anoint El Bonobo as new King on our Planet of Apes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Charity">
          <div className="content">
            <div className="s10-bonobo-content-card float-left">
              <strong className="linear_gradient_font_color">MORE ABOUT</strong>
              <h2 className="linear_gradient_font_color2">Charity</h2>
              <p>
                Charity to the El Bonobo Charity goes towards helping the less
                than 50,000 bonobos left in the world. Bonobos share 98.7% of
                their DNA with humans. Charity help in rescuing orphaned bonobos
                whose family has been killed for bushmeat or wild animals. They
                are then nursed by professionals who will release them into the
                wild when possible. Some bonobos lose their ability to survive in
                the wild so have to be taken care for by caregivers for the rest
                of their lives. A large sum of your Charity will go to education
                and community development. Human poverty induces the hunting of
                bonobos for meat. Through <b>awareness programs </b> you will help
                save the lives of many bonobos and other endangered apes.
              </p>
              <p>
                The <b>El Bonobo community</b> will participating in how the
                Charity are used. Furthermore, the community will discuss future
                implementations for how to fund for more Charity, such as
                possible royalties from El Bonobo comic strip NFTs, and other
                fundraisers. A holistic approach to helping Bonobos will be
                addressed in order to identify the best practice and long lasting
                charity ecosystem. These would target education, conservation,
                awareness, rescue and food chain initiatives.
              </p>
              <p>
                Voting will be held over discord. Proposals can be done through
                all available social media.
              </p>
              <p>
                A portion of Charity only once approved by the community can be
                put towards new dashboard features to help increase token value
                and conservation efforts.
              </p>
              <a
                href="https://www.notion.so/tokenfactory/Website-5953f52f3ba44c9eba362a556eaa2ebb"
                target="blank"
              >
                <button className="yellow-btn">MAKE Charity</button>
              </a>
            </div>
            <div className="monkey float-right">
              <img src={monkeyy} alt="" />
            </div>
          </div>
        </section>
        <section id="Dashboard">
          <div className="content">
            <div className="s11-block">
              <div className="s11-bonobo-content-card float-left">
                <strong className="linear_gradient_font_color">OUR NEW</strong>
                <h2 className="linear_gradient_font_color2">Dashboard</h2>
                <p>
                  A slick dashboard that a monkey can understand will be
                  implemented with ideas from the community and professionals. El
                  Bonobo dashboard launches with transaction data including,
                  Charity, and token data. Over time more tools will be
                  available through the dashboard.
                </p>
                <p>
                  El Bonobo dashboard aims to deliver the best information for the
                  community. Feedback and ideas from the community will be the
                  driving factor in the El Bonobo Dashboard.
                </p>
              </div>
              <div className="s11-dashboard-img-block float-left">
                <img src={S11} alt="S11" />
              </div>
            </div>
          </div>
        </section>
        <div className="section-12" id="NFT">
          <div className="main">
            <div className="s12-bonobo-content-card loat-left">
              <strong className="linear_gradient_font_color">El Bonobo Comic Strip</strong>
              <h2 className="linear_gradient_font_color"><span className="linear_gradient_font_color2">NFT</span> Competition</h2>
              <p>
                El Bonobo mascot illustration vector files are available for the
                community to test out their humor and creativeness. The best comic
                strip voted by the community will be NFTd as a reward! The comic
                creator will own the NFT completely.
              </p>
            </div>
            <div className="s12-vector-block float-right">
              <div className="col-4">
                <img src={s12_1} alt="" />
                <img src={s12_2} alt="" />
              </div>
              <div className="col-4">
                <img src={s12_3} alt="" />
              </div>
              <div className="col-4">
                <img src={s12_4} alt="" />
                <img src={s12_5} alt="" />
              </div>
            </div>
          </div>
        </div>
        <section id="team">
          <div className="container-fluid">
            <div className="s13-bonobo-content-card float-left">
              <div>
                <strong className="linear_gradient_font_color">MEET OUR</strong>
                <h2 className="linear_gradient_font_color2">Team</h2>
                <p>
                  It is understandable that having a transparent team provides
                  trust in a project. However this is a project that goes beyond
                  the scope of traditional digital architects who want to create
                  well intentioned social-impact designs. As this is a
                  conservation project first and foremost, it would be within
                  saviourism-complex to dox each current curator. We have
                  therefore concluded that focusing on the technology, and mission
                  goals are better than centralizing on the current curators. The
                  project will speak for itself. This is also an opportunity for
                  hard working community members online and on the ground to step
                  up and be recognized as the real MVPs of the El Bonobo Project!
                  We want to move to full DAO as soon as possible with the most
                  capable and qualified team, not only participating online but
                  also front line in conservations. These team members deserve to
                  have their pictures in this section if they desire. You are our
                  team. Your dedication and perseverance is worthwhile and
                  recognized.
                </p>
              </div>
            </div>
            <div className="s13-img-block float-left">
              <div className="fline">
                <img src={team1} alt="" />
                <strong>Name</strong>
                <strong>Last Name</strong>
                <p>Title</p>
              </div>
              <div>
                <img src={team2} alt="" />
                <strong>Name</strong>
                <strong>Last Name</strong>
                <p>Title</p>
              </div>
              <div className="sline">
                <img src={team3} alt="" />
                <strong>Name</strong>
                <strong>Last Name</strong>
                <p>Title</p>
              </div>
              <div className="sline">
                <img src={team4} alt="" />
                <strong>Name</strong>
                <strong>Last Name</strong>
                <p>Title</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LandingPage2
