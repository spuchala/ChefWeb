export class ChefData {
    chefs: Array<any>;

    constructor() {
        this.chefs = [{
            id: 1,
            name: "Sanjeev Kapoor",
            specialities: ["Gujarati", "South Indian", "Butter Masala"],
            description: "Into the buffer believes a baffling wrap. The succeeding passage kisses ",
            imageUrl: "https://source.unsplash.com/random/200x200",
            location: "Reston",
            rating: 4,
            menu: [{
                name: "Bhel Puri", description: "a tangy combination of puffed rice crisps, lentil vermicelli etc. tossed with chutney.",
                "price": "$3.50"
            },
            {
                name: "Samosa", description: "flaky pastry stuffed with lightly spiced peas and potatoes",
                "price": "$4.50"
            },
            {
                name: "Mushroom Paneer", description: "a medley of vegetables in a cilantro and mint sauce.",
                "price": "$10.50"
            }],
            reviews: [{
                id: 1,
                review: "Great place for Indian fast food and snacks or say quick bites. You can eat in. I have always found place to sit and eat. Does not provide table service." +
                    "4 Stars only as service can be much faster and place can be a little more pleasant to sit and eat.",
                reviewBy: "Shankar",
                rating: 3
            },
            {
                id: 2,
                review: "Looks like their chef is changed. It use to be good, but my last 2 experience were very bad. Idlis were not fresh, probably a day or two old and they cold" +
                    "and hard. Vada was too oily, had a very bad feeling when i took first bite of it. Out of curiosity when I squeezed it, around 30 gm of oil came out just from 1 vada...wish i had taped it and posted here"
                , reviewBy: "Sadhika"
                , rating: 4
            }]
        },
        {
            id: 2,
            name: "Vikas Khanna",
            specialities: ["Banana Ashrafi", "Paneer Butter Masala", "Kesari"],
            description: "Into the buffer believes a baffling wrap. The succeeding passage kisses ",
            imageUrl: "https://source.unsplash.com/random/200x200",
            location: "Herndon",
            rating: 4,
            menu: [{
                id: 1,
                name: "Bhel Puri", description: "a tangy combination of puffed rice crisps, lentil vermicelli etc. tossed with chutney.",
                "price": "$3.50"
            },
            {
                id: 2,
                name: "Samosa", description: "flaky pastry stuffed with lightly spiced peas and potatoes",
                "price": "$4.50"
            },
            {
                id: 3,
                name: "Mushroom Paneer", description: "a medley of vegetables in a cilantro and mint sauce.",
                "price": "$10.50"
            }]
        },
        {
            id: 3,
            name: "Vivek Singh",
            specialities: ["Banana Ashrafi", "Paneer Butter Masala", "Kesari"],
            description: "Into the buffer believes a baffling wrap. The succeeding passage kisses ",
            imageUrl: "https://source.unsplash.com/random/200x200",
            rating: 4,
            location: "Chantilly",
            menu: [{
                id: 1,
                name: "Bhel Puri", description: "a tangy combination of puffed rice crisps, lentil vermicelli etc. tossed with chutney.",
                "price": "$3.50"
            },
            {
                id: 2,
                name: "Samosa", description: "flaky pastry stuffed with lightly spiced peas and potatoes",
                "price": "$4.50"
            },
            {
                id: 3,
                name: "Mushroom Paneer", description: "a medley of vegetables in a cilantro and mint sauce.",
                "price": "$10.50"
            }]
        },
        {
            id: 4,
            name: "Vivek Singh",
            specialities: ["Banana Ashrafi", "Paneer Butter Masala", "Kesari"],
            description: "Into the buffer believes a baffling wrap. The succeeding passage kisses ",
            imageUrl: "https://source.unsplash.com/random/200x200",
            rating: 4,
            location: "Sterling",
            menu: [{
                id: 1,
                name: "Bhel Puri", description: "a tangy combination of puffed rice crisps, lentil vermicelli etc. tossed with chutney.",
                "price": "$3.50"
            },
            {
                id: 2,
                name: "Samosa", description: "flaky pastry stuffed with lightly spiced peas and potatoes",
                "price": "$4.50"
            },
            {
                id: 3,
                name: "Mushroom Paneer", description: "a medley of vegetables in a cilantro and mint sauce.",
                "price": "$10.50"
            }]
        },
        {
            id: 5,
            name: "Vivek Singh",
            specialities: ["Banana Ashrafi", "Paneer Butter Masala", "Kesari"],
            description: "Into the buffer believes a baffling wrap. The succeeding passage kisses ",
            imageUrl: "https://source.unsplash.com/random/200x200",
            rating: 4,
            location: "RockVille",
            menu: [{
                id: 1,
                name: "Bhel Puri", description: "a tangy combination of puffed rice crisps, lentil vermicelli etc. tossed with chutney.",
                "price": "$3.50"
            },
            {
                id: 2,
                name: "Samosa", description: "flaky pastry stuffed with lightly spiced peas and potatoes",
                "price": "$4.50"
            },
            {
                id: 3,
                name: "Mushroom Paneer", description: "a medley of vegetables in a cilantro and mint sauce.",
                "price": "$10.50"
            }]
        }];
    }
}