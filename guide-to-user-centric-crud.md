<img src="https://i.imgur.com/WcwEwxV.png">

# Guide to User-Centric CRUD using Express & Mongoose

## Intro

Typically, logged in users interact with an application that results in data being created, updated and deleted.

In almost every case, the application's code will need to ensure that the logged in user can only update/delete data created by them, not the data of other users.

To ensure this is the case, newly created data will need to reference which user created it regardless of whether that data is being referenced or embedded.

This guide will show an example of how to handle the above scenario...

## Example Data Model

Here's the ERD we'll use as an example:

<img src="https://i.imgur.com/hU1PVHI.png">

### User Has Two Different Relationships with Books

Note that in this app, a user "recommends" a book to other users by creating it in the database.  This one-to-many relationship is modeled with a `userRecommending` property on the Book model that references the `_id` of the user that created each particular book.

In addition, users can add books to their reading list.  This many-to-many relationship is modeled with a `usersReading` property which references an array of user documents' `_id` values.

### Comments

Because comments are being embedded within the book documents, there is no Comment model, just a schema.

#### Restricting Updating and/or Deleting of Comments Functionality

Each comment needs to know the user that submitted it.  Not just for display purposes, but to restrict the ability to update and/or delete a comment to that of the user that submitted it.  The `userId` property in the comment schema holds the `_id` of the user that submitted the comment and can therefore be compared to the logged in user's `_id` to render the additional UI for updating/deleting.

#### Copying Data For Better Efficiency

Since displaying the name of the user commenting on a book makes sense, note that, in addition to the `userId` property, the comment schema also has a `userName` property for holding the user's name.

Copying over the user's name from `req.user` in the comment `create` action will avoid having to populate comments every time they are accessed.  This provides much better efficiency.

## Example Routing

#### Books

|HTTP<br>Method|URL<br>Endpoint|Controller<br>Action|Purpose|
|---|---|---|---|
| GET | /books | booksCtrl.index | View all the books submitted by the logged in user |
| GET | /books/all | booksCtrl.allBooks | View all the books regardless of who submitted (use querystring params to perform filtering) |
| GET | /books/:id | booksCtrl.show | View the details of any book |
| GET | /books/new | booksCtrl.new | View a form for submitting a book (be sure to define this route before the show route)|
| POST | /books | booksCtrl.create | Handle the new book form being submitted |
| GET | /books/:id/edit | booksCtrl.edit | View a form for editing a book (restrict to user who submitted the book) |
| PUT | /books/:id| booksCtrl.update | Handle the edit book form being submitted (restrict to user who submitted the book) |
| DELETE | /books/:id| booksCtrl.delete | Delete a book (restrict to user who submitted the book) |
| POST | /books/:id | booksCtrl.addReading | Add the logged in user's _id to a book's userReading array |

#### Comments

|HTTP<br>Method|URL<br>Endpoint|Controller<br>Action|Purpose|
|---|---|---|---|
| n/a | n/a | index action | View all the comments for a book - no route needed since comments are embedded and displayed with their book |
| n/a | n/a | show action | Viewing a single comment does not make sense |
| n/a | n/a | new action | The form to add a new comment should be displayed on the book's show view |
| POST | /books/:id/comments | commentsCtrl.create | Handle the new comment form being submitted |
| GET | /comments/:id/edit | commentsCtrl.edit | View a form for editing a comment (restrict to user who submitted the comment) |
| PUT | /comments/:id| commentsCtrl.update | Handle the edit comment form being submitted (restrict to user who submitted the comment) |
| DELETE | /comments/:id| commentsCtrl.delete | Delete a comment (restrict to user who submitted the comment) |