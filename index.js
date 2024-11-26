// code your solution here
const saturdayFun = (arg = 'roller-skate') => `This Saturday, I want to ${arg}!`;
const mondayWork = (arg = 'go to the office') => `This Monday, I will ${arg}.`;
const wrapAdjective = (wrap) => {
    return function (string) {
        return `You are ${wrap}${string}${wrap}!`
    }
}
console.log(wrapAdjective('!!!')("hello"))