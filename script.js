const collection = [
    {
        name: "harry potter",
        director: "David Heyman",
        releaseYear: "2001-2011",
        picture: "../image/harry-potter-logo-big__w1200.jpg",
        genre: ["fantastique"],
        cast: [
            "Daniel Radcliffe",
            "Rupert Grint",
            "Emma Watson",
            "Evanna Lynch",
        ],
    },

    {
        name: "avatar",
        director: "James Cameron",
        releaseYear: 2009,
        picture: "../image/Avatar.jpg",
        genre: ["science-fiction"],
        cast: [
            "Sam Worthington",
            "Zoe Saldana",
            "Sigourney Weaver",
            "Michelle Rodriguez",
        ],
    },
    {
        name: "Fast and Furious",
        director: "Rob Cohen",
        releaseYear: 2001,
        picture: "../image/the-fast-and-the-furious-movie-p.jpg",
        genre: ["Action"],
        cast: [
            "Vin Diesel",
            "Paul Walker",
            "Jordana Brewster",
            "Michelle Rodríguez",
        ],
    },
    {
        name: "Marvel's Avengers",
        director: "Square Enix Europe",
        releaseYear: 2020,
        picture: "../image/20217231555195_1.jpg",
        genre: ["Action-aventure"],
        cast: [
            "Stéphane Roux",
            "Marc Arnaud",
            "Ariane Aggiage",
            "Bernard Demory",
        ],
    },
    {
        name: "one piece",
        director: ["Toei Animation"],
        releaseYear: 1999,
        picture: "../image/224a775f80315460af88e759c753bb03.jpg",
        genre: ["aventure","drame", "humour",],
        cast: [
            "Mayumi Tanaka",
            "Kazuya Nakai",
            "Akemi Okamura",
            "Hiroaki Hirata",
        ],
    },
    {
        name: "cyberpunk 2077",
        director: "CD Projekt RED",
        releaseYear: 2020,
        picture: "../image/cyberpunk-next-gen_01679296.jpg",
        genre: ["Action-RPG"],
        cast: [
            "Julie Dray",
            "Jérémie Covillault",
            "Corinne Wellong",
            "Lionel Tua)",
        ],
    },
    {
        name: "Back to the Future",
        director: "Robert Zemeckis",
        releaseYear: "1985-1990",
        picture: "../image/1894233.jpg",
        genre: ["science-fiction"],
        cast: [
            "Michael J. Fox", 
            "Christopher Lloyd", 
            "Thomas F. Wilson", 
            "Claudia Wells",
        ],
    },
    {
        name: "Pirates des Caraïbes",
        director: "Walt Disney Pictures",
        releaseYear: "2003-2017",
        picture: "../image/scale.jpg",
        genre: ["Aventure ", "Action ", "Fantastique"],
        cast: [
            "Johnny Depp",
            "Orlando Bloom",
            "Keira Knightley",
            "Geoffrey Rush",
        ],
    },
    {
        name: "iron man",
        director: "Jon Favreau",
        releaseYear: 2008,
        picture: "../image/Iron_Man-108960873-large.jpg",
        genre: ["Super-héros"],
        cast: [
            "Robert Downey Jr.",
            "Gwyneth Paltrow",
            "Jon Favreau",
            "Jeff Bridges",
        ],
    },
    {
        name: "La Brea",
        director: "David Appelbaum",
        releaseYear: 2021,
        picture: "../image/La_Brea_Serie_de_TV-465732072-la.jpg",
        genre: ["Drame", "science-fiction"],
        cast: [
            "Chiké Okonkwo",
            "Jon Seda",
            "Nicholas Gonzalez",
            "Lily Santiago",
        ],
    },
];
function listElement() {

    let main = document.createElement("main");
    let section = document.createElement("section");

        let bigTitle = document.createElement("h1");
        bigTitle.textContent = "collection movie series games";
        main.appendChild(bigTitle);


    for (let element of collection) {
        let article = document.createElement("article");
        article.className = element.name.replace(" ", "-");

        let name = document.createElement("h2");
        name.innerText = element.name;
        article.appendChild(name)

        let img = document.createElement("img");
        img.setAttribute("src", element.picture);
        article.appendChild(img)

        let director = document.createElement("h3")
        director.innerText = element.director;
        article.appendChild(director)

        let realeaseYear = document.createElement("h4")
        realeaseYear.innerText = element.releaseYear;
        article.appendChild(realeaseYear)

        let genre = document.createElement("h5")
        genre.innerText = element.genre;
        article.appendChild(genre)

        let cast = document.createElement("p")
        cast.innerText = element.cast;
        article.appendChild(cast)

        section.appendChild(article)
        main.appendChild(section)
        document.body.insertBefore(main, document.getElementsByTagName("footer")[0])
    }

}
listElement();