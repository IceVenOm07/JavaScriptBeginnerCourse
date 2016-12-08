// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать будет массив значений одного из полей (отсортированных в порядке возрастания):

var usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
];
function getFieldValues(usersInfo, property) {
	var massive =[];
	for(i in usersInfo){
        for(j in usersInfo[i]){
            if(j == property){
                massive.push(usersInfo[i][j]);
            }
        }
    }
	var sortMassive = [];
	var s,t;
	//var i=0,j=0,m;
	j=0;
	sortMassive[0]=massive[0];
	for (i = 1; i < massive.length; i++) {
		while ((massive[i]>sortMassive[j])&&(sortMassive[j]!=undefined))	{
			j++;
		} 
		for (m=sortMassive.length;m>j;m--){
			sortMassive[m]=sortMassive[m-1];
		}
		sortMassive[j]=massive[i];
	j=0;
	}
    //console.log(sortMassive);
	return sortMassive;
}
console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']









// 2) Написать функцию, фильтрующую массив с использованием предиката:
var numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
function isEven(x) {/* Проверка на чётность */
	return x%2==0;
}
function filter(mas, condition){
	var sortMass=[];
	var j=0,i;
	for (i=0;i<mas.length;i++){
		if (condition(mas[i])==1){
        	sortMass[j]=mas[i];
			j++;
		}
    }
return sortMass;
}
console.log(filter(numbers, isEven)); // --> [2, 8, 34]

// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках

var firstLongString = 'Load up on guns and bring your friends it\'s fun to lose and to pretend';
var secondLongString = 'She\'s over bored and self assured oh no I know a dirty word';
function findSimilarWords(first, second){
    var firstMas = first.split(" ");
    var secondMas = second.split(" ");
    var povtory = [];
    for(i = 0;i < firstMas.length;i++){
        for(j = 0;j < secondMas.length;j++){
            if(firstMas[i] == secondMas[j]){
                if(povtory.indexOf(firstMas[i]) == -1){
                     povtory.push(firstMas[i]);
                }
                break;
            }
        }
    }
    return povtory;
}
console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and'];
// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:

var IpAddress = '10.223.98.2';
var subnetMask = 28;
function generateBroadcastAndNetworsAddresses(ip, mask){
	var n = 32-mask;
	var broadcast = [];
    var IpAdress = ip.split(".");
    var numSubnetAdr = Math.pow(2, n);
    var MaskArr = [0, 0, 0, 0];
    var counterOne = subnetMask;
    for(i = 0;i < 4;i++){
        for(j = 0;j < 8;j++){
            if(counterOne > 0){
                MaskArr[i] += Math.pow(10, 7 - j);
                counterOne--;
            }
            else{
                MaskArr[i][j] *= Math.pow(10, 7 - j);
            }
        }
        MaskArr[i] = parseInt(MaskArr[i], 2);
        IpAdress[i] = parseInt(IpAdress[i]);
    }
    var NetworkAdress = [];
    var Broadcast = [];
    for(i = 0;i < 4;i++){
        NetworkAdress[i] = IpAdress[i] & MaskArr[i];
        BroadcastAdress[i] = NetworkAdress[i];
    }
    BroadcastAdress[3] += numSubnetAdr - 1;
    BroadcastAdress = BroadcastAdress.join('.');
    NetworkAdress = NetworkAdress.join('.');
    var resultValues ={
        'BroadcastAdress' : BroadcastAdress,
        'NetworkAdress' : NetworkAdress
    };
    return resultValues;

	
}
console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0

// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// P. S. 1 == '1' (строковое и числовое представление number'ов считать идентичными)

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];
function addition(arrays){
    var totalArray = [];
    var qq = false;
    var dd = true;
    for(i in arrays){
        for(j in arrays[i]){
            for(k = 0;k < totalArray.length;k++){
                if(arrays[i][j] != undefined){
                    if(totalArray[k] != undefined){
                        if(totalArray[k].toString() == arrays[i][j].toString()){
                            qq = true;
                        }
                    }
                }
                else{
                    if(totalArray[k] == arrays[i][j]){
                        qq = true;
                    }
                }
            }
            if(!qq) totalArray.push(arrays[i][j]);
            qq = false;
        }
    }
    return totalArray;
}
console.log(addition(totalMessArray)); // --> ['a', 'aa', 1, undefined, true];
										// тут опечатка в примере вывода, нету числа 99