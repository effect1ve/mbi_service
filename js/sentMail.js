const form = document.getElementById('form')
let selector = document.querySelector('#tel')
let im = new Inputmask('+999 (99) 999-99-99')
im.mask(selector)

let validation = new JustValidate('form')

validation.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Введите имя!'
    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимум 2 символа!'
    },
]).addField('#tel', [
    {
        validator: (value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Boolean(Number(phone) && phone.length === 12)
        },
        errorMessage: 'Введите телефон полностью!'
    }
]).onSuccess(async function() {
    let data = {
        name: document.getElementById('name').value,
        tel: document.getElementById('tel').value
    }

    let response = await fetch('mail.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })

    form.reset();

    let result = await response.text()

    alert(result)

    

})

const formCall = document.getElementById('formCall')
let selectorCall = document.querySelector('#phone')

let imCall = new Inputmask('+999 (99) 999-99-99')
imCall.mask(selectorCall)

let validationCall = new JustValidate('#formCall')

validationCall.addField('#phone', [
    {
        validator: (value) => {
            const phone = selectorCall.inputmask.unmaskedvalue()
            return Boolean(Number(phone) && phone.length === 12)
        },
        errorMessage: 'Введите телефон полностью!',
    }
]).onSuccess(async function() {
    let data = {
        tel: document.getElementById('phone').value
    }

    let response = await fetch('mail-call.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })

    formCall.reset();

    let result = await response.text()

    alert(result)

})


