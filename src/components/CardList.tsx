import React, { useEffect, useState } from 'react';
import Card from './common/Card';
import { User } from '../interfaces/user-interface';
import "../styles/mainStyle.css";
import Search from './common/Search';
 
const CardList =()=> {
    const [monsters, setMonsters] = useState<User[]>([]); 
    const [filterMonsters, setFilterMonsters] = useState<User[]>(monsters); 
    const [searchText, setSearchText] = useState<string>(""); 

    const fetchMonsters = async () => {
        try {
            const response: Response = await fetch('https://jsonplaceholder.typicode.com/users');
            if(response.ok && response.status === 200) {
                const data: User[] = await response.json();
                setMonsters(data);
                return;
            }
        } catch (error) {
            console.error('Error fetching monsters:', error);
        }
         setMonsters([]);
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchField = event.target.value.toLowerCase();
        setSearchText(searchField);
    }

    useEffect(()=>{
        fetchMonsters();
    },[])

     useEffect(()=>{
        const filter: User[] = monsters.filter((monster: User) => {
            return monster.name.toLowerCase().includes(searchText);
        })
        setFilterMonsters(filter);
    },[monsters, searchText])

    return(
        <div className='card-list-container'>
            <h1 className='app-title'>Monsters Rolodex</h1>
            <h2 className='app-subtitle'>Search for Monsters</h2>
            <Search searchField={searchText} onSearchChange={handleSearchChange} />
            <div className="card-list">
                {filterMonsters.map(monster => (
                    <Card 
                        id={monster.id} 
                        name={monster.name} 
                        email={monster.email} 
                        website={monster.website} 
                    />
                ))}
            </div>
        </div>
    );
};

export default CardList;