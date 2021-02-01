// // boro kono object theke property ber kora ata kei distructure bole
// const person = {name:'Moyuri Akther', age: 23, work:'student', phone: '017238272752', father:'Rabiul Islam', mother:'Mousumy Begum', spouse:'Suhail Selim Anik', address: 'Boda Panchagarh'};
// const {phone, spouse, address} = person;
// console.log(phone, spouse, address);


//array distructure mane boro kono array theke nirdristo kono value ber kora
const friends =['salman khan', 'sharukh khan', 'amir khan', 'saif ali khan'];
const [chotoFriend, ...olderF] = friends;
console.log(olderF);

const complexObject = {
    name:'Riva',
    info: {
        address :'kathal bagan',
        leader: 'tiger leader',
    }

}

const {leader} = complexObject.info;
console.log(leader);