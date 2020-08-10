#!/usr/bin/env node

const colors = require('colors/safe');
const columnify = require('columnify');
const axios = require('axios');
const token = process.env.PIVOTAL_TOKEN;
const projectId = process.env.PIVOTAL_PROJECT_ID;
const userId = process.env.PIVOTAL_USER_ID;
const filter = `owner:${userId} AND -state:accepted`;

const xhr = axios.create({
  baseURL: 'https://www.pivotaltracker.com/services/v5',
  headers: {
    'X-TrackerToken': token,
  }
});

const colorizer = (story) => {
  return {
    id: colors.white.bold(story.id),
    status: story.current_state,
    name: story.name,
  };
};

function output(data) {
  console.log();
  console.log(data);
  console.log();
}

async function printStories() {
  const response = await xhr.get(`/projects/${projectId}/stories?filter=${filter}`);
  const stories = response.data.map(colorizer);

  output(columnify(stories, {
    columns: ['id', 'status', 'name'],
  }));
}

printStories();