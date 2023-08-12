<img src="https://i.imgur.com/QgojyYY.png" width="400">

# Project 2<br>Node/Express/MongoDB<br>Full-stack CRUD Application

## Overview

This second project will be your first adventure into **building a full-stack 
application.** You'll be **building a Node/Express/MongoDB app** from the ground up yourself.

This is exciting and by the end of this unit we will have given you the all of the tools needed to build your app.

You get to decide what you want to build - as long as it meets the technical requirements outlined below.

**You will be working individually for this project.** You'll be designing and coding the app yourself. **Please use your resources wisely!**

---

## Planning & Presentation Requirements

### Planning - Due by **AUGUST 15TH**:

- A public **[Trello](https://trello.com/) board** with:
    
    ☐ **User Stories**, each moving from left to right in the following 
      three+ lists in your board:<br>
      	- **Ice Box**<br>
      	- **Current/MVP**<br>
      	- **Completed**<br>
      	- **Any others you think will be helpful for your project**<br>
      <br>**User Stories** must follow the following template:<br>**_As a \<user role\>, I want \<feature\>, because \<reason\>._**<br>The _reason_ is optional if it's blatantly obvious.
      <br><br>Prioritize your user stories within the Ice Box with your "wish 
      list" stories at the bottom.
      <br><br>Then move the stories that make up the MVP to the Current/MVP list (in the order that you want to implement them) leaving behind the "real" optional/ice box features.
      <br><br>When all of the completed stories have been moved to the Completed list, move the highest-priority Ice Box story to the Current/MVP list and implement it, etc.
    
    ☐ A **Wireframes** list containing wireframes for the app's main pages of functionality, e.g. Landing Page, Posts Index Page, Favorite Posts Page, Add Post Page, etc.
    
    ☐ An **ERD** list containing an ERD identifying the attributes of each Data Entity (one for each Model and embedded schema). The ERD also needs to diagram relationships between the Entities (1:1, 1:M or M:M). Here's a [YouTube video to show you how](https://www.youtube.com/watch?v=QpdhBUYk7Kk).

### Project Presentations - **AUGUST 26TH**:

At the beginning of class on Sat, Aug 26th, a Project Submission must be submitted and filled out entirely by you.

You will have a maximum of 7 minutes to present your project following these guidelines:

1. **Introduce the Project:**

	☐ Intro your project by paraphrasing the README.
	
2. **Demonstrate the Project:**

	☐ Launch the deployed app by clicking the link in the README.
	
	☐ Log out and back in to demonstrate that auth is working (if chosen).
	
	☐ Perform fetch requests to your API to demonstarte that it is working (if chosen).
	
	☐ Demonstrate the features of the app, including full-CRUD data operations.
	
3. **Show/discuss your code:**

	☐ Show the "main" Mongoose model.
	
	☐ Show your favorite EJS template.
	
	☐ Show the controller for the main model.

4. **Share the experience:**

	☐ What was your biggest challenge?
	
	☐ What are your key learnings/takeaways?
	
5. **Q & A + Feedback**

---

## Technical Requirements

### Your App Must:

☐ Have **full-CRUD data operations** somewhere within the app's features. For example, you can have functionality that **C**reates & **U**pdates a _post_ and satisfy **D**elete functionality by implementing the ability to delete _comments_.

☐ Have **full RESTful routing** somewhere within the app's features. For example, you can have Index and Show for Products, and Update, Edit, Delete, New, and Create for Users. If you're working with one model, it needs to have full RESTful routing. 

☐ Be styled such that the app looks and feels similar to apps we use on a daily basis - in other words, **it should have a consistent and polished user interface.**

☐ Be **deployed online** (Heroku).

### You MUST choose ONE of these features to impliment in your project:

☐ **Have at least 2 data entities (data resources)** - one entity that represents the main functional idea for your app and another with a **One:Many** or **Many:Many** relationship with that main entity (embedded or referenced).

☐ Implement basic **authorization** that restricts access to features that need a logged in user in order to work (typically CUD data operations) by "protecting" those routes from anonymous users using the `isAuthenticated` middleware from the auth lesson.  In addition, ensure that editing and deletion of a data resource can only be done by the user that created that data (this is done in the controller - refer to the Guide to User-Centric CRUD).

☐ Consume a third-party API.  If you choose to implement this option, it's likely that the data from the API will be a key data resource in your app, therefore it's important to consider how to implement whatever CRUD data operations will apply.  For example, how will data from the API find its way into your database?  Be sure to discuss with an instructor when planning your app's features.

---

## Necessary Deliverables

☐ **A working full-stack app that meets or exceeds the above technical requirements, built by you, and hosted on Heroku**.

- **A ``README.md`` file** with these sections (here's a [basic template](project-readme-starter.md)):

  ☐ **App Title:** Contains a description of what the app does and optional background info.
  
  ☐ **Screenshot(s):** A screenshot of your app's landing page and any other screenshots of interest.
  
  ☐ **Technologies Used**: List of the technologies used.
    
  ☐ **Getting Started**: Include a link to the deployed app and your Trello board with the project's planning.
  
  ☐ **Next Steps**: Planned future enhancements (icebox items).
  
  > Note: Don't underestimate the value of a well crafted `README.md`. The `README.md` introduces your project to prospective employers and forms their first impression of your work!

☐ **Daily commits (the more the better) dating back to the very beginning of the project**. Commit messages should be in the present tense, e.g., "Style landing page" instead of "Styled landing page". **Do not "start over" with a new repo.**

☐ **Proposal and Submission**: Before your project is approved, the **project proposal template** must be filled out in full, then open the proposal issue. When it is time to submit your project during presentation day, you must fill out the **project submission template** in full in order to present and pass project.

---

## Getting Started

- **Discuss your app idea with an instructor to get their feedback before you dive too deep into user stories and wireframes.**
- If your app's functionality revolves around the logged in user, **implement authentication and basic navigation first!**
- If you are using an API, make sure it works first! **Test it out on Postman to make sure you are able to retrieve data!**
- **Prioritize and implement the user stories one at a time** by following the [Guide to Add a Feature to a Web App](guide-to-add-feature-to-web-app.md).
- **Follow the guidance and concepts in the** [Guide to User-Centric CRUD](guide-to-user-centric-crud.md).
- **Remember to keep things small and focus on the MVP** – feature creep can doom a project!
- Submit a Project Proposal once you have your app planned! 

---

## Project Proposal

Create an issue in this repo using the [**Project Proposal** issue template](https://git.generalassemb.ly/seirfx-minerva/project-2-NEM/issues/new?assignees=nicolehamilton%2Ckatie-pestotnik&labels=pending+review&template=proposal.md&title=Your+Name) and submit it before the proposal submission deadline **Tuesday Aug 15th 6:30PM PDT**, start of class.  Make sure you complete **all of the prompts**. 

Your proposal will be reviewed by the instructor team who will communicate feedback with you directly.

## Project Submission

Create an issue in this repo using the [**Project Submission** issue template](https://git.generalassemb.ly/seirfx-minerva/project-2-NEM/issues/new?assignees=nicolehamilton%2Ckatie-pestotnik&labels=pending+review&template=project_submission.md&title=Your+Name) and submit it before the presentation deadline **Saturday, Aug 26th, by 10AM PDT**, start of class. Make sure you complete **all of the prompts**. You will need to give us the link to your PERSONAL Github project repo as well as the deployed Github Pages link. 

Attendance and submitting the project submission issue ticket will be required in order to present during class and be counted as present for the day.

---

## Project Idea Guidance

Lots of the web applications you interact with on a daily basis can provide inspiration for this project as most are full-stack CRUD apps.  That is, they manipulate and display data.

#### DO NOT Choose Non-CRUD Applications Such As:

- Games
- Portfolio, or presentational pages
- Marketing or content-oriented websites

#### Good Examples

Some of the best apps are apps that track or manage things of **personal interest to you**:
  
- Music lesson tracking
- Soccer team tracker
- Rock climbing planner

So much of the Internet is CRUD apps!

- Social media:
  - Twitter
  - Instagram
  - Reddit
- Marketplaces: 
  - Craigslist
  - Etsy
- Organizational or Business apps:
  - Home Inventory planner
  - Personal planner
  - Customer management
  - Payroll/Accounting

Many simple apps can have their functionality enhanced by implementing the ability of users to comment on, and/or like/favorite items. 

Another piece of advice:  If you choose to develop an app that has the concept of a shopping cart (eCommerce app), do not attempt to implement the actual payment functionality.  Plus, here's a hint in regards to the data model: a "cart" is simply an "order" that has yet to be paid - in other words, you would only need an `Order` model vs. both `Order` & `Cart` models.

---

## Attendance

We will be holding stand-up meetings with instructors at 6:30PM PDT (Tuesday/Wednesday) and 10:00AM PDT / 2:00PM PDT (Saturday) to have a daily check on the progress your application.

There are no full class days during project weeks, but we expect you to be working on your project from at least 6:30PM - 10:45PM PDT (Tues/Wed) and at least 10AM - 6PM PDT (Sat) during class days and be available during that time for any meetings with instructors as needed. You are STILL required to show up to Outcomes during project weeks.

Instructors will also be dividing the class in half to be in 'pods'. We will post which students are with which instructor in our classroom Slack channel. The instructor in your pod will be the person's zoom link you join for your stand-up meetings. They will also be the person to reach out to for assistance most of the time as well as report to during project week.

We also will still have some attendance checks during project week, as follows:

Daily (Each Class Day): Your attendance will be taken. Official stand-up meetings will start next week.
Saturday, Aug 26th: Project presentation day! You're required to be in the class zoom starting at 10:00 AM PDT
Failure to make an attendance check will result in an unexcused absence for that missed time slot.

---

## Project Feedback + Evaluation

- Your instructors will endeavor to deliver your feedback to you ASAP following presentations, but please allow up to a week.
- If your instructors determine that your project would pass with minor fixes, you will be required to address the minor deficiencies by 6:30PM PDT the following day. Please be sure to inform your instructor when the fixes are complete. FYI, "minor fixes" are minor items that can be fixed very quickly, like code formatting, correcting the README, etc.
- If your instructors determine that the project does not meet the minimum requirements you may request to address the deficiencies identified and resubmit the project. However, be aware that **there is only a single opportunity to resubmit a project or project assessment during the course**.
- If there is a specific section of code that you would like an instructor to provide additional feedback, please ask!
- Please don't forget **plagarism of any kind is unacceptable and a violation of conduct. If you're unsure about something ask us!**

---
