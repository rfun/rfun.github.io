const transformObject = {
    baseType: 'Feet',
    conversionFromBase: {
        Inches: 12,
        Feet: 1,
        Yards: 0.333,
        Miles: 0.000189394,
        Meters: 0.304800097536,
        Kilometers: 0.00030480009753600003763
    }
};

// inches, feet, yards, miles, meters, kilometers
function lengthConverter(e) {
    let val = parseFloat(e.value),
        type = e.id.replace('inputConv', ''),
        valInFeet = val / transformObject.conversionFromBase[type];

    if (!val)
        return;

    // Get all input fields
    let fields = document.querySelectorAll('*[id^="inputConv"]');


    fields.forEach(e => {
        let eType = e.id.replace('inputConv', '');
        if (eType != type)
            e.value = transformObject.conversionFromBase[eType] * valInFeet
    });

    //console.log(fields);
}