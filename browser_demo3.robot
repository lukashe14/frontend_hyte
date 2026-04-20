*** Settings ***
Library     Browser    auto_closing_level=KEEP
Variables   load_env.py

*** Test Cases ***
Only Login
    New Browser    chromium    headless=No
    New Page    ${BASE_URL}

    Scroll To      input[placeholder="name"]
    Wait For Elements State    input[placeholder="name"]    visible

    Type Text      input[placeholder="name"]          ${USERNAME}
    Type Secret    input[placeholder="password123"]   $PASSWORD
    Scroll To    text=Login and get new token
    Wait For Elements State    text=Login and get new token    visible
    Click    text=Login and get new token

    Sleep    2s
