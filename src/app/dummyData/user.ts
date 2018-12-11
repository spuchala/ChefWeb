export class UserData {

    user: any;

    constructor() {
        this.getChef();
    }

    getChef() {
        this.user = {
            role: "chef",
            id: 1,
            details: {
                firstName: "Sanjeev",
                lastName: "Patel",
                city: "Herndon",
                email: "shan.geek@gmail.com",
                pinCode: "20191",
                address: "22d tres",
                state: "VA"
            },
            menu: [{
                name: "Bhel Puri", description: "a tangy combination of puffed rice crisps, lentil vermicelli etc. tossed with chutney.",
                "price": "$3.50"
            },
            {
                name: "Samosa", description: "flaky pastry stuffed with lightly spiced peas and potatoes",
                "price": "$4.50"
            }],
            preferences: {
                deliverToCustomer: true,
                customerPickUp: false
            }
        }
    }
}