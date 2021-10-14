const entities = [
    {
        city: 'Rostov-on-Don\n' +
            'LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        img: 'Images/Image_Slider1.png'
    },
    {
        city: 'Sochi\n' +
            'Thieves',
        area: '105 m2',
        time: '4 months',
        img: 'Images/Image_Slider2.png'
    },
    {
        city: 'Rostov-on-Don\n' +
            'Patriotic',
        area: '93 m2',
        time: '3 months',
        img: 'Images/Image_Slider3.png'
    }
]

const city = document.querySelector('.Step_2_1_1_City')
const area = document.querySelector('.Step_2_1_1_Area')
const time = document.querySelector('.Step_2_1_1_Time')
const img = document.querySelector('.SecondBlockImage')

const setEntity = (index) => {
    city.innerText = entities[index].city
    area.innerText = entities[index].area
    time.innerText = entities[index].time
    img.style.backgroundImage = `url(${entities[index].img})`
}

const prev = document.querySelector('.Image_Arrow')
const next = document.querySelector('.Image_Arrow_Reverse')

const dot1 = document.querySelector( '.Image_dot_1')
const dot2 = document.querySelector( '.Image_dot_2')
const dot3 = document.querySelector( '.Image_dot_3')

const phrase1 = document.querySelector( '.Step_2_1_2_item_1')
const phrase2 = document.querySelector( '.Step_2_1_2_item_2')
const phrase3 = document.querySelector( '.Step_2_1_2_item_3')

let currentIndex = 0

prev.addEventListener('click', () => {
    if (currentIndex === 0){
        setEntity(2);
        currentIndex = 2;
    }
    else{
        setEntity(currentIndex - 1);
        currentIndex -= 1;
    }
})
next.addEventListener('click', () => {
    if (currentIndex === 2){
        setEntity(0);
        currentIndex = 0;
    }
    else {
        setEntity(currentIndex + 1);
        currentIndex += 1;
    }
})

dot1.addEventListener('click', () => {
    setEntity(0);
    currentIndex = 0;
    dot1.style.background = 'rgba(255, 255, 255, 1)';
    dot2.style.background = 'rgba(255, 255, 255, 0.3)';
    dot3.style.background = 'rgba(255, 255, 255, 0.3)';
    phrase1.style.textDecoration = 'underline';
    phrase1.style.color = '#E3B873';
    phrase2.style.textDecoration = 'none';
    phrase2.style.color = 'rgba(255, 255, 255, 0.3)';
    phrase3.style.textDecoration = 'none';
    phrase3.style.color = 'rgba(255, 255, 255, 0.3)';
})
dot2.addEventListener('click', () => {
    setEntity(1);
    currentIndex = 1;
    dot2.style.background = 'rgba(255, 255, 255, 1)';
    dot1.style.background = 'rgba(255, 255, 255, 0.3)';
    dot3.style.background = 'rgba(255, 255, 255, 0.3)';
    phrase2.style.textDecoration = 'underline';
    phrase2.style.color = '#E3B873';
    phrase1.style.textDecoration = 'none';
    phrase1.style.color = 'rgba(255, 255, 255, 0.3)';
    phrase3.style.textDecoration = 'none';
    phrase3.style.color = 'rgba(255, 255, 255, 0.3)';
})
dot3.addEventListener('click', () => {
    setEntity(2);
    currentIndex = 2;
    dot3.style.background = 'rgba(255, 255, 255, 1)';
    dot2.style.background = 'rgba(255, 255, 255, 0.3)';
    dot1.style.background = 'rgba(255, 255, 255, 0.3)';
    phrase3.style.textDecoration = 'underline';
    phrase3.style.color = '#E3B873';
    phrase2.style.textDecoration = 'none';
    phrase2.style.color = 'rgba(255, 255, 255, 0.3)';
    phrase1.style.textDecoration = 'none';
    phrase1.style.color = 'rgba(255, 255, 255, 0.3)';
})

phrase1.addEventListener('click', () => {
    setEntity(0);
    currentIndex = 0;
    dot1.style.background = 'rgba(255, 255, 255, 1)';
    dot2.style.background = 'rgba(255, 255, 255, 0.3)';
    dot3.style.background = 'rgba(255, 255, 255, 0.3)';
    phrase1.style.textDecoration = 'underline';
    phrase1.style.color = '#E3B873';
    phrase2.style.textDecoration = 'none';
    phrase2.style.color = 'rgba(255, 255, 255, 0.3)';
    phrase3.style.textDecoration = 'none';
    phrase3.style.color = 'rgba(255, 255, 255, 0.3)';
})
phrase2.addEventListener('click', () => {
    setEntity(1);
    currentIndex = 1;
    dot2.style.background = 'rgba(255, 255, 255, 1)';
    dot1.style.background = 'rgba(255, 255, 255, 0.3)';
    dot3.style.background = 'rgba(255, 255, 255, 0.3)';
    phrase2.style.textDecoration = 'underline';
    phrase2.style.color = '#E3B873';
    phrase1.style.textDecoration = 'none';
    phrase1.style.color = 'rgba(255, 255, 255, 0.3)';
    phrase3.style.textDecoration = 'none';
    phrase3.style.color = 'rgba(255, 255, 255, 0.3)';
})
phrase3.addEventListener('click', () => {
    setEntity(2);
    currentIndex = 2;
    dot3.style.background = 'rgba(255, 255, 255, 1)';
    dot2.style.background = 'rgba(255, 255, 255, 0.3)';
    dot1.style.background = 'rgba(255, 255, 255, 0.3)';
    phrase3.style.textDecoration = 'underline';
    phrase3.style.color = '#E3B873';
    phrase2.style.textDecoration = 'none';
    phrase2.style.color = 'rgba(255, 255, 255, 0.3)';
    phrase1.style.textDecoration = 'none';
    phrase1.style.color = 'rgba(255, 255, 255, 0.3)';
})
