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
import scamMeter from "./img/scamMeter.svg"
import scamscanimg from "./img/scamscanimg.svg"
import ape from "./img/ape.svg"
import opensourse from "./img/opensourse.svg"
import openknow from "./img/openknow.svg"
import decent from "./img/decent.svg"
import thirdText from "./img/thirdText.svg"
import incGraph from "./img/increaseGraph.svg"
import s5_block1 from "./img/s5_block1.svg"
import s5_block2 from "./img/s5_block2.svg"
import s5_block4 from "./img/s5_block4.svg"
import conB from "./img/continueBtn.svg"
import joinB from "./img/joinBtn.svg"
import ftitle from "./img/footertitle.svg"

import coins from "./img/coins.svg"
import bonobo from "./img/bonobo.png"
import heart_vector from "./img/heart.svg"
import handshake_vector from "./img/handshake.svg"
import idea_vector from "./img/idea.svg"
import bonobo_monkey_png from "./img/monkey.png"
import bonobo_face_png from "./img/bonobo_face.png"
import calendar_png from "./img/calendar.svg"
import next_png from "./img/next.svg"
import prev_png from "./img/prev.svg"
import logo from "./img/logo.svg"
import team1 from "./img/team1.png"
import team2 from "./img/team2.png"
import team3 from "./img/team3.png"
import team4 from "./img/team4.png"
import welcomeText from "./img/welcome.svg"
import { Link } from 'react-scroll'

function LandingPage2() {
  const [menuLeft, setMenu] = useState(-1 * document.body.clientWidth - 100)

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
    console.log(-1 * document.body.clientWidth - 100)
    setMenu(-1 * document.body.clientWidth - 100)
  }
  const openMenu = () => {
    setMenu(-50)
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
              <li className="main_tab_pointer"><Link
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
              >Charity</Link></li>
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
                <span className="cursor-hand" onClick={closeMenu}>
                  ✖
                </span>
              </li>
              <li>
                <a href="buyBonobo">Whitepaper</a>
              </li>
              <li>
                <a href="tokenomics">Roadmap</a>
              </li>
              <li>
                <a href="roadmap">Marketing</a>
              </li>
              <li>
                <a href="story">Adult Service</a>
              </li>
              <li>
                <a href="roadmap">Charity</a>
              </li>
              <li>
                <a href="story">Voting</a>
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
                    <li className="symbol"><Link to={'https://twitter.com'}><img className="symbolimg" src={twitterIcon} alt="twitterIcon"/></Link></li>
                    <li className="symbol"><img className="symbolimg" src={redditIcon} alt="redditIcon"/></li>
                    <li className="symbol"><img className="symbolimg" src={telegramIcon} alt="telegramIcon"/></li>
                    <li className="symbol"><img className="symbolimg" src={mediumIcon} alt="mediumIcon"/></li>
                    <li className="symbol"><img className="symbolimg" src={discordIcon} alt="discordIcon"/></li>
                    <li className="symbol"><img className="symbolimg" src={facebookIcon} alt="facebookIcon"/></li>
                    <li className="symbol"><img className="symbolimg" src={instagramIcon} alt="instagramIcon"/></li>
                    <li className="symbol"><img className="symbolimg" src={youtubuIcon} alt="youtubuIcon"/></li>
                    <li className="symbol"><img className="symbolimg" src={tiktokIcon} alt="tiktokIcon"/></li>
                    <li className="symbol"><img className="symbolimg" src={githubIcon} alt="githubIcon"/></li>
                  </ul>
                </div><br />
                <div className="bonobo-button" >
                  <img src={scamscan} className="mr17 coinbtn" alt="scamscan"/>
                  <img src={coins} className="mr17 coinbtn" alt="coins"/>
                  <img src={ape} className="mr17 coinbtn" alt="ape"/>
                </div>
                <div className="bonobo-button mt30" >
                  <img src={opensourse} className="mr17 borabtn" alt="opensourse"/>
                  <img src={openknow} className="mr17 borabtn" alt="openknow"/>
                  <img src={decent} className="borabtn" alt="decent"/>
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
              {/* <img src={secondText} className="secondText" alt="secondText"/> */}
              <div className="s2-bonobo-content-left-top">
                <h1 className="somatic-font fs30">What is El Bonobo?</h1>
                <p className="nirmala-font fs24">BONOBO coin is fun and bold attempt to use cryptocurrency to improve the lives of both humans and our fellow inhabitants on earth, in a decentralized manner. </p>
                <br />
                <p className="nirmala-font fs24">It is also a social experiment that will test the ability of 
                Distributed Anonymous Organizations (DAO) to perform 
                their remits more effectively than traditional organizations.</p>
              </div>

              <div className="s2-bonobo-content-left-down mt27">
                <h1 className="somatic-font">Join us!</h1>
                <li className="nirmala-font">We’re building a vibrant community that is fun and comes together to improve their lives and those of others, whilst working to raise awareness and funds for wildlife conservation. </li>
                <br />
                <li className="nirmala-font">A professional and talented team committed to making this vision a reality. </li>
                <br />
                <li className="nirmala-font">Transparent technology implemented using best practice. There can be no “rug-pull”. </li>
                <br />
                <li className="nirmala-font">Tokenomics that make sense.</li>
                <br />

                <p className="nirmala-font">There future of El Bonobo is full DAO. Creating an effective conservation structure is the aim.</p><br />
                <p className="nirmala-font">And the fun doesn’t end there. A meme maker package is available for creativity and humor. There is also a comic strip competition where the winning strips are turned into NFT for the creator to gain more rewards. Moreover, adventure and travel awaits those that want to visit conservation efforts around the world.</p>
              </div>
            </div>
          </div>
          <div className="imgs float-left">
            <img src={g6} width="50%" alt="g6s2" className="s2-bonobo-right-top1-img" />
            <img src={g71} width="50%" alt="g7s2" className="s2-bonobo-right-top2-img" />
            <img src={leaf_sun} className="s2-bonobo-right-top3-img leftsun" width="100%" alt="leftsun" />
          </div>
        </section>
        <div className="social-network-block">
          <div className="social-pc">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={4}>
              <img src={thirdText} className="w20rem" alt="thirdText" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <div className="align-center">
                <button className="green-btn w180">Join</button>
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <img src={incGraph} className="w10rem" alt="incGraph" />
            </Grid>
          </Grid>
          </div>

          <div className="social-mobile">
            <img src={thirdText} className="w100pro" alt="thirdText" />
            <button className="green-btn w100pro mt15">Join</button>
            <img src={incGraph} className="w100pro mt15" alt="incGraph" />
          </div>
        </div>
        <section>
          <div className="content">
            <div className="s3-bonobo-heading-block">
              <h2 className="somatic-font w100pro fs72">Core values</h2>
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
        <div className="social-network-block">
          <div className="social-pc2">
            <Grid container spacing={3}>
              <Grid item xs={6} sm={4}>
                <img src={scamscanimg} className="w20rem" alt="scamscanimg" />
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className="align-center">
                  <button className="green-btn w180">Join</button>
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <img src={scamMeter} className="w10rem" alt="scamMeter" />
              </Grid>
            </Grid>
          </div>

          <div className="social-mobile2">
            <img src={scamscanimg} className="w100pro" alt="scamscanimg" />
            <button className="green-btn w100pro mt15">Join</button>
            <img src={scamMeter} className="w100pro mt15" alt="scamMeter" />
          </div>
        </div>

        <section id="Tokenomics">
          <div className="container-fluid">
            <div className="heading row">
              <h2 className="somatic-font fs40">Tokenomics</h2>
            </div>
            <div className="s5-bonobo-content-main-block s5-bonobo-pc">
              <Grid container spacing={3}>
                <Grid item sm={5}>
                  <div className="s5-bonobo-content-block-1">
                    <img src={s5_block1} className="w25rem" alt="s5_block1" />
                    <img src={s5_block2} className="w25rem" alt="s5_block2" />
                  </div>
                </Grid>
                <Grid item sm={5}>
                  <div className="s5-bonobo-content-block-2">
                    <div className="bonobo-head-svg-block">
                      <img className="face" src={bonobo_face_png} alt="bonobo_face" />
                      <img
                        className="monkey"
                        src={bonobo_monkey_png}
                        alt="bonobo_monkey"
                      />
                    </div> 
                    <div className="card-1 p40 bg-gray-green">
                      <div className="fs16 somatic-font">
                        Total Supply - <span className="font-yellow">100%</span>
                      </div>
                      <div className="fs16 somatic-font">
                        <span className="font-yellow">7,900,000,000</span> Token
                      </div>

                      <div className="fs16 somatic-font mt15">
                        Airdrop - <span className="font-yellow">20%</span>
                      </div>
                      <div className="fs16 somatic-font">
                        <span className="font-yellow">1,580,000,000</span> Token
                      </div>
                      
                      <div className="fs16 somatic-font mt15">
                        Public Sale - <span className="font-yellow">62.56%</span>
                      </div>
                      <div className="fs16 somatic-font">
                        <span className="font-yellow">4,942,240,000</span> Token
                      </div>

                      <div className="fs16 somatic-font mt15">
                        Liquidity - <span className="font-yellow">15.64%</span>
                      </div>
                      <div className="fs16 somatic-font">
                        <span className="font-yellow">1,235,560,000</span> Token
                      </div>

                      <div className="fs16 somatic-font mt15">
                        Unicrypt Fee - <span className="font-yellow">1.8%</span>
                      </div>
                      <div className="fs16 somatic-font">
                        <span className="font-yellow">142,200,000</span> Token
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="s5-bonobo-mobile">
              <img src={s5_block1} className="w100pro" alt="s5_block1" />
              <img src={s5_block2} className="w100pro" alt="s5_block2" />
              <div className="p40 bg-gray-green s5-bonobo-mobile3">
                <div className="somatic-font">
                  Total Supply - <span className="font-yellow">100%</span>
                </div>
                <div className="somatic-font">
                  <span className="font-yellow">7,900,000,000</span> Token
                </div>

                <div className="somatic-font mt15">
                  Airdrop - <span className="font-yellow">20%</span>
                </div>
                <div className="somatic-font">
                  <span className="font-yellow">1,580,000,000</span> Token
                </div>
                
                <div className="somatic-font mt15">
                  Public Sale - <span className="font-yellow">62.56%</span>
                </div>
                <div className="somatic-font">
                  <span className="font-yellow">4,942,240,000</span> Token
                </div>

                <div className="somatic-font mt15">
                  Liquidity - <span className="font-yellow">15.64%</span>
                </div>
                <div className="somatic-font">
                  <span className="font-yellow">1,235,560,000</span> Token
                </div>

                <div className="somatic-font mt15">
                  Unicrypt Fee - <span className="font-yellow">1.8%</span>
                </div>
                <div className="somatic-font">
                  <span className="font-yellow">142,200,000</span> Token
                </div>
              </div>
              <img src={s5_block4} className="w100pro" alt="s5_block4" />
            </div>
          </div>
        </section>
        <section>
          <div className="content">
            <div className="s5-bonobo-heading-block">
              <div>
                <div className="sub somatic-font">HOW TO BUY</div>
                <div className="main omatic-font">El BONOBO’s</div>
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
        <section id="Roadmap">
          <div className="content">
            <div className="s9-bonobo-heading-block">
              <div>
                <div className="main somatic-font">Roadmap</div>
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
        <section>
          <div className="content">
            <div className="heading milestoneheader">
              <h2 className="fs72 align-center">Milestones Ticker</h2>
              <h6 className="fs30 align-center">
                We implemented a concesus to visualize our Community Effort to
                push elbonobo all over the internet (mark please update)
              </h6>
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
        <div className="social-network-block">
          <div className="social-pc2">
            <Grid container spacing={3}>
              <Grid item xs={6} sm={4}>
                <img src={scamscanimg} className="w20rem" alt="scamscanimg" />
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className="align-center">
                  <button className="green-btn w180">Join</button>
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <img src={scamMeter} className="w10rem" alt="scamMeter" />
              </Grid>
            </Grid>
          </div>
          <div className="social-mobile2">
            <img src={scamscanimg} className="w100pro" alt="scamscanimg" />
            <button className="green-btn w100pro mt15">Join</button>
            <img src={scamMeter} className="w100pro mt15" alt="scamMeter" />
          </div>
        </div>
        <section id="team">
          <div className="container-fluid">
            <div className="s13-bonobo-content-card float-left">
              <div>
                <h2 className="">Team</h2>
                <span className="mt27 fs25 nirmala-font"><b>About us</b></span>
                <br />
                <br />
                <p className="fs25 nirmala-font">
                We are a team of independent, hardworking entrepreneurs from different expertise.
                </p>
                <p className="fs25 nirmala-font">
                Who have no fear of pushing technological boundaries and transforming knowledge into reality. We are goal oriented, team centered, and non egocentric. 
                </p>
                <span className="mt27 fs25 nirmala-font"><b>Our KODEX</b></span>
                <br />
                <br />
                <li className="fs25 nirmala-font">Be transparent</li>
                <li className="fs25 nirmala-font">Community first</li>
                <li className="fs25 nirmala-font">Democratic thinking</li>
                <li className="fs25 nirmala-font">Open Source</li>
                <li className="fs25 nirmala-font">Open Knowledge</li>
                <li className="fs25 nirmala-font">Share and caring</li>
                <li className="fs25 nirmala-font">Education first</li>
                <li className="fs25 nirmala-font">Decentralized Thinking</li>
                <li className="fs25 nirmala-font">Distributed Mindest</li>
                <br />
                <br />
                <img src={conB} alt="conB" />
              </div>
            </div>
            <div className="s13-img-block float-left">
              <div className="fline">
                <img src={team1} alt="team1" />
                <strong>The</strong>
                <strong>Developer</strong>
              </div>
              <div className="mt30">
                <img src={team2} alt="" />
                <strong>The</strong>
                <strong>Campaign Manager</strong>
                <strong>and Auditor</strong>
              </div>
              <div className="sline">
                <img src={team3} alt="" />
                <strong>The Architect</strong>
                <strong>and Researcher</strong>
              </div>
              <div className="sline">
                <img src={team4} alt="team4" />
                <strong>You</strong>
                <img className="joinBtn" src={joinB} alt="joinB" />
              </div>
            </div>
          </div>
        </section>
        <div className="social-network-block">
          <div className="social-pc2">
            <Grid container spacing={3}>
              <Grid item xs={6} sm={4}>
                <img src={scamscanimg} className="w20rem" alt="scamscanimg" />
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className="align-center">
                  <button className="green-btn w180">Join</button>
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <img src={scamMeter} className="w10rem" alt="scamMeter" />
              </Grid>
            </Grid>
          </div>
          <div className="social-mobile2">
            <img src={scamscanimg} className="w100pro" alt="scamscanimg" />
            <button className="green-btn w100pro mt15">Join</button>
            <img src={scamMeter} className="w100pro mt15" alt="scamMeter" />
          </div>
        </div>
      </div>
      <div className="footer">
          <div className="content">
            <Grid container spacing={3}>
              <Grid item xs={6} sm={7}>
                <img src={ftitle} className="w20rem" alt="ftitle" />
                <p className="footerP">El Bonobo is as community driven, decentralized Marketing Launchpad and ScamScan Audit Service.</p>
                <ul className="symbols footer-symbol">
                  <li className="symbol"><Link to={'https://twitter.com'}><img className="symbolimg mr5" src={twitterIcon} alt="twitterIcon"/></Link></li>
                  <li className="symbol"><img className="symbolimg mr5" src={redditIcon} alt="redditIcon"/></li>
                  <li className="symbol"><img className="symbolimg mr5" src={telegramIcon} alt="telegramIcon"/></li>
                  <li className="symbol"><img className="symbolimg mr5" src={mediumIcon} alt="mediumIcon"/></li>
                  <li className="symbol"><img className="symbolimg mr5" src={discordIcon} alt="discordIcon"/></li>
                  <li className="symbol"><img className="symbolimg mr5" src={facebookIcon} alt="facebookIcon"/></li>
                  <li className="symbol"><img className="symbolimg mr5" src={instagramIcon} alt="instagramIcon"/></li>
                  <li className="symbol"><img className="symbolimg mr5" src={youtubuIcon} alt="youtubuIcon"/></li>
                  <li className="symbol"><img className="symbolimg mr5" src={tiktokIcon} alt="tiktokIcon"/></li>
                  <li className="symbol"><img className="symbolimg mr5" src={githubIcon} alt="githubIcon"/></li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={5}>
                <ul className="footerUl">
                  <li>
                    <span className="font-bold">General</span><br/>
                    <span>F.A.Q</span><br/>
                    <span>Contact</span><br/>
                  </li>
                  <li>
                    <span className="font-bold">Resources</span><br/>
                    <span>Technology</span><br/>
                    <span>Papers</span><br/>
                  </li>
                  <li>
                    <span className="font-bold">Thanks to</span><br/>
                    <span>Hackmd</span><br/>
                    <span>Binance</span><br/>
                    <span>Cosmos Network</span><br/>
                    <span>Figma</span><br/>
                    <span>Webtorrent</span><br/>
                    <span>Fleek</span><br/>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </div>
      </div>
    </div>
  )
}

export default LandingPage2
