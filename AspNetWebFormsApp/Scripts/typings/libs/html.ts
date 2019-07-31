interface Window {
   webkitURL: any;
}

interface HTMLElement {
   download: any;
}

interface Element {
   select: any;
}

declare var TextDecoder: {
    prototype: TextDecoder;
    new(label?: string, options?: TextDecoderOptions): TextDecoder;
};