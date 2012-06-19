function tester(eerste) {
    return function test(tweede) {
        if (tweede < eerste)
            return true;
        else
            return false;
    };
}

var t = tester(50);
console.log(t(20));
