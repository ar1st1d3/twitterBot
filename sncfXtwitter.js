/**
 * 
 *  8b,dPPYba,  88       88  ,adPPYb,d8
 *  88P'    "8a 88       88 a8     `Y88
 *  88       d8 88       88 8b       88
 *  88b,   ,a8" "8a,   ,a88 "8a,   ,d88
 *  88`YbbdP"'   `"YbbdP'Y8  `"YbbdP"Y8
 *  88                       aa     ,88
 *  88                        "Y8bbdP"
 * 
 * 
 *    _     _     _
 * __(.)<__(.)>__(.)=
 * \___) \___) \___)
 * 
*/

const puppeteer = require('puppeteer');
const username = 'SNCF_Pontoise'
const password = '***********'//mdp habituel

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

async function J1(){
    const url = "https://www.sncf.com/fr/itineraire-reservation/itineraire/liste-resultats?uic1=95306&coordX1=2.16667&coordY1=49&uic2=95500&coordX2=2.1&coordY2=49.05&date=1671518341&when=leave-at&label1=Herblay%20(Toutes%20gares)&label2=Pontoise%20(Toutes%20gares)&typeDepart=COMMUNE&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=95220&destinationCP=95000"

    browser = await puppeteer.launch({ headless: false });
    
    page = await browser.newPage();
    page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    await page.goto(url);

    //refus des cookies
    await delay(5)
    await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll')

    //recuperation des données
    let horaireJ1 = await page.evaluate(()=> {
      return document.querySelector('[class = "timetables-col-time one-sixth"] > time').innerText
    })
    console.log(horaireJ1)
    await page.close();
    
    let horaireJ1A = horaireJ1.split('')
    horaireJ1 = `${horaireJ1A[3]}${horaireJ1A[4]}`
    horaireJ1A = Number(horaireJ1)
    retardJ1  = horaireJ1A - 39
    console.log('retard J1 : ')
    console.log(retardJ1)
    return retardJ1
    
};

async function J2(){
    const url = "https://www.sncf.com/fr/itineraire-reservation/itineraire/liste-resultats?uic1=95306&coordX1=2.16667&coordY1=49&uic2=95500&coordX2=2.1&coordY2=49.05&date=1671519421&when=leave-at&label1=Herblay%20(Toutes%20gares)&label2=Pontoise%20(Toutes%20gares)&typeDepart=COMMUNE&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=95220&destinationCP=95000"
    
    browser = await puppeteer.launch({ headless: false });
        
    page = await browser.newPage();
        page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    await page.goto(url);

        
    //refus des cookies
    await delay(5)
    await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll')

    //recuperation des données
    let horaireJ2 = await page.evaluate(()=> {
        return document.querySelector('[class = "timetables-col-time one-sixth"] > time').innerText
    })
    console.log(horaireJ2)
    await page.close();
    
    let horaireJ2A = horaireJ2.split('')
    let horaireJ2Aa = Number(horaireJ2A[1])
    horaireJ2Aa =   horaireJ2Aa - 7
    let horaireJ2Ab = Number(`${horaireJ2A[3]}${horaireJ2A[4]}`)
    let retardJ2 = Math.abs(horaireJ2Ab - 57)
    retardJ2 = horaireJ2Aa * 60 - retardJ2
    console.log('retard J2 :')
    console.log(retardJ2)
    return retardJ2
};


async function J3(){
    const url = "https://www.sncf.com/fr/itineraire-reservation/itineraire/liste-resultats?uic1=95306&coordX1=2.16667&coordY1=49&uic2=95500&coordX2=2.1&coordY2=49.05&date=1671521821&when=leave-at&label1=Herblay%20(Toutes%20gares)&label2=Pontoise%20(Toutes%20gares)&typeDepart=COMMUNE&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=95220&destinationCP=95000"

    browser = await puppeteer.launch({ headless: false });
    
    page = await browser.newPage();
    page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    await page.goto(url);

    //refus des cookies
    await delay(5)
    await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll')

    //recuperation des données
    let horaireJ1 = await page.evaluate(()=> {
      return document.querySelector('[class = "timetables-col-time one-sixth"] > time').innerText
    })
    console.log(horaireJ1)
    await page.close();

    let horaireJ1A = horaireJ1.split('')
    horaireJ1 = `${horaireJ1A[3]}${horaireJ1A[4]}`
    horaireJ1A = Number(horaireJ1)
    retardJ3  = horaireJ1A - 37
    console.log('retard J1 : ')
    console.log(retardJ3)
    return retardJ3
    
};

async function J4(){
    const url = "https://www.sncf.com/fr/itineraire-reservation/itineraire/liste-resultats?uic1=95306&coordX1=2.16667&coordY1=49&uic2=95500&coordX2=2.1&coordY2=49.05&date=1671523021&when=leave-at&label1=Herblay%20(Toutes%20gares)&label2=Pontoise%20(Toutes%20gares)&typeDepart=COMMUNE&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=95220&destinationCP=95000"
    
    browser = await puppeteer.launch({ headless: false });
        
    page = await browser.newPage();
        page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    await page.goto(url);

        
    //refus des cookies
    await delay(5)
    await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll')

    //recuperation des données
    let horaireJ2 = await page.evaluate(()=> {
        return document.querySelector('[class = "timetables-col-time one-sixth"] > time').innerText
    })
    console.log(horaireJ2)
    await page.close();
    
    let horaireJ2A = horaireJ2.split('')
    let horaireJ2Aa = Number(horaireJ2A[1])
    horaireJ2Aa =   horaireJ2Aa - 8
    let horaireJ2Ab = Number(`${horaireJ2A[3]}${horaireJ2A[4]}`)
    let retardJ2 = Math.abs(horaireJ2Ab - 57)
    let retardJ4 = horaireJ2Aa * 60 - retardJ2
    console.log('retard J2 :')
    console.log(retardJ4)
    return retardJ4
};

async function J5(){
    const url = "https://www.sncf.com/fr/itineraire-reservation/itineraire/liste-resultats?uic1=95306&coordX1=2.16667&coordY1=49&uic2=95500&coordX2=2.1&coordY2=49.05&date=1671525361&when=leave-at&label1=Herblay%20(Toutes%20gares)&label2=Pontoise%20(Toutes%20gares)&typeDepart=COMMUNE&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=95220&destinationCP=95000"

    browser = await puppeteer.launch({ headless: false });
    
    page = await browser.newPage();
    page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    await page.goto(url);

    //refus des cookies
    await delay(5)
    await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll')

    //recuperation des données
    let horaireJ1 = await page.evaluate(()=> {
      return document.querySelector('[class = "timetables-col-time one-sixth"] > time').innerText
    })
    console.log(horaireJ1)
    await page.close();

    let horaireJ1A = horaireJ1.split('')
    horaireJ1 = `${horaireJ1A[3]}${horaireJ1A[4]}`
    horaireJ1A = Number(horaireJ1)
    retardJ5  = horaireJ1A - 36
    console.log('retard J1 : ')
    console.log(retardJ5)
    return retardJ5
    
};

async function J6(){
    const url = "https://www.sncf.com/fr/itineraire-reservation/itineraire/liste-resultats?uic1=95306&coordX1=2.16667&coordY1=49&uic2=95500&coordX2=2.1&coordY2=49.05&date=1671525601&when=leave-at&label1=Herblay%20(Toutes%20gares)&label2=Pontoise%20(Toutes%20gares)&typeDepart=COMMUNE&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=95220&destinationCP=95000"
    
    browser = await puppeteer.launch({ headless: false });
        
    page = await browser.newPage();
        page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    await page.goto(url);

        
    //refus des cookies
    await delay(5)
    await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll')

    //recuperation des données
    let horaireJ2 = await page.evaluate(()=> {
        return document.querySelector('[class = "timetables-col-time one-sixth"] > time').innerText
    })
    console.log(horaireJ2)
    await page.close();
    
    let horaireJ2A = horaireJ2.split('')
    let horaireJ2Aa = Number(horaireJ2A[1])
    horaireJ2Aa =   horaireJ2Aa - 9
    let horaireJ2Ab = Number(`${horaireJ2A[3]}${horaireJ2A[4]}`)
    let retardJ2 = Math.abs(horaireJ2Ab - 54)
    let retardJ5 = horaireJ2Aa * 60 - retardJ2
    console.log('retard J2 :')
    console.log(retardJ5)
    return retardJ5
};

async function J7(){
    const url = "https://www.sncf.com/fr/itineraire-reservation/itineraire/liste-resultats?uic1=95500&coordX1=2.1&coordY1=49.05&uic2=95306&coordX2=2.16667&coordY2=49&date=1671618601&when=leave-at&label1=Pontoise%20(Toutes%20gares)&label2=Herblay%20(Toutes%20gares)&typeDepart=COMMUNE&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=95000&destinationCP=95220"

    browser = await puppeteer.launch({ headless: false });
        
    page = await browser.newPage();
        page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    await page.goto(url);

        
    //refus des cookies
    await delay(5)
    await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll')

    //recuperation des données
    let horaireJ2 = await page.evaluate(()=> {
        return document.querySelector('[class = "timetables-col-time one-sixth"] > time').innerText
    })
    console.log(horaireJ2)
    await page.close();
    
    let horaireJ2A = horaireJ2.split('')
    let horaireJ2Aa = Number(horaireJ2A[1])
    horaireJ2Aa =   horaireJ2Aa - 11
    let horaireJ2Ab = Number(`${horaireJ2A[3]}${horaireJ2A[4]}`)
    let retardJ2 = Math.abs(horaireJ2Ab - 32)
    let retardJ7 = horaireJ2Aa * 60 - retardJ2
    console.log('retard J2 :')
    console.log(retardJ7)
    return retardJ7
};

async function J8(){
    const url = "https://www.sncf.com/fr/itineraire-reservation/itineraire/liste-resultats?uic1=95500&coordX1=2.1&coordY1=49.05&uic2=95306&coordX2=2.16667&coordY2=49&date=1671622201&when=leave-at&label1=Pontoise%20(Toutes%20gares)&label2=Herblay%20(Toutes%20gares)&typeDepart=COMMUNE&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=95000&destinationCP=95220"

    browser = await puppeteer.launch({ headless: false });
        
    page = await browser.newPage();
        page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    await page.goto(url);

        
    //refus des cookies
    await delay(5)
    await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll')

    //recuperation des données
    let horaireJ2 = await page.evaluate(()=> {
        return document.querySelector('[class = "timetables-col-time one-sixth"] > time').innerText
    })
    console.log(horaireJ2)
    await page.close();
    
    let horaireJ2A = horaireJ2.split('')
    let horaireJ2Aa = Number(horaireJ2A[1])
    horaireJ2Aa =   horaireJ2Aa - 12
    let horaireJ2Ab = Number(`${horaireJ2A[3]}${horaireJ2A[4]}`)
    let retardJ2 = Math.abs(horaireJ2Ab - 35)
    let retardJ8 = horaireJ2Aa * 60 - retardJ2
    console.log('retard J2 :')
    console.log(retardJ8)
    return retardJ8
};

async function J9(){
    const url = "https://www.sncf.com/fr/itineraire-reservation/itineraire/liste-resultats?uic1=95306&coordX1=2.16667&coordY1=49&uic2=95500&coordX2=2.1&coordY2=49.05&date=1671540001&when=leave-at&label1=Herblay%20(Toutes%20gares)&label2=Pontoise%20(Toutes%20gares)&typeDepart=COMMUNE&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=95220&destinationCP=95000"
    
    browser = await puppeteer.launch({ headless: false });
        
    page = await browser.newPage();
        page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    await page.goto(url);

        
    //refus des cookies
    await delay(5)
    await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll')

    //recuperation des données
    let horaireJ2 = await page.evaluate(()=> {
        return document.querySelector('[class = "timetables-col-time one-sixth"] > time').innerText
    })
    console.log(horaireJ2)
    await page.close();
    
    let horaireJ2A = horaireJ2.split('')
    let horaireJ2Aa = Number(horaireJ2A[1])
    horaireJ2Aa =   horaireJ2Aa - 13
    let horaireJ2Ab = Number(`${horaireJ2A[3]}${horaireJ2A[4]}`)
    let retardJ2 = Math.abs(horaireJ2Ab - 54)
    let retardJ9 = horaireJ2Aa * 60 - retardJ2
    console.log('retard J2 :')
    console.log(retardJ9)
    return retardJ9
};

async function J10(){
    const url = "https://www.sncf.com/fr/itineraire-reservation/itineraire/liste-resultats?uic1=95500&coordX1=2.1&coordY1=49.05&uic2=95306&coordX2=2.16667&coordY2=49&date=1671546601&when=leave-at&label1=Pontoise%20(Toutes%20gares)&label2=Herblay%20(Toutes%20gares)&typeDepart=COMMUNE&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=95000&destinationCP=95220"

    browser = await puppeteer.launch({ headless: false });
        
    page = await browser.newPage();
        page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    await page.goto(url);

        
    //refus des cookies
    await delay(5)
    await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll')

    //recuperation des données
    let horaireJ2 = await page.evaluate(()=> {
        return document.querySelector('[class = "timetables-col-time one-sixth"] > time').innerText
    })
    console.log(horaireJ2)
    await page.close();
    
    let horaireJ2A = horaireJ2.split('')
    let horaireJ2Aa = Number(horaireJ2A[1])
    horaireJ2Aa =   horaireJ2Aa - 15
    let horaireJ2Ab = Number(`${horaireJ2A[3]}${horaireJ2A[4]}`)
    let retardJ2 = Math.abs(horaireJ2Ab - 32)
    let retardJ10 = horaireJ2Aa * 60 - retardJ2
    console.log('retard J2 :')
    console.log(retardJ10)
    return retardJ10
};

async function J11(){
    const url = "https://www.sncf.com/fr/itineraire-reservation/itineraire/liste-resultats?uic1=95500&coordX1=2.1&coordY1=49.05&uic2=95306&coordX2=2.16667&coordY2=49&date=1671550801&when=leave-at&label1=Pontoise%20(Toutes%20gares)&label2=Herblay%20(Toutes%20gares)&typeDepart=COMMUNE&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=95000&destinationCP=95220"

    browser = await puppeteer.launch({ headless: false });
        
    page = await browser.newPage();
        page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    await page.goto(url);

        
    //refus des cookies
    await delay(5)
    await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll')

    //recuperation des données
    let horaireJ2 = await page.evaluate(()=> {
        return document.querySelector('[class = "timetables-col-time one-sixth"] > time').innerText
    })
    console.log(horaireJ2)
    await page.close();
    
    let horaireJ2A = horaireJ2.split('')
    let horaireJ2Aa = Number(horaireJ2A[1])
    horaireJ2Aa =   horaireJ2Aa - 16
    let horaireJ2Ab = Number(`${horaireJ2A[3]}${horaireJ2A[4]}`)
    let retardJ2 = Math.abs(horaireJ2Ab - 42)
    let retardJ11 = horaireJ2Aa * 60 - retardJ2
    console.log('retard J2 :')
    console.log(retardJ11)
    return retardJ11
};


async function J12(){
    const url = "https://www.sncf.com/fr/itineraire-reservation/itineraire/liste-resultats?uic1=95500&coordX1=2.1&coordY1=49.05&uic2=95306&coordX2=2.16667&coordY2=49&date=1671554401&when=leave-at&label1=Pontoise%20(Toutes%20gares)&label2=Herblay%20(Toutes%20gares)&typeDepart=COMMUNE&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=95000&destinationCP=95220"

    browser = await puppeteer.launch({ headless: false });
        
    page = await browser.newPage();
        page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    await page.goto(url);

        
    //refus des cookies
    await delay(5)
    await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll')

    //recuperation des données
    let horaireJ2 = await page.evaluate(()=> {
        return document.querySelector('[class = "timetables-col-time one-sixth"] > time').innerText
    })
    console.log(horaireJ2)
    await page.close();
    
    let horaireJ2A = horaireJ2.split('')
    let horaireJ2Aa = Number(horaireJ2A[1])
    horaireJ2Aa =   horaireJ2Aa - 17
    let horaireJ2Ab = Number(`${horaireJ2A[3]}${horaireJ2A[4]}`)
    let retardJ2 = Math.abs(horaireJ2Ab - 43)
    let retardJ12 = horaireJ2Aa * 60 - retardJ2
    console.log('retard J2 :')
    console.log(retardJ12)
    return retardJ12
}

async function J13(){
    const url = "https://www.sncf.com/fr/itineraire-reservation/itineraire/liste-resultats?uic1=95500&coordX1=2.1&coordY1=49.05&uic2=95306&coordX2=2.16667&coordY2=49&date=1671558001&when=leave-at&label1=Pontoise%20(Toutes%20gares)&label2=Herblay%20(Toutes%20gares)&typeDepart=COMMUNE&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=95000&destinationCP=95220"
    
    browser = await puppeteer.launch({ headless: false });
        
    page = await browser.newPage();
        page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    await page.goto(url);

        
    //refus des cookies
    await delay(5)
    await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll')

    //recuperation des données
    let horaireJ2 = await page.evaluate(()=> {
        return document.querySelector('[class = "timetables-col-time one-sixth"] > time').innerText
    })
    console.log(horaireJ2)
    await page.close();

    let horaireJ2A = horaireJ2.split('')
    let horaireJ2Aa = Number(horaireJ2A[1])
    horaireJ2Aa =   horaireJ2Aa - 18
    let horaireJ2Ab = Number(`${horaireJ2A[3]}${horaireJ2A[4]}`)
    let retardJ2 = Math.abs(horaireJ2Ab - 44)
    let retardJ13 = horaireJ2Aa * 60 - retardJ2
    console.log('retard J2 :')
    console.log(retardJ13)
    return retardJ13
}

let today = new Date;
let heure = today.getHours;
let minute = today.getMinutes;
let heureminute = `${heure}:${minute}`

let i = 1
let browser = null;
let page = null;
while(i==1){
    if(heureminute == `17:00`){
        (async () => {

    //recuperation des données

            await J1();
            await J2()
            await J3()
            await J4()
            await J5()
            await J6()
            await J7()
            await J8()
            await J9()
            await J10()
            await J11()
            await J12()
            await J13()

            browser = await puppeteer.launch({ headless: false });
        
            page = await browser.newPage();
            page.setViewport({
                width: 1280,
                height: 800,
                isMobile: false
            });


            await page.goto('https://twitter.com/login');
            await delay(10);

    //LOGIN
            await page.type('[class="css-1dbjc4n r-1ets6dv r-z2wwpe r-rs99b7 r-18u37iz"]',username,{delay: 25});
            await delay(2);
            await page.click('[class="css-901oao r-1awozwy r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"]');
            await delay(2);
	        await page.type('input[name="password"]',password,{delay: 25});
            await delay(2);
            await page.click('[data-testid="LoginForm_Login_Button"]');
            await delay(5);

    //TWEET
        //J1
            if(retardJ1 > 1){
                await page.click('[class = "css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t"]')
                await page.keyboard.type(`ici votre assistant sncf des problemes de la ligne J. Le train prevut à 7h39 à Herblay et 7h44 à Conflans pour Pontoise aura ${retardJ1} minute de retard de prevus`, {delay: 100});
                await page.click('[class = "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]')
            }
            if(retardJ2 > 1){
        
                await page.click('[class = "css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t"]')
                await page.keyboard.type(`ici votre assistant sncf des problemes de la ligne J. Le train prevut à 7h57 à Herblay et 8h02 à Conflans pour Pontoise aura ${retardJ2} minute de retard de prevus`, {delay: 100});
                await page.click('[class = "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]')
            }
            if(retardJ3 > 1){
        
                await page.click('[class = "css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t"]')
                await page.keyboard.type(`ici votre assistant sncf des problemes de la ligne J. Le train prevut à 8h37 à Herblay et 8h42 à Conflans pour Pontoise aura ${retardJ3} minute de retard de prevus`, {delay: 100});
                await page.click('[class = "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]')
            }
            if(retardJ4 > 1){
       
                await page.click('[class = "css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t"]')
                await page.keyboard.type(`ici votre assistant sncf des problemes de la ligne J. Le train prevut à 8h57 à Herblay et 9h02 à Conflans pour Pontoise aura ${retardJ4} minute de retard de prevus`, {delay: 100});
                await page.click('[class = "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]') 
            }
            if(retardJ5 > 1){
        
                await page.click('[class = "css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t"]')
                await page.keyboard.type(`ici votre assistant sncf des problemes de la ligne J. Le train prevut à 9h36 à Herblay et 9h41 à Conflans pour Pontoise aura ${retardJ5} minute de retard de prevus`, {delay: 100});
                await page.click('[class = "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]')
            }
            if(retardJ6 > 1){
        
                await page.click('[class = "css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t"]')
                await page.keyboard.type(`ici votre assistant sncf des problemes de la ligne J. Le train prevut à 9h54 à Herblay et 9h59 à Conflans pour Pontoise aura ${retardJ6} minute  de retard de prevus`, {delay: 100});
                await page.click('[class = "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]')
            }
            if(retardJ7 > 1){
        
                await page.click('[class = "css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t"]')
                await page.keyboard.type(`ici votre assistant sncf des problemes de la ligne J. Le train qui part de Pontoise à 11h32 pour Paris St Lazard aura ${retardJ7} minute de retard de prevus`, {delay: 100});
                await page.click('[class = "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]')
            }
            if(retardJ8 > 1){
      
                await page.click('[class = "css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t"]')
                await page.keyboard.type(`ici votre assistant sncf des problemes de la ligne J. Le train qui part de Pontoise à 12h35 pour Paris St Lazard aura ${retardJ8} minute de retard de prevus`, {delay: 100});
                await page.click('[class = "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]')  
            }
            if(retardJ9 > 1){
        
                await page.click('[class = "css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t"]')
                await page.keyboard.type(`ici votre assistant sncf des problemes de la ligne J. Le train qui part de Pontoise à 13h54 pour Paris St Lazard aura ${retardJ9} minute de retard de prevus`, {delay: 100});
                await page.click('[class = "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]')
            }
    
            if(retardJ10 > 1){
        
                await page.click('[class = "css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t"]')
                await page.keyboard.type(`ici votre assistant sncf des problemes de la ligne J. Le train qui part de Pontoise à 15h32 pour Paris St Lazard aura ${retardJ10} minute de retard de prevus`, {delay: 100});
                await page.click('[class = "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]')
            }
    
            if(retardJ11 > 1){
        
                await page.click('[class = "css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t"]')
                await page.keyboard.type(`ici votre assistant sncf des problemes de la ligne J. Le train qui part de Pontoise à 16h42 pour Paris St Lazard aura ${retardJ11} minute de retard de prevus`, {delay: 100});
                await page.click('[class = "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]')
            }
            if(retardJ12 > 1){

                await page.click('[class = "css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t"]')
                await page.keyboard.type(`ici votre assistant sncf des problemes de la ligne J. Le train qui part de Pontoise à 17h43 pour Paris St Lazard aura ${retardJ12} minute de retard de prevus`, {delay: 100});
                await page.click('[class = "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]')
            }
            if(retardJ13 > 1){
        
                await page.click('[class = "css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t"]')
                await page.keyboard.type(`ici votre assistant sncf des problemes de la ligne J. Le train qui part de Pontoise à 18h44 pour Paris St Lazard aura ${retardJ13} minute de retard de prevus`, {delay: 100});
                await page.click('[class = "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]')
        
            }
            page.close();
        })();
    }
}
