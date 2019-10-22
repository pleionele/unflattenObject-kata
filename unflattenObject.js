const unflattenObject = (valuesToUnflatten) => {
    let result = {}; 
    
    for (key in valuesToUnflatten) {
        let assignedValue = valuesToUnflatten[key];
        let keysArray = key.split(".");
        let keyValue = keysArray[keysArray.length - 1];
        let unflattenedValue = { [keyValue]: assignedValue };

        for (let i = keysArray.length - 2; i >= 0; i--) {
            let assignedObjectValue = unflattenedValue;

            newKeyValue = keysArray[i];

            unflattenedValue = { [newKeyValue]: assignedObjectValue }
        }
        Object.assign(result, unflattenedValue);

    }
    return result;
};
module.exports = unflattenObject;