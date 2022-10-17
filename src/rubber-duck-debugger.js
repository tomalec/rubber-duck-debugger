const baseURL = import.meta.url;
const quackURL = new URL('./quack.mp3', baseURL);
const duckURL = new URL('./rubber-duck.png', baseURL);


// Creates an object based in the HTML Element prototype
export class RubberDuckDebugger extends HTMLElement {
    // Fires when an instance of the element is created
    constructor() {
        super();
        var sroot = this.attachShadow({mode: 'open'});
        sroot.innerHTML = `<style>
                :host{
                    min-width: 267px;
                    min-height: 218px;
                    display: inline-block;
                }
            </style>
            <audio id="quack" src="${quackURL}"></audio>
            <img id="duck" src="${duckURL}"/>
            <audio id="bugTrace"></audio>`;
        this.ask = this.ask.bind(this);
    }

    // Fires when an instance was connected into the document
    connectedCallback() {
        if( this.isConnected ){
            this.addEventListener("click", this.ask);
        }
    }

    // Fires when an instance was disconnected from the document
    disconnectedCallback = function() {
        this.removeEventListener("click", this.ask);
    }

    async ask(){
        const duck = this;
        const bugTrace = duck.shadowRoot.getElementById("bugTrace");
        this.shadowRoot.getElementById("quack").play();

        if(duck.listening){
            duck.stream && duck.stream.getTracks().forEach( (track) => track.stop() );
            duck.listening = false;
        } else {
            await navigator.mediaDevices.getUserMedia(
                {video: false, audio: true}
            )
            .then(
                function(stream){
                    debugger
                    duck.listening = true;
                    bugTrace.srcObject = stream;
                    duck.stream = stream;
            })
            .catch( (err) => console.warn(err) );
        }
    }
}
window.customElements.define('rubber-duck-debugger', RubberDuckDebugger);
