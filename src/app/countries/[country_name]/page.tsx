'use client'
import React from "react";

export default function countryName({ params}:any ) {
    const countries:{
        name: string,
        capital: string,
        population: number
    } [] = [
        {
            name: "pakistan",
            capital: "Islamabad",
            population: 225659433
        },
        {
            name: "USA",
            capital: "Washington D.C.",
            population: 331002651
        },
        {
            name: "India",
            capital: "New Delhi",
            population: 1380004385
        },
        {
            name: "China",
            capital: "Beijing",
            population: 1439323776
        },
        {
            name: "Indonesia",
            capital: "Jakarta",
            population: 273523615
        },
        {
            name: "Bangladesh",
            capital: "Dhaka",
            population: 164704538
        },
        {
            name: "srilanka",
            capital: "Colombo",
            population: 59799847
        },
    ];
    function findCountry(country_url:string){
        return countries.find(country => country.name.toLowerCase() == country_url.toLowerCase());
    }
    let result = findCountry(params.country_name)
  return (
    <div id="country">
        {
            result ? (
                <>
                <h1>Country Name: {result.name}</h1>
               <h1> Country Capital: {result.capital}</h1>
              <h1> Country Population: {result.population}</h1>
                </>
            ):(
                <h1>Country not found</h1>
            )
        }
    </div>
  );
};

