function forLoop()
{
var currTime = 10;
var i;
for (var i = 1; i < 12; i++)
{ setTimeout (function () {
    document.getElementById("countdownTimer").innerHTML = "the time left is:" + currTime;
    currTime = currTime - 1;
}, 1000 *i);
}
}
function whileLoop()
{
var currTime = 10;
var i = 1;
while (i < 12)
{ 
    setTimeout (function () {
        document.getElementById("countdownTimer").innerHTML = "the time left is:" + currTime;
        currTime = currTime - 1;
    }, 1000 *i);
    i++; // equal to i = i + 1;
}
    alert("after while loop");
}
function doLoop()
{
var currTime = 10;
var i = 1;
do
{ setTimeout (function () {
    document.getElementById("countdownTimer").innerHTML = "the time left is:" + currTime;
    currTime = currTime - 1;
}, 1000 *i);
    i++; // equal to i = i + 1;
} while (i<12)
}
