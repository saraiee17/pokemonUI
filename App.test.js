import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, queryByText , getByText} from '@testing-library/react';
import  App  from './src/App';

test('App should render', () => {
    render(<App />);
  
    expect(screen.getByText('POKEMON')).toBeInTheDocument();
  });
  
//   test('user can add a pokemont to squad', () => {
//       render(<App />);
  
//       const squadButton = screen.getByText("My Squad");
//       const addButton = screen.getByText("Add to Squad");
    
//       expect(button).toBeInTheDocument();
//   });

// test('users can not add more than 6 pokemon to squad', () => {

// });

// test('pokemon can not duplicate a pokemon squad member', () => {

// });

// test('user can remove a pokemon from squad', () => {

// });

// test('once two pokemon are in squad battle button displays', () => {

// });

// test('user can search for a pokemon', () => {

// });