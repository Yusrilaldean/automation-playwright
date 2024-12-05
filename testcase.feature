Test Case 1: User login as a company member
    Feature : User login using valid account
    Scenario: User login as a company member with valid email and password
        Given User open url https://staffinc.co/
        When User click "Masuk" button
        And User will see login page
        And User fill the email and password fields
        |Email                  | Password      |
        |emailrole1@mail.com    | 5taffinc@2020 |
        |emailrole2@mail.com    | 5taffinc@2021 |
        And User click "Masuk" button
        Then User will see dashboard page

Test Case 2: User create new account
    Features; Create new account
    Scenario: User create new account using valid data
        Given User open url https://staffinc.co/
        When User click "Masuk" button
        And User will see login screen
        And User click "Daftar" button
        And User will see form register screen
        And User fill all the mandatory fields
        |NamaPerusahaan | NamaPenanggungJawab   | EmailPenanggungJawab          | NomorTeleponPenanggungJawab   |
        |CompanyTesting1| Budi                  | budiCompanyTesting1@mail.com  | 08111222333                   |
        |CompanyTesting2| Andi                  | andiCompanyTesting2@mail.com  | 08222333444                   |
        |CompanyTesting3| Rudi                  | rudiCompanyTesting3@mail.com  | 08333444555                   |
        And User need to verify the account in email
        Then User will see dashboard page

Test Case 3: User can chat call center using private chat
    Features: Private chat with call center
    Scenario: User do chat with call center in Whatsapp Chats
        Given User open url https://staffinc.co/
        When User click "Masuk" button
        And User will see login screen
        And User click "Call Center" button
        And The page will redirect into whatsapp web or whatsapp app
        Then User will chat the call center


Test Case 4: User download app from web as a worker
    Features: Download app from web
    Scenario: User download app from web for android as a worker
        Given User open url https://staffinc.co/
        When User Click "Pekerja" button
        And User will see page download in Playstore
        And User click "Get it On Playstore" button
        Then User will redirect into playstore for android


Test Case 5: User can chat sales using private chat
    Features: Private chat with sales
    Scenario: User do chat with sales in Whatsapp Chats
        Given User open url https://staffinc.co/
        When User click "Kontak Sales" button
        And The page will redirect into whatsapp web or whatsapp app
        Then the user will chat with sales