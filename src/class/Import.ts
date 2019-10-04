import { Js2tronic } from "./Js2tronic";
//TODO: cleanup this proof of concept mess
export class Import {
    constructor(j2t: Js2tronic) {
        return this.init(j2t);
    }
    init(j2t: Js2tronic): any {
        function readSingleFile(e: any) {
            var file = e.target.files[0];
            if (!file) {
                return;
            }
           
            var reader = new FileReader();
            reader.onload = function(e) {
                if (e && e.target && e.target.result) {
                    var contents: string | ArrayBuffer = e.target.result;
                    var mutated: string = contents.toString();
                    var delimiter: string = "*begin data*";
                    mutated = mutated.substring(mutated.indexOf(delimiter) + delimiter.length);
                    j2t.reset();
                    j2t.input = mutated;
                    j2t.import();
                    displayContents(mutated);
                }
            };
            reader.readAsText(file);
        }
        
        function displayContents(contents: any) {
            var element = document.getElementById('file-content');
            if (element && contents) element.textContent = contents;
        }
        
        var fileInput: any = document.getElementById('file-input');
        if (fileInput) {
            fileInput.addEventListener('change', readSingleFile, false);
        }
    }
}