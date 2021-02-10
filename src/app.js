//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

moreAboutHome=(address,distanceFromTown,hasNeighbours)=>{
    var str1 = typeof(address);
    var str2 = typeof(distanceFromTown);
    var str3 = typeof(hasNeighbours);
    var res = str1.concat(str2, str3);
    return res;
}


//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

moreAboutKaren=(parents, noOfSiblings, isNuclearFamily)=>{
    if(typeof(parents)==="string" && typeof(noOfSiblings)==="number" && typeof(isNuclearFamily)==="boolean")
    {
        return true;
    }
    else{
        return false;
    }
}


//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

doesFriendExist=(ageInText, ageInNumber)=>{
    if(isNaN(ageInText) || isNaN(ageInNumber)){
        return NaN;
    }
}


//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

sweetTooth=(x, y, z, n)=>{
    if((typeof(x)==="string" || typeof(y)==="string" || typeof(z)==="string" || typeof(n)==="string") || (x===undefined))
    {
        return "No sweets for Karen's friend";
    }
    let rem_sweet = (x-y-(z*n))
    return rem_sweet;    
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.

convertToCelsius=(fahrenheit)=>{
    if(typeof(fahrenheit)=== "number")
    {
        let celsius = (fahrenheit-32)*(5/9);
        return celsius;
    }
    else{
        return "Technical Error!";
    }
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take

aDifficultChoice=(choice)=>{
    switch(choice){
        case 1: text="Take her daughter to a doctor";
                break;
        case 2: text="Talk to her husband about it";
                break;
        case 3: text="Counsel her daughter herself";
                break;
        case 4: text="Lock her daughter in her room";
                break;
        case -1:text="Break down and give up all hope";
                break;            
        case undefined: text="Wasn't able to decide";
                        break;
        case "I give up": text="Refused to do anything for Karen";
                            break;                                
    }
    return text;
}


//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy