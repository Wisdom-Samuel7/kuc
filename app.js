const express = require("express")
const app = express()
const mailer = require("nodemailer")
const path = require("path")
const subscriber = require("./db.js")

const bp = require("body-parser")

 
app.use(bp.json()) 
app.use(bp.urlencoded({extended: false}))
app.set("view engine","ejs")

app.use(express.static(path.join(__dirname)))

const transporter = mailer.createTransport({
    service : "gmail",
    auth:{
        user: "wisdomsamuel349@gmail.com",
        pass: "hgtd wscf bywx gcrj"
    }
})



app.get("/",(req,res)=>{
    res.render("../views/index")
    console.log("HOME PAGE")
})
app.post("/",async (req,res)=>{
    const {email} = req.body
    try {
        const emailCheck = await subscriber.exists({email})
   /*  
    if(email == ""){
        res.send("NO EMAIL:FILL UP THE FORM WITH AM EMAIL")
    }    
    
*/
      if(!email){
           res.send("PLEASE INPUT AN EMAIL")
       }
        if(emailCheck){
       //   console.log("USER ALREADY EXIST ")
        res.send(`<h1 style="color:crimson;text-align:center;">USER ALREADY EXIST</h1>`)

        }
        else{
            const user = await subscriber.create({
                email
            })
                console.log(email)
            const mailOpts = {
                from: "wisdsamuel9119@gmail.com",
                to: email,
                subject: "WIS-TUTOR..",
                html : ` <div style="width:100%;height:100%;font-weight:bolder;background:rgba(0,0,0,.9);color:#fff;">
                <h1 style="color:#fff;font-family:fantasy;"> KnowUr<span style="color:steelblue;font-family:cursive;">Craft</span></h1>

                <div style:"display:flex;justify-content:center;align-items:center;">
                   
                       <div style:"flex:0.4"> 
                       <img style:"border-radius:.5em;" src="https://img.freepik.com/free-vector/skill-levels-vector-knob-button-switch-education-proficiency-test-expertise-illustration_1284-42418.jpg?t=st=1709625610~exp=1709629210~hmac=17161a0cef92769ab1492d83f0c881dc4c3fc9df8b154db4bf8e33c1a6f03cae&w=740" alt="">
                       </div>

                    <div style:"flex:0.4;display:flex;flex-direction:column;gap:.2em;"> 
                      <div>
                         <p style="flex:0.4;">
                           Hi! ${email}, thank you for signing up at KnowUrCraft. Get yourself on the move to becoming a better you, by learning 
                           <h3 style="color:#fff;font-family:monospace;"> THE MORE YOU LEARN,THE MORE YOU <span style="color:light-blue">EARN</span></h3>
                           <h1 style="color:#fff;font-family:fantasy;"> WHAT WE <span style="color:light-blue">DO?</span></h1>
                               <ul>
                               <li style="margin-bottom:.1em;color:snow;" > EDUCATION >>> [ MATH AND ADVANCED SCIENCES ]</li>
                               <li style="margin-bottom:.1em;color:snow;"> MUSIC >>> [ MUSIC PRODUCTION AND MUSICAL INSTRUMENT ] </li>
                               <li style="margin-bottom:.1em;color:snow;"> TECH >>> [ FULL STACK DEVELOPMENT (WEB AND APP) ] </li>
                               </ul>
                               <button style="background:steelblue;font-weight:bolder;padding:0.5em 1em;color:#fff;border:none;border-radius:.3em;"> Enroll now </button>
                           </p>

                           <div style="flex:0.6;">

                               <div>
                                   <h1 style="color:#fff;font-family:fantasy;">What is tech ? </h1>
                                       
                                   <div>
                                   <img src="https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?t=st=1709538483~exp=1709542083~hmac=2bd64fba1d046613cefc8b613040b21065b44141b563865b7d7111c16e616304&w=740" alt=""/>
                                   </div>

                                   <p style="text-align:center;color:#fff;">
                                   Put simply, programming is giving a set of instructions to a computer to execute. If you’ve ever cooked using a recipe before, you can think of yourself as the computer and the recipe’s author as a programmer. The recipe author provides you with a set of instructions that you read and then follow. The more complex the instructions, the more complex the result!
                                   Some programming areas includes Data-science,Web and App development,Front-end and Back-end development,Cloud computing,Machine learning, Robotics,Software architecture,etc.
                                   <h2 style="text-align:center;color:lightblue;">Our focus here includes: </h2> 
                                   Software devlopment for web and app using MERN STACK TECHNOLOGIES,etc
                                   </p>
                               </div>

                               <div>
                                   <h1 style="color:#fff;font-family:fantasy;"> Music Mindset </h1>
                                       
                                   <div>
                                   <img src="https://img.freepik.com/free-photo/man-composer-producer-arranger-songwriter-musician-hands-arranging-music_169016-26744.jpg?t=st=1709540630~exp=1709544230~hmac=766556c69257dca4264a033cfd2a71e6c7bddb94edbcfaf481386d841c58bc18&w=900" alt=""/>
                                   </div>

                                   <p style="text-align:center;color:#fff;">                                            
                                      Music can have a positive, immediate impact on our mental state; fast tempos can psychologically and physiologically arouse us, helping energize us for the day. Slower, meditative tunes can help us to relax and lower our stress levels.
                                   <h2 style="text-align:center;color:lightblue;">Our focus here includes: </h2>
                                    Music production with DAWS such as Fruity loops,Cubase,etc and musical instrument
                                   </p>
                               </div>

                               <div>
                               <h1 style="color:#fff;font-family:fantasy;"> Education </h1>
                                   
                               <div>
                               <img src="https://img.freepik.com/free-photo/pensive-skilled-curly-haired-schoolgirl-looks-aside-has-thoughtful-expression-keeps-index-finger-temple-dressed-casual-wear-sits-coworking-space-against-desktop-with-necessary-things_273609-33990.jpg?t=st=1709625666~exp=1709629266~hmac=205274cfdcead7bb69b820b9af985ef75962d0c1aba7d382b0cd22cca3c0a571&w=740" alt=""/>
                               </div>

                               <p style="text-align:center;color:white;">                                            
                                  Having difficulty in Calculation, we got you covered.. We ensure you are in line
                               <h2 style="text-align:center;color:lightblue;">Our focus here includes: </h2> 
                               MATH AND SCIENCES , if in need of a separate class,do well to contact us
                           </div>
                               
                           </div>

                      <div>
                      
                        
                      </div> 

                      </div>

                    </div>
               </div>
           </div> `
            }
    
            transporter.sendMail(mailOpts,(err,data)=>{
                if(err){
                    console.log("ERROR :" + err)
                }else{
                    console.log(data.response)
                    res.redirect("/greet")
                }
            }) 
        }


    } catch (error) {
        console.log(error)
        res.redirect("/")
    }
})

app.get("/contact",(req,res)=>{
    res.render("../views/contact")
    console.log("CONTACT PAGE")
})

app.post("/contact",async (req,res)=>{
  const {email,tel,message} = req.body

  try {
    const emailCheck = await subscriber.exists({email})
     
    console.log(tel)

        if(emailCheck){

      console.log("VALID USER")

      const mailOpts = {
        from: email,
        to: "wisdsamuel9119@outlook.com",
        subject: "WIS-TUTOR..",
        html : `
            <div style="width:100%;height:100%;font-weight:bolder;>
                <h3 style="color:#fff;font-family:monospace;"> THE MORE YOU LEARN,THE MORE YOU <span style="color:light-blue">EARN</span></h3>
                <main>
                    <p style="font-weight:bolder;color:lightblue;">${tel} with ${email} is contacting :</p>
                    <p style="font-weight:bolder;color:#fff;">${message}</p>
                    
                    <img src="https://img.freepik.com/free-photo/view-3d-young-school-student_23-2151103693.jpg?t=st=1709540916~exp=1709544516~hmac=b9010667bbcf05bbf363c7fed6bcbeb92ad15492784ef47195338cc20f74e418&w=740" alt=""/>
                                    
                    <small>KnowUrCraft</small>
                </main>
            </div>
        `
    }

    transporter.sendMail(mailOpts,(err,data)=>{
        if(err){
            console.log("ERROR :" + err)
        }else{
            console.log(data.response)
            res.redirect("/greet")
        }
    })

        res.send(`<h1 style="color:gainsboro;text-align:center;">YOU REQUEST IS SENT ..</h1> <a href="/">Home page</a>`)

        }else{
            res.send(`<h1 style="color:gainsboro;text-align:center;"> JOIN US ,SO AS TO CONTACT US </h1> <a href="/">Home page</a>`)

        }
    
  } catch (error) {

     console.log(error)

  }
})

app.get("/greet",(req,res)=>{
    res.render("../views/greet")
})

app.get("/users",async (req,res)=>{
  try{
      const users = await subscriber.find({})
      console.log(users)
  }catch(error){
   console.log(error)
  }
})

app.get("/explore",(req,res)=>{
    res.render("../views/explore")
})

app.listen(4000,()=>{
    console.log("PORT 4000 PORTFOLIO SITE RUNNING")
})