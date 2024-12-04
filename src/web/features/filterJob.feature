Feature: Filter Job Using Bandung

    Scenario: User can filter jobs list using Bandung
        Given User can access url staffinc
        When User use filter using job location Bandung
        Then User can see all the job list located in Bandung