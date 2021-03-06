import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
  }

  getPokemon(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get<PokeData>('https://pokeapi.co/api/v2/pokemon/1/');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => {
     console.log("Got our data! this one has following abilities:");
      for(const item of data.abilities){
        console.log(item.ability.name);
      }
      this.getCount(data.abilities[1].ability.url);
    });
  }

  getCount(url){
    let tempObservable = this._http.get<Count>(url);
    tempObservable.subscribe(data => {
      console.log(data.pokemon.length + " pokemons have the " + data.name.toUpperCase() + " ability");

    });
  }
}

interface PokeData { 
  abilities: Array<Ability> 
}
interface Ability {
  ability: {
    name: String,
    url: String
  }
}
interface Count {
  name: String, 
  pokemon: Array<Pokemon>
}
interface Pokemon{ 
  length: number 
}
