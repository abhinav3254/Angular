import { Component } from '@angular/core';

@Component({
  selector: 'app-nestedobjects',
  templateUrl: './nestedobjects.component.html',
  styleUrls: ['./nestedobjects.component.css']
})
export class NestedobjectsComponent {
  users = [
    {
      "name": "John Doe",
      "country": "USA",
      "followers": 1500,
      "socialHandles": [
        {
          "platform": "Twitter",
          "handle": "@johndoe_twitter"
        },
        {
          "platform": "Instagram",
          "handle": "@johndoe_instagram"
        },
        {
          "platform": "LinkedIn",
          "handle": "john-doe-linkedin"
        }
      ]
    },
    {
      "name": "Jane Smith",
      "country": "Canada",
      "followers": 2000,
      "socialHandles": [
        {
          "platform": "Twitter",
          "handle": "@janesmith_twitter"
        },
        {
          "platform": "Instagram",
          "handle": "@janesmith_instagram"
        },
        {
          "platform": "Facebook",
          "handle": "jane.smith.facebook"
        }
      ]
    },
    {
      "name": "Michael Johnson",
      "country": "Australia",
      "followers": 1800,
      "socialHandles": [
        {
          "platform": "Twitter",
          "handle": "@michaeljohnson_twitter"
        },
        {
          "platform": "LinkedIn",
          "handle": "michael-johnson-linkedin"
        }
      ]
    },
    {
      "name": "Emily Brown",
      "country": "UK",
      "followers": 2200,
      "socialHandles": [
        {
          "platform": "Instagram",
          "handle": "@emilybrown_instagram"
        },
        {
          "platform": "Facebook",
          "handle": "emily.brown.facebook"
        }
      ]
    }
  ]

}
