##Some same inputs

Here are some sample inputs, I just pasted them in from the pdf I had sketched on my Ipad.

```
Player player {
    weight: 4
    speed: 4
    health: 4
}
    
Enemy slime {
    behaviour: STILL
    weight: 0
    speed: 2
    health: 4
}
    
Enemy goblin {
    behaviour: FOLLOW
    weight: 4
    speed: 3
    health: 5
}

Terrain grass {
    image: 'url' //overwrites colour if working
    colour: RED; 
    friction: 0.5;
}

Platform ledge {
    image: 'url' //only one of colour or image is required, block invisible otherwise
    friction: '1'
    
Door door1 {
    image: 'url'
    goesTo: door2
}

Door door2 {
    colour: 'green'
    goesTo: door1
}

Coin coin1 {
    image: 'url'
    value: 2
}

Button button1 {
    colour: 'red'
}

// heres a colon (:) indicated setting a parameter, and equals (=) represents placing an object

Level level1 {
    player = (1,1) // may only be in ONE level, default spawn location
    // allows for arbitrary new lines, maybe whitespace
    height: 10
    width: 10
    background: 'url'
    
    Terrain:    // we can make these "categorizers" for placing objects optional: it's simply just easier to read
        grass = [(0,0), (0,9)], (5,4)   // square brackets indicate a range 
    Platform:
        ledge = [(6,4),(8,4)]
    Enemy:
        slime = (1,3),(1,4)
        goblin = [(1,1), (1,4)]
    Door:
        door1 = (1,7), (1,8)
        // we can either allow the user to place a door multiple times, then have the exit door be randomly picked amongst door objects that are the correct type,
        // ex. if we place door2 twice then if the player enters door1, they may come out of any door2
        // or we can simply make it so that each door can only be placed once
    button1 = (1, 5)    // example of unnested object placement
    if (MONEY > 10 | button1) {
        door1 = (1,9)
        goblin = (2,5) // get pranked idiot haha
    }
}

Level level2 {
    height: 10
    width: 20
    // since these are required parameters for level, we might be able to do something else like putting it in the actual level declaration
    
    Door:
        door1 = (10, 1)
        door2 = (1,1)
    Terrain:
        grass: [(0,0), (0,19)]
        // categorizers are not arbitrary, we can only put objects with the correct category in here
}
```

##So, what's this all gonna look like?

idk i'll boot up clip studio and make a sample later
