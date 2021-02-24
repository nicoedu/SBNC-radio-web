/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import fs from 'fs'
import path from 'path'
import band from '../radios/band.json'
import JPCaruaru from '../radios/jpcaruaru.json'
import JPRecife from '../radios/jprecife.json'
import music from '../radios/music.json'

const radiosDirectory = path.join(process.cwd(), 'radios')

export function getAllRadioIds() {
  const fileNames = fs.readdirSync(radiosDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, '')
      }
    }
  })
}

export function getRadioData(id) {
  let dataContent

  if (id === 'band') {
    dataContent = band
  } else if (id === 'jprecife') {
    dataContent = JPRecife
  } else if (id === 'jpcaruaru') {
    dataContent = JPCaruaru
  } else if (id === 'music') {
    dataContent = music
  }

  return {
    id,
    ...dataContent
  }
}
