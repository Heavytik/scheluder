import moment from 'moment'

import freetime from '../images/freetime.svg'
import evening from '../images/evening.svg'
import sleep from '../images/sleep.svg'
import breakfast from '../images/breakfast.svg'
import outdoor from '../images/outdoor.svg'
import playtime from '../images/playtime.svg'
import study from '../images/study.svg'
import food from '../images/food.svg'
import read from '../images/book.svg'

const timeData = () => {
  return [
    {
      id: 0,
      text: 'aamupala',
      start: moment({ hour: 8, minute: 0 }),
      image: breakfast,
    },
    {
      id: 1,
      text: 'oppitunti 1',
      start: moment({ hour: 8, minute: 30 }),
      image: study,
    },
    {
      id: 2,
      text: 'tauko: Ulkoilu',
      start: moment({ hour: 9, minute: 30 }),
      image: outdoor,
    },
    {
      id: 3,
      text: 'oppitunti 2',
      start: moment({ hour: 10, minute: 0 }),
      image: study,
    },
    {
      id: 4,
      text: 'lounas',
      start: moment({ hour: 10, minute: 45 }),
      image: food,
    },
    {
      id: 5,
      text: 'oppitunti 3',
      start: moment({ hour: 11, minute: 15 }),
      image: study,
    },
    {
      id: 6,
      text: 'tauko',
      start: moment({ hour: 12, minute: 0 }),
      image: playtime,
    },
    {
      id: 7,
      text: 'oppitunti 4',
      start: moment({ hour: 12, minute: 15 }),
      image: study,
    },
    {
      id: 8,
      text: 'tauko (Vikke välipala)',
      start: moment({ hour: 13, minute: 0 }),
      image: playtime,
    },
    {
      id: 9,
      text: 'oppitunti 5 (Vikke päiväunet)',
      start: moment({ hour: 13, minute: 15 }),
      image: study,
    },
    {
      id: 10,
      text: 'välipala',
      start: moment({ hour: 14, minute: 0 }),
      image: food,
    },
    {
      id: 11,
      text: 'ulkoilu',
      start: moment({ hour: 14, minute: 30 }),
      image: outdoor,
    },
    {
      id: 12,
      text: 'vapaa-aika (siivous)',
      start: moment({ hour: 15, minute: 30 }),
      image: freetime,
    },
    {
      id: 13,
      text: 'ruoka',
      start: moment({ hour: 17, minute: 0 }),
      image: food,
    },
    {
      id: 12,
      text: 'vapaa-aika',
      start: moment({ hour: 17, minute: 30 }),
      image: freetime,
    },
    {
      id: 14,
      text: 'iltapala',
      start: moment({ hour: 20, minute: 0 }),
      image: breakfast,
    },
    {
      id: 15,
      text: 'iltatoimet',
      start: moment({ hour: 20, minute: 30 }),
      image: evening,
    },
    {
      id: 16,
      text: 'lukuaika',
      start: moment({ hour: 21, minute: 0 }),
      image: read,
    },
    {
      id: 17,
      text: 'hiljaisuus, nukkumisaika',
      start: moment({ hour: 21, minute: 30 }),
      image: sleep,
    },
  ]
}

export default timeData
