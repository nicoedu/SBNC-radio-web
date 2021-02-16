import fs from 'fs'
import path from 'path'
import band from '../radios/bandFM.json';
import JPCaruaru from '../radios/jovemPanCaruaru.json';
import JPRecife from '../radios/jovemPanRecife.json';
import music from '../radios/musicFM.json';

const radiosDirectory = path.join(process.cwd(), 'radios')


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
  let dataContent

  if (id == 'bandFM') {
    dataContent = band
  } else if (id == 'jovemPanRecife') {
    dataContent = JPRecife
  } else if (id == 'jovemPanCaruaru') {
    dataContent = JPCaruaru
  } else if (id == 'musicFM') {
    dataContent = music
  } 

  return {
    id,
    ...dataContent
  }
}