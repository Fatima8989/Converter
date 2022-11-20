const symbols={
    AED: 3.799277,
    AFN: 91.014359,
    ALL: 117.129152,
    AMD: 408.711739,
    ANG: 1.863043,
    AOA: 528.649855,
    ARS: 168.649921,
    AUD: 1.549984,
    AWG: 1.86206,
    AZN: 1.759419,
    BAM: 1.949647,
    BBD: 2.069039,
    BDT: 106.496364,
    BGN: 1.956587,
    BHD: 0.390352,
    BIF: 2123.316128,
    BMD: 1.035686,
    BND: 1.419213,
    BOB: 7.141493,
    BRL: 5.567527,
    BSD: 1.035351,
    BTC: 0.000062,
    BTN: 84.405042,
    BWP: 13.386807,
    BYN: 2.610541,
    BZD: 2.084264,
    CAD: 1.3881,
    CDF: 2114.007891,
    CHF: 0.986929,
    CLF: 0.035498,
    CLP: 974.05707,
    CNH: 7.368479,
    CNY: 7.364162,
    COP: 5180.92841,
    CRC: 630.934195,
    CUC: 1.035072,
    CUP: 26.632776,
    CVE: 110.510058,
    CZK: 24.393671,
    DJF: 183.580026,
    DKK: 7.451501,
    DOP: 56.367112,
    DZD: 143.607582,
    EGP: 25.31584,
    ERN: 15.514167,
    ETB: 54.784699,
    EUR: 1,
    FJD: 2.308246,
    FKP: 0.869956,
    GBP: 0.870047,
    GEL: 2.813904,
    GGP: 0.870004,
    GHS: 14.996844,
    GIP: 0.870106,
    GMD: 63.607405,
    GNF: 9075.544604,
    GTQ: 8.06954,
    GYD: 216.209583,
    HKD: 8.090409,
    HNL: 25.701985,
    HRK: 7.52504,
    HTG: 142.61525,
    HUF: 407.226773,
    IDR: 16225.824997,
    ILS: 3.585155,
    IMP: 0.870698,
    INR: 84.313311,
    IQD: 1510.00564,
    IRR: 43852.20212,
    ISK: 149.159973,
    JEP: 0.870444,
    JMD: 158.885439,
    JOD: 0.732902,
    JPY: 145.152158,
    KES: 126.334285,
    KGS: 86.953277,
    KHR: 4281.795592,
    KMF: 492.820969,
    KPW: 930.826016,
    KRW: 1385.926687,
    KWD: 0.318271,
    KYD: 0.861573,
    KZT: 477.399328,
    LAK: 17530.538854,
    LBP: 1571.106882,
    LKR: 379.792364,
    LRD: 159.275187,
    LSL: 17.965606,
    LYD: 5.063363,
    MAD: 11.081955,
    MDL: 19.826792,
    MGA: 4464.857581,
    MKD: 61.425091,
    MMK: 2170.237802,
    MNT: 3523.654435,
    MOP: 8.327343,
    MRU: 39.302201,
    MUR: 45.135817,
    MVR: 15.943649,
    MWK: 1059.072854,
    MXN: 20.106737,
    MYR: 4.710583,
    MZN: 66.037218,
    NAD: 17.964936,
    NGN: 457.821578,
    NIO: 37.233337,
    NOK: 10.542056,
    NPR: 135.0501,
    NZD: 1.688187,
    OMR: 0.398113,
    PAB: 1.035602,
    PEN: 3.939555,
    PGK: 3.641563,
    PHP: 59.167619,
    PKR: 230.069457,
    PLN: 4.708541,
    PYG: 7410.372312,
    QAR: 3.76531,
    RON: 4.950508,
    RSD: 117.286364,
    RUB: 62.934055,
    RWF: 1091.134406,
    SAR: 3.887079,
    SBD: 8.512973,
    SCR: 14.059104,
    SDG: 589.005938,
    SEK: 11.00163,
    SGD: 1.424329,
    SHP: 0.870058,
    SLL: 18270.027065,
    SOS: 587.971817,
    SRD: 31.510231,
    SSP: 134.721298,
    STD: 23605.713584,
    STN: 24.615564,
    SVC: 9.043373,
    SYP: 2598.584672,
    SZL: 17.965131,
    THB: 36.973471,
    TJS: 10.403923,
    TMT: 3.630798,
    TND: 3.273794,
    TOP: 2.453957,
    TRY: 19.26026,
    TTD: 7.015962,
    TWD: 32.191942,
    TZS: 2411.872365,
    UAH: 38.167392,
    UGX: 3859.849901,
    USD: 1.035178,
    UYU: 41.509194,
    UZS: 11604.286539,
    VES: 9.877121,
    VND: 25657.407523,
    VUV: 126.447142,
    WST: 2.889538,
    XAF: 655.767664,
    XAG: 0.049227,
    XAU: 0.001792,
    XCD: 2.795424,
    XDR: 0.769992,
    XOF: 655.767504,
    XPD: 0.001617,
    XPF: 119.298036,
    XPT: 0.0014,
    YER: 258.841624,
    ZAR: 17.852168,
    ZMW: 17.22273,
    ZWL: 333.028656

};

const fromInput=document.querySelector(".currency-from input");
const fromSelect=document.querySelector(".currency-from btn-group")
const toInput=document.querySelector(".currency-to select");
const swap = document.getElementById('btn-group ');

let rate=0;

let optionsHTML=Object.entries(symbols).reduce((a,e)=>{
    return a + '<option value= "${e[0]}">${e[1]}</option>';
},"");

fromSelect.innerHTML=optionsHTML;
toSelect.innerHTML=optionsHTML;

fromSelect.value="RUB";
toSelect.value="USD";

fromInput.addEventListener("input",(e)=>{
    let v=1;
    if(e.target.value.trim() !==""){
        v=parseFloat(e.target.value.trim());
    }
    toInput.value=Math.trunc((1/rate*v*100))/100;
});

function getExchange(){
    let v1=fromSelect.value;
    let v2=toSelect.value;
    fetch('https://api.exchangerate.host/latest/convert?to=${v2}&from=&{v1}&amount=1',{
        method: "GET",
        // headers: {
        //     "apikey":"...."

        // }
    }).then((v)=>{
       return v.json(); 
    }).then((res)=>{
        rate=res.info.rate;
        let v=fromInput.value.trim(v);
        if(v !== ""){
            v=parseFloat(v);
        }
        
        else{
        v=1;
        }
        toInput.value=rate*v;
    });
}

btn-group.addEventListener('click', () => {
    const temp = fromInput.value;
    fromInput.value = fromSelect.value;
    fromSelect.value = temp;
    getExchange();
});

fromSelect.addEventListener("change", getExchange);
toSelect.addEventListener("change", getExchange);
getExchange();


