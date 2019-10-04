import { Js2tronic } from "./Js2tronic";

export class Export {
    constructor( j2t: Js2tronic ) {
        this.init(j2t);
    }
    init( j2t: Js2tronic ) {
        j2t.export();
        var canvas = document.createElement("canvas");
        canvas.width = 456;
        canvas.height = 256;
        
        var url = canvas.toDataURL().split(",");
        var encoded = url[1];
        var prefix = url[0]+",";
        
        var decoded = atob(encoded) + j2t.settings.output + j2t.output;
        
        var newUrl = prefix+btoa(decoded);
        
        var a = document.createElement('a');
        a.download = 'test.png';
        a.href = newUrl;
        a.textContent = 'Download PNG';
        
        document.body.appendChild(a);
    }
}