// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!"

function hello(name) {

  if (name != "" && name != undefined ){
    let lowCaseName = name.toLowerCase();
    let firstLetterCapitalize = lowCaseName.charAt(0).toUpperCase() + lowCaseName.slice(1)
    return 'Hello, ' + firstLetterCapitalize + '!';
  }else {
    return 'Hello, World!'
  }
};

module.exports = hello;