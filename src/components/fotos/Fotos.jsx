import React, { Component } from 'react'
import Main from '../template/Main'
import foto1 from '../../assets/imgs/AUDITORIO.png'
import foto2 from '../../assets/imgs/CARD.png'
import foto3 from '../../assets/imgs/GodsTech_Logo.jpeg'
import foto4 from '../../assets/imgs/PROMO.png'

export default props =>
    <Main icon="image" title="Fotos" subtitle="As melhores imagens da nossa equipe ">
        <div class="row" >
        <div class="card col-12 col-md-6" style={{width: '18rem'}}>
        <img class="card-img-top" src={foto1} alt="Card image cap"></img>
        <div class="card-body">
            <p class="card-text">Palestra Sobre Segurança da Informação.</p>
        </div>
        </div>

        <div class="card col-12 col-md-6 " style={{width: '18rem'}}>
        <img class="card-img-top" src={foto2} alt="Card image cap"></img>
        <div class="card-body">
            <p class="card-text">Um novo momento para aprender.</p>
        </div>
        </div>

        <div class="card col-12 col-md-6 " style={{width: '18rem'}}>
        <img class="card-img-top" src={foto3} alt="Card image cap"></img>
        <div class="card-body">
            <p class="card-text">O nosso próximo evento.</p>
        </div>
        </div>

        <div class="card col-12 col-md-6" style={{width: '18rem'}}>
        <img class="card-img-top" src={foto4} alt="Card image cap"></img>
        <div class="card-body">
            <p class="card-text">Um gostinho do que vem por ai.</p>
        </div>
        </div>
        </div>
        
    </Main>