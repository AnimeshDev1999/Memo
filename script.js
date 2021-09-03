"use strict";

// Global variables

let itemNo = 0;
let itemId = 0;
let noteNo = 0;
let noteId = 0;

// Querry selectors

const todoBtn = document.querySelector("#btn-todo");
const noteBtn = document.querySelector("#btn-note");
const overlay = document.querySelector("#overlay");
const todoPopup = document.querySelector("#todo-popup");
const notePopup = document.querySelector("#note-popup");
const todoText = document.querySelector("#todo-text");
const addItem = document.querySelector("#add-item");
const todoList = document.querySelector("#todo-list");
const addNote = document.querySelector("#add-note");
const noteText = document.querySelector("#note-text");
const para = document.querySelector("#para");

// Functions

function openTodoPopup() {
  let onOffState =
    overlay.classList.contains("hidden") &&
    todoPopup.classList.contains("hidden");

  if (onOffState) {
    overlay.classList.remove("hidden");
    todoPopup.classList.remove("hidden");
  }
}

function closeTodoPopup() {
  todoText.placeholder = "Input task";
  let onOffState = !(
    overlay.classList.contains("hidden") &&
    todoPopup.classList.contains("hidden")
  );

  if (onOffState) {
    overlay.classList.add("hidden");
    todoPopup.classList.add("hidden");
  }
}

function openNotePopup() {
  let onOffState =
    overlay.classList.contains("hidden") &&
    notePopup.classList.contains("hidden");

  if (onOffState) {
    overlay.classList.remove("hidden");
    notePopup.classList.remove("hidden");
  }
}

function closeNotePopup() {
  noteText.placeholder = "Type in a note";
  let onOffState = !(
    overlay.classList.contains("hidden") &&
    notePopup.classList.contains("hidden")
  );

  if (onOffState) {
    overlay.classList.add("hidden");
    notePopup.classList.add("hidden");
  }
}

function addTodoItem() {
  itemNo++;
  itemId = String(`obj${itemNo}`);
  let userInput = todoText.value;
  todoList.innerHTML += `<li id="${itemId}" onClick="reply_click(this.id)">${userInput}</li>`;
  todoText.value = "";
  todoText.placeholder = "Added!";
}

function reply_click(clicked_id) {
  let state = document.getElementById(clicked_id).classList.contains("strike");
  if (state) {
    document.getElementById(clicked_id).classList.remove("strike");
  } else {
    document.getElementById(clicked_id).classList.add("strike");
  }
}

function addNotes() {
  noteNo++;
  noteId = String(`par${noteNo}`);
  let userNotes = noteText.value;
  para.innerHTML += `<p id="${noteId}" onClick="reply_click(this.id)">${userNotes}</p><center><hr></center><br><br>`;
  noteText.value = "";
  noteText.placeholder = "Added!";
}

// Actions

todoBtn.addEventListener("click", openTodoPopup);

overlay.addEventListener("click", closeTodoPopup);

noteBtn.addEventListener("click", openNotePopup);

overlay.addEventListener("click", closeNotePopup);

addItem.addEventListener("click", addTodoItem);

addNote.addEventListener("click", addNotes);
