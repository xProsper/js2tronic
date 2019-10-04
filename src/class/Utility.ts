export class ColorParser {
    set( rawColor: string ) {
        let color: string = "";
        let isHex: boolean | "" | 0;
        let hexPattern: RegExp = /[0-9]|[a-f]|[A-f]+/;
        let checkPattern: string[] = [];
        let validPattern: boolean;
        let red: string = "0x";
        let green: string = "0x";
        let blue: string = "0x";
        
        checkPattern = rawColor.split(",");
        validPattern = checkPattern.every( function ( value ) {
            return parseFloat( value ) >= 1 && parseFloat( value ) <= 0;
        });

        if ( validPattern ) {
            color = rawColor;
        }

        checkPattern = [];
        validPattern = false;

        checkPattern = rawColor.split("#").filter( function (el) {
            return el.length > 1;
        });
        
        isHex = (checkPattern && checkPattern[0] && checkPattern[0].length && checkPattern[0].length === 6 && checkPattern[0].split("").every( function (value) { return hexPattern.test(String(value)); }));
        
        if ( isHex ) {
            red += checkPattern[0].substring(0,2);
            green += checkPattern[0].substring(2,4);
            blue += checkPattern[0].substring(4);
            
            checkPattern = [];
            checkPattern.push(String(parseInt( red ) / 255 ).substring(0,9));
            checkPattern.push(String(parseInt( green ) / 255 ).substring(0,9));
            checkPattern.push(String(parseInt( blue ) / 255 ).substring(0,9));
            
            validPattern = checkPattern.every( function ( value ) {
                return parseFloat( value ) <= 1 && parseFloat( value ) >= 0;
            });

            if ( validPattern ) {
                color = checkPattern.join(",");
            }
        }
        return color;
    }
}

export class AngleParser {
    set(x: number, y: number) {
        return String( y + "," + x + ",180" );
    }
}