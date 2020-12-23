Feature: Access Groups

    Creating Kapua Access Groups

    Scenario: Create Kapua Acess Group with Name And description
        Given I navigate to AccessGroup tab
        When I click on Add
        And I create new group with name "name1" and description "description"
        And I click submit button
        Then Created group with name "name1" should be shown
        And Message "Access Group successfully created." should be shown

    Scenario: Create Kapua Acess Group with Name And description and search for it
        Given I navigate to AccessGroup tab
        When I click on Add
        And I create new group with name "name2" and description "description"
        And I click submit button
        And I search for group with name "name2"
        Then Created group with name "name2" should be shown

    Scenario: Create Kapua Acess Group with correct Name And No description
        Given I navigate to AccessGroup tab
        When I click on Add
        And I create new group with name "name3" and no description
        And I click submit button
        Then Created group with name "name3" should be shown

    Scenario: Create Kapua Acess Group without name And with description
        Given I navigate to AccessGroup tab
        When I click on Add
        And I create new group without name and with description "description"
        And I click submit button
        Then Message "Fields with * are mandatory." should be shown

    Scenario: Create Kapua Acess Group with too short Name And No description
        Given I navigate to AccessGroup tab
        When I click on Add
        And I create new group with name "n" and no description
        And I click submit button
        Then Red alert sign should be shown

    Scenario: Edit Kapua Access group
        Create AccessGroup and then edit name and description
        Given I navigate to AccessGroup tab
        When I click on Add
        And I create new group with name "name4" and description "description"
        And I click submit button
        When I edit name "name4" to "newName" and description to "new description"
        And I click submit button
        Then Message "Access Group successfully updated." should be shown
        And Created group with name "newName" should be shown

    Scenario: Create Kapua Acess Group with non-unique Name And description
        Given I navigate to AccessGroup tab
        When I click on Add
        And I create new group with name "nameGroup" and description "description"
        And I click submit button
        When I click on Add
        And I create new group with name "nameGroup" and description "description"
        And I click submit button
        Then Message "An entity with the same value for field already exists." should be shown

    Scenario: Create Kapua Acess Group with Name And description and delete it
        Given I navigate to AccessGroup tab
        When I click on Add
        And I create new group with name "name5" and description "description"
        And I click submit button
        And I try to delete group with name "name5"
        Then Created group with name "name5" should not be shown
        And Message "Access Group successfully deleted." should be shown

    Scenario: Create Kapua Acess Group with Name And description, delete it and create it again
        Given I navigate to AccessGroup tab
        When I click on Add
        And I create new group with name "name5" and description "description"
        And I click submit button
        And I try to delete group with name "name5"
        And I click on Add
        And I create new group with name "name5" and description "description"
        And I click submit button
        Then Created group with name "name5" should be shown
        And Message "Access Group successfully created." should be shown

