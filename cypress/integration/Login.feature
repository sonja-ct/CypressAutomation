Feature: Login

    I want to Login into Kapua

    Scenario: Kapua Login with correct username and password
        Given I open Kapua Login page
        When I type in
            | username  | password       |
            | kapua-sys | kapua-password |
        And I click login button
        Then Feed should be shown

    Scenario: Kapua Login incorrect username and correct password
        Given I open Kapua Login page
        When I type in
            | username | password       |
            | kapua    | kapua-password |
        And I click login button
        Then Error message "Invalid login credentials." should be shown

    Scenario: Kapua Login correct username and incorrect password
        Given I open Kapua Login page
        When I type in
            | username  | password |
            | kapua-sys | password |
        And I click login button
        Then Error message "Invalid login credentials." should be shown

    Scenario: Kapua Login no username and correct password
        Given I open Kapua Login page
        When I try to login only with password "kapua-password"
        And I click login button
        Then Error message "Username field is mandatory." should be shown

    Scenario: Kapua Login with username and no password
        Given I open Kapua Login page
        When I try to login only with username "kapua-sys"
        And I click login button
        Then Error message "Password field is mandatory." should be shown

    Scenario: Reset username and password
        Given I open Kapua Login page
        When I type in
            | username  | password |
            | kapua-sys | kapua-password |
        And I click reset button
        Then Username and password fields should be empty

