const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

list = '<ul>';
elements.forEach(function(item) {
    list += '<li>'+item+'</li>';
});
list += '</ul>'

document.write(list);