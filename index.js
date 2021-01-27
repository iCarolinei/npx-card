#!/usr/bin/env node
/* leny/spooknick*/


const boxen = require("boxen");
const chalk = require("chalk");
const terminalImage = require('terminal-image');
const got = require('got');

const log = console.log;
const NEWLINE = "\n";
const EMPTYLINE = "";


const data = {
    name: chalk.hex("#DDA0DD").bold("C") + chalk.red.bold("a") + chalk.hex('##FFA500')("r") + chalk.yellow("o") + chalk.green("l") + chalk.blue("i") + chalk.black("n") + chalk.red("e") + " " + chalk.hex('##FFA500')("J") + chalk.yellow("a") + chalk.green("n") + chalk.blue("s") + chalk.white("e") + chalk.hex("#DDA0DD")("n") + "  🦄",
    work: chalk.red("Junior web"),
    npm: chalk.hex('##FFA500')("https://npmjs.com/") + chalk.red("~spooknick"),
    github: chalk.yellow("https://github.com/") + chalk.hex('##FFA500')("iCarolinei"),
    linkedin: chalk.green("https://linkedin.com/in/") + chalk.yellow("Caroline"),
    web: chalk.blue("https://idonthaveaweb.sad"),  
    npx: chalk.white("npx") + " " + chalk.white("spooknick"),
    labelWork: chalk.black.bold("Work:"),
    labelNpm: chalk.black.bold("npm:"),
    labelGitHub: chalk.black.bold("GitHub:"),
    labelWeb: chalk.black.bold("Web:"),
    labelCard: chalk.black.bold("Card:"),
};


console.log ( "a little archer just like that !");

console.log('         /|   \   ');
console.log('        /_|_{)/   ');
console.log(chalk.red('---<<') + '   | |  )    ');
console.log('        \\ |  (    ');
console.log('         \\|__)    ');
console.log('          \\ |__   ');
console.log('           ~    ~ ');

 
(async () => {
    const body = await got('https://www.vhv.rs/dpng/d/425-4256407_anime-pokemon-png-transparent-image-fat-pikachu-png.png').buffer();
    let img = await terminalImage.buffer(body, {width: 14, height: 14});

    let imgParts = img.split(NEWLINE);
    let sep = "    ";

    console.log(
        chalk.hex("#FFD700")(
            boxen(
                [
                    `                         ${data.name} `,
                    EMPTYLINE,
                     `                  ${data.labelWork} ${data.work}`,
                     imgParts[0] + EMPTYLINE,
                     imgParts[1] + sep + `${data.labelNpm} ${data.npm}`,
                     imgParts[2] + sep +`${data.labelGitHub} ${data.github}`,
                     imgParts[3] + sep +`${data.labelWeb} ${data.web}`,
                     imgParts[4] + EMPTYLINE,
                     imgParts[5] + sep + `${data.labelCard} ${data.npx}`,
                     imgParts[6]
                ].join(NEWLINE) ,
    
                {
                    padding: {top : 3,bottom: 3 , left : 5,right:15},
                    margin: {top : 1,bottom: 1, left : 0,right:0},
                    borderStyle: "bold",
                   
                },
            ),
        ),
    );
    //console.log(await terminalImage.file('img.jpeg', {width: '50%', height: '50%'}));
})();


