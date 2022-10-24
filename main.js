let turno = 0
const jugador1 = 'X'
const jugador2 = 'O'

const b1=document.getElementById('b1')
const b2=document.getElementById('b2')
const b3=document.getElementById('b3')
const b4=document.getElementById('b4')
const b5=document.getElementById('b5')
const b6=document.getElementById('b6')
const b7=document.getElementById('b7')
const b8=document.getElementById('b8')
const b9=document.getElementById('b9')

document.querySelectorAll('button').forEach((c)=>c.onclick=()=>{
    turno++
    turno%2?c.textContent = jugador1:c.textContent = jugador2
    setTimeout(ganador,0.5)
})

const ganador=()=>{
    if(b1.textContent==='X' && b2.textContent==='X' && b3.textContent==='X'){
        alert('Jugador 1 ganó la partida.')
        location.href='index.html'
    }else if(b1.textContent==='X' && b4.textContent==='X' && b7.textContent==='X'){
        alert('Jugador 1 ganó la partida.')
        location.href='index.html'
    }else if(b1.textContent==='X' && b5.textContent==='X' && b9.textContent==='X'){
        alert('Jugador 1 ganó la partida.')
        location.href='index.html'
    }else if(b7.textContent==='X' && b5.textContent==='X' && b3.textContent==='X'){
        alert('Jugador 1 ganó la partida.')
        location.href='index.html'
    }else if(b4.textContent==='X' && b5.textContent==='X' && b6.textContent==='X'){
        alert('Jugador 1 ganó la partida.')
        location.href='index.html'
    }else if(b7.textContent==='X' && b8.textContent==='X' && b9.textContent==='X'){
        alert('Jugador 1 ganó la partida.')
        location.href='index.html'
    }else if(b2.textContent==='X' && b5.textContent==='X' && b8.textContent==='X'){
        alert('Jugador 1 ganó la partida.')
        location.href='index.html'
    }else if(b3.textContent==='X' && b6.textContent==='X' && b9.textContent==='X'){
        alert('Jugador 1 ganó la partida.')
        location.href='index.html'
    }else if(b1.textContent==='O' && b2.textContent==='O' && b3.textContent==='O'){
        alert('Jugador 2 ganó la partida.')
        location.href='index.html'
    }else if(b1.textContent==='O' && b4.textContent==='O' && b7.textContent==='O'){
        alert('Jugador 2 ganó la partida.')
        location.href='index.html'
    }else if(b1.textContent==='O' && b5.textContent==='O' && b9.textContent==='O'){
        alert('Jugador 2 ganó la partida.')
        location.href='index.html'
    }else if(b7.textContent==='O' && b5.textContent==='O' && b3.textContent==='O'){
        alert('Jugador 2 ganó la partida.')
        location.href='index.html'
    }else if(b4.textContent==='O' && b5.textContent==='O' && b6.textContent==='O'){
        alert('Jugador 2 ganó la partida.')
        location.href='index.html'
    }else if(b7.textContent==='O' && b8.textContent==='O' && b9.textContent==='O'){
        alert('Jugador 2 ganó la partida.')
        location.href='index.html'
    }else if(b2.textContent==='O' && b5.textContent==='O' && b8.textContent==='O'){
        alert('Jugador 2 ganó la partida.')
        location.href='index.html'
    }else if(b3.textContent==='O' && b6.textContent==='O' && b9.textContent==='O'){
        alert('Jugador 2 ganó la partida.')
        location.href='index.html'
    }
}

const jugar = document.getElementById('jugar')
jugar.onclick=()=>{
    location.href='index.html'
}








