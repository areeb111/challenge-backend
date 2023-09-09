const apiController = {};


// Function to find median of array
function findMedian(arr){
    // Declare a variable to store the median
    let median=0;

    // Find the length of array
    let len = arr.length;

    // If the array length is even, median is the average of the middle two elements
    if(len%2==0){
        median = [arr[len/2-1], arr[len/2]];
    } else {
        // If the array length is odd, median is the middle element
        median = [arr[(len-1)/2]];
    }
    return median;
}

// Function to find prime numbers
function primeNumbers(n){
    // Declare an empty array to store the prime numbers
    let arr=[];
    let count=0;

    // Loop through the numbers from 1 to n
    for(var j=1;j<=n;j++){
        // Loop through the numbers from 1 to j
        for(var i=1;i<=j;i++){
            // If the number is dividable by any number other than 1 and itself, increment the count
            if(j%i==0){
                count++;   
            }
        }
        // If the count is 2, the number is prime
        if(count==2){
            arr.push(j);
        }
    // Reset the count to 0
    count=0;
    }
return arr;
}

// API Endpoint to find prime numbers and median
apiController.prime = function(req, res) {

    // Get the input number from the query string
    const num  = req.query.num;
    console.log("Checking number: ", num);
    // Check if the input is valid
    if(num <= 1 || num > 10000){
        res.json({ status: false, message: "Invalid input parameter `num` should be between 2 and 10,000" })
    } else {
        // Find the prime numbers
        const primes = primeNumbers(num);

        // Find the median of the prime numbers
        const median = findMedian(primes);

        // Return the response
        res.json({ status: true, inputNumber:  num, primes: primes,median: median })
    }
}

export default apiController;