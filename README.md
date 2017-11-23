# Notes Application

The aim of this challenge was to build an API that can be loaded onto a browser that a user can interact with to create, read, update and delete notes.

# Reterospective 😅

This was a week of me learning pure Javascript. Although I did succeed in implementing some user stories. Upon reflection of the code in this project, I want to display how I'd approach this project again.

## User Stories

**1:**
``` 
As a user, so that a note can be made,
I'd like for a note to be able to have a description

```
**2:**

```
As a user, so that I can store all my notes, 
I'd like to be able to store all my notes in a list
```
**3:**

```
As a user, so that I can see just one of my notes,
I'd like to be able to view just one note on a screen
```
**4:**

```
As a user, so that I can view all my notes,
I'd like to be able to view all my notes on a screen
```
**5:**

```
As a user, so that I can interact my notes,
I'd like to be able to edit my notes 
```
**6:**

```
As a user, so that I can remove unwanted notes,
I'd like to be able to delete my notes
```
**7:**

```
As a user, so that I can enjoy my time using this application,
I'd like for it to be visually engaging
```

## Proposed technologies:

* **Back-end:**
  - Models: Javascript
* **Front-end:**
  - HTML, CSS, Node.JS
  
### Why use Node.JS?

* Node.JS enables the server to react only when an event (preset by a developer) occurs. For example, when a button is clicked, the page could switch to a new page.
* It is scalable - which suits the need of my project, starting from scratch
* Supports unit testing well
* It has "modules" (built in APIs) which, upon calling, can be used to setup servers, such as the 'http-server' module

## Proposed Testing:

* **Existing:** Jasmine
* **Non-existing: After implementing with aforementioned (Possible extension of project -> Create my own assertion library)

## Planning

### Class-Responsibility Cards

Class | Responsibility | Interacts with: |
------|----------------|-----------------|
**Note** | Has a description | NoteList|
**NoteList** | Can contain note(s) | Note, NoteListView |
**NoteListView** | Can display NoteLists | NoteListView, Server |

With these "cards", I'm just splitting the responsibilities (Single Responsibility Principle) between the classes so that it's clear which class is supposed to do what.
By doing this, it'll be easier to expand my project.

### Setting up Node.js 



## Previously (I would not recommend running this project until I've updated (Expected to finish an MVP by: **26th November, 2017**))

#### To run project:

* make sure you're in root directory
* npm install http-server --save
* node node_modules/http-server/bin/http-server
* Visit localhost://8080 or click this link

