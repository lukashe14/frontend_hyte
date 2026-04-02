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
    Type Text      [name="my-datalist"]    Los Angeles
    Get Text       id=message    ==    Received!
    Select Options By    [name="my-select"]    text    Two      delay=2 s
    Check Checkbox       [id"my-check-2"]
    Uncheck Checkbox     [id="my-check-1"]
    Click          [id"my-radio-2"]
    Fill Text    [name="my-date"]    2026-03-24
    Click With Options    button    delay=2 s
