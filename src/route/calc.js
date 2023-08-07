// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const Test = require('../class/test')

// ================================================================
// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
    res.render('calc', {
        name: 'calc',
        // вказуємо назву компонентів
        component: [],

        // вказуємо назву сторінки
        title: 'Calculator',
        // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout
        data: {},
    })
})

// Підключаємо роутер до бек-енду
module.exports = router
