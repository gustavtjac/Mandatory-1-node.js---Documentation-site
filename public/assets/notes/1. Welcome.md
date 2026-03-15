# Getting Started with NoteNode.js

NoteNode.js is a lightweight documentation site built with Node.js and Express. It is made as a mandatory assignment for the course Full-stack Node.js course.

## Installation

Before you begin, make sure you have Node.js installed on your machine.

clone the repository:

```bash
git clone https://github.com/gustavtjac/Mandatory-1-node.js---Documentation-site.git
cd Mandatory-1-node.js---Documentation-site
npm install
```

## Running the Server - development

```bash
npm start-dev
```

The server will start on port your own defined port or **8080** by default.

## Running the Server - production

```bash
npm start-prod
```

The server will start on port your own defined port or **80** by default.

## Adding Notes

Drop any `.md` file into the `public/assets/notes/` folder and it will automatically appear in the sidebar.

## Folder Structure

```
notenode/
├── public/
│   ├── assets/
│   │   ├── notes/
│   │   └── js/
│   └── pages/
├── util/
│   └── notesUtil.js
└── server.js
```
