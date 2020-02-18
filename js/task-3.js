const findBestEmployee = function(employees) {
    let completedTasks = 0;
    let name;
    const keys = Object.keys(employees);
    keys.forEach(key => {
        if (completedTasks < employees[key]) {
            completedTasks = employees[key];
            name = key;
        }
    });
    console.log(`${name}":${completedTasks}`);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
});
findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
});

findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
});
