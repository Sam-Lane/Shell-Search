const open = require('open');

class ShellSearch {

    buildQuery(queryArray) {
        let stringQuery = "";

        queryArray.forEach(word => {
            stringQuery += "+" + word;
        });

        return stringQuery.substr(1);
    }

    search(query){
        if (query){
            open("https://www.google.com/search?q=" + query);
        }
    }

    encode(char) {
        const encoding = {
            " ": "%20",
            "!": "%21",
            '"': "%22",
            "#": "%23",
            "$": "%24",
            "%": "%25",
            "&": "%26",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "*": "%2A",
            "+": "%2B",
            ",": "%2C",
            "-": "%2D",
            ".": "%2E",
            "/": "%2F",
            ":": "%3A",
            ";": "%3B",
            "<": "%3C",
            "=": "%3D",
            ">": "%3E",
            "?": "%3F",
            "@": "%40",
        }
        return encoding[char];
    }
}

module.exports = ShellSearch;