
import exo from "../resource/exo.jpg"
import bts from "../resource/bts.jpg"
import blackpink from "../resource/blackpink.jpg"
import mayday from "../resource/mayday.jpg"
import miku from "../resource/miku.jpeg"

export const eventList = [
    {
        title: "The EXO'luXion",
        desc: "Exo Planet #2 – The Exo'luxion (stylized as EXO PLANET #2 - The EXO'luXion) was the second tour of South Korean-Chinese boy band Exo. The tour began in Seoul's Olympic Gymnastics Arena on March 7, 2015. The tour was officially announced in January 2015 with the first five dates in South Korea. The tour had 39 dates throughout Asia and five dates in North America.",
        datetime: [
            {date: "1/5/2021", time: "12:00:00 - 19:00:00", price: 300},
            {date: "2/5/2021", time: "12:00:00 - 19:00:00", price: 300},
            {date: "3/5/2021", time: "12:00:00 - 19:00:00", price: 300},
            {date: "4/5/2021", time: "12:00:00 - 19:00:00", price: 300},
            {date: "5/5/2021", time: "12:00:00 - 19:00:00", price: 300}
        ],
        item: [
            {title: "Poster", price: 100},
            {title: "Postcard", price: 55},
            {title: "Light Stick", price: 40}
        ],
        cover: exo
    },
    {
        title: "HATSUNE MIKU EXPO 2021 Online",
        desc: "MIKU EXPO Digital Stars 2021 Online is a club event where fans come together to party online. With global acts and special guests, come through for a unique lineup unlike any other!",
        datetime: [
            {date: "4/1/2021", time: "11:00:00 - 16:00:00", price: 400},
            {date: "5/1/2021", time: "11:00:00 - 16:00:00", price: 400},
            {date: "8/1/2021", time: "11:00:00 - 16:00:00", price: 400}
        ],
        item: [
            {title: "Poster", price: 100},
            {title: "Postcard", price: 55},
            {title: "Light Stick", price: 40}
        ],
        cover: miku
    },
    {
        title: "Map of the Soul ON:E",
        desc: "Map of the Soul ON:E (stylized in all caps) were two pay-per-view streaming concerts by BTS to promote their Map of the Soul series, including their sixth mini album, Map of the Soul: Persona and their fourth studio album, Map of the Soul: 7. The concerts were held both on October 10, 2020 and October 11, 2020 online at the Olympic Gymnastics Arena.",
        datetime: [
            {date: "8/10/2021", time: "13:00:00 - 20:00:00", price: 350},
            {date: "9/10/2021", time: "13:00:00 - 20:00:00", price: 350},
            {date: "10/10/2021", time: "13:00:00 - 20:00:00", price: 350}
        ],
        item: [
            {title: "Poster", price: 100},
            {title: "Postcard", price: 55},
            {title: "Light Stick", price: 40}
        ],
        cover: bts
    },
    {
        title: "YG PALM STAGE – 2020 BLACKPINK: THE SHOW",
        desc: "BLACKPINK will be holding a global livestream concert called “The Show” on January 31. The livestream event was originally scheduled for Dec. 27, 2020, but was postponed due to safety precautions pertaining to COVID-19 in South Korea. BLACKPINK is hoping to provide comfort to fans through the online event especially amid the global pandemic.",
        datetime: [
            {date: "18/8/2021", time: "19:00:00 - 23:00:00", price: 300},
            {date: "19/8/2021", time: "19:00:00 - 23:00:00", price: 300},
            {date: "20/8/2021", time: "19:00:00 - 23:00:00", price: 300},
            {date: "21/8/2021", time: "19:00:00 - 23:00:00", price: 300}
        ],
        item: [
            {title: "Poster", price: 100},
            {title: "Postcard", price: 55},
            {title: "Light Stick", price: 40}
        ],
        cover: blackpink
    },
    {
        title: "Mayday Live in the Sky",
        desc: "Fans of Taiwan’s favourite rock band Mayday are in luck as the band is holding an online concert this weekend! Ever since Mayday’s first concert at the Hong Kong Coliseum in 2006, the band has promised its Hong Kong fans to return to the city with a show in May every year. Needless to say, fans were devastated when this year's concert was forced to be cancelled due to the epidemic.",
        datetime: [
            {date: "8/7/2021", time: "19:00:00 - 23:00:00", price: 280},
            {date: "9/7/2021", time: "19:00:00 - 23:00:00", price: 280},
            {date: "10/7/2021", time: "19:00:00 - 23:00:00", price: 280}
        ],
        item: [
            {title: "Poster", price: 100},
            {title: "Postcard", price: 55},
            {title: "Light Stick", price: 40}
        ],
        cover: mayday
    },
]