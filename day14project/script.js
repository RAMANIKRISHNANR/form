//............firstname..........//
var firstname=createlabel("label","for","firstname","FirstName");
var b1=linebreak("br");
var inputfirstname=inputfield("input","type","text","id","firstname");
var b2=linebreak("br");
//............lastname............//
var lastname=createlabel("label","for","lastname","LastName");
var b3=linebreak("br");
var inputlastname=inputfield("input","type","text","id","lastname");
var b4=linebreak("br");
//............email...............//
var email=createlabel("label","for","email","Email");
var b5=linebreak("br");
var inputemail=inputfield("input","type","email","id","email");
var b6=linebreak("br");
//............phonenumber..........//
var phonenumber=createlabel("label","for","phonenumber","PhoneNumber");
var b7=linebreak("br");
var inputphonenumber=inputfield("input","type","tel","id","phonenumber");
var b8=linebreak("br");
document.body.append(firstname,b1,inputfirstname,b2,lastname,b3,inputlastname,b4,email,b5,inputemail,b6,phonenumber,b7,inputphonenumber,b8);

function createlabel(tagname,attriname,attrivalue,content){
    var label=document.createElement(tagname);
    label.setAttribute(attriname,attrivalue);
    label.innerHTML=(content);
    return label;
}

function inputfield(tagname,attriname,attrivalue,attriname1,attrivalue1){
    var input=document.createElement(tagname);
    input.setAttribute(attriname,attrivalue);
    input.setAttribute(attriname1,attrivalue1);
    return input;
}
function linebreak(breaker){
    var b=document.createElement(breaker);
    return b;
}