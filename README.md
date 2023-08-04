# Notes BackEnd | Test Task

This task is to create a NodeJS application with TypeScript that will have few REST
endpoints.

## Requirements

Before using this server, make sure the following components are installed on your computer:

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/get-npm)

## Installation

1. Clone this repository to your local computer:

```shell
git clone https://github.com/DaniilPopov0809/radency-ht-03.git
```

2. Navigate to the project folder:

```shell
cd radency-ht-03
```

3. Create `.env` in root directory with number of the port:

```shell
PORT=3000
```

4. Install the dependencies using npm:

```shell
npm install
```

## Running

1. Start the server:

```shell
npm start
```

2. The server will be accessible at `http://localhost:3000`.

## Usage

The API follows the following format:

- `POST /notes` - create a note object
- `DELETE /notes/:id` - remove item
- `PATCH  /notes/:id` - edit item
- `GET /notes/:id` - retrieve item
- `GET /notes` - get all notes
- `GET /notes/stats` - get aggregated data statistics

Data for add note:

```shell
    {
        "title": "Shopping",
        "category": "Task", (one of "Task", "Idea", "Random Thought")
        "content": "Tomatos",
        "archive": false
    }
 ```
 Data for update note: any fields from add data.
---

## Tech stack

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![Commander](https://img.shields.io/badge/commander-000000?style=for-the-badge)](#)
[![JOI](https://img.shields.io/badge/joi-F1FD1D?style=for-the-badge)](#)

---

## Link to deploy:
[Link to deploy](https://notes-9q14.onrender.com)

## Test task:
[Test task](https://drive.google.com/file/d/1KJGc_3Qt2v-FRsuiWYVq8CQse2_fzMS5/view?usp=drive_link)