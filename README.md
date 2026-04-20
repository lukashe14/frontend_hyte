# Yksilö projekti

Hytegym, on sovellus josta löytyy BMI-laskuri jossa voi tarkistaa oman painon verrattaen painoindeksiin. 
Sekä myöskin päiväkirja johon voi merkata asioita.

#screenshotit

Kotinäkymä
![image alt](https://github.com/lukashe14/hyte/blob/validation/screenshots/kotin%C3%A4kym%C3%A4.png)


Päiväkirjanäkymä


![image alt](https://github.com/lukashe14/hyte/blob/validation/screenshots/P%C3%A4iv%C3%A4kirjan%C3%A4kym%C3%A4.png)


Bmi-laskuri näkymä


![image alt](https://github.com/lukashe14/hyte/blob/validation/screenshots/bmin%C3%A4kym%C3%A4.png)


Kirjautumisnäkymä


![image alt](https://github.com/lukashe14/hyte/blob/validation/screenshots/Kirjautumisn%C3%A4kym%C3%A4.png)



# Tiedossa olevat ongelmat/yritetty tehdä jotain joka ei toimi
DeleteUserById ei toimi.
Päiväkirja merkinnöissä on delete nappula joka ei toimi



# Sakarin tehtävät
testit:
# tehtävä 1
Tein kaikki asennukset ohjeiden mukaan
![image alt](https://github.com/lukashe14/frontend_hyte/blob/main/screenshots/testitulokset1.png)



# Tehtävä 2

testissä  käytetään esimerkki  testisivua jossa ajetaan tämä robot koodin pätkä 

*** Settings ***
Library     Browser    auto_closing_level=KEEP
Resource    Keywords.robot  

*** Test Cases ***
Test Web Form
    New Browser    chromium    headless=No  
    New Page       https://www.selenium.dev/selenium/web/web-form.html 
    Get Title      ==    Web form  
    Type Text      [name="my-text"]        ${Username}    delay=0.1 s 
    Type Secret    [name="my-password"]    $Password      delay=0.1 s
    Type Text      [name="my-textarea"]    ${Message}     delay=0.1 s
    Click With Options    button    delay=2 s
    Get Text       id=message    ==    Received! 

 ja kun se ajaa testin niin tuloksena on seuraava  kuva

![image alt](https://github.com/lukashe14/frontend_hyte/blob/main/screenshots/teht%C3%A4v%C3%A42testi.png)

# Tehtävä 3
[robot](https://github.com/lukashe14/frontend_hyte/blob/main/browser_demo2.robot)


# Tehtävä 5

[load_env](https://github.com/lukashe14/frontend_hyte/blob/main/load_env.py)

[robot](https://github.com/lukashe14/frontend_hyte/blob/main/browser_demo3.robot)

![image alt](https://github.com/lukashe14/frontend_hyte/blob/main/screenshots/teht%C3%A4v%C3%A45testi.png)

# Tehtävä 6
[robot](https://github.com/lukashe14/frontend_hyte/blob/main/browser_demo4.robot)

![kuva tuloksesta](https://github.com/lukashe14/frontend_hyte/blob/main/screenshots/teht%C3%A4v%C3%A46testi.png)

# Tehtävä 7
![Kuva komennosta](https://github.com/lukashe14/frontend_hyte/blob/main/screenshots/Teht%C3%A4v%C3%A47command.png)

![Kuva outputs kansiosta komennon ajamisen jälkeen](https://github.com/lukashe14/frontend_hyte/blob/main/screenshots/teht%C3%A4v%C3%A47.png)


# Tehtävä 8
[https://lukashe14.github.io/frontend_hyte/](https://lukashe14.github.io/frontend_hyte/)


