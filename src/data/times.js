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
      start: '8:00',
      end: '8:30',
      image: breakfast,
    },
    {
      id: 1,
      text: 'oppitunti 1',
      start: '8:30',
      end: '9:30',
      image: study,
    },
    {
      id: 2,
      text: 'tauko: Ulkoilu',
      start: '9:30',
      end: '10:00',
      image: outdoor,
    },
    {
      id: 3,
      text: 'oppitunti 2',
      start: '10:00',
      end: '10:45',
      image: study,
    },
    {
      id: 4,
      text: 'lounas',
      start: '10:45',
      end: '11:15',
      image: food,
    },
    {
      id: 5,
      text: 'oppitunti 3',
      start: '11:15',
      end: '12:00',
      image: study,
    },
    {
      id: 6,
      text: 'tauko',
      start: '12:00',
      end: '12:15',
      image: playtime,
    },
    {
      id: 7,
      text: 'oppitunti 4',
      start: '12:15',
      end: '13:00',
      image: study,
    },
    {
      id: 8,
      text: 'tauko (Vikke välipala)',
      start: '13:00',
      end: '13:15',
      image: playtime,
    },
    {
      id: 9,
      text: 'oppitunti 5 (Vikke päiväunet)',
      start: '13:15',
      end: '14:00',
      image: study,
    },
    {
      id: 10,
      text: 'välipala',
      start: '14:00',
      end: '14:30',
      image: food,
    },
    {
      id: 11,
      text: 'ulkoilu',
      start: '14:30',
      end: '15:30',
      image: outdoor,
    },
    {
      id: 12,
      text: 'vapaa-aika (siivous)',
      start: '15:30',
      end: '17:00',
      image: freetime,
    },
    {
      id: 13,
      text: 'ruoka',
      start: '17:00',
      end: '17:30',
      image: food,
    },
    {
      id: 12,
      text: 'vapaa-aika',
      start: '17:30',
      end: '20:00',
      image: freetime,
    },
    {
      id: 14,
      text: 'iltapala',
      start: '20:00',
      end: '20:30',
      image: breakfast,
    },
    {
      id: 15,
      text: 'iltatoimet',
      start: '20:30',
      end: '21:00',
      image: evening,
    },
    {
      id: 16,
      text: 'lukuaika',
      start: '21:00',
      end: '21:30',
      image: read,
    },
    {
      id: 17,
      text: 'hiljaisuus, nukkumisaika',
      start: '21:00',
      end: '32:30',
      image: sleep,
    },
  ]
}

export default timeData
