*** Settings ***
Library     Browser    auto_closing_level=KEEP
Library     CryptoLibrary    variable_decryption=True

*** Variables ***
${BASE_URL}    http://localhost:5173/login.html
${USERNAME}    crypt:3jVbIVo4g/nka3j2RrqWI5HLR4wlvujCqW1OSPDVESn/2XUhTquusohBy1A8N9UL4Ggg2YY=
${PASSWORD}    crypt:NrJvAiOVoY7JsKqrLdk/m1+18B65Xzo6I3nLZCQtuVpe4ZcpyK3KsjzhDr2TeygvOYuYV4lK9QmF

*** Test Cases ***
Only Login
    New Browser    chromium    headless=No
    New Page    ${BASE_URL}

    Scroll To      input[placeholder="name"]
    Wait For Elements State    input[placeholder="name"]    visible

    Type Text      input[placeholder="name"]          ${USERNAME}

    # TÄMÄ ON OIKEA
    Type Secret    input[placeholder="password123"]   $PASSWORD

    Scroll To    text=Login and get new token
    Wait For Elements State    text=Login and get new token    visible
    Click    text=Login and get new token

    Sleep    2s
