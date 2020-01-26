# MTG Life Tracking App

This is meant to be a the basis for an MTG life tracking app. This is a hobby project and I intend to use this when I play EDH. It should add visual cards for each player, splitting screen real estate, and track total life, infect damage, commander damage, etc.

## Initial Goals

- Allow 8 players
- Split screen appropriately each time a player is added
- Allow cards to rotate
- Think of default rotations

## Flow

### App Start

- App should start up with two players splitting screen 50/50
- It should have a settings icon
  - In settings users should be able to set a default life total
- It should have an add new player button
  - When pressed should add a new player splitting real estate as needed

### Player Cards

- Should have:
  - Editable player name
  - Total life
  - +/- total life on card
  - If total life is clicked, ability to set total life
  - Color setting?
  - Rotation setting

## Layout

### App: 
- has player and settings context setup
- Settings
- Players

### Settings
- renders buttons
- disables add player button when players is a certain length
- can set initial life total and initial number of players
- can reset current game 
- uses modal

### Players
- renders player cards
- displays player info
- can set player life total
- can set player poison counter total
- can set player commander damage by color
- all of this uses modal

## TODO

- ~Set up initial app~
- ~Prove out rotation and player cards~
- ~Add settings icons~
- Add contexts
  - Add settings context
  - Add players context 
- Add player card modal ui
