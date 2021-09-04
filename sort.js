const Arrays = [12, 40, 30,67, 100, 56,34,3];

// To avoid losing the original data;
const toBeSorted = [...Arrays]; 
document.getElementById("numbers").textContent = Arrays;

function myApp(){

    toBeSorted.sort(function(a,b){
                return (a-b);

        })

        document.getElementById("numbers").textContent = toBeSorted;

    }
    function btnReset(){

    document.getElementById("numbers").textContent=Arrays;
}