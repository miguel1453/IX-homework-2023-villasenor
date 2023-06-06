import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function PokemonTable(props) {



    useEffect( () => {

    })
    return (
        <div className='m-5'>
            {/* <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {
                        props.pokemon.map((poke) => {
                            return (
                            <div className="carousel-item active">
                                <img src={poke.fetchSprite()} className="d-block w-100" alt="..."></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            );
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
            <table className="table mt-5">
                <thead>
                    <tr>
                        <td>Pokemon</td>
                        <td>URL</td>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {props.pokemon.map((pokemon) => {
                        pokemon.fetchSprite();
                        return (
                            <tr key={pokemon.name}>
                                <td>{pokemon.name}</td>
                                <td>
                                    <a href={pokemon.url}>url</a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
