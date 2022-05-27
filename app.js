const bodys = document.querySelectorAll('.question')

bodys.forEach(function(body) {
    const btn = body.querySelector('.btn')

    btn.addEventListener('click', function() {
        bodys.forEach(function(item) {
            if (item !== body) {
                item.classList.remove('show-text')
            }
        })

        body.classList.toggle('show-text')
    })
})



// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const article = e.currentTarget.parentElement
//         console.log(article);
//         btns.forEach(function(item) {
//             console.log(item)
//             if (item !== article) {
//                 item.classList.remove('show-text')
//             }
//         });

//         article.classList.toggle('show-text')
//     })
// })


