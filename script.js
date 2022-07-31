import data from './data.json' assert {type: 'json'}

var days = document.querySelectorAll('.day div')
var value = document.querySelectorAll('.day .value')

for (let i = 0; i < days.length; i++) {

    if(days[i].classList.contains('mon')){
        days[i].style.height = data[i].amount * 2.5 + `px`
        value[i].innerHTML = `$`+ data[i].amount
        days[i].addEventListener('mouseenter', function(){
            value[i].style.opacity = '1'

            days[i].addEventListener('mouseleave', function(){
                value[i].style.opacity = '0'
            })
        })

    } else if(days[i].classList.contains('tue')){
        days[i].style.height = data[i].amount * 2.5 + `px`
        value[i].innerHTML = `$`+ data[i].amount
        days[i].addEventListener('mouseenter', function(){
            value[i].style.opacity = '1'

            days[i].addEventListener('mouseleave', function(){
                value[i].style.opacity = '0'
            })
        })

    } else if(days[i].classList.contains('wed')){
        days[i].style.height = data[i].amount * 2.5 + `px`
        value[i].innerHTML = `$`+ data[i].amount
        days[i].addEventListener('mouseenter', function(){
            value[i].style.opacity = '1'

            days[i].addEventListener('mouseleave', function(){
                value[i].style.opacity = '0'
            })
        })

    } else if(days[i].classList.contains('thu')){
        days[i].style.height = data[i].amount * 2.5 + `px`
        value[i].innerHTML = `$`+ data[i].amount
        days[i].addEventListener('mouseenter', function(){
            value[i].style.opacity = '1'

            days[i].addEventListener('mouseleave', function(){
                value[i].style.opacity = '0'
            })
        })

    } else if(days[i].classList.contains('fri')){
        days[i].style.height = data[i].amount * 2.5 + `px`
        value[i].innerHTML = `$`+ data[i].amount
        days[i].addEventListener('mouseenter', function(){
            value[i].style.opacity = '1'

            days[i].addEventListener('mouseleave', function(){
                value[i].style.opacity = '0'
            })
        })

    } else if(days[i].classList.contains('sat')){
        days[i].style.height = data[i].amount * 2.5 + `px`
        value[i].innerHTML = `$`+ data[i].amount
        days[i].addEventListener('mouseenter', function(){
            value[i].style.opacity = '1'

            days[i].addEventListener('mouseleave', function(){
                value[i].style.opacity = '0'
            })
        })

    } else if(days[i].classList.contains('sun')){
        days[i].style.height = data[i].amount * 2.5 + `px`
        value[i].innerHTML = `$`+ data[i].amount
        days[i].addEventListener('mouseenter', function(){
            value[i].style.opacity = '1'

            days[i].addEventListener('mouseleave', function(){
                value[i].style.opacity = '0'
            })
        })

    }
    
}
