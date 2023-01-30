const contacten = new Map();
contacten.set('Josef', {
    telefoon: '0612345678',
    opleding: 'Software developer'
});
constcontact=contacten.get('Josef');
contacten.set('Marion', {
    telefoon: '0687654321',
    opleding: 'Webdesigner'
});
for ( var [key, value ] of contacten.entries()){
    console.log(key + "=" + value.telefoon);
}
contacten.forEach(function (key, val){
    console.log(val + "=" + key.telefoon);
});
const employee = {
    "naam": "Jueson",
    "leeftijd" : 17,
    "geslacht" : "M",
    "adres": {
        "Straat": "Kruislaan 33",
        "Postcode" : "1099TT",
        "Woonplaats" : "Utrecht",
    }
}
let employees = [];
employees.push(employee);
employees.push({

    "naam": "Shireen",
    "leeftijd" : 17,
    "geslacht" : "V",
    "adres": {
        "Straat": "Middenweg 33",
        "Postcode" : "1099TT",
        "Woonplaats" : "Amsterdam",
    }
});
let employeess = [];
employees.push(employee);
employees.push({

    "naam": "MO",
    "leeftijd" : 26,
    "geslacht" : "M",
    "adres": {
        "Straat": "Middenweg 33",
        "Postcode" : "1099TT",
        "Woonplaats" : "Amsterdam",
    }
});
Object.entries(employees).forEach(([key, value]) => {
    sessionStorage.setItem(key, JSON.stringify(value));
});
Object.entries(employee).forEach(([key, val]) => {
    employees[key] =  sessionStorage.getItem(key, JSON.parse(val));
});
