function getNum( num  ){
    console.log( num )
    document.getElementById('result').value += num;
}
function clearScr() {
    document.getElementById('result').value = "";
}
function removeNum(){
    var ras = document.getElementById('result').value;
    document.getElementById('result').value=document.getElementById('result').value.slice(0,ras.length-1);
}
function getAns(){
    document.getElementById('result').value= eval(document.getElementById('result').value );
    console.log(document.getElementById('result').value);
}
function sin()
{
    document.getElementById('result').value=Math.sin(result.value);
}
function cos()
{
    document.getElementById('result').value=Math.cos(result.value);
}
function  tan()
{
    document.getElementById('result').value=Math.tan(result.value);
}
function pow()
{
    document.getElementById('result').value=Math.pow(result.value,3);
}
function sqrt()
{
    document.getElementById('result').value=Math.sqrt(result.value);
}
function log()
{
    document.getElementById('result').value=Math.log(result.value);
}
function  pi()
{
    result.value= 3.14159265359;
}
function  e()
{
    result.value=2.71828182846;
}
function Percent() {
    document.getElementById("result").value = eval((document.getElementById("result").value/100));
}
function fact()
{
    var i, num, f;
    f=1;
    num=result.value;
    for(i=1;i<=num; i++)
    {
        f=f*i;
    }
    i=i-1;

    result.value=f;    
}
function Square() 
{
    result.value=Math.pow(result.value,2);
}
function cuberoot() 
{
    document.getElementById("result").value = Math.cbrt(document.getElementById("result").value);
}
function tenex()
{
    result.value=Math.pow(10,result.value);
}