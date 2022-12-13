import React, { Component } from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="bookmark" title="Notícias" subtitle="As novidades sobre nossa escola ">
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Festa Junina da Escola</h5>
                    <p class="card-text">Maior enjamento dos alunos e professores.</p>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Lançamento de novos uniformes</h5>
                    <p class="card-text">Professores estreiam os novos modelos.</p>
                </div>
                </div>
            </div>
            </div>
        
    </Main>