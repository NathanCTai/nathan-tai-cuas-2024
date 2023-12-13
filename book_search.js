/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */
    var resultList = []
    // Loop through all books in input
    for (const book of scannedTextObj) {
        // Look through each parsed section of the book
        for (const item of book.Content) {
            // If this section contains the searchTerm, add to results
            if (item.Text.includes(searchTerm)) {
                // Need to create result object in the right form
                resultObject = {
                    "ISBN": book.ISBN,
                    "Page": item.Page,
                    "Line": item.Line,
                };
                resultList.push(resultObject);
            }
        }
    }

    var result = {
        "SearchTerm": searchTerm,
        "Results": resultList
    };
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

const multipleBooksIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    },
    {
        "Title": "Ulysses",
        "ISBN": "9780394743127",
        "Content": [
            {
                "Page": 1,
                "Line": 1,
                "Text": "Stately, plump Buck Mulligan came from the stairhead,"
            }
        ]
    },
    {
        "Title": "Leviathan",
        "ISBN": "9780141395098",
        "Content": [
            {
                "Page": 40,
                "Line": 1,
                "Text": "The Invention of Printing, though ingenious"
            },
            {
                "Page": 48,
                "Line": 4,
                "Text": "which besides the signification of what we imagine of their nature"
            }
        ]
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const test5expected = {
    "SearchTerm": "e",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        },
    ]
}

const test6expected = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780394743127",
            "Page": 1,
            "Line": 1
        },
        {
            "ISBN": "9780141395098",
            "Page": 48,
            "Line": 4,
        }
    ]
}
/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

// Test 3 - negative test (nonexistent is not present in Twenty Leagues In)
const test3result = findSearchTermInBooks("nonexistent", twentyLeaguesIn);
if (test3result.Results.length == 0){
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", 0);
    console.log("Received:", test3result.Results.length);
}

// Test 4 - cases do not match
const test4result = findSearchTermInBooks("Momentum", twentyLeaguesIn);
if (test4result.Results.length == 0){
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", 0);
    console.log("Received:", test3result.Results.length);
}

// Test 5 - positive test where the letter is present in multiple entries
const test5result = findSearchTermInBooks("e", twentyLeaguesIn);
if (JSON.stringify(test5expected) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", test5expected);
    console.log("Received:", test5result);
}

// Test 6 - positive test where the input contains multiple books
const test6result = findSearchTermInBooks("the", multipleBooksIn);
if (JSON.stringify(test6expected) == JSON.stringify(test6result)){
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", test6expected);
    console.log("Received:", test6result);
}