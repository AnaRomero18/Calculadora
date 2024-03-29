const {response, request} = require(`express`)
const express = require(`express`)
const { multiply } = require('mathjs')
const math = require(`mathjs`)
const app = express()
const port = 5000

app.use(express.json())

app.post(`/numeros/sumatoria`,(req,res) => {
    const suma = math.sum(req.body.numeros)
    var result = {
        resultado: suma
    }
    response.send(result)
})

app.post(`/numeros/productoria`,(req,res) => {
    const producto = math.prod(request.body.numeros)
    var result_produc = {
        resultado: producto
    }
    response.send(result_produc)
})

app.post(`/numeros/extremos`, (req,res) => {
    const minimo = math.min(req.body.numeros)
    const maximo = math.max(req.body.numeros)
    var result = {
         resultado: (minimo, maximo)
    }
    res.send(result)
})

app.post(`/numeros/resta`, (req,res) => {
    const resta = math.subtract(req.body.numeroA, req.body.numeroB)
    var result = {
        resultado: resta
    }
    res.send(result)
})

app.post(`/numeros/division`, (req,res) => {
    const dividir = math.divide(req.body.numeroA, req.body.numeroB)
    var result = {
        resultado: dividir
    }
    res.send(result)
})