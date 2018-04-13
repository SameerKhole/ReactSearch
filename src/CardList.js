import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
	const cardsArray = robots.map((user,i )=> {
		return (<Card 
					key = {i} 
					id={robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email}
				/> 
				);
	})
	return (
		<div>
			{cardsArray}
		</div>
	);
}

/* 	Instead of using a separate variable we can directly use { } this 
because anything written in the braces is javascript

const CardList = ({robots}) =>{
	return (
		<div>
			{
				robots.map((user,i )=> {
					return (
							<Card 
								key = {i} 
								id={robots[i].id} 
								name={robots[i].name} 
								email={robots[i].email}
							/> 
					);
				})
			}
		</div>
	);
}
*/

export default CardList;