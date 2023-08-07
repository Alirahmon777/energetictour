import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector"

const resources = {
  ru: {
    translation: {
      home: {
        header: "Туристическое агентство в Узбекистане",
      },
      hero: {
        title: "ENERGIC TOUR",
        p:"Направление",
        p1 :"Виберите",
        p2:"Начало тура",
        p3:"Конец тура",
        p4 :"Найти"
      },
      card:{
        name:"Горячие туры",
        button:"Все туры "
      } ,
      carusel:{
        name1:"Нидерланды",
        name2:"Малайзия",
        name3:"Сингапу",
        name4:"Нидерланды",
        name5:"Египет",
        name6:"Мальдивы",
        name7:"Турция",
        name8:"Сингапур"
      },
      nav:{
        li:"Главная",
        li1:"Туры",
        li2:"Наши контакты"
},
foooter:{
    a:"Навоийская область, г. Зарафшан, Тинчлик МФЙ,",
    a1:" 7 кичик туман кучаси, 8 уй, 72 хонадон",
    h2:"Контакты",
    h3:"Меню"
  },
  menyu:{
    menucha:"Главная",
    menucha2:"Туры",
    menucha3:"Наши контакты"
},
Contact:{
    h1:"Контактная информация",
    p:"Навоийская область, г. Зарафшан, Тинчлик МФЙ,",
    p1:"7 кичик туман кучаси, 8 уй, 72 хонадон",
    h2:"Написать сообщение",
    button:"Отправить"
}, 
 oxiri:{
    h1:"Забронировать тур",
    h4:"Оставьте заявку и наш менеджер свяжется с вами",
    p:"Ваше имя *",
    p1:"Ваша фамилия*",
    p2:"Ваш телефон *",
    p3:"Ваш почта *",
    button:"Купить"
  }

    }
  },
  uz: {
    translation: {
        home: {
            header: "O'zbekistonda sayyohlik agentligi",
        },
        hero: {
            title: "ENERGIYA SAYYOSI",
            p:"Yo'nalish",
            p1:"Tanlang",
            p2:"Ekskursiya  boshlanishi",
            p3 :"Ekskursiya yakuni",
            p4: "Toping"
        },
        card:{
            name:"Issiq sayohatlar",
            button:"Barcha turlar"
          },
          carusel:{
            name1:"Niderlandiya",
            name2:"Malayziya",
            name3:"Singapur",
            name4:"Niderlandiya",
            name5:"Misr",
            name6:"Maldiv orollari",
            name7:"Turkiya",
            name8:"Singapur"
          },
          nav:{
            li:"Uy",
            li1:"Ekskursiyalar",
            li2:"Bizning kontaktlarimiz"
  },
  Contact:{
    h1:"Bog'lanish uchun ma'lumot",
    p:"Navoiy viloyati, Zarafshon, Tinchlik MFI,”",
    p1:" 7 kichik tuman kuchasi, 8 uy, 72 honadon",
    h2:"Xabar yozish uchun",
    button:"Yuborish"
},
  foooter:{
    a:"Navoiy viloyati, Zarafshon, Tinchlik MFI,”",
    a1:" 7 kichik tuman kuchasi, 8 uy, 72 honadon",
    h2:"Kontakt",
    h3:"Menyu"
  },
  menu:{
            menucha:"Uy",
            menucha2:"Ekskursiyalar",
            menucha3:"Bizning kontaktlarimiz"
  },
  oxiri:{
    h1:"Ekskursiyani bron qilish",
    h4:"    So'rov qoldiring va menejerimiz siz bilan bog'lanadi",
    p:"Sizning ismingiz *",
    p1:"Sizning familiyangiz *",
    p2:"Sizning telefoningiz *",
    p3:"Sizning elektron po'chtangiz *",
    button:"Sotib olish"
  }
            
        
    }
  },
  en: {
    translation: {
        home: {
            header: "Travel agency in Uzbekistan",
        },
        hero: {
            title: "EDUCATION",
            p: "Direction",
            p1:"Choose",
            p2:"Start of the tour",
            p3:"End of tour",
            p4 :"Find"
      },
      card:{
        name:"Hot Tours", button:"All tours "
      },
      nav:{
                li:"Home",
                li1:"Tours",
                li2:"Our contacts"
      },
      carusel:{
        name1:"Netherlands",
        name2:"Malaysia",
        name3:"Singapore",
        name4:"Netherlands",
        name5:"Egypt",
        name6:"Maldives",
        name7:"Türkiye",
        name8:"Singapore"
      
      },
      foooter:{
        a:"Navoi region, Zarafshan, Tinchlik MFI,",
        a1:" 7 small district streets, 8 houses, 72 households",
        h2:"Contacts",
        h3:"Menu"

      },
      Contact:{
        h1:"Contact information",
        p:"Navoi region, Zarafshan, Tinchlik MFI,,”",
        p1:" 7 small district streets, 8 houses, 72 households",
        h12:"to write a message",
        button:"Sending"
    },
      menyu:{
        menucha:"Home",
        menucha2:"Tours",
        menucha3:"Our contacts"
},
oxiri:{
    h1:"Book a tour",
    h4:"Leave a request and our manager will contact you",
    p:"your name *",
    p1:"Your last name *",
    p2:"your phone number *",
    p3:"Your mail *",
    button:"Buy"
  }
    }
  }
};

i18n
  .use(initReactI18next)
  .use(i18nextBrowserLanguageDetector)
  .init({
    debug: true,
    resources,
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
});

export default i18n;