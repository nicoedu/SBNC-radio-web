import fs from 'fs'
import path from 'path'
//import matter from 'gray-matter'

const radiosDirectory = path.join(process.cwd(), 'radios')

function readFile(path) {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var request = new XMLHttpRequest();
  request.open("GET", path, false);
  request.send(null)
  console.log(request)
  return JSON.parse(request.responseText);
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(radiosDirectory)
  
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.json$/, '') //Remove .json to get file id. ex: bandFM
    const fullPath = path.join(radiosDirectory, fileName) //Get fullPath 
    
    const fileContents = readFile(fullPath) // Get JSON object parsed

    return {
      id,
      ...fileContents
    }
  })
}

export function getAllRadioIds() {
  const fileNames = fs.readdirSync(radiosDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.json$/, '')
      }
    }
  })
}

export function getRadioData(id) {
  const fullPath = path.join(radiosDirectory, `${id}.json`)
  console.log(fullPath)
  const fileContents = readFile(fullPath)

  console.log(fileContents)
  
  return {
    id,
    ...fileContents
  }
}