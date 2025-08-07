export const FaqData = [
    {
        id: 1,
        question: '/vite.svg',
        answer: 'Iron Man',
    },
    {
        id:2,
        question: '/vite.svg',
        answer: 'Iron Man',
    },
    {
        id:3,
        question: '/vite.svg',
        answer: 'Iron Man',
    },
    {
        id:4,
        question: '/vite.svg',
        answer: 'Iron Man',
    },
    {
        id:5,
        question: '/vite.svg',
        answer: 'Iron Man',
    },
    {
        id:6,
        question: '/vite.svg',
        answer: 'Iron Man',
    },
    
]

const faqs = JSON.stringify(FaqData)
localStorage.setItem('faqs' , faqs)
const lastId = JSON.stringify(FaqData.length)
localStorage.setItem('faqs_lastId' , lastId)