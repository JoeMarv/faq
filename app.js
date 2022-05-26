const btns = document.querySelectorAll('.btn')
const down = document.querySelector('.down')
const content = document.querySelector('.question-body')
const title = document.querySelector('.question-title-heading')

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const article = e.currentTarget.parentElement

        console.log(article);
        article.classList.toggle('show-text')
    })
})


