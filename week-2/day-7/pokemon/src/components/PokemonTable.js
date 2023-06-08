import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function PokemonTable(props) {



    useEffect( () => {

    })
    return (
        <div className='m-5'>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <td>Pokemon</td>
                        <td>URL</td>
                        <td>Image</td>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {props.pokemon.map((pokemon) => {

                        return (
                            <tr key={pokemon.name}>
                                <td>{pokemon.name}</td>
                                <td>
                                    <a href={pokemon.url}>url</a>
                                </td>
                                <td><img src={pokemon.fetchSprite()}></img></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
