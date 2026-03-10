# Getting Started with NoteNode.js

NoteNode.js is a lightweight documentation site built with Node.js and Express.

## Installation

Before you begin, make sure you have Node.js installed on your machine.

clone the repository:
```bash
git clone https://github.com/your-username/notenode.git
cd notenode
npm install
```

## Running the Server
```bash
node server.js
```

The server will start on port **8080** by default.

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