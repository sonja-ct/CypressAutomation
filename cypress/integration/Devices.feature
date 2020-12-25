Feature: Kapua Devices

Tests for Kapua Devices

Scenario: Create new Device
 Given I navigate to Devices tab
        When I click on Add
        And I create new device with clientID "clientID" and display name "display"
        And I click submit button
        Then Message "Device successfully created." should be shown
