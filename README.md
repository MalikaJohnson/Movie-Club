
## Le Ciné Club

## Project Description

Le Ciné Club is an Airtable and React build where the user is able to leave reviews on previously selected movies for the month. From the homepage, the user is able to select from a dropdown menu a movie of the month, that leads to a corresponding page with more info on said movie. Here the user is able to add and see comments and reviews from other members as well and participate in a full discussion. 

## Wireframes

The wireframe below showcases the homepage as well as the review and comment form/feed for each selected movie of the month via desktop. The homepage contains a carousel of movie posters and a header that includes a drop down menu that shows what movies have been selected for the month. Each movie's name routes to a page with more of that particular movies information as well as the ablitiy to leave comments/ reviews for said movie. This page renders an input for for the reviews as well as a submit button that allows the user to post their review to the feed.  

https://whimsical.com/le-cine-club-4HAoj98ZkZTeJoyWpwgj4H

## Component Hierarchy

https://drive.google.com/file/d/14zok6Q0SO9RC2OLSe-_UnpbIdj98FQfl/view?usp=sharing

## API and Data Sample

The Airtable is returning data as follows:

```json
{
    "records": [
        {
            "id": "recxuM0hH8uz7qyDn",
            "fields": {
                "title": "The Fifth Element",
                "year-released": "Year: 1997",
                "plot": "In the 23rd century, a New York City cabbie, Korben Dallas (Bruce Willis), finds the fate of the world in his hands when Leeloo (Milla Jovovich) falls...",
                "img": "https://movieposters2.com/images/1166899-b.jpg"
            },
            "createdTime": "2021-05-07T03:30:43.000Z"
        },
        {
            "id": "reckgkftaEURuX8nS",
            "fields": {
                "title": "The Devil Wears Prada",
                "year-released": "Year: 2006",
                "plot": "Andy (Anne Hathaway) is a recent college graduate with big dreams. Upon landing a job at prestigious Runway magazine, she finds herself the assistant ...",
                "img": "https://movieposters2.com/images/756550-b.jpg"
            },
            "createdTime": "2021-05-07T03:30:43.000Z"
        }
    ],
    "offset": "reckgkftaEURuX8nS"
}

```json

"records": [
        {
            "id": "rec3AcSfD7EClaSN4",
            "fields": {
                "title": "The Fifth Element",
                "rating": "Rating: 5/5",
                "review": "This movie is such a classic!!! I could watch it a million times and never get bored."
            },
            "createdTime": "2021-05-07T03:27:59.000Z"
        },
        {
            "id": "recAvwBfISMrQZnK1",
            "fields": {
                "title": "Who Framed Roger Rabbit",
                "rating": "Rating: 3/5",
                "review": "I remember watching this movie as a kid and thinking it was so cool with the cartoon integration. A really fun movie to throw on for the kicks."
            },
            "createdTime": "2021-05-07T03:27:59.000Z"
        }
    ]
}

```

### MVP/PostMVP

#### MVP 

- Create a homepage with clickable dropdown menu to each respective movie
- Get and post reviews from Airtable 
- Use forms to create reviews and update Airtable 

#### PostMVP  

- Add trailers to homepage 
- Filter each movie by genre with added search bar
- Add animation/ logo
- Add 15 movies to the queue

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 6-7| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|May 7| Project Approval/ Airtable Setup/ Pseudocode  | Incomplete
|May 10| Component Creation/ Get and Set Data| Incomplete
|May 11| CSS Compenents | Incomplete
|May 12| Initial Functional Model  | Incomplete
|May 13| Advanced CSS | Incomplete
|May 14| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal | H | 3hrs| hrs | hrs |
| Airtable setup | H | 2hrs| hrs | hrs |
| Data population for Homepage | H | 5hrs| hrs | hrs |
| Data population for page 2 | H | 6hrs| hrs | hrs |
| Form creation | H | 4hrs| hrs | hrs |
| Form update pg 2  | H | 2hrs| hrs | hrs |
| Data creation for dropdown menu | H | 3hrs| hrs | hrs |
| Component CSS Homepage| H | 5hrs| hrs | hrs |
| Component CSS page 2  | H | 5hrs| hrs | hrs |
| Connecting Airtable info for page 1 and 2  | H | 3hrs| hrs | hrs |
| Carousel Creation Homepage | H | 3hrs| hrs | hrs |

| Total | H | 42hrs| hrs | hrs |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
