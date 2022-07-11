const container = document.querySelector('.container')
const buttonAdd = document.querySelector('.btn-add')
const buttonRemove = document.querySelector('.btn-remove')

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]


const emails = [
    "<b>Updates -</b> Hello, You're receiving this email because we are updating our terms and services",
    "<b>Let us know your notification preferences - </b> Express your notification preferences | 50% Sale is ending soon",
    "<b>Thank you for choosing us - </b> Hi, We just want to take this opportunity to thank you for choosing ...",
    "<b>About the report - </b> Have you completed a revision of the Marks report, and if so, may I have a copy of it? ...",
    "<b>Account warning - </b> Account sign in from a new device ...",
    "<b>Are you still with us? - </b> Claim your personal discount and start learning with your perfect program",
    "<b>Product pricing - </b> Whether you're a team of 2 or 2,000, our product can be customized for your organization",
    "<b>Info - </b> Sure, I'll get it done",
    "<b>No subject - </b> attachment",
    "<b>Following up on our call - </b> Hi, Thank you for attending the call. It was really nice to learn about your business. . .",
    "<b>About the company's website - </b> Good Afternoon, Further to your last email regarding the proposed changes to the design of..."
]

let index = 0

let emailIndex = 0

function getEmailIndex() {
    emailIndex++
    if (emailIndex > 11) {
        emailIndex = 1
    }
    return emailIndex-1
}


function addMail() {

    var d = new Date()

    d.setDate(d.getDate() - index)

    let div = document.createElement("div")
    div.innerHTML = `
    
    <div class="mail idx${index}">
        <input type="checkbox">
        <div class="textcontent">   
            ${emails[getEmailIndex()]}
        </div>
        <div class="time">
            ${month[d.getMonth()] + " " + d.getDate()}
        </div>
    </div>

    `

    container.appendChild(div)
}

for(let i = 0; i < 9; i++) {
    index++
    addMail()
}

buttonAdd.addEventListener('click', () => {
    index++
    addMail()
})

buttonRemove.addEventListener('click', () => {
    
    if(!(index < 1)) {
        let mailDiv = document.querySelector('.idx' + index)
        mailDiv.remove()

        index--
    }

})
