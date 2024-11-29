const style = document.createElement('style');

style.textContent = `
.divShare {
  margin-bottom: 2em;
  margin-top: 1em;
}

.divShare p {
  text-align: center;
}

.divShare>div {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: fit-content;
  column-gap: 2em;
  margin: 10px auto;
}
.ico {
  width: 30px;
  height: 30px;
}
.ico>a>svg {
  opacity: 0.6;
  width: 30px;
}
.ico>a>svg:hover {
  opacity: 1;
  cursor: pointer;
}
.ico>a>svg>path {
  fill: #ff1719 !important;
}
.ico>a>svg:hover>path {
  fill: #616161 !important;
}
`;

document.head.appendChild(style);


var maxLength = 200;

$("textarea").attr('maxlength', maxLength);
$('#info').text( '0/' + maxLength);

$('textarea').keyup(function() {
	var currLength = $(this).val().length;
	var textlen = maxLength - currLength;
	$('#info').text(currLength + '/' + maxLength);
});

function eraseText() {
    document.getElementById("english-text").value = "";
    document.getElementById("english-text").focus();
    document.getElementById("btnClear").style.display = "none";
    $('#info').text( '0/' + maxLength);
    $("#download-qr").css('opacity',0.1);
    $("#download-qr").css('pointer-events', 'none');
    $("#download-qr").css('cursor', 'default');
    document.querySelector("#tResult").innerHTML = '';
}

initialjamo = new Object();

initialjamo.b = 7
initialjamo.bb = 8
initialjamo.b̥ = 7
initialjamo.c = 12
initialjamo.cc = 13
initialjamo.ch = 14
initialjamo.cʰ = 14
initialjamo.cː = 13
initialjamo.c̥ = 12
initialjamo.d = 3
initialjamo.dd = 4
initialjamo.d̥ = 3
initialjamo.g = 0
initialjamo.gg = 1
initialjamo.g̊ = 0
initialjamo.h = 18
initialjamo.j = 12
initialjamo.jh = 14
initialjamo.jj = 13
initialjamo.k = 0
initialjamo.kh = 15
initialjamo.kk = 1
initialjamo.kʰ = 15
initialjamo.kː = 1
initialjamo.l = 5
initialjamo.m = 6
initialjamo.n = 2
initialjamo.n̟ = 2
initialjamo.p = 7
initialjamo.ph = 17
initialjamo.pp = 8
initialjamo.pʰ = 17
initialjamo.pː = 8
initialjamo.r = 5
initialjamo.s = 9
initialjamo.ss = 10
initialjamo.sʰ = 10
initialjamo.sː = 10
initialjamo.t = 3
initialjamo.tch = 13
initialjamo.th = 16
initialjamo.ts = 12
initialjamo.tsh = 14
initialjamo.tss = 13
initialjamo.tt = 4
initialjamo.tʰ = 16
initialjamo.ɕ = 9
initialjamo.ɾ = 5
initialjamo["ch'"] = 14
initialjamo["ch’"] = 14
initialjamo["k'"] = 15
initialjamo["k’"] = 15
initialjamo["p'"] = 17
initialjamo["p’"] = 17
initialjamo["t'"] = 16
initialjamo["t’"] = 16

medialjamo = new Object();

medialjamo.a = 0;
medialjamo.ae = 1;
medialjamo.ai = 1;
medialjamo.ay = 1;
medialjamo.e = 5;
medialjamo.eo = 4;
medialjamo.eu = 18;
medialjamo.eui = 19;
medialjamo.ey = 5;
medialjamo.i = 20;
medialjamo.ja = 2;
medialjamo.je = 3;
medialjamo.jo = 12;
medialjamo.ju = 17;
medialjamo.jɔ = 6;
medialjamo.jɛ = 7;
medialjamo.o = 8;
medialjamo.oe = 11;
medialjamo.oi = 11;
medialjamo.oy = 11;
medialjamo.u = 13;
medialjamo.ue = 10;
medialjamo.ui = 19;
medialjamo.uy = 19;
medialjamo.uɑ = 9;
medialjamo.uɔ = 14;
medialjamo.uɛ = 15;
medialjamo.wa = 9;
medialjamo.wae = 10;
medialjamo.wai = 10;
medialjamo.way = 10;
medialjamo.we = 15;
medialjamo.weo = 14;
medialjamo.wey = 15;
medialjamo.wi = 16;
medialjamo.wo = 14;
medialjamo.wu = 13;
medialjamo.wä = 10;
medialjamo.wø = 14;
medialjamo.wŏ = 14;
medialjamo.y = 16;
medialjamo.ya = 2;
medialjamo.yae = 3;
medialjamo.yai = 3;
medialjamo.yay = 3;
medialjamo.ye = 7;
medialjamo.yeo = 6;
medialjamo.yey = 7;
medialjamo.yo = 12;
medialjamo.yu = 17;
medialjamo.yä = 3;
medialjamo.yø = 6;
medialjamo.yŏ = 6;
medialjamo.ä = 1;
medialjamo.ö = 11;
medialjamo.ø = 4;
medialjamo.ŏ = 4;
medialjamo.ŭ = 18;
medialjamo.ŭi = 19;
medialjamo.ɑ = 0;
medialjamo.ɔ = 4;
medialjamo.ɛ = 5;
medialjamo.ɨ = 18;
medialjamo.ɨi = 19;
medialjamo.ɯ = 18;
medialjamo.ʉ = 18;
medialjamo.ʉi = 19;

finaljamo = new Object();

finaljamo.b = 17;
finaljamo.bs = 18;
finaljamo.b̥ = 17;
finaljamo.c = 22;
finaljamo.ch = 23;
finaljamo.cʰ = 23;
finaljamo.c̥ = 22;
finaljamo.d = 7;
finaljamo.d̥ = 7;
finaljamo.g = 1;
finaljamo.gg = 2;
finaljamo.gs = 3;
finaljamo.g̊ = 1;
finaljamo.h = 27;
finaljamo.j = 22;
finaljamo.jh = 23;
finaljamo.k = 1;
finaljamo.kh = 24;
finaljamo.kk = 2;
finaljamo.ks = 3;
finaljamo.kʰ = 24;
finaljamo.kː = 2;
finaljamo.l = 8;
finaljamo.lb = 11;
finaljamo.lg = 9;
finaljamo.lh = 15;
finaljamo.lk = 9;
finaljamo.lm = 10;
finaljamo.lp = 11;
finaljamo.lph = 14;
finaljamo.lpʰ = 14;
finaljamo.ls = 12;
finaljamo.lt = 13;
finaljamo.lth = 13;
finaljamo.ltʰ = 13;
finaljamo.m = 16;
finaljamo.n = 4;
finaljamo.nc = 5;
finaljamo.nch = 6;
finaljamo.ncʰ = 6;
finaljamo.ng = 21;
finaljamo.nh = 6;
finaljamo.nj = 5;
finaljamo.nɟ = 5;
finaljamo.n̟ = 4;
finaljamo.p = 17;
finaljamo.ph = 26;
finaljamo.ps = 18;
finaljamo.pʰ = 26;
finaljamo.r = 8;
finaljamo.s = 19;
finaljamo.ss = 20;
finaljamo.sʰ = 20;
finaljamo.sː = 20;
finaljamo.t = 7;
finaljamo.th = 25;
finaljamo.ts = 22;
finaljamo.tsh = 23;
finaljamo.tʰ = 25;
finaljamo.ŋ = 21;
finaljamo.ɕ = 19;
finaljamo.ɾ = 8;
finaljamo["ch'"] = 23;
finaljamo["ch’"] = 23;
finaljamo["k'"] = 24;
finaljamo["k’"] = 24;
finaljamo["p'"] = 26;
finaljamo["p’"] = 26;
finaljamo["t'"] = 25;
finaljamo["t’"] = 25;

otherspecial = new Object();

otherspecial["-"] = "";
otherspecial["\\-"] = "-";
otherspecial["."] = "";
otherspecial["\\."] = ".";

maxlen = 3;

function performConversion() {
	
	var text = $('#english-text').val();
	
  romanized = text.toLowerCase() + " ";
  hangul = "";
  initialjamovalue = -1;
  medialjamovalue = -1;
  finaljamovalue = -1;
  pos = 0;
  while (pos < romanized.length) {
    if (initialjamovalue == -1) {
      len = maxlen;
      if (romanized.length - pos < len) {
        len = romanized.length - pos;
      }
      while (len > 0 && initialjamovalue == -1) {
        if (initialjamo[romanized.substring(pos, pos + len)] != null) {
          initialjamovalue = initialjamo[romanized.substring(pos, pos + len)];
          pos += len;
        }
        len--;
      }
      if (initialjamovalue == -1) {
        // no initial consonant; see if sequence starts a valid medial jamo
        // and use the placeholder initial jamo (#11)
        len = maxlen;
        if (romanized.length - pos < len) {
          len = romanized.length - pos;
        }
        while (len > 0 && medialjamovalue == -1) {
          if (medialjamo[romanized.substring(pos, pos + len)] != null) {
            medialjamovalue = medialjamo[romanized.substring(pos, pos + len)];
            pos += len;
          }
          len--;
        }
        if (medialjamovalue != -1) {
          initialjamovalue = 11;
        }
      }
      if (initialjamovalue == -1) {
        // didn't find an initial jamo, so see if there's one of the special
        // replacement strings.
        found = false;
        len = maxlen;
        if (romanized.length - pos < len) {
          len = romanized.length - pos;
        }
        while (len > 0 && !found) {
          if (otherspecial[romanized.substring(pos, pos + len)] != null) {
            hangul += otherspecial[romanized.substring(pos, pos + len)];
            pos += len;
            found = true;
          }
          len--;
        }
        if (!found) {
          hangul += romanized.charAt(pos);
          pos++;
        }
      }
    } else if (medialjamovalue == -1) {
      // initial jamo found, so see if there's a medial jamo
      len = maxlen;
      if (romanized.length - pos < len) {
        len = romanized.length - pos;
      }
      while (len > 0 && medialjamovalue == -1) {
        if (medialjamo[romanized.substring(pos, pos + len)] != null) {
          medialjamovalue = medialjamo[romanized.substring(pos, pos + len)];
          pos += len;
        }
        len--;
      }
      if (medialjamovalue == -1) {
        // no valid medial jamo found, so consider the previous initial jamo
        // invalid and look for another, but output the romanized text
        hangul += romanized.charAt(pos - 1);
        initialjamovalue = -1;
      }
    } else {
      // initial and medial jamo found, so see if there's a final jamo
      len = maxlen;
      if (romanized.length - pos < len) {
        len = romanized.length - pos;
      }
      while (len > 0 && finaljamovalue == -1) {
        if (finaljamo[romanized.substring(pos, pos + len)] != null) {
          finaljamovalue = finaljamo[romanized.substring(pos, pos + len)];
          pos += len;
        }
        len--;
      }
      // Add a hangul syllabic block either way
      if (finaljamovalue != -1) {
        hangul += String.fromCharCode(initialjamovalue * 588 + medialjamovalue * 28 + finaljamovalue + 44032);
      } else {
        hangul += String.fromCharCode(initialjamovalue * 588 + medialjamovalue * 28 + 44032);
      }
      // Now that the syllabic block is complete, reset all values to -1 to search for the next one.
      initialjamovalue = -1;
      medialjamovalue = -1;
      finaljamovalue = -1;
    }
  }
  
  rText = hangul.substring(0, hangul.length - 1);
  var tResult = document.querySelector("#tResult");
	tResult.className = "";
	tResult.innerHTML = '<span class="resultStr">' + rText + '</span>';
}
  
$(document).ready(function() {

var h1 = document.createElement("h1");
  h1.className = 'resultTitle';

  var divShare = document.createElement("div");
  divShare.className = "divShare";

  var divInner = document.createElement("p");
  divInner.textContent = 'Share this tool with your friends!';
  divShare.appendChild(divInner);

  var currentUrl = encodeURIComponent(window.location.href);

  var divInner = document.createElement("div");
  var btn = document.createElement("div");
  btn.className = "ico";
  var strHtml = '<a href="https://www.facebook.com/sharer/sharer.php?u=' + currentUrl + '" target="_blank">';
  strHtml += '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" class="fa fa-fw fa-3x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>';
  strHtml += '</a>';
  btn.innerHTML = strHtml;
  divInner.appendChild(btn);
  var btn = document.createElement("div");
  btn.className = "ico";
  var strHtml = '<a href="https://twitter.com/intent/tweet?text=' + currentUrl + '" target="_blank">';
  strHtml += '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="fa fa-fw fa-3x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';
  strHtml += '</a>';
  btn.innerHTML = strHtml;
  divInner.appendChild(btn);
  var btn = document.createElement("div");
  btn.className = "ico";
  var strHtml = '<a href="https://wa.me/?text=' + currentUrl + '" target="_blank">';
  strHtml += '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" class="fa fa-fw fa-3x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>';
  strHtml += '</a>';
  btn.innerHTML = strHtml;
  divInner.appendChild(btn);

  divShare.appendChild(divInner);

  $('.my-wrap-generator-tool').append(divShare);
	
    $("#english-text").on('keypress', function() {        
        if($("#english-text").length > 0) {
          document.getElementById("btnClear").style.display = "block";
        }        
    });
    
    $('#english-text').bind('input propertychange', function() {
        performConversion();
    });    

});
