// import { useState } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
// import './App.css'
import './index.css'
import Footer from './component/Enbas.jsx'
function App() {
  /* const [count, setCount] = useState(0) */
  return <> 
    <div>
            <div class="head">
                <p><img src="/fontawesome-free-6.7.2-web/logo.svg" alt="logoHotel.com" /></p><p style={{color:"red"}}>Shop travel</p>
                <div class="sign">
                    <p class="download-app">
                        Get the app <i className='fa fa-download'></i>
                    </p>
                    <p><a href="">USD </a></p> <p><a href=""> List your property</a></p>
                    <p><a href="">Suppot Trips</a></p> <a href=""><p><i className='fa fa-comment'></i></p></a>
                    <p><a href="">Sign in</a></p>
                </div>
            </div>

            <div className="firstImage">
                <div className="all">
                    <h1 className="message">Where to next ?</h1>
                    <div className='blanc'>
                        <div class="destination">
                            <span><i className='fa fa-map-marker'></i></span>
                            <span>
                                <span className='where'>Where to?</span><br />
                                <span> United Arab Emirates</span>
                            </span>
                        </div>
                        <div class="date">
                            <span><i className='fa fa-calendar'></i></span>
                            <span>
                                <span>Dates</span><br />
                                <span>29 Juin-1Juil</span>
                            </span>
                        </div>
                        <div class="travellers">
                            <span><i className='fa fa-user'></i></span>
                            <span>
                                <span>Travellers</span><br />
                                <span>2 travelleurs, 1room</span>
                            </span>
                        </div>
                        <span className='button'>
                            <a href=""><button>Search</button></a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="charge">
                <p className='deuxp'>
                    <span><img src="/fontawesome-free-6.7.2-web/onekey__standard.svg" alt="charging" /></span>
                    <span style={{fontWeight:"bold",paddingTop:"32px"}}>Sign in to discover our best prices and unbeatable deals</span>
                </p>
                <p><button>Sign in</button></p>
            </div>

            <div className='images'>
                <div className="un">
                    <p className="sousun">
                        <span style={{padding:"20px",fontWeight:"bold"}}>Stay 10 nights,get 1 reward night </span>
                        <span style={{paddingLeft:"20px",fontSize:"small",paddingBottom:"30px"}}>Search stay - &lt </span>
                    </p>
                    <p className="sousUn">
                        <img src="/fontawesome-free-6.7.2-web/image2.jpg" alt="fille" style={{width:"100%",height:"100%",borderRadius:"0 20px 20px 0"}} />
                    </p>
                </div>

                <div className="deux">
                    <p className="sousdeux">
                        <span style={{padding:"20px",fontWeight:"bold"}}>Plans change.Book a stay with a flexibility to cancel at any time</span>
                        <span style={{paddingLeft:"20px",fontSize:"small",paddingBottom:"30px"}}>Book now - &lt </span>

                    </p>
                    <p className="sousDeux">
                        <img src="/fontawesome-free-6.7.2-web/image1.jpg" alt="fille" style={{width:"100%",height:"100%",borderRadius:"0 20px 20px 0"}} />

                    </p>
                </div>
                <div className="trois">
                    <p className="soustrois">  
                        <span style={{padding:"20px",fontWeight:"bold"}}>Compare hotels side-by-side to find the right one for you</span>
                        <span style={{paddingLeft:"20px",fontSize:"small",paddingBottom:"30px"}}>Compare hotels - &lt </span>
                    </p>
                    <p className="sousTrois">
                        <img src="/fontawesome-free-6.7.2-web/image3.jpg" alt="fille" style={{width:"100%",height:"100%",borderRadius:"0 20px 20px 0"}} />

                    </p>
                </div>
            </div>
            <p className='recherche'>Your recently viewed properties</p>

            <div className="allstay">
                <div className="stay">
                        <p>
                            <i className='fa fa-building'></i>
                        </p>
                        <span className='tout'>
                            <span style={{fontWeight:"bold"}}> Stays in Irland</span>
                            <span>Mon,23 Jun -Tue,24 Jun</span>
                            <span>2 travellers .1room</span>
                        </span>
                </div>
                <div className="stay">
                        <p>
                            <i className='fa fa-building'></i>
                        </p>
                        <span className='tout'>
                            <span style={{fontWeight:"bold"}}> Stays in United state</span>
                            <span>Mon,23 Jun -Tue,24 Jun</span>
                            <span>2 travellers .1room</span>
                        </span>
                </div>
                <div className="stay">
                        <p>
                            <i className='fa fa-building'></i>
                        </p>
                        <span className='tout'>
                            <span style={{fontWeight:"bold"}}> Stays in Centre ville</span>
                            <span>Mon,23 Jun -Tue,24 Jun</span>
                            <span>2 travellers .1room</span>
                        </span>
                </div>

                 <div className="stay">
                        <p>
                            <i className='fa fa-building'></i>
                        </p>
                        <span className='tout'>
                            <span style={{fontWeight:"bold"}}>Stays in Cotonou</span>
                            <span>Mon,23 Jun -Tue,24 Jun</span>
                            <span>2 travellers .1room</span>
                        </span>
                </div>
            </div>
            <div className="yaahot">
                    <span className='image'>
                        <img src="/fontawesome-free-6.7.2-web/yaahot.jpg" alt="yaahot" style={{width:"100%",height:"100%",borderRadius:"20px 20px 0 0"}} />
                    </span>
                    <span className='tout'>
                        <span>YaahoT Hotel</span><br />
                        <span style={{fontWeight:"bold"}}>7.6/10 (52)</span>
                    </span>
            </div>
          
            <p style={{fontSize:"30px",fontFamily:"Arial",margin:"30px"}}>
                Discover your new favourite stay
            </p>

            <div className="images2">
                <span className='img1' >
                    <div></div>
                    <span >sea view</span>
                </span>
                <span className='img2'>
                    <div></div>
                    <span>Family friendly</span>
                </span>
                <span className='img3'>
                    <div></div>
                    <span >Appart hotel</span>
                </span>
                <span className='img4'>
                    <div></div>
                    <span >Farm</span>
                </span>
                <span className='img5'>
                    <div></div>
                    <span >Cottage</span>
                </span>

            </div>
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            
            <p style={{fontSize:"30px",fontFamily:"Arial",margin:"30px"}}>
               Recommended stays for you <br />
               <span style={{fontSize:"15px",fontFamily:"Arial"}}> Based on your most recently viewed property</span>
            </p>
            <div className="images3">
                <div className='container1'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/heaven.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>New Heaven Hôtel</span>
                            <span>Yaounde</span>
                            <span style={{display:"flex"}}><button style={{color:"white", backgroundColor:"green",width:"38px",height:"24px",border:"none",borderRadius:"3px",margin:"4px" }}>8.2</button><span>Very good(20 reviews)</span></span>
                        </span>
                        <span className='span2'>
                                <span>£89</span>
                                <span>For 1 room</span>
                                <span>Include taxes & fees</span>
                                <span>23 Jun -24 Jun</span>
                        </span>
                    </div>                    

                </div>

                <div className='container1'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/frites.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Albatros Prenium Hôtel</span>
                            <span>Yaounde</span>
                            <span style={{display:"flex"}}><button style={{color:"white", backgroundColor:"green",width:"38px",height:"24px",border:"none",borderRadius:"3px",margin:"4px" }}>10.0</button><span>Exceptional(20 reviews)</span></span>
                        </span>
                        <span className='span2'>
                                <span>£99</span>
                                <span>For 1 room</span>
                                <span>Include taxes & fees</span>
                                <span>23 Jun -24 Jun</span>
                        </span>
                    </div>                    

                </div>
                <div className='container1'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/bastos.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Star Land Hôtel Bastos</span>
                            <span>Yaounde</span>
                            <span style={{display:"flex"}}><button style={{color:"white", backgroundColor:"green",width:"38px",height:"24px",border:"none",borderRadius:"3px",margin:"4px" }}>8.8</button><span>Fabulous(56 reviews)</span></span>
                        </span>
                        <span className='span2'>
                                <span>£288</span>
                                <span>For 1 room</span>
                                <span>Include taxes & fees</span>
                                <span>23 Jun -24 Jun</span>
                        </span>
                    </div>                    

                </div>

                    <div className='container1'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/unitedinternational.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>United Hôtel International</span>
                            <span>Yaounde</span>
                            <span style={{display:"flex"}}><button style={{color:"white", backgroundColor:"green",width:"38px",height:"24px",border:"none",borderRadius:"3px",margin:"4px" }}>9.4</button><span>Very good(20 reviews)</span></span>
                        </span>
                        <span className='span2'>
                                <span>£157</span>
                                <span>For 1 room</span>
                                <span>Include taxes & fees</span>
                                <span>23 Jun -24 Jun</span>
                        </span>
                    </div>                    

                </div>

         

                <div className='container1'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/medon.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Résidence Hotélière MEDON <br/>Palace,Bastos</span>
                            <span>Yaounde</span>
                            <span style={{display:"flex"}}><button style={{color:"white", backgroundColor:"green",width:"38px",height:"24px",border:"none",borderRadius:"3px",margin:"4px" }}>8.0</button><span>Very Good(4 reviews)</span></span>
                        </span>
                        <span className='span2'>
                                <span>£78</span>
                                <span>For 1 room</span>
                                <span>Include taxes & fees</span>
                                <span>23 Jun -24 Jun</span>
                        </span>
                    </div>                    

                </div>

                 <div className='container1'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/lagon.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Le Lagon Club & Affaires <br/>Palace,Bastos</span>
                            <span>Yaounde</span>
                            <span style={{display:"flex"}}><button style={{color:"white", backgroundColor:"green",width:"38px",height:"24px",border:"none",borderRadius:"3px",margin:"4px" }}>9.4</button><span>Exceptional (3 reviews)</span></span>
                        </span>
                        <span className='span2'>
                                <span>£178</span>
                                <span>For 1 room</span>
                                <span>Include taxes & fees</span>
                                <span>23 Jun -24 Jun</span>
                        </span>
                    </div>                    

                </div>
            


                <div className='container1'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/bastos.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Star Land Hôtel Bastos</span>
                            <span>Yaounde</span>
                            <span style={{display:"flex"}}><button style={{color:"white", backgroundColor:"green",width:"38px",height:"24px",border:"none",borderRadius:"3px",margin:"4px" }}>8.8</button><span>Fabulous(56 reviews)</span></span>
                        </span>
                        <span className='span2'>
                                <span>£288</span>
                                <span>For 1 room</span>
                                <span>Include taxes & fees</span>
                                <span>23 Jun -24 Jun</span>
                        </span>
                    </div>                    

                </div>
            </div>    


  {/* ---------------------------------------------------------------------------------------------------------------------------------------------        */}

           <p style={{fontSize:"30px",fontFamily:"Arial",margin:"30px"}}>
               Explore these unique stays <br />
               <span style={{fontSize:"15px",fontFamily:"Arial"}}> Showing deals for 11Jul-13Jul</span>
            </p>

            <div className="images3">
                <div className='container2'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/canion.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{display:"flex"}}><button style={{color:"white", backgroundColor:"green",width:"38px",height:"24px",border:"none",borderRadius:"3px",margin:"4px" }}>9.2</button><span>Wonderful(112 reviews)</span></span>
                            <span style={{fontWeight:"bold"}}>Grand Carnyon Glamping Resort</span>
                            <span>Meadview</span>
                        </span>
                        <span className='span2'>
                                <span>$270</span>
                                <span>£6333 total</span>
                                <span>Include taxes & fees</span>
                                <button style={{color:"white", backgroundColor:"red",width:"80px",height:"28px",border:"none",borderRadius:"3px",margin:"4px" }}>10% off</button>

                        </span>
                    </div>                    

                </div>

                <div className='container2'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/canion1.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{display:"flex"}}><button style={{color:"white", backgroundColor:"green",width:"38px",height:"24px",border:"none",borderRadius:"3px",margin:"4px" }}>9.2</button><span>Wonderful(11 reviews)</span></span>
                            <span style={{fontWeight:"bold"}}>Stagecoach Trails Guest Ranch</span>
                            <span>Yuka</span>
                        </span>
                        <span className='span2'>
                                <span>$637</span>
                                <span>$1,546 total</span>
                                <span>Include taxes & fees</span>
                                <button style={{color:"white", backgroundColor:"red",width:"80px",height:"28px",border:"none",borderRadius:"3px",margin:"4px" }}>10% off</button>

                        </span>
                    </div>                    

                </div>

                <div className='container2'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/casa.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{display:"flex"}}><button style={{color:"white", backgroundColor:"green",width:"38px",height:"24px",border:"none",borderRadius:"3px",margin:"4px" }}>8.8</button><span>Excellent(10 reviews)</span></span>
                            <span style={{fontWeight:"bold"}}>Casa Luna Vinedo</span>
                            <span>Vale de Guadaloupe</span>
                        </span>
                        <span className='span2'>
                                <span>$147</span>
                                <span>$13333 total</span>
                                <span>Include taxes & fees</span>
                                <button style={{color:"white", backgroundColor:"red",width:"80px",height:"28px",border:"none",borderRadius:"3px",margin:"4px" }}>10% off</button>

                        </span>
                    </div>                    

                </div>

                <div className='container2'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/canion3.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{display:"flex"}}><button style={{color:"white", backgroundColor:"green",width:"38px",height:"24px",border:"none",borderRadius:"3px",margin:"4px" }}>9.0</button><span>Wonderful(148 reviews)</span></span>
                            <span style={{fontWeight:"bold"}}>Bandy Canyon Ranch</span>
                            <span>Escondido</span>
                        </span>
                        <span className='span2'>
                                <span>$357</span>
                                <span>$1855 total</span>
                                <span>Include taxes & fees</span>
                                <button style={{color:"white", backgroundColor:"red",width:"80px",height:"28px",border:"none",borderRadius:"3px",margin:"4px" }}>10% off</button>

                        </span>
                    </div>                    

                </div>

                <div className='container2'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/canion4.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{display:"flex"}}><button style={{color:"white", backgroundColor:"green",width:"38px",height:"24px",border:"none",borderRadius:"3px",margin:"4px" }}>9.2</button><span>Wonderful( reviews)</span></span>
                            <span style={{fontWeight:"bold"}}>Grand Carnyon Glamping Resort</span>
                            <span>Meadview</span>
                        </span>
                        <span className='span2'>
                                <span>£270</span>
                                <span>£6333 total</span>
                                <span>Include taxes & fees</span>
                                <button style={{color:"white", backgroundColor:"red",width:"80px",height:"28px",border:"none",borderRadius:"3px",margin:"4px" }}>10% off</button>

                        </span>
                    </div>                    

                </div>

                <div className='container2'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/canion6.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{display:"flex"}}><button style={{color:"white", backgroundColor:"green",width:"38px",height:"24px",border:"none",borderRadius:"3px",margin:"4px" }}>9.2</button><span>Wonderful( reviews)</span></span>
                            <span style={{fontWeight:"bold"}}>Grand Carnyon Glamping Resort</span>
                            <span>Meadview</span>
                        </span>
                        <span className='span2'>
                                <span>$270</span>
                                <span>$6333 total</span>
                                <span>Include taxes & fees</span>
                                <button style={{color:"white", backgroundColor:"red",width:"80px",height:"28px",border:"none",borderRadius:"3px",margin:"4px" }}>10% off</button>

                        </span>
                    </div>                    

                </div>
            </div>
    {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------      */}
            
            <div className='link' >
                <span style={{fontSize:"15px",fontFamily:"Arial",margin:"10px"}}> <a href=""> Beach</a></span>
                <span style={{fontSize:"15px",fontFamily:"Arial",margin:"10px"}}> <a href="">Culture</a></span>
                <span style={{fontSize:"15px",fontFamily:"Arial",margin:"10px"}}> <a href="">Ski</a></span>
                <span style={{fontSize:"15px",fontFamily:"Arial",margin:"10px"}}> <a href=""> Family</a></span>
                <span style={{fontSize:"15px",fontFamily:"Arial",margin:"0px"}}> <a href=""> Wellness and Relaxation</a></span>

            </div>
            <hr  style={{margin:"30px"}}/>

             <div className="images3">

               <div className='container3'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/nungwi.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Nungwi</span>
                            <span>Unguja North Region, Tanzania</span>
                        </span>
                        <span className='span2'>
                                <span>$202</span>
                                <span>avg. nightly price</span>
                        </span>
                    </div>                    

                </div>

                    <div className='container3'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/lagos.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Lagos</span>
                            <span>Faro District,Portugal</span>
                        </span>
                        <span className='span2'>
                                <span>$184</span>
                                <span>avg. nightly price</span>
                        </span>
                    </div>                    

                </div>

                <div className='container3'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/mykonos.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Mykonos</span>
                            <span>South Aegean ,Grece</span>
                        </span>
                        <span className='span2'>
                                <span>$361</span>
                                <span>avg. nightly price</span>
                        </span>
                    </div>                    

                </div>

                   <div className='container3'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/lome.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Lomé</span>
                            <span>Maritime Region, Togo</span>
                        </span>
                        <span className='span2'>
                                <span>$85</span>
                                <span>avg. nightly price</span>
                        </span>
                    </div>                    

                </div>

                <div className='container3'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/cotonou.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Cotonou</span>
                            <span>Littoral,Benin</span>
                        </span>
                        <span className='span2'>
                                <span>$170</span>
                                <span>avg. nightly price</span>
                        </span>
                    </div>                    

                </div>

                <div className='container3'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/miami.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Miami Beach</span>
                            <span>Florida,United States of America</span>
                        </span>
                        <span className='span2'>
                                <span>$285</span>
                                <span>avg. nightly price</span>
                        </span>
                    </div>                    

                </div>

                 <div className='container3'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/accra.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Accra</span>
                            <span>Accra Region,Ghana</span>
                        </span>
                        <span className='span2'>
                                <span>$114</span>
                                <span>avg. nightly price</span>
                        </span>
                    </div>                    

                </div>

                   <div className='container3'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/mahe.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Mahé Island</span>
                            <span>Seychelles</span>
                        </span>
                        <span className='span2'>
                                <span>$543</span>
                                <span>avg. nightly price</span>
                        </span>
                    </div>                    

                </div>

                   <div className='container3'>
                    <div className="div1" style={{background:"url(/fontawesome-free-6.7.2-web/lagos1.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", borderRadius:"20px 20px 0 0"}}></div>
                    <div className="div2">
                        <span className='span1'>
                            <span style={{fontWeight:"bold"}}>Lagos</span>
                            <span>Lagos,Nigéria</span>
                        </span>
                        <span className='span2'>
                                <span>$109</span>
                                <span>avg. nightly price</span>
                        </span>
                    </div>                    

                </div>


            </div>

    {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------      */}


            <div className="saidi">
                <div className="image"><img src="/fontawesome-free-6.7.2-web/famille.webp" alt="" /></div>
                <div className="texte" >
                        <div><img src="/fontawesome-free-6.7.2-web/saidi.webp" alt="saudi" /></div>
                        <span style={{overflow:"hidden"}}>
                            <h3>Experience someting différent in Saudi</h3>
                            <span>Explore mountain villages,dive beneath the Red Sea or discover vibrant Riyadh</span>
                        </span>     
                </div>
            </div>

            <div className="graphe">
                <div className="image"><img src="/fontawesome-free-6.7.2-web/diagrame.png" alt="graphe"/></div>
                <div className='texte'>
                    <h3>Inspiration awaits in Ras Al Khaimah</h3>
                    <p>Discoder a unique blend pf natue,hospitality and generosity of spirit</p>
                </div>
            </div>

            <div className="images4">
                <div style={{background:"url(/fontawesome-free-6.7.2-web/Beach.avif)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",borderRadius:"20px"}}>
                    <div></div>
                    <span style={{color:"white", fontWeight:"bold"}}>Beaches</span>
                </div>
                <div style={{background:"url(/fontawesome-free-6.7.2-web/activitie.avif)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",borderRadius:"20px"}}>
                    <div></div>
                    <span style={{color:"white", fontWeight:"bold"}}>Activities</span>
                </div>
                <div style={{background:"url(/fontawesome-free-6.7.2-web/culture.avif)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",borderRadius:"20px"}}>
                    <div></div>
                    <span style={{color:"white", fontWeight:"bold"}}>Culture</span>
                </div>
            </div>

            <div className="images5">
                <div className="image"><img src="/fontawesome-free-6.7.2-web/piscine.webp" alt="" /></div>
                <div className="texte">
                    <h3 style={{fontSize:"25px"}}>
                        With the Hotels.com app,you can:
                    </h3>
                        <ul >
                            <li>Save on select hotels</li>
                            <li>Earn one reward night* for every 10 nights you stay</li>
                            <li>Search,book,and save on the go</li>
                        </ul>
                        <p style={{fontWeight:"bold"}}>Scan thr QR code with your device camera an ddownload our app</p>
                        <p><a href="" style={{color:"#1668e3", textDecoration:"underline"}}>*See Hotels.com Rewards terms & conditions</a></p>
                </div>
                <div className="codeQR"><img src="/fontawesome-free-6.7.2-web/QR.png" alt="codeqQR" /></div>
            </div>

            <Footer/> 
</div>

</>

}
export default App
