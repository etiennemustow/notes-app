# Notes Application

The aim of this challenge was to build an API that can be loaded onto a browser that a user can interact with to create, read, update and delete notes.

# Reterospective 

This was a week of me learning pure Javascript. Although I did succeed in implementing some user stories. Upon reflection of the code in this project, I want to display how I'd approach this project again.

## User Stories

``` 
As a user, so that a note can be made,
I'd like for a note to be able to have a description

```
```
As a user, so that I can see all my notes, 
I'd like to be able to store all my notes in a list
```
```
As a user, so that I can view all my notes,
I'd like to be able to see all my notes in a note list view
```
```
As a user, so that I can edit my notes,
I'd like to be able to interact with my notes 
```

```
As a user, so that I can delete my notes,
I'd like for there to be an option to delete my notes
```

```
As a user, so that I can enjoy my time using this application,
I'd like for it to be visually engaging
```

## Proposed technologies:

* Back-end:
  - Models: Javascript
* Front-end:
  - HTML, CSS, Node.JS
  
### Why use Node.JS?

* Node.JS enables the server to react only when an event (preset by a developer) occurs. For example, when a button is clicked, the page could switch to a new page.
* It is scalable - which suits the need of my project, starting from scratch
* Supports unit testing well
* It has "modules" (built in APIs) which, upon calling, can be used to setup servers, such as the 'http-server' module

## Proposed Testing:

* Existing: Jasmine
* Non-existing: After implementing with aforementioned (Possible extension of project -> Create my own assertion library)

## Previously (I would recommend not running project until I've updated (Expected to finish: **26th November, 2017**))

#### To run project:

* make sure you're in root directory
* npm install http-server --save
* node node_modules/http-server/bin/http-server
* Visit localhost://8080 or click this link

