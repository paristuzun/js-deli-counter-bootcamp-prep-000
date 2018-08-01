function takeANumber(line, newPerson) {
  
  line.push(newPerson);
  
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`
}
  
function nowServing(line) {
  
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var nextInLine = line.shift();
    return `Currently serving ${nextInLine}.`; }
}

function currentLine(line) {
    
    if  (line.length === 0){
        return "The line is currently empty.";
    }
    else { return "The line is currently: 1. " + line[0] +"", 2. "" + line[1];
  }
  return "The line is currently:" + newArray;
  // returns the current line as a string
}