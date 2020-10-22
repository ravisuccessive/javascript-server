const users =[
    {
        traineeEmail: 'ravi.singh@successive.tech',
        reviewerEmail: 'yogesh.singh@successive.tech',
    },
    {
        traineeEmail: 'sumit.kumar@successive.tech',
        reviewerEmail: 'chirag.arora@successive.com',
    },
    {
        traineeEmail: 'prashant.kumar@successive.tech',
        reviewerEmail: 'shalu.sharma@successive.techa',
    }
]
function validateEmail(email){
    regex=/@successive.tech$/i;
    return regex.test(email);
}
function validateUsers(users) {
    const invalidUsers = [];
    const validUsers = [];
    users.forEach(function (user) {
        const{traineeEmail, reviewerEmail} = user;
        if(validateEmail(traineeEmail)){
            validUsers.push(traineeEmail);
        }
        else{
            invalidUsers.push(traineeEmail);
        }
        if(validateEmail(reviewerEmail)){
            validUsers.push(reviewerEmail)
        }
        else{
            invalidUsers.push(reviewerEmail)
        }
    }
)
let validNumber=validUsers.length;
let invalidNumber=invalidUsers.length;
console.log(`${validNumber} Users are Valid:`, validUsers)
console.log(`${invalidNumber} Users are Invalid:`, invalidUsers)
}
validateUsers(users);