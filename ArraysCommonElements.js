function commonElements (array1, array2){
    var array3 = [];

    for(var i=0; i<=array1.length; i++){

        for(var y=0; y<=array1.length; y++){
        if(array1[i] == array2[y]){
            array3.push(array1[i]);
        }
        }
    }

    console.log(array3);

}

arr1=[1, 2, 3];
arr2=[100, 2, 1, 10];

commonElements(arr1, arr2);