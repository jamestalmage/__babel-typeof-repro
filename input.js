'use strict';

var foo = async (bar) => {
  return (await bar) + 'baz';
};

foo('bar').then(result => console.log(result));