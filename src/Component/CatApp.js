import React from "react";
import Contact from "../Component/Contact"
import imgcat1 from "../images/cat1.jfif"
import imgcat2 from "../images/cat2.jfif"
import imgcat3 from "../images/cat3.jfif"
import imgcat4 from "../images/cat4.jfif"
import imgcat5 from "../images/cat5.jfif"
import imgcat6 from "../images/cat6.jfif"
import imgcat7 from "../images/cat7.jfif"
import imgcat8 from "../images/cat8.jfif"
import imgcat9 from "../images/chhomu.jfif"
import imgcat10 from "../images/cat9.jfif"
import imgcat11 from "../images/cat10.jfif"
import imgcat12 from "../images/cidcat.jfif"
import imgicon from "../images/caticon.png"
import img from "../images/headcat.jpeg"
import Navbar from "../Component/Navbar"


export default function CatApp(){
      return(
         <div className="catname">
            <div className="firstclass">
               <h4>Hurry up! To get your new family memeber</h4>
               <button className="catshop">Shop Now</button>
            </div>
            <div id="navb">
               <img src={imgicon} alt="" />
               <h2>@catmeow.com</h2>
               <Navbar />
            </div>
            <div className="secondclass">
            <h1>We welcome your's in India's best catselling app 💕</h1>
            <h3>We provide cats for sale and Adoption. Do fast and shop now.<br/></h3>
               <img src={img} alt="" />
            </div>
         <h1 className="second">Different Cat breeds for sale we have!😊</h1>
         <div className="cabox">
            <div className="catset">
                <Contact
                   image={imgcat1}
                   name="Mr.Whickerson"
                   phone="(212) 555-1234"
                   email="mr.whickerson@catmap.meow"
                   price="Price-500"
                />
            </div>
            <div className="catset">
                <Contact
                   image={imgcat10}
                   name="Mr.duckley"
                   phone="(212) 555-1234"
                   email="duckley@catmap.meow"
                   price="Price-800"
                />
                </div>
                <div className="catset">
                <Contact
                      image={imgcat2}
                      name="Barley"
                      phone="(212) 555-1234"
                      email="mr.barley@catmap.meow"
                      price="Price-900"
                />
                </div>
                <div className="catset">
                <h1 className="secondone">Providing a market of Persian breed for sale we have do shop now.<h4>New modern and trained cat😎</h4></h1>
                 <Contact
                      image={imgcat3}
                      name="Mr.tasley"
                      phone="(212) 555-1234"
                      email="tasley@catmap.meow"
                      price="Price-1000"
                />
               </div>
               <div className="catset">
                <Contact
                   image={imgcat4}
                   name="dammy" 
                   phone="(214) 554-1234"
                   email="dammy@catmap.meow"
                   price="Price-1200"
                />
                </div>
                <div className="catset">
                <Contact
                   image={imgcat11}
                   name="navy"
                   phone="(212) 555-1234"
                   email="navy@catmap.meow"
                   price="Price-1200"
                />
                </div>
                <div className="catset">
                <h1 className="secondone">Providing a market of American breed for sale we have do shop now.<h4>New modern and trained cat😛</h4></h1>
                <Contact 
                  image={imgcat5}
                  name="Felix"
                  phone="(212) 555-1234"
                  email="felix@catmap.meow"
                  price="Price-1200"
                />
                </div>
                <div className="catset">
                <Contact 
                  image={imgcat6}
                  name="Cuvette"
                  phone="(212) 555-1234"
                  email="cuvette@catmap.meow"
                  price="Price-1100"
                />
            </div>
            <div className="catset">
               <Contact 
                  image={imgcat7}
                  name="Amilie"
                  phone="(212) 555-1234"
                  email="amilie@catmap.meow"
                  price="Price-800"
                />
                </div>
                <div className="catset">
                <h1 className="secondone">Providing a market of American breed for sale we have do shop now.<h4>New modern and trained cat😍</h4></h1>
                <Contact
                   image={imgcat12}
                   name="Mr.Whickerson"
                   phone="(212) 555-1234"
                   email="chhomu@catmap.meow"
                   price="Price-900"
                />
                </div>
                <div className="catset">
                <Contact 
                  image={imgcat8}
                  name="Devil"
                  phone="(212) 555-1234"
                  email="devil@catmap.meow"
                  price="Price-1200"
                />
                </div>
                <div className="catset">
                <Contact 
                   image={imgcat9}
                   name="Tivota"
                   phone="(212) 555-1234"
                   email="Tivota@catmap.meow"
                   price="Price-1000"
                />
               </div>
            </div>
            <div className="catlast">
            <h1>What Makes @catmeow Different from Other Cattery Marketplaces to Buy Cats for Sale Online?<h4>We Provide Best Services to buy a kitten</h4></h1>
            <h3>Choose your new Family memeber🐱‍🚀,</h3>
            <p className="para">MyKitten is a non-profitable social business model marketplace that believes to provide forever homes to cats. This is the only place where you can seek cats for sale or buy kittens for sale online in India from respected and informed registered cat breeders.

The breeders strictly adhere to their natural breeding and our volunteers are the well-trained experts who provide 24*7 on call support to our clients. We don’t believe in the cage system. MyKitten is 100% cage-free cattery marketplace. Mykitten volunteers screen every member of our breeder community for quality and make their practices transparent.

We are specialists in providing a variety of breeds like Persian Cats, Himalayan Cats, Siamese Cats, Mainecoon cats, Ragdoll Cats, Exotic Shorthair cats, Royal Bengal cats, etc and to buy cats for sale online. Though, our strong suit lies in selling or buying Cats online. Contact us if you really want to check our adorable Cats for Sale in Delhi NCR, Mumbai, Bangalore, Pune, etc.
<br/><br/>
Members of our MyKitten community prioritize the well-being of different cat breeds and kittens above all else. Mykitten cattery partners make sure their cats have a comfortable transition into your home. Together we can put an end to unethical practices and give all cats the happy comfortable life they deserve
Mykitten is social business model cattery network platform connecting cat lovers with responsible breeders across India with a motive to deliver happiness knocking at your door. Happy purring !
            </p>
            </div>
            <div className="firstfoot">
               <h1>Are you a breeder?</h1>
               <h3>It takes only a few clicks to connect with genuine pet lovers.<br /><br/><br/>Once Contact us and make a new family member😊</h3>
               <div className="secondfoot">
                  <h2>@catmeow © 2019 All Rights Reserved</h2>
                  <h2>Privacy Policy | Terms and Cnditions</h2>
               </div>
            </div>
         </div>    
      )
}

            












