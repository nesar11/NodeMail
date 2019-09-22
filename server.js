
require('dotenv').config();
const modemailer = require('nodemailer');



// step 1

// transporter
let transporter = modemailer.createTransport({
    service:'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
        // user:'nesar.uddin2008@gmail.com',
        // pass:'10-10-2017'
    }
});


//step
let mailOption = {
    from : 'nesar.uddin2008@gmail.com',

    to: 'nesar.uddin100@gmail.com',
    subject: 'Tesing from local server',
    text: 'Datuk Mr. Mosheen send email to you'

}

// step 3
transporter.sendMail(mailOption, function(err, datea){
    if(err){
        console.log('Error to send email', err)
    } else{
        console.log('Email send ....')
    }
})

// dotenv
