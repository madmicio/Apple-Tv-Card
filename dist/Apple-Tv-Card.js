import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";


class AppleTvCard extends LitElement {
    static get properties() {
        return {
            hass: {},
            config: {},
            _show_commands: {},
        };
    }

    constructor() {
        super();
        this._show_commands = true;

    }
    render() {
        var stateObj = this.hass.states[this.config.entity];
        // Testo da visualizzare
        const textToShow = stateObj.attributes.media_title || this.config.name || "apple tv";
        // Larghezza del div con ID "container"
        const containerWidth = 24;
    
        // Verifica se la lunghezza del testo è maggiore della larghezza del container
        const shouldScroll = textToShow.length > containerWidth;
        var speed = Math.round((textToShow.length / containerWidth) * 6);
        const full_screen = this.config.full_screen ? this.config.full_screen : false;

		
         return html`
         <!-- style="enable-background:new 0 0 1312 2848;background: linear-gradient(155deg, rgba(60,66,80,1) 0%, rgba(23,26,37,1) 42%, rgba(21,25,35,1) 100%);" (backgrous di svg(-->
		 <?xml version="1.0" encoding="utf-8"?>
		 <svg version="1.1" id="apple_x5F_tv" class="${full_screen == true ? ' ' : 'card'}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
			  y="0px" viewBox="0 0 1312 2848"  xml:space="preserve">
		 <style type="text/css">
         .card {
            background: linear-gradient(155deg, rgba(60,66,80,1) 0%, rgba(23,26,37,1) 42%, rgba(21,25,35,1) 100%);
            border-radius: var(--ha-card-border-radius, 4px);
            box-shadow: var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );
            color: var(--primary-text-color);
            display: flex;
            transition: all .3s ease-out 0s;
            justify-content: center;
         }
         .shadow {
            -webkit-filter: drop-shadow( 4px 4px 3px rgba(0, 0, 0, .7)) drop-shadow( -4px -4px 3px rgba(255, 255, 255, .2));
            filter: drop-shadow( 7px 7px 12px rgba(0, 0, 0, .9)) drop-shadow( -3px -3px 5px rgba(255, 255, 255, .15));
          }
          .ripple
          {
              filter: drop-shadow( 7px 7px 12px rgba(0, 0, 0, .9)) drop-shadow( -3px -3px 5px rgba(255, 255, 255, .15));
          }
          .ripple:active
          {
              filter: drop-shadow( 7px 7px 12px rgba(0, 0, 0, 0)) drop-shadow( -3px -3px 5px rgba(255, 255, 255, 0));
          } 
          .ripple_inverse
          {
              
              fill:transparent;
          }
          .ripple_inverse:active
          {
              fill:rgba(0, 0, 0, 0.2);
          } 
          
          

          .app_container {
            height: 1440px;
            background-color:transparent;
            box-shadow:  inset 5px 5px 12px 0px #000A13, inset -5px -5px 8px 0px rgba(255,255,255,0.1);
            border-radius: 50px;
            display:flex;
            flex-wrap: wrap;
            flex-direction: row;
            padding-top: 40px;
            margin-top: 40px;
            //justify-content: space-around;
            //align-items: flex-start;
            align-content: flex-start;
            overflow: scroll;

        }
        .main_container {
            height: 1480px;
            background-color:transparent;
            display:flex;
            flex-wrap: wrap;
            flex-direction: row;
            padding-top: 40px;
            //justify-content: space-around;
            //align-items: flex-start;
            align-content: flex-start;
            overflow: hidden;

        }
        .app_container::-webkit-scrollbar {
            display: none;
       }
        .app_container::-webkit-scrollbar {
            -ms-overflow-style: none;
       }

        .app_item_border  {
            width: 500px;
            height: 150px;
            background-color: transparent;
            border: solid 1px black;
            margin-left:50px;
            font-size: 60px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            
            border-radius: 250px;
            box-shadow: 5px 5px 12px 0px #000A13, inset 3px 3px 12px 0px #000A13, inset -3px -3px 8px 0px rgba(255,255,255,0.1), -3px -3px 8px 0px rgba(255,255,255,0.1);
            margin-bottom: 50px
        }	

        .app_item {
            width: 470px;
            height: 120px;
            background-color: transparent;
            border: 1px solid #29313c;
            align-items: center;
              justify-content: center;
            display: flex;
            place-self: center;
            border-radius: 235px;
            box-shadow: 5px 5px 12px 0px #000A13, -3px -3px 8px 0px rgba(255,255,255,0.1);
            background: linear-gradient(135deg, rgba(60,66,80,1) 0%, rgba(21,25,35,1) 100%);
            
        }	
          .command_container {
            display: grid;
            width: 100%;
            padding-left: 40px;
            padding-right: 40px;
            grid-template-rows: 280px 280px;
            grid-template-columns: auto auto auto auto;
            /* padding: 12px; */
            grid-template-areas: 
                "volume play next power"
                "volume pause prev menu";

        }

        .button_border  {
            /* background-color: rgba(0, 0, 0, .9); */
            border: 1px solid #29313c;
            /* border-radius: 100%; */
            /* margin: 20px; */
            width: 100%;
            aspect-ratio: 1 / 1;
            
            /* margin: 20px; */
            /* padding: 10px; */
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-box-shadow: 5px 5px 15px 5px #000000; 
            box-shadow: 5px 5px 12px 0px #000A13, inset 3px 3px 12px 0px #000A13, inset -3px -3px 8px 0px rgba(255,255,255,0.1), -3px -3px 8px 0px rgba(255,255,255,0.1);
            place-self: center;

        }

        .border_volume_size {
            height: calc(100% - 60px);
            width: 220px;
            /* margin-top: 30px; */
            border-radius: 100px;
            place-self: center;
            justify-items: center;
        }
        .border_button_size {
            border-radius: 100%;
            /* margin:12px; */
            width: 220px;
            place-self: center;
            justify-items: center;
            /* margin-bottom: 50px; */
        }


        .volume_button {
            width: 190px;
            height: 470px;
            background: linear-gradient(135deg, rgba(60,66,80,1) 0%, rgba(21,25,35,1) 100%);
            box-shadow: 5px 5px 12px 0px #000A13, -3px -3px 8px 0px rgba(255,255,255,0.1);
            border-radius: 85px;
            display: flex;
            flex-direction: column;
        }

        .plus_button {
            width: 190px;
            height: 235px;
            // background-color: red;
            border: 1px solid #29313c;
            border-radius: 85px 85px 0px 0px;
            border-color: transparent;
            display: flex;
            justify-content: center;
            padding-top: 50px;
            //align-items: center;
        }

        .minus_button {
            width: 190px;
            height: 235px;
        //	background-color: red;
            border: 1px solid #29313c;
            border-radius:  0px 0px 85px 85px;
            border-color: transparent;
            display:flex;
            justify-content: center;
            padding-bottom: 50px;
            align-items: end;
        }

        .plus_button:active, .minus_button:active {
            background-color: rgba(0,210,255, 0.05);
        }

        .command_button {
            width: 190px;
            aspect-ratio: 1 / 1;
            background: linear-gradient(135deg, rgba(60,66,80,1) 0%, rgba(21,25,35,1) 100%);
            box-shadow: 5px 5px 12px 0px #000A13, -3px -3px 8px 0px rgba(255,255,255,0.1);
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

        }

          .source_btn {
            width: 100%;
            margin-top:140px;
            padding-left: 40px;
            padding-right: 40px;
            /* height: 100%; */
            background-color: transparent;
            display: flex;
            // flex-direction: row;
            flex-wrap: wrap;
            // flex-grow: 3;
            gap: 30px 30px;
            align-items: flex-start;
            
            justify-content: space-between;
          }

          .border {
				border: 1px solid #29313c;
				border-radius: 80px;
				/* margin: 20px; */
				width: 47%;
				height: 230px;
				/* margin: 20px; */
				/* padding: 10px; */
				cursor: pointer;
				display: flex;
				justify-content: center;
				align-items: center;
				-webkit-box-shadow: 5px 5px 15px 5px #000000; 
				box-shadow: 5px 5px 12px 0px #000A13, inset 3px 3px 12px 0px #000A13, inset -3px -3px 8px 0px rgba(255,255,255,0.1), -3px -3px 8px 0px rgba(255,255,255,0.1);
				}

        .border:active, .border_button_size:active, .border_volume_size:active, .app_item_border:active  {
            background: rgba(99, 134, 255, 0.5);
            box-shadow:0px 0px 0px 0px #fffff;
            }

        .button {
            width: 94%;
            height: 88.5%;
            height: 90%;
            background: linear-gradient(135deg, rgba(60,66,80,1) 0%, rgba(21,25,35,1) 100%);
            border-radius: 70px;
            border: 1px solid #29313c;
            box-shadow: 5px 5px 12px 0px #000A13, -3px -3px 8px 0px rgba(255,255,255,0.1);
            /* margin:20px; */
            /* width: 100%;
            height: 100%;
            background-color:red;
            border-radius: 80px;
            transform: scale(0.95, 0.92);  */
            // box-shadow: inset 0 0  0 2px #e3edf7,10px 10px 1px #c2ced9,-1px -1px 1px #f3feff,inset 4px 4px 5px #bfd1e1,-3px -3px 6px #eef6fc,3px 3px 6px #bfd1e1,inset -3px -3px 5px #f3feff;
            }
        .image {
            width: 100%;

            
            height: 100%;
            justify-content: center;
            align-items: center;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 451px 206px;
        }

        .scrolling-container {
            width: 1548px;
            overflow: hidden;
            white-space: nowrap;
            text-align: center; /* Allineamento centrale quando il testo è statico */
            
        }

        .text-diplay {
            display: inline-block;
            font-size: 120px;
            text-align: center;
            padding-top: 50px;
            font-family: LEDDotMatrixRegular;
            text-shadow: 0 0 20px #00d2ff, 0 0 20px #00d2ff;
            color: #00d2ff;
            opacity: 0.4;
            //text-shadow: 0 0 5px rgba(0,210,255, 0.4), 0 0 10px #00d2ff;
            
        }

        .scrolling-text {
            animation: scroll var(--speed) linear infinite;
        }

        @keyframes scroll {
            0% {
                transform: translateX(100%);
            }
            100% {
                transform: translateX(-100%);
            }
        }
			 
        //   .input-btn {display: flex;}
		// 	 .image {width: 800px; height: 400px; background-image: '/local/lg_remote/tv_logo/infuse.png'; background-color:red; font-size: 150px}
			 
			 .st1{fill:url(#volume_x5F_sezione_00000127754344777939629130000012810673682173751973_);stroke:#2E303B;stroke-miterlimit:10;}
			 .st2{fill:transparent;}
			 .st3_{fill:#FFFFFF;}
             .st3{fill:#698198;}
			 .st4{font-family:'arial';}
			 .st5{font-size:100px;}
			 .st11{fill:#E52D1F;}
			 .st13{fill:#59A8DE;}
			 .st16{fill-rule:evenodd;clip-rule:evenodd;fill:#020203;}
			 .st17{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_1_);}
			 .st20{fill:#D2ECF8;}
			 .st21{fill:#0FA8E1;}
			 .st22{fill:#24303F;}
			 .st24{fill:#E30613;}
			 .st29{font-size:60px;}
			 .st30{letter-spacing:-4;}
			 .st32{fill:#FFFFFF;stroke:#FFFFFF;stroke-width:1.6;stroke-miterlimit:10;}
             .st33{fill:url(#tasto-back_00000039111103757436516250000003336199727261256326_);stroke:#2E303B;stroke-miterlimit:10;}
 		 	 .st35{fill:#1D71B8;}
			 .st36{font-family:'LEDDotMatrixRegular';text-shadow: 0 0 5px rgba(0,210,255, 0.2), 0 0 10px #00d2ff; fill-opacity=0.5;}
			 .st37{font-size:117.0744px;}
		 </style>
         <g id="cilcle_x5F_command">
            <path id="ok_x5F_circle_x5F_border" style="fill:rgba(17, 25, 31, 01)" class="st0 shadow "  d="M658.7,1104.9c-54.3,0-107.1-10.6-156.7-31.6c-47.9-20.3-91-49.3-128-86.3
                c-37-37-66-80-86.3-128c-21-49.6-31.6-102.4-31.6-156.7c0-54.3,10.6-107.1,31.6-156.7c20.3-47.9,49.3-91,86.3-128
                c37-37,80-66,128-86.3c49.6-21,102.4-31.6,156.7-31.6c54.3,0,107.1,10.6,156.7,31.6c47.9,20.3,91,49.3,128,86.3s66,80,86.3,128
                c21,49.6,31.6,102.4,31.6,156.7c0,54.3-10.6,107.1-31.6,156.7c-20.3,47.9-49.3,91-86.3,128c-37,37-80,66-128,86.3
                C765.8,1094.3,713.1,1104.9,658.7,1104.9z M658.7,509.6c-106.3,0-192.8,86.5-192.8,192.8s86.5,192.8,192.8,192.8
                c106.3,0,192.8-86.5,192.8-192.8S765,509.6,658.7,509.6z"/>
            <linearGradient id="ok_x5F_circle_x5F_tracciato_00000137121476985593741310000011162926565428375168_" gradientUnits="userSpaceOnUse" x1="388.2112" y1="431.8373" x2="929.2301" y2="972.8562">
                <stop  offset="0" style="stop-color:#3E404F"/>
                <stop  offset="1" style="stop-color:#1B1A20;stop-opacity:1"/>
            </linearGradient>
            <path  id="ok_x5F_circle_x5F_tracciato" class="shadow" style="fill:url(#ok_x5F_circle_x5F_tracciato_00000137121476985593741310000011162926565428375168_);stroke:#2E303B;stroke-miterlimit:10;" d="
                M658.7,319.8c-211.3,0-382.6,171.3-382.6,382.6s171.3,382.6,382.6,382.6s382.6-171.3,382.6-382.6S870,319.8,658.7,319.8z
                M658.7,915.1c-117.5,0-212.8-95.3-212.8-212.8s95.3-212.8,212.8-212.8s212.8,95.3,212.8,212.8S776.2,915.1,658.7,915.1z"/>
            <g id="ok" class="ripple" @click=${() =>
                this._command("select")}>
                <linearGradient id="ok_x5F_p_00000033329117196472376750000009302025930489385127_" gradientUnits="userSpaceOnUse" x1="552.6547" y1="596.2808" x2="764.7867" y2="808.4128">
                <stop  offset="0" style="stop-color:#3E404F"/>
                <stop  offset="1" style="stop-color:#1B1A20;stop-opacity:1"/>
                </linearGradient>
                <circle  id="ok_x5F_p" style="fill:url(#ok_x5F_p_00000033329117196472376750000009302025930489385127_);stroke:#000000;stroke-width:0.9281;stroke-miterlimit:10;" cx="658.7" cy="702.3" r="150"/>
                <text transform="matrix(1 0 0 1 580 731.6969)" class="st3 st4 st5">OK</text>
            </g>
            <g id="UP"  @click=${() =>
                this._command("up")} >
                <path id="up_x5F_simbolo" class="st3" d="M711.3,427.7l-8.7,8.7l-49.1-48.9l-49.5,49.3l-8.7-8.7l53.8-53.6c2.4-2.4,6.3-2.4,8.7,0
                L711.3,427.7L711.3,427.7z"/>
                <path id="overupn" style="cursor:pointer;" class="ripple_inverse"  d="M929.2,431.8l-120,120.1c-38.5-38.5-91.7-62.3-150.5-62.3c-58.8,0-112,23.8-150.5,62.3l-120-120
                c69.2-69.2,164.9-112,270.5-112C764.4,319.8,860,362.6,929.2,431.8z"/>
            </g>
            <g id="down_00000001644039399806564390000013077602098363314069_" @click=${() =>
                this._command("down")}>
                <path id="down_x5F_simbolo" class="st3" d="M595.5,977.1l8.7-8.7l49.1,48.9l49.5-49.3l8.7,8.7l-53.8,53.6c-2.4,2.4-6.3,2.4-8.7,0
                L595.5,977.1L595.5,977.1z"/>
                <path id="overdownn" style="cursor:pointer;" class="ripple_inverse" d="M929.2,972.8L929.2,972.8c-69.2,69.2-164.9,112-270.5,112s-201.3-42.8-270.5-112l120-120
                c38.5,38.5,91.7,62.3,150.5,62.3c58.8,0,112-23.8,150.5-62.3L929.2,972.8z"/>
            </g>
            <g id="right_00000075843476041830112140000006330240355378853533_" @click=${() =>
                this._command("right")}>
                <path id="right_x5F_simbolo" class="st3" d="M928.1,760.3l-8.7-8.7l48.9-49.1L919,653l8.7-8.7l53.6,53.8c2.4,2.4,2.4,6.3,0,8.7
                L928.1,760.3L928.1,760.3z"/>
                <path id="overrightn" style="cursor:pointer;" class="ripple_inverse" d="M1041.3,702.3c0,105.6-42.8,201.3-112.1,270.5l-120-120c38.5-38.5,62.3-91.7,62.3-150.5
                s-23.8-112-62.3-150.5l120-120.1C998.5,501.1,1041.3,596.7,1041.3,702.3z"/>
            </g>
            <g id="left" @click=${() =>
                this._command("left")}>
                <path id="left_simbolo" class="st3" d="M378.7,644.4l8.7,8.7l-48.9,49.1l49.3,49.5l-8.7,8.7l-53.6-53.8c-2.4-2.4-2.4-6.3,0-8.7
                L378.7,644.4L378.7,644.4z"/>
                <path id="overleftn" style="cursor:pointer;" class="ripple_inverse" d="M445.9,702.3c0,58.8,23.8,112,62.3,150.5v0l-120,120C319,903.6,276.2,808,276.2,702.3
                S319,501.1,388.2,431.8h0l120,120C469.8,590.4,445.9,643.6,445.9,702.3z"/>
            </g>
        </g>
        <g id="tasto-back_00000081634441999840043500000013102404160967277229_" style="display:${this._show_commands ? 'none' : ' '}; cursor:pointer" @click=${() =>
            {this._show_commands = true;}}>
            <path id="bordo-back" class="shadow" style="fill:rgba(17, 25, 31, 1)" d="M1072,935.5c-23.2,41.9-52.5,79.9-86.7,112.8c-6.9,6.6-10.8,15.7-10.8,25.2v66.4
                c0,19.3,15.6,34.9,34.9,34.9h187.6c19.3,0,34.9-15.6,34.9-34.9V952.3c0-19.3-15.6-34.9-34.9-34.9h-94.4
                C1089.9,917.4,1078.2,924.4,1072,935.5z"/>
            <linearGradient id="test-back_00000177482910333058778190000016374900566691978932_" gradientUnits="userSpaceOnUse" x1="1044.0898" y1="986.9758" x2="1209.0125" y2="1151.8984">
                <stop  offset="0" style="stop-color:#3E404F"/>
                <stop  offset="1" style="stop-color:#1B1A20;stop-opacity:1"/>
            </linearGradient>
            <path id="test-back"class="shadow" style="fill:url(#test-back_00000177482910333058778190000016374900566691978932_);stroke:#2E303B;stroke-width:0.9482;stroke-miterlimit:10;" d="
                M1009.5,1156.9c-9.3,0-16.9-7.6-16.9-16.9v-66.4c0-4.6,1.9-9,5.2-12.2c35.8-34.4,66.1-73.8,90-117.1c3-5.4,8.7-8.8,14.8-8.8h94.4
                c9.3,0,16.9,7.6,16.9,16.9v187.6c0,9.3-7.6,16.9-16.9,16.9H1009.5z"/>
            <g id="icona-back">
                <g>
                <path class="st3" d="M1079.8,1059l24.4,23.9l5.7-5.6l-17.4-17.1h43v-8h-43l17.4-17.1l-5.7-5.6l-24.4,23.9
                    C1078.2,1054.9,1078.2,1057.5,1079.8,1059L1079.8,1059z"/>
                <path class="st3" d="M1151.8,1088h-24.4v8h24.4c4.5,0,8.1-3.6,8.1-8v-63.7c0-4.4-3.7-8-8.1-8h-24.4v8h24.4V1088z"/>
                </g>
            </g>
        </g>
        <foreignobject transform="matrix(0.6833 0 0 1 125 120)" width="1548" height="130">
            <div class="scrolling-container" id="container">
                <div class="text-diplay ${shouldScroll ? 'scrolling-text' : ''} "  style="--speed: ${speed}s;" id="text">
                ${textToShow}
                </div>
            </div>
        </foreignobject>
        <foreignobject transform="matrix(1 0 0 1 84 1200)"    width="1151" height="1850">
            ${this._show_commands ? html`
            <div class="main_container">
                <div class="command_container" >
                <div class="button_border border_volume_size" Style="grid-area: volume">
                    <div class="button_border volume_button">
                        <div class="plus_button" @click=${() =>
                            this._command("volume_up")} >
                            <svg viewBox="0 0 20 20" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                            <path d="m20 11h-9v9h-2v-9h-9v-2h9v-9h2v9h9z" fill="#698198"/>
                            </svg>
                        </div>
                        <div class="minus_button" @click=${() =>
                            this._command("volume_down")}>
                            <svg viewBox="0 0 20 20" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16 8.5v2h-12v-2z" fill="#698198"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="button_border border_button_size" @click=${() =>
                    this._atv_play_pause()}>
                    <div class="command_button" >
                        <!-- play-->
                        <svg viewBox="0 0 20 20" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
                            <path d="m18.23 8.31368-11.15-7.17c-.62-.400001-1.4-.420001-2.04-.07-.64.35-1.04 1.02-1.04 1.76v14.34002c0 .73.4 1.4 1.04 1.76.3.16.63.24.96.24.38 0 .75-.11 1.08-.32l11.15-7.17c.58-.37.92-1 .92-1.68 0-.68002-.34-1.31002-.92-1.68002zm-12.23 8.86002v-14.35002l11.15 7.17-11.15 7.17002z" fill="#698198"/>
                        </svg>
                        <svg viewBox="0 0 20 20" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
                            <path d="m7 2h-4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-4 14v-12h4v12zm14-14h-4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-4 14v-12h4v12z" fill="#698198"/>
                        </svg>
                    </div>
                </div>
                <div class="button_border border_button_size" @click=${() =>
                    this._command("skip_forward")} >
                    <div class="command_button" >
                        <!-- next-->
                        <svg viewBox="0 0 20 20" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                            <path d="m17.9989 4.00189v3.82l-5.1028-4.4c-.5303-.45-1.2507-.55-1.8811-.26-.6303.29-1.0106.89-1.0106 1.58v3.08l-5.11279-4.4c-.5303-.45-1.2507-.55-1.88105-.26s-1.01056.89-1.01056 1.58v10.52001c0 .68.39022 1.29 1.01056 1.58.24013.11.49027.16.74041.16.41023 0 .81045-.15 1.14064-.43l5.10283-4.39v3.08c0 .69.39026 1.29 1.02056 1.58.2401.11.4903.16.7404.16.4102 0 .8105-.15 1.1407-.43l5.1028-4.39v3.82h2.0011v-12.00001zm-14.00779 10.71001v-9.42001l5.47304 4.71001zm8.00449 0v-9.42001l5.473 4.71001-5.473 4.7z" fill="#698198"/>
                        </svg>
                    </div>
                </div>
                <div class="button_border border_button_size" @click=${() =>
                    this._atv_turn_on_off()}>
                    <div class="command_button" >
                        <!-- power-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="86" height="84" viewBox="0 0 24 24"  fill="#698198">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>
                        </svg>
                    </div>
                </div>
                <div class="button_border border_button_size"  @click=${() =>
                    {
                    this._show_commands = false;
                    }}>
                    <div class="command_button" >
                        <!-- pause-->
                        <svg viewBox="0 0 20 20" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                            <path d="m18.9988 3v2h-16.00002v-2zm-16.00002 8h16.00002v-2h-16.00002zm0 6h16.00002v-2h-16.00002z" fill="#698198"/>
                        </svg>
                    </div>
                </div>
                <div class="button_border border_button_size" @click=${() =>
                    this._command("skip_backward")}>
                    <div class="command_button" >
                        <!-- backforward-->
                        <svg viewBox="0 0 20 20" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16.9994 3.15994c-.6303-.29-1.3507-.19-1.881.26l-5.1028 4.39v-3.08c0-.68-.39025-1.29-1.0106-1.57-.63035-.29-1.35075-.19-1.88104.26l-5.12285 4.4v-3.82h-2.00111v11.99996h2.00111v-3.82l5.10284 4.39c.33018.28.7304.43 1.14063.43.25014 0 .50028-.05.74041-.16.63035-.29 1.02061-.89 1.02061-1.58v-3.08l5.1028 4.39c.3302.28.7304.43 1.1406.43.2502 0 .5003-.05.7404-.16.6304-.29 1.0106-.89 1.0106-1.58v-10.51996c0-.68-.3902-1.29-1.0106-1.58zm-8.99495 11.54996-5.47304-4.70996 5.47304-4.71zm8.00445 0-5.473-4.70996 5.473-4.71z" fill="#698198"/>
                        </svg>
                    </div>
                </div>
                <div class="button_border border_button_size" @click=${() =>
                    this._command("menu")}>
                    <div class="command_button" style="font-size: 50px; color: #698198">
                        menu
                    </div>
                </div>
                </div>
                <div class="source_btn">
                ${this.config.sources.map(source_map => {
                return html`
                <div class="border" type="button" >
                    <div class="button">
                        <div class="image" style="background-image: url('${source_map.image}')" @click=${e => this._source(source_map.source_name)}>
                        </div>
                    </div>
                </div>
                `;
                })}	
                </div>
            </div>
            ` : html`
            <div class="app_container">
                ${stateObj.attributes.source_list.map(source => html`
                <div class="app_item_border" @click=${e =>
                this._source(source)}>
                <div class="app_item">
                    ${source}
                </div>
                </div>
                `)} 
            </div>
        </foreignobject>
        `}  
    </svg>
		 
    `;
    }

    setConfig(config) {
        if (!config.entity) {
          throw new Error("You need to define entities");
        }
        this.config = config;
      }

    getCardSize() {
        return this.config.entities.length + 1;
    }

    _atv_turn_on_off() {
        if (this.hass.states[this.config.entity].state === "standby") {
            this.hass.callService("remote", "send_command", {
                "entity_id": "remote.atv",
                "command": "home_hold"
            });
        } else {
            this.hass.callService("remote", "send_command", {
                "entity_id": "remote.atv",
                "command": "suspend"
            });
        }
    
    }

    _atv_play_pause() {
        if (this.hass.states[this.config.entity].state === "playing") {
            this.hass.callService("remote", "send_command", {
                "entity_id": "remote.atv",
                "command": "pause"
            });
        } else {
            this.hass.callService("remote", "send_command", {
                "entity_id": "remote.atv",
                "command": "play"
            });
        }
    
    }

	_command(command_type) {
        this.hass.callService("remote", "send_command", {
                "entity_id": "remote.atv",
                "command": command_type
        });
    }
    _source(source) {
        this.hass.callService("media_player", "select_source", {
                "entity_id": this.config.entity,
                "source": source
        });
    }

    static get styles() {
        return css`


    #svg {
        align-item: center;
    }
    `;
    }
}
customElements.define("apple-tv-card", AppleTvCard);
