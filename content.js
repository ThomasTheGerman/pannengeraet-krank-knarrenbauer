var substitutionsFirst = [
    'Ammenschreck',
    'Angelgrät'
    'Ankerbett',
    'Annegate',
    'Annektiert',
    'Annregret',
    'Ballergret',
    'Bannegret',
    'Pannengerät',
    'Panzergret',
];

var substitutionsMiddle = [
    'Kampf',
    'Kann',
    'Klein',
    'Krampf',
    'Krank',
    'Krebs',
    'Krupp'
    'Mampf'
    'Trump',
    'Trumpf',
];

var substitutionsLast = [
    'Kackebauer',
    'Kalterschauer',
    'Kampfhubschrauber',
    'Karpfenkauer'
    'Keilerhauer',
    'Knarrenbauer',
    'Nervenklauer',
    'Pfaffenhauer',
];

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        var replacement = substitutionsFirst[Math.floor(Math.random() * substitutionsFirst.length)] +
            " " + substitutionsMiddle[Math.floor(Math.random() * substitutionsFirst.length)] +
            "-" + substitutionsLast[Math.floor(Math.random() * substitutionsLast.length)]

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Annegret Kramp-Karrenbauer|Kramp-Karrenbauer/gi, replacement);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}