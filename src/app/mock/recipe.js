var faker = require("faker");

function generateRecipes() {
    var hotels = [];

    for (var id = 0; id < 15; id++) {
        var idUser = faker.random.uuid();
        var title = faker.company.companyName();
        var address = faker.address.city() + ', ' + faker.address.streetAddress();
        var description = faker.lorem.sentence();
        var number = faker.random.number({ min: 1, max: 13 });
        var picture = `${faker.image.city()}?random=${Date.now()}`;
        var photo = `${faker.image.nightlife()}?random=${Date.now()}`
        var temperature = faker.random.number({ min: -25, max: 40 });
        var wind = faker.random.number(15);
        var icon = faker.random.arrayElement([
            "blizzard",
            "chill",
            "cloudy",
            "drizzle",
            "dry",
            "fog",
            "freeze",
            "hail",
            "hot",
            "lightning",
            "rain",
            "rainstorm",
            "rainy",
            "snow",
            "snowstorm",
            "snowy",
            "storm",
            "sun",
            "sunny",
            "thunderstorm",
            "tornado",
            "tsunami",
            "warm"
        ]);
        var followers = faker.random.number(1000);
        var following = faker.random.number(500);
        var stars = faker.random.number(5);

        var comments = function() {
            var amount = faker.random.number({ min: 1, max: 5 });
            var arr = [];
            for (var i = 0; i < amount; i++) {
                var key = {
                    'author': faker.name.findName(),
                    "date": faker.date.past().toLocaleDateString(),
                    'comment': faker.lorem.paragraph()
                }
                arr.push(key);
            }

            return arr;
        }

        hotels.push({
            "id": id,
            "name": title,
            "description": description,
            "exposition": faker.lorem.paragraphs(),
            "images": {
                "main": "/assets/Images/All/" + faker.random.number({ min: 1, max: 13 }) + ".jpg"
            },
            "author": {
                "id": idUser,
                "name": faker.name.firstName(),
                "surname": faker.name.lastName(),
            },
            "date": {
                "first": faker.date.past()
            },
            "meta": {
                "favorites": faker.random.number(500),
                "save": faker.random.number(50)
            }
        })
    }

    return { "recipes": recipes }
}

module.exports = generateRecipes;

//   title: 'Universal Cabana-2',
//   address: 'Orlando',
//   description: 'Best two!',
//   phone: '+3242353434',
//   picture: 'assets/images/1.jpg',
//   photos: [
//     'assets/images/res.jpg',
//     'assets/images/r1.jpg'
//   ],
//   weather:  {
//     temperature: 15,
//     wind: 1,
//     icon: 'cloud'
//   },
//   profile: {
//     followers: 200,
//     following: 18,
//     photo: 'assets/images/b1.jpg'
//   },
//   stars: 3