import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'fi',
  fallbackLng: 'fi',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        Artikkelit: 'Articles',
        Galleria: 'Gallery',
        Veistokset: 'Sculptures',
        Piirustukset: 'Drawings',
        Piirustuksia: 'Drawings',
        Tilateokset: 'Installations',
        Julkiset_teokset: 'Public works',
      }
    },
    fi: {
      translation: {
        Artikkelit: 'Artikkelit',
        Galleria: 'Galleria',
        Veistokset: 'Veistokset',
        Piirustukset: 'Piirustukset',
        Piirustuksia: 'Piirustukset',
        Tilateokset: 'Tilateokset',
        Julkiset_teokset: 'Julkiset teokset',
      }
    }
  },
})

export default i18n

// fi: {
//     translation: {
//       Articles: 'Artikkelit',
//       Gallery: 'Galleria',
//       Sculptures: 'Veistokset',
//       Drawings: 'Piirustukset',
//       Installations: 'Tilateokset',
//       Public_works: 'Julkiset teokset',
//     }
//   }

// en: {
//     translation: {
//       Articles: 'Articles',
//       Gallery: 'Gallery',
//       Sculptures: 'Sculptures',
//       Drawings: 'Drawings',
//       Installations: 'Installations',
//       Public_works: 'Public works',
//     }