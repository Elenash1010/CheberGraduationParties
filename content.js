// Все неподтверждённые значения скрываются на странице. Заполните после согласования.
const sharedProgramDetails = {
  'Режиссёрский квест с живыми героями': [
    'Не просто набор заданий, а полноценная приключенческая история, разработанная профессиональным режиссёром. Дети становятся участниками сюжета, взаимодействуют с настоящими персонажами, разгадывают загадки и проходят испытания.'
  ],
  'Несколько игровых локаций': [
    'Приключение начинается на территории курорта: детей ждут тематические площадки под открытым небом, командные задания и переходы между локациями.',
    'Затем действие продолжается внутри здания, где участников ждёт следующая часть программы.'
  ],
  'Сцена под открытым небом': [
    'Ведущие, музыка, интерактивы и развлекательная программа для всех участников.'
  ],
  'Праздничный обед': [
    'Для каждого ребёнка предусмотрено полноценное меню с возможностью выбора блюд.'
  ]
};

const graduationPricing = {
  price: 'от 3 200 ₽',
  adult: 'от 1 600 ₽'
};

const photographyExtra = 'Фотосъёмка выпускного — 5 000 ₽ за час или 8 000 ₽ за весь праздник.';

window.CONTENT={logo:'images/Лого/Логотип-синий.svg',phone:'+7 (3412) 240-555',tel:'+73412240555',address:'Ижевск, ул. Ленина, 132',website:'https://cheberresort.ru',vk:'https://vk.ru/cheber_resort',endpoint:'',privacy:'',consent:'',hero:{src:'images/белка/2026-07-03_0833_IMG_5085 _resized.jpg',file:'images/белка/2026-07-03_0833_IMG_5085 _resized.jpg',alt:'Две девочки на празднике в курорте «Чебер»'},placePhotos:[],advantages:[],gallery:[{"src":"images/белка/0Y0A4212.jpg","caption":"Территория"},{"src":"images/белка/prazdnichnyiObed.png","caption":"Обеденный зал"},{"src":"images/белка/tanczal.webp","caption":"Зал для праздника"},{"src":"images/белка/scena.webp","caption":"Сцена на улице"},{"src":"images/белка/lazernaya.png","caption":"Лазерная дискотека"}],diningPhoto:'images/белка/2026-07-03_0833_IMG_5085 _resized.jpg',programs:[{id:'garden',age:'Детский сад',title:'Выпускной для детских садов',name:'[Название программы]',description:'Три часа приключений, шоу и ярких впечатлений для будущих первоклассников в курорте «Чебер»!',includes:Object.keys(sharedProgramDetails),details:sharedProgramDetails,duration:'3 часа',time:'[Доступное время]',...graduationPricing,menu:'[Детское меню]',minimum:'[Минимальное количество участников]',extras:photographyExtra,terms:'[Важные условия]',photo:'images/белка/detskiysad.png',file:'images/program-garden.webp'},{id:'school',age:'4 класс',title:'Выпускной для 4-х классов',name:'[Название программы]',tagline:'Три часа приключений, шоу и ярких впечатлений!',description:'Современный выпускной для учеников 4-х классов в курорте «Чебер»!',includes:[...Object.keys(sharedProgramDetails),'Лазерная дискотека'],details:sharedProgramDetails,duration:'3 часа',time:'[Доступное время]',...graduationPricing,menu:'[Детское меню]',minimum:'[Минимальное количество участников]',extras:photographyExtra,terms:'[Важные условия]',photo:'images/белка/2026-07-03_0829_IMG_4915_edited.png',file:'images/program-school.webp'}]};
