//Q1 array
var programmers = [
 {
 name: 'Bob',
 occupation: 'programmer',
 awesomeIndex: 7
 },
 {
 name: 'Alice',
 occupation: 'programmer',
 awesomeIndex: 9
 },
 {
 name: 'Zaphod',
 occupation: 'President of the Galaxy'
 }
];


//JQuery and lodash
var awesomeIndexArray =_.compact(_.pluck(_.filter(programmers,{occupation:'programmer'}), 'awesomeIndex'));
console.log(awesomeIndexArray);
var sum = awesomeIndexArray.reduce(function(sum,v){return sum + v;});
$('#awesome-index').html(sum/awesomeIndexArray.length);



//native JS
var awesomeIndex = document.getElementById('awesome-index');
function updateAwesomeIndex (sourceArray){
    var totalupdateAwesomeIndex = 0;
    var totalCount = 0;
    for (var i = 0, len = sourceArray.length; i < len; i++){
        if (sourceArray[i].occupation == 'programmer' && sourceArray[i].hasOwnProperty('awesomeIndex')){
            totalupdateAwesomeIndex += sourceArray[i].awesomeIndex;
            totalCount++;
        }
    }
   return totalupdateAwesomeIndex / totalCount;
}
awesomeIndex.innerHTML = updateAwesomeIndex(programmers);

