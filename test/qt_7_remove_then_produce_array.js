
//
// testing quaderno
//
// Mon Sep 13 17:32:15 JST 2010
//

file = arguments[0];
dir = file.split('/').slice(0, -1).join('/');
load(dir + '/base.js');

// 0

var template = " \n\
group \n\
  box customers.* \n\
    text_input .name \n\
"
var data = { "customers": [
  { 'name': 'alfred' },
  { 'name': 'bob' } ] };

Quaderno.render('quad', template, data, {});

assertEqual(
  ["div",{"class":"quad_root"},[
    ["div",{"class":"quad_element"},[
      ["input",{"class":"quad_type","type":"hidden","value":"group"},[]],
      ["div",{"class":"quad_element"},[
        ["input",{"class":"quad_id","type":"hidden","value":"customers"},[]],
        ["input",{"class":"quad_type","type":"hidden","value":"_array"},[]],
        ["input",{"class":"quad_array_template","type":"hidden","value":"[\"box\",{\"id\":\"customers.*\"},[[\"text_input\",{\"id\":\".name\"},[]]]]"},[]],
        ["div",{"class":"quad_element quad_box"},[
          ["input",{"class":"quad_id","type":"hidden","value":".0"},[]],
          ["input",{"class":"quad_type","type":"hidden","value":"box"},[]],
          ["div",{"class":"quad_element"},[
            ["input",{"class":"quad_id","type":"hidden","value":".name"},[]],
            ["input",{"class":"quad_type","type":"hidden","value":"text_input"},[]],
            ["span",{"class":"quad_key"},[".name"]],
            ["input",{"class":"quad_value","type":"text","onKeyPress":"Quaderno.handlers.stackOnKey(this);","onChange":"Quaderno.handlers.stackOnChange(this);","value":"alfred"},[]]]],
          ["a",{"class":"quad_minus_button array_remove_button quad_button","href":"","onClick":"Quaderno.handlers.removeFromArray(this); return false;"},[]],
          ["a",{"class":"quad_copy_button array_duplicate_button quad_button","href":"","onClick":"Quaderno.handlers.duplicateInArray(this); return false;"},[]]]],
        ["div",{"class":"quad_element quad_box"},[
          ["input",{"class":"quad_id","type":"hidden","value":".0"},[]],
          ["input",{"class":"quad_type","type":"hidden","value":"box"},[]],
          ["div",{"class":"quad_element"},[
            ["input",{"class":"quad_id","type":"hidden","value":".name"},[]],
            ["input",{"class":"quad_type","type":"hidden","value":"text_input"},[]],
            ["span",{"class":"quad_key"},[".name"]],
            ["input",{"class":"quad_value","type":"text","onKeyPress":"Quaderno.handlers.stackOnKey(this);","onChange":"Quaderno.handlers.stackOnChange(this);","value":"bob"},[]]]],
          ["a",{"class":"quad_minus_button array_remove_button quad_button","href":"","onClick":"Quaderno.handlers.removeFromArray(this); return false;"},[]],
          ["a",{"class":"quad_copy_button array_duplicate_button quad_button","href":"","onClick":"Quaderno.handlers.duplicateInArray(this); return false;"},[]]]],
        ["a",{"class":"quad_plus_button quad_button","href":"","onClick":"Quaderno.handlers.addToArray(this); return false;"},[]]]]]]]],
  $('.quad_root')[0].toArray());

//assertEqual(
//  { "customers": [
//    { 'name': 'alfred', 'city': 'copenhague' },
//    { 'name': 'bob', 'city': 'bristol' } ] },
//  Quaderno.produce('quad'));

var button = $('a.array_remove_button')[1];
Quaderno.handlers.removeFromArray(button);

assertEqual(
  {"customers":[{"name":"alfred"}]},
  Quaderno.produce('quad'));

