module.exports.circleArea = radius => Math.PI * radius * radius;
module.exports.circlePer = radius => 2 * Math.PI * radius;
module.exports.recPer = (l, b) => 2 * (l + b);
module.exports.recArea = (l, b) => l * b;
module.exports.sqArea = side => side * side;
module.exports.sqPer = side => side * 4;
module.exports.ceil = number => Math.ceil(number);
module.exports.floor = number => Math.floor(number);
module.exports.add = (a, b) => a + b;
module.exports.sub = (a, b) => a - b;
module.exports.prod = (a, b) => a * b;
module.exports.div = (a, b) => a / b;
module.exports.rand = () => Math.random();
module.exports.round = (n) => Math.round(n);

module.exports.eval = clean(text) => {
    if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
    const code = text.join(" ");
    let evaled = inspect(eval(code), {
        depth: 0
    });
    clean(evaled)
}
