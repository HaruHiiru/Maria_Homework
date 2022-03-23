obj1={
Surname:"Haru",
age:33
} 

obj2={
name:"Haru",
yearOld:33
}


function PV_comparinson( object1, object2 ){


    for(var i in object1){
        if(object1[i] == object2[i]){
            return console.log("The two objects have the same proprety values ");
        }
    }
    return console.log("The two objects dont have the same proprety values");
}

PV_comparinson(obj1, obj2);