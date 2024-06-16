import express from "express";
import { Task } from "../models/Task.js";

const getAllTasks = async (req, res) => {
  const task = await Task.find({});
  res.send("Get all tasks").json({ task });
};

//Asynchronous operations should have try and catch block
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

export { getAllTasks, createTask, getTask, updateTask, deleteTask };
