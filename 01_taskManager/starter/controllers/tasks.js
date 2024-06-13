import express from "express";

const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

const createTask = (req, res) => {
  res.send("Create tasks");
};

const getTask = (req, res) => {
  res.send("Get single task");
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

export { getAllTasks, createTask, getTask, updateTask, deleteTask };
