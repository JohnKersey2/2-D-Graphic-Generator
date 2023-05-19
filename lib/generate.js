const Shape = require('./shapes')
let CSS_COLORS = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i; 

function generate(data) {
    if (data.text.length > 3) {
        throw new Error('Your text must contain no more than 3 characters!')
    };
    if (!data.background) {
        throw new Error('You must select a color!')
    };
    if (!data.color) {
        throw new Error('You must select a color!')
    };
    if (!CSS_COLORS.includes(data.background)) {
        if (!hexRegex.test(data.background)) {
            throw new Error('That color does not exist!')
        }
    };
    if (!CSS_COLORS.includes(data.color)) {
        if (!hexRegex.test(data.color)) {
            throw new Error ('That color does not exist!')
        }
    };

    if (data.shape === "Circle") {
        const newLogo = new Shape.Circle(
            data.text,
            data.color,
            data.background
        );
        return newLogo.drawShape()
    } else if (data.shape === "Square") {
        const newLogo = new Shape.Square(
            data.text,
            data.color,
            data.background
        );
        return newLogo.drawShape()
    } else if (data.shape === "Triangle") {
        const newLogo = new Shape.Triangle(
            data.text,
            data.color,
            data.background
        );
        return newLogo.drawShape()
    }
}

module.exports = generate;