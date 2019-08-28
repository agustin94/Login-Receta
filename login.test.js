
const puppeteer = require('puppeteer');
const CONFIG =  require ('./config.json');
const CREDENTIALS =  require ('./credentials.json');

let browser;
const AppPage = CONFIG.AppPage;


test('login',async()=>{
  browser = await puppeteer.launch({
      headless: false,
      args: [//'--start-fullscreen',
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--window-size=1366,800']
    });
  const page = await browser.newPage();
  
    //assertions
  //const jsonContenido = JSON.parse(CONF);
  const user = CREDENTIALS.user;
  const pass = CREDENTIALS.pass;
  await page.setViewport({ width: 1366, height: 768});
  //ingresamos al sitio
  
  await page.goto(AppPage);
  //await page.waitFor(3000);
  //insertamos nuestro email en el input
  const inputname = CONFIG.SelectorInput;
  await page.waitForSelector(inputname);
  await page.type(inputname, user);

 // const name = await page.$(CONFIG.name);
 //name.type(user)
  
  //insertamos nuestra contraseña en el input
  const inputpass = await page.$(CONFIG.SelectorPass)
  inputpass.type(pass)
  await page.waitFor(1000);
  let buttonSelector = CONFIG.SelectorLogin;
  await page.click(buttonSelector);



    browser.close();
    //process.exit;
},50000);


