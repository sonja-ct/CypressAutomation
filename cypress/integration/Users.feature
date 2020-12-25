Feature: Users

    Tests for Kapua Users

    Scenario: Create new user
        Given I navigate to Users tab
        When I click on Add
        And I create new user with username "user1" and password "PasswordPassword123!"
        And I click submit button
        Then Created user with name "user1" should be shown
        And Message "User successfully created." should be shown

    Scenario: Create new user and login as that user
        Given I navigate to Users tab
        When I click on Add
        And I create new user with username "user2" and password "PasswordPassword123!"
        And I click submit button
        Then Message "User successfully created." should be shown
        When I click on Kapua Sysadmin and Logout
        And I login as "user2" with password "PasswordPassword123!"
        Then Feed with "user2" @ kapua-sys should be shown

    Scenario: Create new user with too short name
        Given I navigate to Users tab
        When I click on Add
        And I create new user with username "u" and password "PasswordPassword123!"
        And I click submit button
        Then Red alert sign should be shown

    Scenario: Create new user and search for it
        Given I navigate to Users tab
        When I click on Add
        And I create new user with username "user3" and password "PasswordPassword123!"
        And I click submit button
        Then Message "User successfully created." should be shown
        When I search for user "user3"
        Then Created user with name "user3" should be shown

    Scenario: Create new user with phone number and search for it with number
        Given I navigate to Users tab
        When I click on Add
        And I create new user with username "user4" and password "PasswordPassword123!"
        And Add phone number "222"
        And I click submit button
        Then Message "User successfully created." should be shown
        When I search for phone number "222"
        Then Created user with name "user4" should be shown

    Scenario: Create new user with emain and search for it with email
        Given I navigate to Users tab
        When I click on Add
        And I create new user with username "user5" and password "PasswordPassword123!"
        And Add email "user5@mail.com"
        And I click submit button
        Then Message "User successfully created." should be shown
        When I search for email "user5@mail.com"
        Then Created user with name "user5" should be shown

    Scenario: Create new user and edit display name
        Given I navigate to Users tab
        When I click on Add
        And I create new user with username "user6" and password "PasswordPassword123!"
        And I click submit button
        Then Message "User successfully created." should be shown
        When I edit "user6" display name to "USER6"
        And I click submit button

    Scenario: Create new user and grant permission
        Given I navigate to Users tab
        When I click on Add
        And I create new user with username "user7" and password "PasswordPassword123!"
        And I click submit button
        Then Message "User successfully created." should be shown
        When I select grant permission to user "user7" for "access_info"
        And I click submit button
        Then Message "Permission association successfully granted." should be shown

    Scenario: Create new user and grant forwardable permission
        Given I navigate to Users tab
        When I click on Add
        And I create new user with username "user8" and password "PasswordPassword123!"
        And I click submit button
        Then Message "User successfully created." should be shown
        When I select grant permission to user "user8" for "access_info"
        And Make permission forwardable
        And I click submit button
        Then Message "Permission association successfully granted." should be shown

  Scenario: Create new user and add admin role
        Given I navigate to Users tab
        When I click on Add
        And I create new user with username "user9" and password "PasswordPassword123!"
        And I click submit button
        Then Message "User successfully created." should be shown
        When I select "admin" role to user "user9" 
        And I click submit button
        Then Message "Role successfully assigned." should be shown






