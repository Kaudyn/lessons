function test1() {
    console.log('hello world')
}

test1();

function test2(message) {
    console.log(message);
}

test2('hello world2');

function test3(num1 , num2) {
    let ans = num1 + num2;

    return ans;
}

let answer = test3(1, 1);

console.log('test3=',answer)

function test4(num1 , num2 , num3) {
    let ans = (num1 + num2) - num3;

    return ans;
}

let ans = test4(1, 1, 1);

console.log('test4=',ans);

function Name(forename , sirname) {
    let ans2 = forename + ' ' + sirname;
 return ans2;
}

let ans2 = Name('kaidyn', 'kong');

console.log(ans2);