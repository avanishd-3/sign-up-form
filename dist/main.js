/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

/*
 * International Telephone Input v24.6.0
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

// UMD
(function(factory) {
  if ( true && module.exports) {
    module.exports = factory();
  } else {
    window.intlTelInput = factory();
  }
}(() => {

var factoryOutput = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/js/intl-tel-input.ts
  var intl_tel_input_exports = {};
  __export(intl_tel_input_exports, {
    Iti: () => Iti,
    default: () => intl_tel_input_default
  });

  // src/js/intl-tel-input/data.ts
  var rawCountryData = [
    [
      "af",
      // Afghanistan
      "93"
    ],
    [
      "ax",
      // Åland Islands
      "358",
      1,
      ["18"]
    ],
    [
      "al",
      // Albania
      "355"
    ],
    [
      "dz",
      // Algeria
      "213"
    ],
    [
      "as",
      // American Samoa
      "1",
      5,
      ["684"]
    ],
    [
      "ad",
      // Andorra
      "376"
    ],
    [
      "ao",
      // Angola
      "244"
    ],
    [
      "ai",
      // Anguilla
      "1",
      6,
      ["264"]
    ],
    [
      "ag",
      // Antigua and Barbuda
      "1",
      7,
      ["268"]
    ],
    [
      "ar",
      // Argentina
      "54"
    ],
    [
      "am",
      // Armenia
      "374"
    ],
    [
      "aw",
      // Aruba
      "297"
    ],
    [
      "ac",
      // Ascension Island
      "247"
    ],
    [
      "au",
      // Australia
      "61",
      0
    ],
    [
      "at",
      // Austria
      "43"
    ],
    [
      "az",
      // Azerbaijan
      "994"
    ],
    [
      "bs",
      // Bahamas
      "1",
      8,
      ["242"]
    ],
    [
      "bh",
      // Bahrain
      "973"
    ],
    [
      "bd",
      // Bangladesh
      "880"
    ],
    [
      "bb",
      // Barbados
      "1",
      9,
      ["246"]
    ],
    [
      "by",
      // Belarus
      "375"
    ],
    [
      "be",
      // Belgium
      "32"
    ],
    [
      "bz",
      // Belize
      "501"
    ],
    [
      "bj",
      // Benin
      "229"
    ],
    [
      "bm",
      // Bermuda
      "1",
      10,
      ["441"]
    ],
    [
      "bt",
      // Bhutan
      "975"
    ],
    [
      "bo",
      // Bolivia
      "591"
    ],
    [
      "ba",
      // Bosnia and Herzegovina
      "387"
    ],
    [
      "bw",
      // Botswana
      "267"
    ],
    [
      "br",
      // Brazil
      "55"
    ],
    [
      "io",
      // British Indian Ocean Territory
      "246"
    ],
    [
      "vg",
      // British Virgin Islands
      "1",
      11,
      ["284"]
    ],
    [
      "bn",
      // Brunei
      "673"
    ],
    [
      "bg",
      // Bulgaria
      "359"
    ],
    [
      "bf",
      // Burkina Faso
      "226"
    ],
    [
      "bi",
      // Burundi
      "257"
    ],
    [
      "kh",
      // Cambodia
      "855"
    ],
    [
      "cm",
      // Cameroon
      "237"
    ],
    [
      "ca",
      // Canada
      "1",
      1,
      ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "879", "902", "905"]
    ],
    [
      "cv",
      // Cape Verde
      "238"
    ],
    [
      "bq",
      // Caribbean Netherlands
      "599",
      1,
      ["3", "4", "7"]
    ],
    [
      "ky",
      // Cayman Islands
      "1",
      12,
      ["345"]
    ],
    [
      "cf",
      // Central African Republic
      "236"
    ],
    [
      "td",
      // Chad
      "235"
    ],
    [
      "cl",
      // Chile
      "56"
    ],
    [
      "cn",
      // China
      "86"
    ],
    [
      "cx",
      // Christmas Island
      "61",
      2,
      ["89164"]
    ],
    [
      "cc",
      // Cocos (Keeling) Islands
      "61",
      1,
      ["89162"]
    ],
    [
      "co",
      // Colombia
      "57"
    ],
    [
      "km",
      // Comoros
      "269"
    ],
    [
      "cg",
      // Congo (Brazzaville)
      "242"
    ],
    [
      "cd",
      // Congo (Kinshasa)
      "243"
    ],
    [
      "ck",
      // Cook Islands
      "682"
    ],
    [
      "cr",
      // Costa Rica
      "506"
    ],
    [
      "ci",
      // Côte d'Ivoire
      "225"
    ],
    [
      "hr",
      // Croatia
      "385"
    ],
    [
      "cu",
      // Cuba
      "53"
    ],
    [
      "cw",
      // Curaçao
      "599",
      0
    ],
    [
      "cy",
      // Cyprus
      "357"
    ],
    [
      "cz",
      // Czech Republic
      "420"
    ],
    [
      "dk",
      // Denmark
      "45"
    ],
    [
      "dj",
      // Djibouti
      "253"
    ],
    [
      "dm",
      // Dominica
      "1",
      13,
      ["767"]
    ],
    [
      "do",
      // Dominican Republic
      "1",
      2,
      ["809", "829", "849"]
    ],
    [
      "ec",
      // Ecuador
      "593"
    ],
    [
      "eg",
      // Egypt
      "20"
    ],
    [
      "sv",
      // El Salvador
      "503"
    ],
    [
      "gq",
      // Equatorial Guinea
      "240"
    ],
    [
      "er",
      // Eritrea
      "291"
    ],
    [
      "ee",
      // Estonia
      "372"
    ],
    [
      "sz",
      // Eswatini
      "268"
    ],
    [
      "et",
      // Ethiopia
      "251"
    ],
    [
      "fk",
      // Falkland Islands (Malvinas)
      "500"
    ],
    [
      "fo",
      // Faroe Islands
      "298"
    ],
    [
      "fj",
      // Fiji
      "679"
    ],
    [
      "fi",
      // Finland
      "358",
      0
    ],
    [
      "fr",
      // France
      "33"
    ],
    [
      "gf",
      // French Guiana
      "594"
    ],
    [
      "pf",
      // French Polynesia
      "689"
    ],
    [
      "ga",
      // Gabon
      "241"
    ],
    [
      "gm",
      // Gambia
      "220"
    ],
    [
      "ge",
      // Georgia
      "995"
    ],
    [
      "de",
      // Germany
      "49"
    ],
    [
      "gh",
      // Ghana
      "233"
    ],
    [
      "gi",
      // Gibraltar
      "350"
    ],
    [
      "gr",
      // Greece
      "30"
    ],
    [
      "gl",
      // Greenland
      "299"
    ],
    [
      "gd",
      // Grenada
      "1",
      14,
      ["473"]
    ],
    [
      "gp",
      // Guadeloupe
      "590",
      0
    ],
    [
      "gu",
      // Guam
      "1",
      15,
      ["671"]
    ],
    [
      "gt",
      // Guatemala
      "502"
    ],
    [
      "gg",
      // Guernsey
      "44",
      1,
      ["1481", "7781", "7839", "7911"]
    ],
    [
      "gn",
      // Guinea
      "224"
    ],
    [
      "gw",
      // Guinea-Bissau
      "245"
    ],
    [
      "gy",
      // Guyana
      "592"
    ],
    [
      "ht",
      // Haiti
      "509"
    ],
    [
      "hn",
      // Honduras
      "504"
    ],
    [
      "hk",
      // Hong Kong SAR China
      "852"
    ],
    [
      "hu",
      // Hungary
      "36"
    ],
    [
      "is",
      // Iceland
      "354"
    ],
    [
      "in",
      // India
      "91"
    ],
    [
      "id",
      // Indonesia
      "62"
    ],
    [
      "ir",
      // Iran
      "98"
    ],
    [
      "iq",
      // Iraq
      "964"
    ],
    [
      "ie",
      // Ireland
      "353"
    ],
    [
      "im",
      // Isle of Man
      "44",
      2,
      ["1624", "74576", "7524", "7924", "7624"]
    ],
    [
      "il",
      // Israel
      "972"
    ],
    [
      "it",
      // Italy
      "39",
      0
    ],
    [
      "jm",
      // Jamaica
      "1",
      4,
      ["876", "658"]
    ],
    [
      "jp",
      // Japan
      "81"
    ],
    [
      "je",
      // Jersey
      "44",
      3,
      ["1534", "7509", "7700", "7797", "7829", "7937"]
    ],
    [
      "jo",
      // Jordan
      "962"
    ],
    [
      "kz",
      // Kazakhstan
      "7",
      1,
      ["33", "7"]
    ],
    [
      "ke",
      // Kenya
      "254"
    ],
    [
      "ki",
      // Kiribati
      "686"
    ],
    [
      "xk",
      // Kosovo
      "383"
    ],
    [
      "kw",
      // Kuwait
      "965"
    ],
    [
      "kg",
      // Kyrgyzstan
      "996"
    ],
    [
      "la",
      // Laos
      "856"
    ],
    [
      "lv",
      // Latvia
      "371"
    ],
    [
      "lb",
      // Lebanon
      "961"
    ],
    [
      "ls",
      // Lesotho
      "266"
    ],
    [
      "lr",
      // Liberia
      "231"
    ],
    [
      "ly",
      // Libya
      "218"
    ],
    [
      "li",
      // Liechtenstein
      "423"
    ],
    [
      "lt",
      // Lithuania
      "370"
    ],
    [
      "lu",
      // Luxembourg
      "352"
    ],
    [
      "mo",
      // Macao SAR China
      "853"
    ],
    [
      "mg",
      // Madagascar
      "261"
    ],
    [
      "mw",
      // Malawi
      "265"
    ],
    [
      "my",
      // Malaysia
      "60"
    ],
    [
      "mv",
      // Maldives
      "960"
    ],
    [
      "ml",
      // Mali
      "223"
    ],
    [
      "mt",
      // Malta
      "356"
    ],
    [
      "mh",
      // Marshall Islands
      "692"
    ],
    [
      "mq",
      // Martinique
      "596"
    ],
    [
      "mr",
      // Mauritania
      "222"
    ],
    [
      "mu",
      // Mauritius
      "230"
    ],
    [
      "yt",
      // Mayotte
      "262",
      1,
      ["269", "639"]
    ],
    [
      "mx",
      // Mexico
      "52"
    ],
    [
      "fm",
      // Micronesia
      "691"
    ],
    [
      "md",
      // Moldova
      "373"
    ],
    [
      "mc",
      // Monaco
      "377"
    ],
    [
      "mn",
      // Mongolia
      "976"
    ],
    [
      "me",
      // Montenegro
      "382"
    ],
    [
      "ms",
      // Montserrat
      "1",
      16,
      ["664"]
    ],
    [
      "ma",
      // Morocco
      "212",
      0
    ],
    [
      "mz",
      // Mozambique
      "258"
    ],
    [
      "mm",
      // Myanmar (Burma)
      "95"
    ],
    [
      "na",
      // Namibia
      "264"
    ],
    [
      "nr",
      // Nauru
      "674"
    ],
    [
      "np",
      // Nepal
      "977"
    ],
    [
      "nl",
      // Netherlands
      "31"
    ],
    [
      "nc",
      // New Caledonia
      "687"
    ],
    [
      "nz",
      // New Zealand
      "64"
    ],
    [
      "ni",
      // Nicaragua
      "505"
    ],
    [
      "ne",
      // Niger
      "227"
    ],
    [
      "ng",
      // Nigeria
      "234"
    ],
    [
      "nu",
      // Niue
      "683"
    ],
    [
      "nf",
      // Norfolk Island
      "672"
    ],
    [
      "kp",
      // North Korea
      "850"
    ],
    [
      "mk",
      // North Macedonia
      "389"
    ],
    [
      "mp",
      // Northern Mariana Islands
      "1",
      17,
      ["670"]
    ],
    [
      "no",
      // Norway
      "47",
      0
    ],
    [
      "om",
      // Oman
      "968"
    ],
    [
      "pk",
      // Pakistan
      "92"
    ],
    [
      "pw",
      // Palau
      "680"
    ],
    [
      "ps",
      // Palestinian Territories
      "970"
    ],
    [
      "pa",
      // Panama
      "507"
    ],
    [
      "pg",
      // Papua New Guinea
      "675"
    ],
    [
      "py",
      // Paraguay
      "595"
    ],
    [
      "pe",
      // Peru
      "51"
    ],
    [
      "ph",
      // Philippines
      "63"
    ],
    [
      "pl",
      // Poland
      "48"
    ],
    [
      "pt",
      // Portugal
      "351"
    ],
    [
      "pr",
      // Puerto Rico
      "1",
      3,
      ["787", "939"]
    ],
    [
      "qa",
      // Qatar
      "974"
    ],
    [
      "re",
      // Réunion
      "262",
      0
    ],
    [
      "ro",
      // Romania
      "40"
    ],
    [
      "ru",
      // Russia
      "7",
      0
    ],
    [
      "rw",
      // Rwanda
      "250"
    ],
    [
      "ws",
      // Samoa
      "685"
    ],
    [
      "sm",
      // San Marino
      "378"
    ],
    [
      "st",
      // São Tomé & Príncipe
      "239"
    ],
    [
      "sa",
      // Saudi Arabia
      "966"
    ],
    [
      "sn",
      // Senegal
      "221"
    ],
    [
      "rs",
      // Serbia
      "381"
    ],
    [
      "sc",
      // Seychelles
      "248"
    ],
    [
      "sl",
      // Sierra Leone
      "232"
    ],
    [
      "sg",
      // Singapore
      "65"
    ],
    [
      "sx",
      // Sint Maarten
      "1",
      21,
      ["721"]
    ],
    [
      "sk",
      // Slovakia
      "421"
    ],
    [
      "si",
      // Slovenia
      "386"
    ],
    [
      "sb",
      // Solomon Islands
      "677"
    ],
    [
      "so",
      // Somalia
      "252"
    ],
    [
      "za",
      // South Africa
      "27"
    ],
    [
      "kr",
      // South Korea
      "82"
    ],
    [
      "ss",
      // South Sudan
      "211"
    ],
    [
      "es",
      // Spain
      "34"
    ],
    [
      "lk",
      // Sri Lanka
      "94"
    ],
    [
      "bl",
      // St. Barthélemy
      "590",
      1
    ],
    [
      "sh",
      // St. Helena
      "290"
    ],
    [
      "kn",
      // St. Kitts & Nevis
      "1",
      18,
      ["869"]
    ],
    [
      "lc",
      // St. Lucia
      "1",
      19,
      ["758"]
    ],
    [
      "mf",
      // St. Martin
      "590",
      2
    ],
    [
      "pm",
      // St. Pierre & Miquelon
      "508"
    ],
    [
      "vc",
      // St. Vincent & Grenadines
      "1",
      20,
      ["784"]
    ],
    [
      "sd",
      // Sudan
      "249"
    ],
    [
      "sr",
      // Suriname
      "597"
    ],
    [
      "sj",
      // Svalbard & Jan Mayen
      "47",
      1,
      ["79"]
    ],
    [
      "se",
      // Sweden
      "46"
    ],
    [
      "ch",
      // Switzerland
      "41"
    ],
    [
      "sy",
      // Syria
      "963"
    ],
    [
      "tw",
      // Taiwan
      "886"
    ],
    [
      "tj",
      // Tajikistan
      "992"
    ],
    [
      "tz",
      // Tanzania
      "255"
    ],
    [
      "th",
      // Thailand
      "66"
    ],
    [
      "tl",
      // Timor-Leste
      "670"
    ],
    [
      "tg",
      // Togo
      "228"
    ],
    [
      "tk",
      // Tokelau
      "690"
    ],
    [
      "to",
      // Tonga
      "676"
    ],
    [
      "tt",
      // Trinidad & Tobago
      "1",
      22,
      ["868"]
    ],
    [
      "tn",
      // Tunisia
      "216"
    ],
    [
      "tr",
      // Turkey
      "90"
    ],
    [
      "tm",
      // Turkmenistan
      "993"
    ],
    [
      "tc",
      // Turks & Caicos Islands
      "1",
      23,
      ["649"]
    ],
    [
      "tv",
      // Tuvalu
      "688"
    ],
    [
      "ug",
      // Uganda
      "256"
    ],
    [
      "ua",
      // Ukraine
      "380"
    ],
    [
      "ae",
      // United Arab Emirates
      "971"
    ],
    [
      "gb",
      // United Kingdom
      "44",
      0
    ],
    [
      "us",
      // United States
      "1",
      0
    ],
    [
      "uy",
      // Uruguay
      "598"
    ],
    [
      "vi",
      // U.S. Virgin Islands
      "1",
      24,
      ["340"]
    ],
    [
      "uz",
      // Uzbekistan
      "998"
    ],
    [
      "vu",
      // Vanuatu
      "678"
    ],
    [
      "va",
      // Vatican City
      "39",
      1,
      ["06698"]
    ],
    [
      "ve",
      // Venezuela
      "58"
    ],
    [
      "vn",
      // Vietnam
      "84"
    ],
    [
      "wf",
      // Wallis & Futuna
      "681"
    ],
    [
      "eh",
      // Western Sahara
      "212",
      1,
      ["5288", "5289"]
    ],
    [
      "ye",
      // Yemen
      "967"
    ],
    [
      "zm",
      // Zambia
      "260"
    ],
    [
      "zw",
      // Zimbabwe
      "263"
    ]
  ];
  var allCountries = [];
  for (let i = 0; i < rawCountryData.length; i++) {
    const c = rawCountryData[i];
    allCountries[i] = {
      name: "",
      // this is now populated in the plugin
      iso2: c[0],
      dialCode: c[1],
      priority: c[2] || 0,
      areaCodes: c[3] || null,
      nodeById: {}
    };
  }
  var data_default = allCountries;

  // src/js/intl-tel-input/i18n/en/countries.ts
  var countryTranslations = {
    ad: "Andorra",
    ae: "United Arab Emirates",
    af: "Afghanistan",
    ag: "Antigua & Barbuda",
    ai: "Anguilla",
    al: "Albania",
    am: "Armenia",
    ao: "Angola",
    ar: "Argentina",
    as: "American Samoa",
    at: "Austria",
    au: "Australia",
    aw: "Aruba",
    ax: "\xC5land Islands",
    az: "Azerbaijan",
    ba: "Bosnia & Herzegovina",
    bb: "Barbados",
    bd: "Bangladesh",
    be: "Belgium",
    bf: "Burkina Faso",
    bg: "Bulgaria",
    bh: "Bahrain",
    bi: "Burundi",
    bj: "Benin",
    bl: "St. Barth\xE9lemy",
    bm: "Bermuda",
    bn: "Brunei",
    bo: "Bolivia",
    bq: "Caribbean Netherlands",
    br: "Brazil",
    bs: "Bahamas",
    bt: "Bhutan",
    bw: "Botswana",
    by: "Belarus",
    bz: "Belize",
    ca: "Canada",
    cc: "Cocos (Keeling) Islands",
    cd: "Congo - Kinshasa",
    cf: "Central African Republic",
    cg: "Congo - Brazzaville",
    ch: "Switzerland",
    ci: "C\xF4te d\u2019Ivoire",
    ck: "Cook Islands",
    cl: "Chile",
    cm: "Cameroon",
    cn: "China",
    co: "Colombia",
    cr: "Costa Rica",
    cu: "Cuba",
    cv: "Cape Verde",
    cw: "Cura\xE7ao",
    cx: "Christmas Island",
    cy: "Cyprus",
    cz: "Czechia",
    de: "Germany",
    dj: "Djibouti",
    dk: "Denmark",
    dm: "Dominica",
    do: "Dominican Republic",
    dz: "Algeria",
    ec: "Ecuador",
    ee: "Estonia",
    eg: "Egypt",
    eh: "Western Sahara",
    er: "Eritrea",
    es: "Spain",
    et: "Ethiopia",
    fi: "Finland",
    fj: "Fiji",
    fk: "Falkland Islands",
    fm: "Micronesia",
    fo: "Faroe Islands",
    fr: "France",
    ga: "Gabon",
    gb: "United Kingdom",
    gd: "Grenada",
    ge: "Georgia",
    gf: "French Guiana",
    gg: "Guernsey",
    gh: "Ghana",
    gi: "Gibraltar",
    gl: "Greenland",
    gm: "Gambia",
    gn: "Guinea",
    gp: "Guadeloupe",
    gq: "Equatorial Guinea",
    gr: "Greece",
    gt: "Guatemala",
    gu: "Guam",
    gw: "Guinea-Bissau",
    gy: "Guyana",
    hk: "Hong Kong SAR China",
    hn: "Honduras",
    hr: "Croatia",
    ht: "Haiti",
    hu: "Hungary",
    id: "Indonesia",
    ie: "Ireland",
    il: "Israel",
    im: "Isle of Man",
    in: "India",
    io: "British Indian Ocean Territory",
    iq: "Iraq",
    ir: "Iran",
    is: "Iceland",
    it: "Italy",
    je: "Jersey",
    jm: "Jamaica",
    jo: "Jordan",
    jp: "Japan",
    ke: "Kenya",
    kg: "Kyrgyzstan",
    kh: "Cambodia",
    ki: "Kiribati",
    km: "Comoros",
    kn: "St. Kitts & Nevis",
    kp: "North Korea",
    kr: "South Korea",
    kw: "Kuwait",
    ky: "Cayman Islands",
    kz: "Kazakhstan",
    la: "Laos",
    lb: "Lebanon",
    lc: "St. Lucia",
    li: "Liechtenstein",
    lk: "Sri Lanka",
    lr: "Liberia",
    ls: "Lesotho",
    lt: "Lithuania",
    lu: "Luxembourg",
    lv: "Latvia",
    ly: "Libya",
    ma: "Morocco",
    mc: "Monaco",
    md: "Moldova",
    me: "Montenegro",
    mf: "St. Martin",
    mg: "Madagascar",
    mh: "Marshall Islands",
    mk: "North Macedonia",
    ml: "Mali",
    mm: "Myanmar (Burma)",
    mn: "Mongolia",
    mo: "Macao SAR China",
    mp: "Northern Mariana Islands",
    mq: "Martinique",
    mr: "Mauritania",
    ms: "Montserrat",
    mt: "Malta",
    mu: "Mauritius",
    mv: "Maldives",
    mw: "Malawi",
    mx: "Mexico",
    my: "Malaysia",
    mz: "Mozambique",
    na: "Namibia",
    nc: "New Caledonia",
    ne: "Niger",
    nf: "Norfolk Island",
    ng: "Nigeria",
    ni: "Nicaragua",
    nl: "Netherlands",
    no: "Norway",
    np: "Nepal",
    nr: "Nauru",
    nu: "Niue",
    nz: "New Zealand",
    om: "Oman",
    pa: "Panama",
    pe: "Peru",
    pf: "French Polynesia",
    pg: "Papua New Guinea",
    ph: "Philippines",
    pk: "Pakistan",
    pl: "Poland",
    pm: "St. Pierre & Miquelon",
    pr: "Puerto Rico",
    ps: "Palestinian Territories",
    pt: "Portugal",
    pw: "Palau",
    py: "Paraguay",
    qa: "Qatar",
    re: "R\xE9union",
    ro: "Romania",
    rs: "Serbia",
    ru: "Russia",
    rw: "Rwanda",
    sa: "Saudi Arabia",
    sb: "Solomon Islands",
    sc: "Seychelles",
    sd: "Sudan",
    se: "Sweden",
    sg: "Singapore",
    sh: "St. Helena",
    si: "Slovenia",
    sj: "Svalbard & Jan Mayen",
    sk: "Slovakia",
    sl: "Sierra Leone",
    sm: "San Marino",
    sn: "Senegal",
    so: "Somalia",
    sr: "Suriname",
    ss: "South Sudan",
    st: "S\xE3o Tom\xE9 & Pr\xEDncipe",
    sv: "El Salvador",
    sx: "Sint Maarten",
    sy: "Syria",
    sz: "Eswatini",
    tc: "Turks & Caicos Islands",
    td: "Chad",
    tg: "Togo",
    th: "Thailand",
    tj: "Tajikistan",
    tk: "Tokelau",
    tl: "Timor-Leste",
    tm: "Turkmenistan",
    tn: "Tunisia",
    to: "Tonga",
    tr: "Turkey",
    tt: "Trinidad & Tobago",
    tv: "Tuvalu",
    tw: "Taiwan",
    tz: "Tanzania",
    ua: "Ukraine",
    ug: "Uganda",
    us: "United States",
    uy: "Uruguay",
    uz: "Uzbekistan",
    va: "Vatican City",
    vc: "St. Vincent & Grenadines",
    ve: "Venezuela",
    vg: "British Virgin Islands",
    vi: "U.S. Virgin Islands",
    vn: "Vietnam",
    vu: "Vanuatu",
    wf: "Wallis & Futuna",
    ws: "Samoa",
    ye: "Yemen",
    yt: "Mayotte",
    za: "South Africa",
    zm: "Zambia",
    zw: "Zimbabwe"
  };
  var countries_default = countryTranslations;

  // src/js/intl-tel-input/i18n/en/interface.ts
  var interfaceTranslations = {
    selectedCountryAriaLabel: "Selected country",
    noCountrySelected: "No country selected",
    countryListAriaLabel: "List of countries",
    searchPlaceholder: "Search",
    zeroSearchResults: "No results found",
    oneSearchResult: "1 result found",
    multipleSearchResults: "${count} results found",
    // additional countries (not supported by country-list library)
    ac: "Ascension Island",
    xk: "Kosovo"
  };
  var interface_default = interfaceTranslations;

  // src/js/intl-tel-input/i18n/en/index.ts
  var allTranslations = { ...countries_default, ...interface_default };
  var en_default = allTranslations;

  // src/js/intl-tel-input.ts
  for (let i = 0; i < data_default.length; i++) {
    data_default[i].name = en_default[data_default[i].iso2];
  }
  var id = 0;
  var defaults = {
    //* Whether or not to allow the dropdown.
    allowDropdown: true,
    //* Add a placeholder in the input with an example number for the selected country.
    autoPlaceholder: "polite",
    //* Modify the parentClass.
    containerClass: "",
    //* The order of the countries in the dropdown. Defaults to alphabetical.
    countryOrder: null,
    //* Add a country search input at the top of the dropdown.
    countrySearch: true,
    //* Modify the auto placeholder.
    customPlaceholder: null,
    //* Append menu to specified element.
    dropdownContainer: null,
    //* Don't display these countries.
    excludeCountries: [],
    //* Fix the dropdown width to the input width (rather than being as wide as the longest country name).
    fixDropdownWidth: true,
    //* Format the number as the user types
    formatAsYouType: true,
    //* Format the input value during initialisation and on setNumber.
    formatOnDisplay: true,
    //* geoIp lookup function.
    geoIpLookup: null,
    //* Inject a hidden input with the name returned from this function, and on submit, populate it with the result of getNumber.
    hiddenInput: null,
    //* Internationalise the plugin text e.g. search input placeholder, country names.
    i18n: {},
    //* Initial country.
    initialCountry: "",
    //* Specify the path to the libphonenumber script to enable validation/formatting.
    loadUtilsOnInit: "",
    //* National vs international formatting for numbers e.g. placeholders and displaying existing numbers.
    nationalMode: true,
    //* Display only these countries.
    onlyCountries: [],
    //* Number type to use for placeholders.
    placeholderNumberType: "MOBILE",
    //* Show flags - for both the selected country, and in the country dropdown
    showFlags: true,
    //* Display the international dial code next to the selected flag.
    separateDialCode: false,
    //* Only allow certain chars e.g. a plus followed by numeric digits, and cap at max valid length.
    strictMode: false,
    //* Use full screen popup instead of dropdown for country list.
    useFullscreenPopup: typeof navigator !== "undefined" && typeof window !== "undefined" ? (
      //* We cannot just test screen size as some smartphones/website meta tags will report desktop resolutions.
      //* Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
      /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth <= 500
    ) : false,
    //* Deprecated! Use `loadUtilsOnInit` instead.
    utilsScript: "",
    //* The number type to enforce during validation.
    validationNumberType: "MOBILE"
  };
  var regionlessNanpNumbers = [
    "800",
    "822",
    "833",
    "844",
    "855",
    "866",
    "877",
    "880",
    "881",
    "882",
    "883",
    "884",
    "885",
    "886",
    "887",
    "888",
    "889"
  ];
  var getNumeric = (s) => s.replace(/\D/g, "");
  var normaliseString = (s = "") => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  var isRegionlessNanp = (number) => {
    const numeric = getNumeric(number);
    if (numeric.charAt(0) === "1") {
      const areaCode = numeric.substr(1, 3);
      return regionlessNanpNumbers.indexOf(areaCode) !== -1;
    }
    return false;
  };
  var translateCursorPosition = (relevantChars, formattedValue, prevCaretPos, isDeleteForwards) => {
    if (prevCaretPos === 0 && !isDeleteForwards) {
      return 0;
    }
    let count = 0;
    for (let i = 0; i < formattedValue.length; i++) {
      if (/[+0-9]/.test(formattedValue[i])) {
        count++;
      }
      if (count === relevantChars && !isDeleteForwards) {
        return i + 1;
      }
      if (isDeleteForwards && count === relevantChars + 1) {
        return i;
      }
    }
    return formattedValue.length;
  };
  var createEl = (name, attrs, container) => {
    const el = document.createElement(name);
    if (attrs) {
      Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    }
    if (container) {
      container.appendChild(el);
    }
    return el;
  };
  var forEachInstance = (method, ...args) => {
    const { instances } = intlTelInput;
    Object.values(instances).forEach((instance) => instance[method](...args));
  };
  var Iti = class {
    constructor(input, customOptions = {}) {
      this.id = id++;
      this.telInput = input;
      this.highlightedItem = null;
      this.options = Object.assign({}, defaults, customOptions);
      this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
    }
    //* Can't be private as it's called from intlTelInput convenience wrapper.
    _init() {
      if (this.options.useFullscreenPopup) {
        this.options.fixDropdownWidth = false;
      }
      if (this.options.onlyCountries.length === 1) {
        this.options.initialCountry = this.options.onlyCountries[0];
      }
      if (this.options.separateDialCode) {
        this.options.nationalMode = false;
      }
      if (this.options.allowDropdown && !this.options.showFlags && !this.options.separateDialCode) {
        this.options.nationalMode = false;
      }
      if (this.options.useFullscreenPopup && !this.options.dropdownContainer) {
        this.options.dropdownContainer = document.body;
      }
      this.isAndroid = typeof navigator !== "undefined" ? /Android/i.test(navigator.userAgent) : false;
      this.isRTL = !!this.telInput.closest("[dir=rtl]");
      const showOnDefaultSide = this.options.allowDropdown || this.options.separateDialCode;
      this.showSelectedCountryOnLeft = this.isRTL ? !showOnDefaultSide : showOnDefaultSide;
      if (this.options.separateDialCode) {
        if (this.isRTL) {
          this.originalPaddingRight = this.telInput.style.paddingRight;
        } else {
          this.originalPaddingLeft = this.telInput.style.paddingLeft;
        }
      }
      this.options.i18n = { ...en_default, ...this.options.i18n };
      const autoCountryPromise = new Promise((resolve, reject) => {
        this.resolveAutoCountryPromise = resolve;
        this.rejectAutoCountryPromise = reject;
      });
      const utilsScriptPromise = new Promise((resolve, reject) => {
        this.resolveUtilsScriptPromise = resolve;
        this.rejectUtilsScriptPromise = reject;
      });
      this.promise = Promise.all([autoCountryPromise, utilsScriptPromise]);
      this.selectedCountryData = {};
      this._processCountryData();
      this._generateMarkup();
      this._setInitialState();
      this._initListeners();
      this._initRequests();
    }
    //********************
    //*  PRIVATE METHODS
    //********************
    //* Prepare all of the country data, including onlyCountries, excludeCountries, countryOrder options.
    _processCountryData() {
      this._processAllCountries();
      this._processDialCodes();
      this._translateCountryNames();
      this._sortCountries();
    }
    //* Sort countries by countryOrder option (if present), then name.
    _sortCountries() {
      if (this.options.countryOrder) {
        this.options.countryOrder = this.options.countryOrder.map((country) => country.toLowerCase());
      }
      this.countries.sort((a, b) => {
        const { countryOrder } = this.options;
        if (countryOrder) {
          const aIndex = countryOrder.indexOf(a.iso2);
          const bIndex = countryOrder.indexOf(b.iso2);
          const aIndexExists = aIndex > -1;
          const bIndexExists = bIndex > -1;
          if (aIndexExists || bIndexExists) {
            if (aIndexExists && bIndexExists) {
              return aIndex - bIndex;
            }
            return aIndexExists ? -1 : 1;
          }
        }
        return a.name.localeCompare(b.name);
      });
    }
    //* Add a dial code to this.dialCodeToIso2Map.
    _addToDialCodeMap(iso2, dialCode, priority) {
      if (dialCode.length > this.dialCodeMaxLen) {
        this.dialCodeMaxLen = dialCode.length;
      }
      if (!this.dialCodeToIso2Map.hasOwnProperty(dialCode)) {
        this.dialCodeToIso2Map[dialCode] = [];
      }
      for (let i = 0; i < this.dialCodeToIso2Map[dialCode].length; i++) {
        if (this.dialCodeToIso2Map[dialCode][i] === iso2) {
          return;
        }
      }
      const index = priority !== void 0 ? priority : this.dialCodeToIso2Map[dialCode].length;
      this.dialCodeToIso2Map[dialCode][index] = iso2;
    }
    //* Process onlyCountries or excludeCountries array if present.
    _processAllCountries() {
      const { onlyCountries, excludeCountries } = this.options;
      if (onlyCountries.length) {
        const lowerCaseOnlyCountries = onlyCountries.map(
          (country) => country.toLowerCase()
        );
        this.countries = data_default.filter(
          (country) => lowerCaseOnlyCountries.indexOf(country.iso2) > -1
        );
      } else if (excludeCountries.length) {
        const lowerCaseExcludeCountries = excludeCountries.map(
          (country) => country.toLowerCase()
        );
        this.countries = data_default.filter(
          (country) => lowerCaseExcludeCountries.indexOf(country.iso2) === -1
        );
      } else {
        this.countries = data_default;
      }
    }
    //* Translate Countries by object literal provided on config.
    _translateCountryNames() {
      for (let i = 0; i < this.countries.length; i++) {
        const iso2 = this.countries[i].iso2.toLowerCase();
        if (this.options.i18n.hasOwnProperty(iso2)) {
          this.countries[i].name = this.options.i18n[iso2];
        }
      }
    }
    //* Generate this.dialCodes and this.dialCodeToIso2Map.
    _processDialCodes() {
      this.dialCodes = {};
      this.dialCodeMaxLen = 0;
      this.dialCodeToIso2Map = {};
      for (let i = 0; i < this.countries.length; i++) {
        const c = this.countries[i];
        if (!this.dialCodes[c.dialCode]) {
          this.dialCodes[c.dialCode] = true;
        }
        this._addToDialCodeMap(c.iso2, c.dialCode, c.priority);
      }
      for (let i = 0; i < this.countries.length; i++) {
        const c = this.countries[i];
        if (c.areaCodes) {
          const rootIso2Code = this.dialCodeToIso2Map[c.dialCode][0];
          for (let j = 0; j < c.areaCodes.length; j++) {
            const areaCode = c.areaCodes[j];
            for (let k = 1; k < areaCode.length; k++) {
              const partialDialCode = c.dialCode + areaCode.substr(0, k);
              this._addToDialCodeMap(rootIso2Code, partialDialCode);
              this._addToDialCodeMap(c.iso2, partialDialCode);
            }
            this._addToDialCodeMap(c.iso2, c.dialCode + areaCode);
          }
        }
      }
    }
    //* Generate all of the markup for the plugin: the selected country overlay, and the dropdown.
    _generateMarkup() {
      this.telInput.classList.add("iti__tel-input");
      if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) {
        this.telInput.setAttribute("autocomplete", "off");
      }
      const {
        allowDropdown,
        separateDialCode,
        showFlags,
        containerClass,
        hiddenInput,
        dropdownContainer,
        fixDropdownWidth,
        useFullscreenPopup,
        countrySearch,
        i18n
      } = this.options;
      let parentClass = "iti";
      if (allowDropdown) {
        parentClass += " iti--allow-dropdown";
      }
      if (showFlags) {
        parentClass += " iti--show-flags";
      }
      if (containerClass) {
        parentClass += ` ${containerClass}`;
      }
      if (!useFullscreenPopup) {
        parentClass += " iti--inline-dropdown";
      }
      const wrapper = createEl("div", { class: parentClass });
      this.telInput.parentNode?.insertBefore(wrapper, this.telInput);
      if (allowDropdown || showFlags || separateDialCode) {
        this.countryContainer = createEl(
          "div",
          { class: "iti__country-container" },
          wrapper
        );
        if (this.showSelectedCountryOnLeft) {
          this.countryContainer.style.left = "0px";
        } else {
          this.countryContainer.style.right = "0px";
        }
        if (allowDropdown) {
          this.selectedCountry = createEl(
            "button",
            {
              type: "button",
              class: "iti__selected-country",
              "aria-expanded": "false",
              "aria-label": this.options.i18n.selectedCountryAriaLabel,
              "aria-haspopup": "true",
              "aria-controls": `iti-${this.id}__dropdown-content`,
              "role": "combobox"
            },
            this.countryContainer
          );
          if (this.telInput.disabled) {
            this.selectedCountry.setAttribute("disabled", "true");
          }
        } else {
          this.selectedCountry = createEl(
            "div",
            { class: "iti__selected-country" },
            this.countryContainer
          );
        }
        const selectedCountryPrimary = createEl("div", { class: "iti__selected-country-primary" }, this.selectedCountry);
        this.selectedCountryInner = createEl("div", { class: "iti__flag" }, selectedCountryPrimary);
        this.selectedCountryA11yText = createEl(
          "span",
          { class: "iti__a11y-text" },
          this.selectedCountryInner
        );
        if (allowDropdown) {
          this.dropdownArrow = createEl(
            "div",
            { class: "iti__arrow", "aria-hidden": "true" },
            selectedCountryPrimary
          );
        }
        if (separateDialCode) {
          this.selectedDialCode = createEl(
            "div",
            { class: "iti__selected-dial-code" },
            this.selectedCountry
          );
        }
        if (allowDropdown) {
          const extraClasses = fixDropdownWidth ? "" : "iti--flexible-dropdown-width";
          this.dropdownContent = createEl("div", {
            id: `iti-${this.id}__dropdown-content`,
            class: `iti__dropdown-content iti__hide ${extraClasses}`
          });
          if (countrySearch) {
            this.searchInput = createEl(
              "input",
              {
                type: "text",
                class: "iti__search-input",
                placeholder: i18n.searchPlaceholder,
                role: "combobox",
                "aria-expanded": "true",
                "aria-label": i18n.searchPlaceholder,
                "aria-controls": `iti-${this.id}__country-listbox`,
                "aria-autocomplete": "list",
                "autocomplete": "off"
              },
              this.dropdownContent
            );
            this.searchResultsA11yText = createEl(
              "span",
              { class: "iti__a11y-text" },
              this.dropdownContent
            );
          }
          this.countryList = createEl(
            "ul",
            {
              class: "iti__country-list",
              id: `iti-${this.id}__country-listbox`,
              role: "listbox",
              "aria-label": i18n.countryListAriaLabel
            },
            this.dropdownContent
          );
          this._appendListItems();
          if (countrySearch) {
            this._updateSearchResultsText();
          }
          if (dropdownContainer) {
            let dropdownClasses = "iti iti--container";
            if (useFullscreenPopup) {
              dropdownClasses += " iti--fullscreen-popup";
            } else {
              dropdownClasses += " iti--inline-dropdown";
            }
            this.dropdown = createEl("div", { class: dropdownClasses });
            this.dropdown.appendChild(this.dropdownContent);
          } else {
            this.countryContainer.appendChild(this.dropdownContent);
          }
        }
      }
      wrapper.appendChild(this.telInput);
      this._updateInputPadding();
      if (hiddenInput) {
        const telInputName = this.telInput.getAttribute("name") || "";
        const names = hiddenInput(telInputName);
        if (names.phone) {
          this.hiddenInput = createEl("input", {
            type: "hidden",
            name: names.phone
          });
          wrapper.appendChild(this.hiddenInput);
        }
        if (names.country) {
          this.hiddenInputCountry = createEl("input", {
            type: "hidden",
            name: names.country
          });
          wrapper.appendChild(this.hiddenInputCountry);
        }
      }
    }
    //* For each country: add a country list item <li> to the countryList <ul> container.
    _appendListItems() {
      for (let i = 0; i < this.countries.length; i++) {
        const c = this.countries[i];
        const extraClass = i === 0 ? "iti__highlight" : "";
        const listItem = createEl(
          "li",
          {
            id: `iti-${this.id}__item-${c.iso2}`,
            class: `iti__country ${extraClass}`,
            tabindex: "-1",
            role: "option",
            "data-dial-code": c.dialCode,
            "data-country-code": c.iso2,
            "aria-selected": "false"
          },
          this.countryList
        );
        c.nodeById[this.id] = listItem;
        let content = "";
        if (this.options.showFlags) {
          content += `<div class='iti__flag iti__${c.iso2}'></div>`;
        }
        content += `<span class='iti__country-name'>${c.name}</span>`;
        content += `<span class='iti__dial-code'>+${c.dialCode}</span>`;
        listItem.insertAdjacentHTML("beforeend", content);
      }
    }
    //* Set the initial state of the input value and the selected country by:
    //* 1. Extracting a dial code from the given number
    //* 2. Using explicit initialCountry
    _setInitialState(overrideAutoCountry = false) {
      const attributeValue = this.telInput.getAttribute("value");
      const inputValue = this.telInput.value;
      const useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
      const val = useAttribute ? attributeValue : inputValue;
      const dialCode = this._getDialCode(val);
      const isRegionlessNanpNumber = isRegionlessNanp(val);
      const { initialCountry, geoIpLookup } = this.options;
      const isAutoCountry = initialCountry === "auto" && geoIpLookup;
      if (dialCode && !isRegionlessNanpNumber) {
        this._updateCountryFromNumber(val);
      } else if (!isAutoCountry || overrideAutoCountry) {
        const lowerInitialCountry = initialCountry ? initialCountry.toLowerCase() : "";
        const isValidInitialCountry = lowerInitialCountry && this._getCountryData(lowerInitialCountry, true);
        if (isValidInitialCountry) {
          this._setCountry(lowerInitialCountry);
        } else {
          if (dialCode && isRegionlessNanpNumber) {
            this._setCountry("us");
          } else {
            this._setCountry();
          }
        }
      }
      if (val) {
        this._updateValFromNumber(val);
      }
    }
    //* Initialise the main event listeners: input keyup, and click selected country.
    _initListeners() {
      this._initTelInputListeners();
      if (this.options.allowDropdown) {
        this._initDropdownListeners();
      }
      if ((this.hiddenInput || this.hiddenInputCountry) && this.telInput.form) {
        this._initHiddenInputListener();
      }
    }
    //* Update hidden input on form submit.
    _initHiddenInputListener() {
      this._handleHiddenInputSubmit = () => {
        if (this.hiddenInput) {
          this.hiddenInput.value = this.getNumber();
        }
        if (this.hiddenInputCountry) {
          this.hiddenInputCountry.value = this.getSelectedCountryData().iso2 || "";
        }
      };
      this.telInput.form?.addEventListener(
        "submit",
        this._handleHiddenInputSubmit
      );
    }
    //* initialise the dropdown listeners.
    _initDropdownListeners() {
      this._handleLabelClick = (e) => {
        if (this.dropdownContent.classList.contains("iti__hide")) {
          this.telInput.focus();
        } else {
          e.preventDefault();
        }
      };
      const label = this.telInput.closest("label");
      if (label) {
        label.addEventListener("click", this._handleLabelClick);
      }
      this._handleClickSelectedCountry = () => {
        if (this.dropdownContent.classList.contains("iti__hide") && !this.telInput.disabled && !this.telInput.readOnly) {
          this._openDropdown();
        }
      };
      this.selectedCountry.addEventListener("click", this._handleClickSelectedCountry);
      this._handleCountryContainerKeydown = (e) => {
        const isDropdownHidden = this.dropdownContent.classList.contains("iti__hide");
        if (isDropdownHidden && ["ArrowUp", "ArrowDown", " ", "Enter"].includes(e.key)) {
          e.preventDefault();
          e.stopPropagation();
          this._openDropdown();
        }
        if (e.key === "Tab") {
          this._closeDropdown();
        }
      };
      this.countryContainer.addEventListener(
        "keydown",
        this._handleCountryContainerKeydown
      );
    }
    //* Init many requests: utils script / geo ip lookup.
    _initRequests() {
      let { loadUtilsOnInit, utilsScript, initialCountry, geoIpLookup } = this.options;
      if (!loadUtilsOnInit && utilsScript) {
        console.warn("intl-tel-input: The `utilsScript` option is deprecated and will be removed in a future release! Please use the `loadUtilsOnInit` option instead.");
        loadUtilsOnInit = utilsScript;
      }
      if (loadUtilsOnInit && !intlTelInput.utils) {
        this._handlePageLoad = () => {
          window.removeEventListener("load", this._handlePageLoad);
          intlTelInput.loadUtils(loadUtilsOnInit)?.catch(() => {
          });
        };
        if (intlTelInput.documentReady()) {
          this._handlePageLoad();
        } else {
          window.addEventListener("load", this._handlePageLoad);
        }
      } else {
        this.resolveUtilsScriptPromise();
      }
      const isAutoCountry = initialCountry === "auto" && geoIpLookup;
      if (isAutoCountry && !this.selectedCountryData.iso2) {
        this._loadAutoCountry();
      } else {
        this.resolveAutoCountryPromise();
      }
    }
    //* Perform the geo ip lookup.
    _loadAutoCountry() {
      if (intlTelInput.autoCountry) {
        this.handleAutoCountry();
      } else if (!intlTelInput.startedLoadingAutoCountry) {
        intlTelInput.startedLoadingAutoCountry = true;
        if (typeof this.options.geoIpLookup === "function") {
          this.options.geoIpLookup(
            (iso2 = "") => {
              const iso2Lower = iso2.toLowerCase();
              const isValidIso2 = iso2Lower && this._getCountryData(iso2Lower, true);
              if (isValidIso2) {
                intlTelInput.autoCountry = iso2Lower;
                setTimeout(() => forEachInstance("handleAutoCountry"));
              } else {
                this._setInitialState(true);
                forEachInstance("rejectAutoCountryPromise");
              }
            },
            () => {
              this._setInitialState(true);
              forEachInstance("rejectAutoCountryPromise");
            }
          );
        }
      }
    }
    _openDropdownWithPlus() {
      this._openDropdown();
      this.searchInput.value = "+";
      this._filterCountries("", true);
    }
    //* Initialize the tel input listeners.
    _initTelInputListeners() {
      const { strictMode, formatAsYouType, separateDialCode, formatOnDisplay, allowDropdown, countrySearch } = this.options;
      let userOverrideFormatting = false;
      if (/\p{L}/u.test(this.telInput.value)) {
        userOverrideFormatting = true;
      }
      this._handleInputEvent = (e) => {
        if (this.isAndroid && e?.data === "+" && separateDialCode && allowDropdown && countrySearch) {
          const currentCaretPos = this.telInput.selectionStart || 0;
          const valueBeforeCaret = this.telInput.value.substring(0, currentCaretPos - 1);
          const valueAfterCaret = this.telInput.value.substring(currentCaretPos);
          this.telInput.value = valueBeforeCaret + valueAfterCaret;
          this._openDropdownWithPlus();
          return;
        }
        if (this._updateCountryFromNumber(this.telInput.value)) {
          this._triggerCountryChange();
        }
        const isFormattingChar = e?.data && /[^+0-9]/.test(e.data);
        const isPaste = e?.inputType === "insertFromPaste" && this.telInput.value;
        if (isFormattingChar || isPaste && !strictMode) {
          userOverrideFormatting = true;
        } else if (!/[^+0-9]/.test(this.telInput.value)) {
          userOverrideFormatting = false;
        }
        const disableFormatOnSetNumber = e?.detail && e.detail["isSetNumber"] && !formatOnDisplay;
        if (formatAsYouType && !userOverrideFormatting && !disableFormatOnSetNumber) {
          const currentCaretPos = this.telInput.selectionStart || 0;
          const valueBeforeCaret = this.telInput.value.substring(0, currentCaretPos);
          const relevantCharsBeforeCaret = valueBeforeCaret.replace(/[^+0-9]/g, "").length;
          const isDeleteForwards = e?.inputType === "deleteContentForward";
          const formattedValue = this._formatNumberAsYouType();
          const newCaretPos = translateCursorPosition(relevantCharsBeforeCaret, formattedValue, currentCaretPos, isDeleteForwards);
          this.telInput.value = formattedValue;
          this.telInput.setSelectionRange(newCaretPos, newCaretPos);
        }
      };
      this.telInput.addEventListener("input", this._handleInputEvent);
      if (strictMode || separateDialCode) {
        this._handleKeydownEvent = (e) => {
          if (e.key && e.key.length === 1 && !e.altKey && !e.ctrlKey && !e.metaKey) {
            if (separateDialCode && allowDropdown && countrySearch && e.key === "+") {
              e.preventDefault();
              this._openDropdownWithPlus();
              return;
            }
            if (strictMode) {
              const value = this.telInput.value;
              const alreadyHasPlus = value.charAt(0) === "+";
              const isInitialPlus = !alreadyHasPlus && this.telInput.selectionStart === 0 && e.key === "+";
              const isNumeric = /^[0-9]$/.test(e.key);
              const isAllowedChar = separateDialCode ? isNumeric : isInitialPlus || isNumeric;
              const newValue = value.slice(0, this.telInput.selectionStart) + e.key + value.slice(this.telInput.selectionEnd);
              const newFullNumber = this._getFullNumber(newValue);
              const coreNumber = intlTelInput.utils.getCoreNumber(newFullNumber, this.selectedCountryData.iso2);
              const hasExceededMaxLength = this.maxCoreNumberLength && coreNumber.length > this.maxCoreNumberLength;
              let isChangingDialCode = false;
              if (alreadyHasPlus) {
                const currentCountry = this.selectedCountryData.iso2;
                const newCountry = this._getCountryFromNumber(newFullNumber);
                isChangingDialCode = newCountry !== currentCountry;
              }
              if (!isAllowedChar || hasExceededMaxLength && !isChangingDialCode && !isInitialPlus) {
                e.preventDefault();
              }
            }
          }
        };
        this.telInput.addEventListener("keydown", this._handleKeydownEvent);
      }
    }
    //* Adhere to the input's maxlength attr.
    _cap(number) {
      const max = parseInt(this.telInput.getAttribute("maxlength") || "", 10);
      return max && number.length > max ? number.substr(0, max) : number;
    }
    //* Trigger a custom event on the input.
    _trigger(name, detailProps = {}) {
      const e = new CustomEvent(name, {
        bubbles: true,
        cancelable: true,
        detail: detailProps
      });
      this.telInput.dispatchEvent(e);
    }
    //* Open the dropdown.
    _openDropdown() {
      const { fixDropdownWidth, countrySearch } = this.options;
      if (fixDropdownWidth) {
        this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`;
      }
      this.dropdownContent.classList.remove("iti__hide");
      this.selectedCountry.setAttribute("aria-expanded", "true");
      this._setDropdownPosition();
      if (countrySearch) {
        const firstCountryItem = this.countryList.firstElementChild;
        if (firstCountryItem) {
          this._highlightListItem(firstCountryItem, false);
          this.countryList.scrollTop = 0;
        }
        this.searchInput.focus();
      }
      this._bindDropdownListeners();
      this.dropdownArrow.classList.add("iti__arrow--up");
      this._trigger("open:countrydropdown");
    }
    //* Set the dropdown position
    _setDropdownPosition() {
      if (this.options.dropdownContainer) {
        this.options.dropdownContainer.appendChild(this.dropdown);
      }
      if (!this.options.useFullscreenPopup) {
        const inputPosRelativeToVP = this.telInput.getBoundingClientRect();
        const inputHeight = this.telInput.offsetHeight;
        if (this.options.dropdownContainer) {
          this.dropdown.style.top = `${inputPosRelativeToVP.top + inputHeight}px`;
          this.dropdown.style.left = `${inputPosRelativeToVP.left}px`;
          this._handleWindowScroll = () => this._closeDropdown();
          window.addEventListener("scroll", this._handleWindowScroll);
        }
      }
    }
    //* We only bind dropdown listeners when the dropdown is open.
    _bindDropdownListeners() {
      this._handleMouseoverCountryList = (e) => {
        const listItem = e.target?.closest(".iti__country");
        if (listItem) {
          this._highlightListItem(listItem, false);
        }
      };
      this.countryList.addEventListener(
        "mouseover",
        this._handleMouseoverCountryList
      );
      this._handleClickCountryList = (e) => {
        const listItem = e.target?.closest(".iti__country");
        if (listItem) {
          this._selectListItem(listItem);
        }
      };
      this.countryList.addEventListener("click", this._handleClickCountryList);
      let isOpening = true;
      this._handleClickOffToClose = () => {
        if (!isOpening) {
          this._closeDropdown();
        }
        isOpening = false;
      };
      document.documentElement.addEventListener(
        "click",
        this._handleClickOffToClose
      );
      let query = "";
      let queryTimer = null;
      this._handleKeydownOnDropdown = (e) => {
        if (["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(e.key)) {
          e.preventDefault();
          e.stopPropagation();
          if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            this._handleUpDownKey(e.key);
          } else if (e.key === "Enter") {
            this._handleEnterKey();
          } else if (e.key === "Escape") {
            this._closeDropdown();
          }
        }
        if (!this.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
          e.stopPropagation();
          if (queryTimer) {
            clearTimeout(queryTimer);
          }
          query += e.key.toLowerCase();
          this._searchForCountry(query);
          queryTimer = setTimeout(() => {
            query = "";
          }, 1e3);
        }
      };
      document.addEventListener("keydown", this._handleKeydownOnDropdown);
      if (this.options.countrySearch) {
        const doFilter = () => {
          const inputQuery = this.searchInput.value.trim();
          if (inputQuery) {
            this._filterCountries(inputQuery);
          } else {
            this._filterCountries("", true);
          }
        };
        let keyupTimer = null;
        this._handleSearchChange = () => {
          if (keyupTimer) {
            clearTimeout(keyupTimer);
          }
          keyupTimer = setTimeout(() => {
            doFilter();
            keyupTimer = null;
          }, 100);
        };
        this.searchInput.addEventListener("input", this._handleSearchChange);
        this.searchInput.addEventListener("click", (e) => e.stopPropagation());
      }
    }
    //* Hidden search (countrySearch disabled): Find the first list item whose name starts with the query string.
    _searchForCountry(query) {
      for (let i = 0; i < this.countries.length; i++) {
        const c = this.countries[i];
        const startsWith = c.name.substr(0, query.length).toLowerCase() === query;
        if (startsWith) {
          const listItem = c.nodeById[this.id];
          this._highlightListItem(listItem, false);
          this._scrollTo(listItem);
          break;
        }
      }
    }
    //* Country search enabled: Filter the countries according to the search query.
    _filterCountries(query, isReset = false) {
      let noCountriesAddedYet = true;
      this.countryList.innerHTML = "";
      const normalisedQuery = normaliseString(query);
      for (let i = 0; i < this.countries.length; i++) {
        const c = this.countries[i];
        const normalisedCountryName = normaliseString(c.name);
        const countryInitials = c.name.split(/[^a-zA-ZÀ-ÿа-яА-Я]/).map((word) => word[0]).join("").toLowerCase();
        const fullDialCode = `+${c.dialCode}`;
        if (isReset || normalisedCountryName.includes(normalisedQuery) || fullDialCode.includes(normalisedQuery) || c.iso2.includes(normalisedQuery) || countryInitials.includes(normalisedQuery)) {
          const listItem = c.nodeById[this.id];
          if (listItem) {
            this.countryList.appendChild(listItem);
          }
          if (noCountriesAddedYet) {
            this._highlightListItem(listItem, false);
            noCountriesAddedYet = false;
          }
        }
      }
      if (noCountriesAddedYet) {
        this._highlightListItem(null, false);
      }
      this.countryList.scrollTop = 0;
      this._updateSearchResultsText();
    }
    //* Update search results text (for a11y).
    _updateSearchResultsText() {
      const { i18n } = this.options;
      const count = this.countryList.childElementCount;
      let searchText;
      if (count === 0) {
        searchText = i18n.zeroSearchResults;
      } else if (count === 1) {
        searchText = i18n.oneSearchResult;
      } else {
        searchText = i18n.multipleSearchResults.replace("${count}", count.toString());
      }
      this.searchResultsA11yText.textContent = searchText;
    }
    //* Highlight the next/prev item in the list (and ensure it is visible).
    _handleUpDownKey(key) {
      let next = key === "ArrowUp" ? this.highlightedItem?.previousElementSibling : this.highlightedItem?.nextElementSibling;
      if (!next && this.countryList.childElementCount > 1) {
        next = key === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild;
      }
      if (next) {
        this._scrollTo(next);
        this._highlightListItem(next, false);
      }
    }
    //* Select the currently highlighted item.
    _handleEnterKey() {
      if (this.highlightedItem) {
        this._selectListItem(this.highlightedItem);
      }
    }
    //* Update the input's value to the given val (format first if possible)
    //* NOTE: this is called from _setInitialState, handleUtils and setNumber.
    _updateValFromNumber(fullNumber) {
      let number = fullNumber;
      if (this.options.formatOnDisplay && intlTelInput.utils && this.selectedCountryData) {
        const useNational = this.options.nationalMode || number.charAt(0) !== "+" && !this.options.separateDialCode;
        const { NATIONAL, INTERNATIONAL } = intlTelInput.utils.numberFormat;
        const format = useNational ? NATIONAL : INTERNATIONAL;
        number = intlTelInput.utils.formatNumber(
          number,
          this.selectedCountryData.iso2,
          format
        );
      }
      number = this._beforeSetNumber(number);
      this.telInput.value = number;
    }
    //* Check if need to select a new country based on the given number
    //* Note: called from _setInitialState, keyup handler, setNumber.
    _updateCountryFromNumber(fullNumber) {
      const iso2 = this._getCountryFromNumber(fullNumber);
      if (iso2 !== null) {
        return this._setCountry(iso2);
      }
      return false;
    }
    _getCountryFromNumber(fullNumber) {
      const plusIndex = fullNumber.indexOf("+");
      let number = plusIndex ? fullNumber.substring(plusIndex) : fullNumber;
      const selectedDialCode = this.selectedCountryData.dialCode;
      const isNanp = selectedDialCode === "1";
      if (number && isNanp && number.charAt(0) !== "+") {
        if (number.charAt(0) !== "1") {
          number = `1${number}`;
        }
        number = `+${number}`;
      }
      if (this.options.separateDialCode && selectedDialCode && number.charAt(0) !== "+") {
        number = `+${selectedDialCode}${number}`;
      }
      const dialCode = this._getDialCode(number, true);
      const numeric = getNumeric(number);
      if (dialCode) {
        const iso2Codes = this.dialCodeToIso2Map[getNumeric(dialCode)];
        const alreadySelected = iso2Codes.indexOf(this.selectedCountryData.iso2) !== -1 && numeric.length <= dialCode.length - 1;
        const isRegionlessNanpNumber = selectedDialCode === "1" && isRegionlessNanp(numeric);
        if (!isRegionlessNanpNumber && !alreadySelected) {
          for (let j = 0; j < iso2Codes.length; j++) {
            if (iso2Codes[j]) {
              return iso2Codes[j];
            }
          }
        }
      } else if (number.charAt(0) === "+" && numeric.length) {
        return "";
      } else if ((!number || number === "+") && !this.selectedCountryData.iso2) {
        return this.defaultCountry;
      }
      return null;
    }
    //* Remove highlighting from other list items and highlight the given item.
    _highlightListItem(listItem, shouldFocus) {
      const prevItem = this.highlightedItem;
      if (prevItem) {
        prevItem.classList.remove("iti__highlight");
        prevItem.setAttribute("aria-selected", "false");
      }
      this.highlightedItem = listItem;
      if (this.highlightedItem) {
        this.highlightedItem.classList.add("iti__highlight");
        this.highlightedItem.setAttribute("aria-selected", "true");
        const activeDescendant = this.highlightedItem.getAttribute("id") || "";
        this.selectedCountry.setAttribute("aria-activedescendant", activeDescendant);
        if (this.options.countrySearch) {
          this.searchInput.setAttribute("aria-activedescendant", activeDescendant);
        }
      }
      if (shouldFocus) {
        this.highlightedItem.focus();
      }
    }
    //* Find the country data for the given iso2 code
    //* the ignoreOnlyCountriesOption is only used during init() while parsing the onlyCountries array
    _getCountryData(iso2, allowFail) {
      for (let i = 0; i < this.countries.length; i++) {
        if (this.countries[i].iso2 === iso2) {
          return this.countries[i];
        }
      }
      if (allowFail) {
        return null;
      }
      throw new Error(`No country data for '${iso2}'`);
    }
    //* Update the selected country, dial code (if separateDialCode), placeholder, title, and active list item.
    //* Note: called from _setInitialState, _updateCountryFromNumber, _selectListItem, setCountry.
    _setCountry(iso2) {
      const { separateDialCode, showFlags, i18n } = this.options;
      const prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
      this.selectedCountryData = iso2 ? this._getCountryData(iso2, false) || {} : {};
      if (this.selectedCountryData.iso2) {
        this.defaultCountry = this.selectedCountryData.iso2;
      }
      if (this.selectedCountryInner) {
        let flagClass = "";
        let a11yText = "";
        if (iso2 && showFlags) {
          flagClass = `iti__flag iti__${iso2}`;
          a11yText = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`;
        } else {
          flagClass = "iti__flag iti__globe";
          a11yText = i18n.noCountrySelected;
        }
        this.selectedCountryInner.className = flagClass;
        this.selectedCountryA11yText.textContent = a11yText;
      }
      this._setSelectedCountryTitleAttribute(iso2, separateDialCode);
      if (separateDialCode) {
        const dialCode = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
        this.selectedDialCode.innerHTML = dialCode;
        this._updateInputPadding();
      }
      this._updatePlaceholder();
      this._updateMaxLength();
      return prevCountry.iso2 !== iso2;
    }
    //* Update the input padding to make space for the selected country/dial code.
    _updateInputPadding() {
      if (this.selectedCountry) {
        const selectedCountryWidth = this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth();
        const inputPadding = selectedCountryWidth + 6;
        if (this.showSelectedCountryOnLeft) {
          this.telInput.style.paddingLeft = `${inputPadding}px`;
        } else {
          this.telInput.style.paddingRight = `${inputPadding}px`;
        }
      }
    }
    //* Update the maximum valid number length for the currently selected country.
    _updateMaxLength() {
      const { strictMode, placeholderNumberType, validationNumberType } = this.options;
      const { iso2 } = this.selectedCountryData;
      if (strictMode && intlTelInput.utils) {
        if (iso2) {
          const numberType = intlTelInput.utils.numberType[placeholderNumberType];
          let exampleNumber = intlTelInput.utils.getExampleNumber(
            iso2,
            false,
            numberType,
            true
          );
          let validNumber = exampleNumber;
          while (intlTelInput.utils.isPossibleNumber(exampleNumber, iso2, validationNumberType)) {
            validNumber = exampleNumber;
            exampleNumber += "0";
          }
          const coreNumber = intlTelInput.utils.getCoreNumber(validNumber, iso2);
          this.maxCoreNumberLength = coreNumber.length;
          if (iso2 === "by") {
            this.maxCoreNumberLength = coreNumber.length + 1;
          }
        } else {
          this.maxCoreNumberLength = null;
        }
      }
    }
    _setSelectedCountryTitleAttribute(iso2 = null, separateDialCode) {
      if (!this.selectedCountry) {
        return;
      }
      let title;
      if (iso2 && !separateDialCode) {
        title = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`;
      } else if (iso2) {
        title = this.selectedCountryData.name;
      } else {
        title = "Unknown";
      }
      this.selectedCountry.setAttribute("title", title);
    }
    //* When the input is in a hidden container during initialisation, we must inject some markup
    //* into the end of the DOM to calculate the correct offsetWidth.
    //* NOTE: this is only used when separateDialCode is enabled, so countryContainer and selectedCountry
    //* will definitely exist.
    _getHiddenSelectedCountryWidth() {
      if (this.telInput.parentNode) {
        const containerClone = this.telInput.parentNode.cloneNode(false);
        containerClone.style.visibility = "hidden";
        document.body.appendChild(containerClone);
        const countryContainerClone = this.countryContainer.cloneNode();
        containerClone.appendChild(countryContainerClone);
        const selectedCountryClone = this.selectedCountry.cloneNode(true);
        countryContainerClone.appendChild(selectedCountryClone);
        const width = selectedCountryClone.offsetWidth;
        document.body.removeChild(containerClone);
        return width;
      }
      return 0;
    }
    //* Update the input placeholder to an example number from the currently selected country.
    _updatePlaceholder() {
      const {
        autoPlaceholder,
        placeholderNumberType,
        nationalMode,
        customPlaceholder
      } = this.options;
      const shouldSetPlaceholder = autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && autoPlaceholder === "polite";
      if (intlTelInput.utils && shouldSetPlaceholder) {
        const numberType = intlTelInput.utils.numberType[placeholderNumberType];
        let placeholder = this.selectedCountryData.iso2 ? intlTelInput.utils.getExampleNumber(
          this.selectedCountryData.iso2,
          nationalMode,
          numberType
        ) : "";
        placeholder = this._beforeSetNumber(placeholder);
        if (typeof customPlaceholder === "function") {
          placeholder = customPlaceholder(placeholder, this.selectedCountryData);
        }
        this.telInput.setAttribute("placeholder", placeholder);
      }
    }
    //* Called when the user selects a list item from the dropdown.
    _selectListItem(listItem) {
      const countryChanged = this._setCountry(
        listItem.getAttribute("data-country-code")
      );
      this._closeDropdown();
      this._updateDialCode(listItem.getAttribute("data-dial-code"));
      this.telInput.focus();
      if (countryChanged) {
        this._triggerCountryChange();
      }
    }
    //* Close the dropdown and unbind any listeners.
    _closeDropdown() {
      this.dropdownContent.classList.add("iti__hide");
      this.selectedCountry.setAttribute("aria-expanded", "false");
      this.selectedCountry.removeAttribute("aria-activedescendant");
      if (this.highlightedItem) {
        this.highlightedItem.setAttribute("aria-selected", "false");
      }
      if (this.options.countrySearch) {
        this.searchInput.removeAttribute("aria-activedescendant");
      }
      this.dropdownArrow.classList.remove("iti__arrow--up");
      document.removeEventListener("keydown", this._handleKeydownOnDropdown);
      if (this.options.countrySearch) {
        this.searchInput.removeEventListener("input", this._handleSearchChange);
      }
      document.documentElement.removeEventListener(
        "click",
        this._handleClickOffToClose
      );
      this.countryList.removeEventListener(
        "mouseover",
        this._handleMouseoverCountryList
      );
      this.countryList.removeEventListener("click", this._handleClickCountryList);
      if (this.options.dropdownContainer) {
        if (!this.options.useFullscreenPopup) {
          window.removeEventListener("scroll", this._handleWindowScroll);
        }
        if (this.dropdown.parentNode) {
          this.dropdown.parentNode.removeChild(this.dropdown);
        }
      }
      if (this._handlePageLoad) {
        window.removeEventListener("load", this._handlePageLoad);
      }
      this._trigger("close:countrydropdown");
    }
    //* Check if an element is visible within it's container, else scroll until it is.
    _scrollTo(element) {
      const container = this.countryList;
      const scrollTop = document.documentElement.scrollTop;
      const containerHeight = container.offsetHeight;
      const containerTop = container.getBoundingClientRect().top + scrollTop;
      const containerBottom = containerTop + containerHeight;
      const elementHeight = element.offsetHeight;
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      const elementBottom = elementTop + elementHeight;
      const newScrollTop = elementTop - containerTop + container.scrollTop;
      if (elementTop < containerTop) {
        container.scrollTop = newScrollTop;
      } else if (elementBottom > containerBottom) {
        const heightDifference = containerHeight - elementHeight;
        container.scrollTop = newScrollTop - heightDifference;
      }
    }
    //* Replace any existing dial code with the new one
    //* Note: called from _selectListItem and setCountry
    _updateDialCode(newDialCodeBare) {
      const inputVal = this.telInput.value;
      const newDialCode = `+${newDialCodeBare}`;
      let newNumber;
      if (inputVal.charAt(0) === "+") {
        const prevDialCode = this._getDialCode(inputVal);
        if (prevDialCode) {
          newNumber = inputVal.replace(prevDialCode, newDialCode);
        } else {
          newNumber = newDialCode;
        }
        this.telInput.value = newNumber;
      }
    }
    //* Try and extract a valid international dial code from a full telephone number.
    //* Note: returns the raw string inc plus character and any whitespace/dots etc.
    _getDialCode(number, includeAreaCode) {
      let dialCode = "";
      if (number.charAt(0) === "+") {
        let numericChars = "";
        for (let i = 0; i < number.length; i++) {
          const c = number.charAt(i);
          if (!isNaN(parseInt(c, 10))) {
            numericChars += c;
            if (includeAreaCode) {
              if (this.dialCodeToIso2Map[numericChars]) {
                dialCode = number.substr(0, i + 1);
              }
            } else {
              if (this.dialCodes[numericChars]) {
                dialCode = number.substr(0, i + 1);
                break;
              }
            }
            if (numericChars.length === this.dialCodeMaxLen) {
              break;
            }
          }
        }
      }
      return dialCode;
    }
    //* Get the input val, adding the dial code if separateDialCode is enabled.
    _getFullNumber(overrideVal) {
      const val = overrideVal || this.telInput.value.trim();
      const { dialCode } = this.selectedCountryData;
      let prefix;
      const numericVal = getNumeric(val);
      if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) {
        prefix = `+${dialCode}`;
      } else {
        prefix = "";
      }
      return prefix + val;
    }
    //* Remove the dial code if separateDialCode is enabled also cap the length if the input has a maxlength attribute
    _beforeSetNumber(fullNumber) {
      let number = fullNumber;
      if (this.options.separateDialCode) {
        let dialCode = this._getDialCode(number);
        if (dialCode) {
          dialCode = `+${this.selectedCountryData.dialCode}`;
          const start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
          number = number.substr(start);
        }
      }
      return this._cap(number);
    }
    //* Trigger the 'countrychange' event.
    _triggerCountryChange() {
      this._trigger("countrychange");
    }
    //* Format the number as the user types.
    _formatNumberAsYouType() {
      const val = this._getFullNumber();
      const result = intlTelInput.utils ? intlTelInput.utils.formatNumberAsYouType(val, this.selectedCountryData.iso2) : val;
      const { dialCode } = this.selectedCountryData;
      if (this.options.separateDialCode && this.telInput.value.charAt(0) !== "+" && result.includes(`+${dialCode}`)) {
        const afterDialCode = result.split(`+${dialCode}`)[1] || "";
        return afterDialCode.trim();
      }
      return result;
    }
    //**************************
    //*  SECRET PUBLIC METHODS
    //**************************
    //* This is called when the geoip call returns.
    handleAutoCountry() {
      if (this.options.initialCountry === "auto" && intlTelInput.autoCountry) {
        this.defaultCountry = intlTelInput.autoCountry;
        const hasSelectedCountryOrGlobe = this.selectedCountryData.iso2 || this.selectedCountryInner.classList.contains("iti__globe");
        if (!hasSelectedCountryOrGlobe) {
          this.setCountry(this.defaultCountry);
        }
        this.resolveAutoCountryPromise();
      }
    }
    //* This is called when the utils request completes.
    handleUtils() {
      if (intlTelInput.utils) {
        if (this.telInput.value) {
          this._updateValFromNumber(this.telInput.value);
        }
        if (this.selectedCountryData.iso2) {
          this._updatePlaceholder();
          this._updateMaxLength();
        }
      }
      this.resolveUtilsScriptPromise();
    }
    //********************
    //*  PUBLIC METHODS
    //********************
    //* Remove plugin.
    destroy() {
      const { allowDropdown, separateDialCode } = this.options;
      if (allowDropdown) {
        this._closeDropdown();
        this.selectedCountry.removeEventListener(
          "click",
          this._handleClickSelectedCountry
        );
        this.countryContainer.removeEventListener(
          "keydown",
          this._handleCountryContainerKeydown
        );
        const label = this.telInput.closest("label");
        if (label) {
          label.removeEventListener("click", this._handleLabelClick);
        }
      }
      const { form } = this.telInput;
      if (this._handleHiddenInputSubmit && form) {
        form.removeEventListener("submit", this._handleHiddenInputSubmit);
      }
      this.telInput.removeEventListener("input", this._handleInputEvent);
      if (this._handleKeydownEvent) {
        this.telInput.removeEventListener("keydown", this._handleKeydownEvent);
      }
      this.telInput.removeAttribute("data-intl-tel-input-id");
      if (separateDialCode) {
        if (this.isRTL) {
          this.telInput.style.paddingRight = this.originalPaddingRight;
        } else {
          this.telInput.style.paddingLeft = this.originalPaddingLeft;
        }
      }
      const wrapper = this.telInput.parentNode;
      wrapper?.parentNode?.insertBefore(this.telInput, wrapper);
      wrapper?.parentNode?.removeChild(wrapper);
      delete intlTelInput.instances[this.id];
    }
    //* Get the extension from the current number.
    getExtension() {
      if (intlTelInput.utils) {
        return intlTelInput.utils.getExtension(
          this._getFullNumber(),
          this.selectedCountryData.iso2
        );
      }
      return "";
    }
    //* Format the number to the given format.
    getNumber(format) {
      if (intlTelInput.utils) {
        const { iso2 } = this.selectedCountryData;
        return intlTelInput.utils.formatNumber(
          this._getFullNumber(),
          iso2,
          format
        );
      }
      return "";
    }
    //* Get the type of the entered number e.g. landline/mobile.
    getNumberType() {
      if (intlTelInput.utils) {
        return intlTelInput.utils.getNumberType(
          this._getFullNumber(),
          this.selectedCountryData.iso2
        );
      }
      return -99;
    }
    //* Get the country data for the currently selected country.
    getSelectedCountryData() {
      return this.selectedCountryData;
    }
    //* Get the validation error.
    getValidationError() {
      if (intlTelInput.utils) {
        const { iso2 } = this.selectedCountryData;
        return intlTelInput.utils.getValidationError(this._getFullNumber(), iso2);
      }
      return -99;
    }
    //* Validate the input val
    isValidNumber() {
      if (!this.selectedCountryData.iso2) {
        return false;
      }
      const val = this._getFullNumber();
      const alphaCharPosition = val.search(/\p{L}/u);
      if (alphaCharPosition > -1) {
        const beforeAlphaChar = val.substring(0, alphaCharPosition);
        const beforeAlphaIsValid = this._utilsIsPossibleNumber(beforeAlphaChar);
        const isValid = this._utilsIsPossibleNumber(val);
        return beforeAlphaIsValid && isValid;
      }
      return this._utilsIsPossibleNumber(val);
    }
    _utilsIsPossibleNumber(val) {
      return intlTelInput.utils ? intlTelInput.utils.isPossibleNumber(val, this.selectedCountryData.iso2, this.options.validationNumberType) : null;
    }
    //* Validate the input val (precise)
    isValidNumberPrecise() {
      if (!this.selectedCountryData.iso2) {
        return false;
      }
      const val = this._getFullNumber();
      const alphaCharPosition = val.search(/\p{L}/u);
      if (alphaCharPosition > -1) {
        const beforeAlphaChar = val.substring(0, alphaCharPosition);
        const beforeAlphaIsValid = this._utilsIsValidNumber(beforeAlphaChar);
        const isValid = this._utilsIsValidNumber(val);
        return beforeAlphaIsValid && isValid;
      }
      return this._utilsIsValidNumber(val);
    }
    _utilsIsValidNumber(val) {
      return intlTelInput.utils ? intlTelInput.utils.isValidNumber(val, this.selectedCountryData.iso2) : null;
    }
    //* Update the selected country, and update the input val accordingly.
    setCountry(iso2) {
      const iso2Lower = iso2?.toLowerCase();
      const currentCountry = this.selectedCountryData.iso2;
      const isCountryChange = iso2 && iso2Lower !== currentCountry || !iso2 && currentCountry;
      if (isCountryChange) {
        this._setCountry(iso2Lower);
        this._updateDialCode(this.selectedCountryData.dialCode);
        this._triggerCountryChange();
      }
    }
    //* Set the input value and update the country.
    setNumber(number) {
      const countryChanged = this._updateCountryFromNumber(number);
      this._updateValFromNumber(number);
      if (countryChanged) {
        this._triggerCountryChange();
      }
      this._trigger("input", { isSetNumber: true });
    }
    //* Set the placeholder number typ
    setPlaceholderNumberType(type) {
      this.options.placeholderNumberType = type;
      this._updatePlaceholder();
    }
    setDisabled(disabled) {
      this.telInput.disabled = disabled;
      if (disabled) {
        this.selectedCountry.setAttribute("disabled", "true");
      } else {
        this.selectedCountry.removeAttribute("disabled");
      }
    }
  };
  var loadUtils = (source) => {
    if (!intlTelInput.utils && !intlTelInput.startedLoadingUtilsScript) {
      let loadCall;
      if (typeof source === "string") {
        loadCall = import(
          /* webpackIgnore: true */
          /* @vite-ignore */
          source
        );
      } else if (typeof source === "function") {
        try {
          loadCall = source();
          if (!(loadCall instanceof Promise)) {
            throw new TypeError(`The function passed to loadUtils must return a promise for the utilities module, not ${typeof loadCall}`);
          }
        } catch (error) {
          return Promise.reject(error);
        }
      } else {
        return Promise.reject(new TypeError(`The argument passed to loadUtils must be a URL string or a function that returns a promise for the utilities module, not ${typeof source}`));
      }
      intlTelInput.startedLoadingUtilsScript = true;
      return loadCall.then((module) => {
        const utils = module?.default;
        if (!utils || typeof utils !== "object") {
          if (typeof source === "string") {
            throw new TypeError(`The module loaded from ${source} did not set utils as its default export.`);
          } else {
            throw new TypeError("The loader function passed to loadUtils did not resolve to a module object with utils as its default export.");
          }
        }
        intlTelInput.utils = utils;
        forEachInstance("handleUtils");
        return true;
      }).catch((error) => {
        forEachInstance("rejectUtilsScriptPromise", error);
        throw error;
      });
    }
    return null;
  };
  var intlTelInput = Object.assign(
    (input, options) => {
      const iti = new Iti(input, options);
      iti._init();
      input.setAttribute("data-intl-tel-input-id", iti.id.toString());
      intlTelInput.instances[iti.id] = iti;
      return iti;
    },
    {
      defaults,
      //* Using a static var like this allows us to mock it in the tests.
      documentReady: () => document.readyState === "complete",
      //* Get the country data object.
      getCountryData: () => data_default,
      //* A getter for the plugin instance.
      getInstance: (input) => {
        const id2 = input.getAttribute("data-intl-tel-input-id");
        return id2 ? intlTelInput.instances[id2] : null;
      },
      //* A map from instance ID to instance object.
      instances: {},
      loadUtils,
      startedLoadingUtilsScript: false,
      startedLoadingAutoCountry: false,
      version: "24.6.0"
    }
  );
  var intl_tel_input_default = intlTelInput;
  return __toCommonJS(intl_tel_input_exports);
})();

// UMD
  return factoryOutput.default;
}));


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_intlTelInput_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_intlTelInput_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_intlTelInput_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_intlTelInput_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_intlTelInput_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 5 */
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 8 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 9 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(14), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(15), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(16), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --iti-hover-color: rgba(0, 0, 0, 0.05);
  --iti-border-color: #ccc;
  --iti-dialcode-color: #999;
  --iti-dropdown-bg: white;
  --iti-spacer-horizontal: 8px;
  --iti-flag-height: 12px;
  --iti-flag-width: 16px;
  --iti-border-width: 1px;
  --iti-arrow-height: 4px;
  --iti-arrow-width: 6px;
  --iti-triangle-border: calc(var(--iti-arrow-width) / 2);
  --iti-arrow-padding: 6px;
  --iti-arrow-color: #555;
  --iti-path-flags-1x: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  --iti-path-flags-2x: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  --iti-path-globe-1x: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  --iti-path-globe-2x: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  --iti-flag-sprite-width: 3904px;
  --iti-flag-sprite-height: 12px;
  --iti-mobile-popup-margin: 30px;
}

.iti {
  position: relative;
  display: inline-block;

  --iti-path-flags-1x: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  --iti-path-flags-2x: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  --iti-path-globe-1x: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  --iti-path-globe-2x: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.iti * {
  box-sizing: border-box;
}
.iti__hide {
  display: none;
}
.iti__v-hide {
  visibility: hidden;
}
.iti__a11y-text {
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute;
}
.iti input.iti__tel-input,
.iti input.iti__tel-input[type=text],
.iti input.iti__tel-input[type=tel] {
  position: relative;
  z-index: 0;
  margin: 0 !important;
}
.iti__country-container {
  position: absolute;
  top: 0;
  bottom: 0;
  padding: var(--iti-border-width);
}
.iti__selected-country {
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-radius: 0;
  font-weight: inherit;
  line-height: inherit;
  text-decoration: none;
}
.iti__selected-country-primary {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 var(--iti-arrow-padding) 0 var(--iti-spacer-horizontal);
}
.iti__arrow {
  margin-left: var(--iti-arrow-padding);
  width: 0;
  height: 0;
  border-left: var(--iti-triangle-border) solid transparent;
  border-right: var(--iti-triangle-border) solid transparent;
  border-top: var(--iti-arrow-height) solid var(--iti-arrow-color);
}
[dir=rtl] .iti__arrow {
  margin-right: var(--iti-arrow-padding);
  margin-left: 0;
}
.iti__arrow--up {
  border-top: none;
  border-bottom: var(--iti-arrow-height) solid var(--iti-arrow-color);
}
.iti__dropdown-content {
  border-radius: 3px;
  background-color: var(--iti-dropdown-bg);
}
.iti--inline-dropdown .iti__dropdown-content {
  position: absolute;
  z-index: 2;
  margin-top: 3px;
  margin-left: calc(var(--iti-border-width) * -1);
  border: var(--iti-border-width) solid var(--iti-border-color);
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
}
.iti__search-input {
  width: 100%;
  border-width: 0;
  border-radius: 3px;
}
.iti__search-input + .iti__country-list {
  border-top: 1px solid var(--iti-border-color);
}
.iti__country-list {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.iti--inline-dropdown .iti__country-list {
  max-height: 185px;
}
.iti--flexible-dropdown-width .iti__country-list {
  white-space: nowrap;
}
@media (max-width: 500px) {
  .iti--flexible-dropdown-width .iti__country-list {
    white-space: normal;
  }
}
.iti__country {
  display: flex;
  align-items: center;
  padding: 8px var(--iti-spacer-horizontal);
  outline: none;
}
.iti__dial-code {
  color: var(--iti-dialcode-color);
}
.iti__country.iti__highlight {
  background-color: var(--iti-hover-color);
}
.iti__country-list .iti__flag, .iti__country-name {
  margin-right: var(--iti-spacer-horizontal);
}
[dir=rtl] .iti__country-list .iti__flag, [dir=rtl] .iti__country-name {
  margin-right: 0;
  margin-left: var(--iti-spacer-horizontal);
}
.iti--allow-dropdown .iti__country-container:not(:has(+ input[disabled])):not(:has(+ input[readonly])):hover, .iti--allow-dropdown .iti__country-container:not(:has(+ input[disabled])):not(:has(+ input[readonly])):hover button {
  cursor: pointer;
}
.iti--allow-dropdown .iti__country-container:not(:has(+ input[disabled])):not(:has(+ input[readonly])) .iti__selected-country-primary:hover,
.iti--allow-dropdown .iti__country-container:not(:has(+ input[disabled])):not(:has(+ input[readonly])) .iti__selected-country:has(+ .iti__dropdown-content:hover) .iti__selected-country-primary {
  background-color: var(--iti-hover-color);
}
.iti .iti__selected-dial-code {
  margin-left: 4px;
}
[dir=rtl] .iti .iti__selected-dial-code {
  margin-left: 0;
  margin-right: 4px;
}
.iti--container {
  position: fixed;
  top: -1000px;
  left: -1000px;
  z-index: 1060;
  padding: var(--iti-border-width);
}
.iti--container:hover {
  cursor: pointer;
}

.iti--fullscreen-popup.iti--container {
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  padding: var(--iti-mobile-popup-margin);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.iti--fullscreen-popup .iti__dropdown-content {
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
}
.iti--fullscreen-popup .iti__country {
  padding: 10px 10px;
  line-height: 1.5em;
}

.iti__flag {
  --iti-flag-offset: 100px;
  height: var(--iti-flag-height);
  width: var(--iti-flag-width);
  border-radius: 1px;
  box-shadow: 0px 0px 1px 0px #888;
  background-image: var(--iti-path-flags-1x);
  background-repeat: no-repeat;
  background-position: var(--iti-flag-offset) 0;
  background-size: var(--iti-flag-sprite-width) var(--iti-flag-sprite-height);
}

.iti__ac {
  --iti-flag-offset: 0px;
}

.iti__ad {
  --iti-flag-offset: -16px;
}

.iti__ae {
  --iti-flag-offset: -32px;
}

.iti__af {
  --iti-flag-offset: -48px;
}

.iti__ag {
  --iti-flag-offset: -64px;
}

.iti__ai {
  --iti-flag-offset: -80px;
}

.iti__al {
  --iti-flag-offset: -96px;
}

.iti__am {
  --iti-flag-offset: -112px;
}

.iti__ao {
  --iti-flag-offset: -128px;
}

.iti__ar {
  --iti-flag-offset: -144px;
}

.iti__as {
  --iti-flag-offset: -160px;
}

.iti__at {
  --iti-flag-offset: -176px;
}

.iti__au {
  --iti-flag-offset: -192px;
}

.iti__aw {
  --iti-flag-offset: -208px;
}

.iti__ax {
  --iti-flag-offset: -224px;
}

.iti__az {
  --iti-flag-offset: -240px;
}

.iti__ba {
  --iti-flag-offset: -256px;
}

.iti__bb {
  --iti-flag-offset: -272px;
}

.iti__bd {
  --iti-flag-offset: -288px;
}

.iti__be {
  --iti-flag-offset: -304px;
}

.iti__bf {
  --iti-flag-offset: -320px;
}

.iti__bg {
  --iti-flag-offset: -336px;
}

.iti__bh {
  --iti-flag-offset: -352px;
}

.iti__bi {
  --iti-flag-offset: -368px;
}

.iti__bj {
  --iti-flag-offset: -384px;
}

.iti__bl {
  --iti-flag-offset: -400px;
}

.iti__bm {
  --iti-flag-offset: -416px;
}

.iti__bn {
  --iti-flag-offset: -432px;
}

.iti__bo {
  --iti-flag-offset: -448px;
}

.iti__bq {
  --iti-flag-offset: -464px;
}

.iti__br {
  --iti-flag-offset: -480px;
}

.iti__bs {
  --iti-flag-offset: -496px;
}

.iti__bt {
  --iti-flag-offset: -512px;
}

.iti__bw {
  --iti-flag-offset: -528px;
}

.iti__by {
  --iti-flag-offset: -544px;
}

.iti__bz {
  --iti-flag-offset: -560px;
}

.iti__ca {
  --iti-flag-offset: -576px;
}

.iti__cc {
  --iti-flag-offset: -592px;
}

.iti__cd {
  --iti-flag-offset: -608px;
}

.iti__cf {
  --iti-flag-offset: -624px;
}

.iti__cg {
  --iti-flag-offset: -640px;
}

.iti__ch {
  --iti-flag-offset: -656px;
}

.iti__ci {
  --iti-flag-offset: -672px;
}

.iti__ck {
  --iti-flag-offset: -688px;
}

.iti__cl {
  --iti-flag-offset: -704px;
}

.iti__cm {
  --iti-flag-offset: -720px;
}

.iti__cn {
  --iti-flag-offset: -736px;
}

.iti__co {
  --iti-flag-offset: -752px;
}

.iti__cr {
  --iti-flag-offset: -768px;
}

.iti__cu {
  --iti-flag-offset: -784px;
}

.iti__cv {
  --iti-flag-offset: -800px;
}

.iti__cw {
  --iti-flag-offset: -816px;
}

.iti__cx {
  --iti-flag-offset: -832px;
}

.iti__cy {
  --iti-flag-offset: -848px;
}

.iti__cz {
  --iti-flag-offset: -864px;
}

.iti__de {
  --iti-flag-offset: -880px;
}

.iti__dj {
  --iti-flag-offset: -896px;
}

.iti__dk {
  --iti-flag-offset: -912px;
}

.iti__dm {
  --iti-flag-offset: -928px;
}

.iti__do {
  --iti-flag-offset: -944px;
}

.iti__dz {
  --iti-flag-offset: -960px;
}

.iti__ec {
  --iti-flag-offset: -976px;
}

.iti__ee {
  --iti-flag-offset: -992px;
}

.iti__eg {
  --iti-flag-offset: -1008px;
}

.iti__eh {
  --iti-flag-offset: -1024px;
}

.iti__er {
  --iti-flag-offset: -1040px;
}

.iti__es {
  --iti-flag-offset: -1056px;
}

.iti__et {
  --iti-flag-offset: -1072px;
}

.iti__fi {
  --iti-flag-offset: -1088px;
}

.iti__fj {
  --iti-flag-offset: -1104px;
}

.iti__fk {
  --iti-flag-offset: -1120px;
}

.iti__fm {
  --iti-flag-offset: -1136px;
}

.iti__fo {
  --iti-flag-offset: -1152px;
}

.iti__fr {
  --iti-flag-offset: -1168px;
}

.iti__ga {
  --iti-flag-offset: -1184px;
}

.iti__gb {
  --iti-flag-offset: -1200px;
}

.iti__gd {
  --iti-flag-offset: -1216px;
}

.iti__ge {
  --iti-flag-offset: -1232px;
}

.iti__gf {
  --iti-flag-offset: -1248px;
}

.iti__gg {
  --iti-flag-offset: -1264px;
}

.iti__gh {
  --iti-flag-offset: -1280px;
}

.iti__gi {
  --iti-flag-offset: -1296px;
}

.iti__gl {
  --iti-flag-offset: -1312px;
}

.iti__gm {
  --iti-flag-offset: -1328px;
}

.iti__gn {
  --iti-flag-offset: -1344px;
}

.iti__gp {
  --iti-flag-offset: -1360px;
}

.iti__gq {
  --iti-flag-offset: -1376px;
}

.iti__gr {
  --iti-flag-offset: -1392px;
}

.iti__gt {
  --iti-flag-offset: -1408px;
}

.iti__gu {
  --iti-flag-offset: -1424px;
}

.iti__gw {
  --iti-flag-offset: -1440px;
}

.iti__gy {
  --iti-flag-offset: -1456px;
}

.iti__hk {
  --iti-flag-offset: -1472px;
}

.iti__hn {
  --iti-flag-offset: -1488px;
}

.iti__hr {
  --iti-flag-offset: -1504px;
}

.iti__ht {
  --iti-flag-offset: -1520px;
}

.iti__hu {
  --iti-flag-offset: -1536px;
}

.iti__id {
  --iti-flag-offset: -1552px;
}

.iti__ie {
  --iti-flag-offset: -1568px;
}

.iti__il {
  --iti-flag-offset: -1584px;
}

.iti__im {
  --iti-flag-offset: -1600px;
}

.iti__in {
  --iti-flag-offset: -1616px;
}

.iti__io {
  --iti-flag-offset: -1632px;
}

.iti__iq {
  --iti-flag-offset: -1648px;
}

.iti__ir {
  --iti-flag-offset: -1664px;
}

.iti__is {
  --iti-flag-offset: -1680px;
}

.iti__it {
  --iti-flag-offset: -1696px;
}

.iti__je {
  --iti-flag-offset: -1712px;
}

.iti__jm {
  --iti-flag-offset: -1728px;
}

.iti__jo {
  --iti-flag-offset: -1744px;
}

.iti__jp {
  --iti-flag-offset: -1760px;
}

.iti__ke {
  --iti-flag-offset: -1776px;
}

.iti__kg {
  --iti-flag-offset: -1792px;
}

.iti__kh {
  --iti-flag-offset: -1808px;
}

.iti__ki {
  --iti-flag-offset: -1824px;
}

.iti__km {
  --iti-flag-offset: -1840px;
}

.iti__kn {
  --iti-flag-offset: -1856px;
}

.iti__kp {
  --iti-flag-offset: -1872px;
}

.iti__kr {
  --iti-flag-offset: -1888px;
}

.iti__kw {
  --iti-flag-offset: -1904px;
}

.iti__ky {
  --iti-flag-offset: -1920px;
}

.iti__kz {
  --iti-flag-offset: -1936px;
}

.iti__la {
  --iti-flag-offset: -1952px;
}

.iti__lb {
  --iti-flag-offset: -1968px;
}

.iti__lc {
  --iti-flag-offset: -1984px;
}

.iti__li {
  --iti-flag-offset: -2000px;
}

.iti__lk {
  --iti-flag-offset: -2016px;
}

.iti__lr {
  --iti-flag-offset: -2032px;
}

.iti__ls {
  --iti-flag-offset: -2048px;
}

.iti__lt {
  --iti-flag-offset: -2064px;
}

.iti__lu {
  --iti-flag-offset: -2080px;
}

.iti__lv {
  --iti-flag-offset: -2096px;
}

.iti__ly {
  --iti-flag-offset: -2112px;
}

.iti__ma {
  --iti-flag-offset: -2128px;
}

.iti__mc {
  --iti-flag-offset: -2144px;
}

.iti__md {
  --iti-flag-offset: -2160px;
}

.iti__me {
  --iti-flag-offset: -2176px;
}

.iti__mf {
  --iti-flag-offset: -2192px;
}

.iti__mg {
  --iti-flag-offset: -2208px;
}

.iti__mh {
  --iti-flag-offset: -2224px;
}

.iti__mk {
  --iti-flag-offset: -2240px;
}

.iti__ml {
  --iti-flag-offset: -2256px;
}

.iti__mm {
  --iti-flag-offset: -2272px;
}

.iti__mn {
  --iti-flag-offset: -2288px;
}

.iti__mo {
  --iti-flag-offset: -2304px;
}

.iti__mp {
  --iti-flag-offset: -2320px;
}

.iti__mq {
  --iti-flag-offset: -2336px;
}

.iti__mr {
  --iti-flag-offset: -2352px;
}

.iti__ms {
  --iti-flag-offset: -2368px;
}

.iti__mt {
  --iti-flag-offset: -2384px;
}

.iti__mu {
  --iti-flag-offset: -2400px;
}

.iti__mv {
  --iti-flag-offset: -2416px;
}

.iti__mw {
  --iti-flag-offset: -2432px;
}

.iti__mx {
  --iti-flag-offset: -2448px;
}

.iti__my {
  --iti-flag-offset: -2464px;
}

.iti__mz {
  --iti-flag-offset: -2480px;
}

.iti__na {
  --iti-flag-offset: -2496px;
}

.iti__nc {
  --iti-flag-offset: -2512px;
}

.iti__ne {
  --iti-flag-offset: -2528px;
}

.iti__nf {
  --iti-flag-offset: -2544px;
}

.iti__ng {
  --iti-flag-offset: -2560px;
}

.iti__ni {
  --iti-flag-offset: -2576px;
}

.iti__nl {
  --iti-flag-offset: -2592px;
}

.iti__no {
  --iti-flag-offset: -2608px;
}

.iti__np {
  --iti-flag-offset: -2624px;
}

.iti__nr {
  --iti-flag-offset: -2640px;
}

.iti__nu {
  --iti-flag-offset: -2656px;
}

.iti__nz {
  --iti-flag-offset: -2672px;
}

.iti__om {
  --iti-flag-offset: -2688px;
}

.iti__pa {
  --iti-flag-offset: -2704px;
}

.iti__pe {
  --iti-flag-offset: -2720px;
}

.iti__pf {
  --iti-flag-offset: -2736px;
}

.iti__pg {
  --iti-flag-offset: -2752px;
}

.iti__ph {
  --iti-flag-offset: -2768px;
}

.iti__pk {
  --iti-flag-offset: -2784px;
}

.iti__pl {
  --iti-flag-offset: -2800px;
}

.iti__pm {
  --iti-flag-offset: -2816px;
}

.iti__pr {
  --iti-flag-offset: -2832px;
}

.iti__ps {
  --iti-flag-offset: -2848px;
}

.iti__pt {
  --iti-flag-offset: -2864px;
}

.iti__pw {
  --iti-flag-offset: -2880px;
}

.iti__py {
  --iti-flag-offset: -2896px;
}

.iti__qa {
  --iti-flag-offset: -2912px;
}

.iti__re {
  --iti-flag-offset: -2928px;
}

.iti__ro {
  --iti-flag-offset: -2944px;
}

.iti__rs {
  --iti-flag-offset: -2960px;
}

.iti__ru {
  --iti-flag-offset: -2976px;
}

.iti__rw {
  --iti-flag-offset: -2992px;
}

.iti__sa {
  --iti-flag-offset: -3008px;
}

.iti__sb {
  --iti-flag-offset: -3024px;
}

.iti__sc {
  --iti-flag-offset: -3040px;
}

.iti__sd {
  --iti-flag-offset: -3056px;
}

.iti__se {
  --iti-flag-offset: -3072px;
}

.iti__sg {
  --iti-flag-offset: -3088px;
}

.iti__sh {
  --iti-flag-offset: -3104px;
}

.iti__si {
  --iti-flag-offset: -3120px;
}

.iti__sj {
  --iti-flag-offset: -3136px;
}

.iti__sk {
  --iti-flag-offset: -3152px;
}

.iti__sl {
  --iti-flag-offset: -3168px;
}

.iti__sm {
  --iti-flag-offset: -3184px;
}

.iti__sn {
  --iti-flag-offset: -3200px;
}

.iti__so {
  --iti-flag-offset: -3216px;
}

.iti__sr {
  --iti-flag-offset: -3232px;
}

.iti__ss {
  --iti-flag-offset: -3248px;
}

.iti__st {
  --iti-flag-offset: -3264px;
}

.iti__sv {
  --iti-flag-offset: -3280px;
}

.iti__sx {
  --iti-flag-offset: -3296px;
}

.iti__sy {
  --iti-flag-offset: -3312px;
}

.iti__sz {
  --iti-flag-offset: -3328px;
}

.iti__tc {
  --iti-flag-offset: -3344px;
}

.iti__td {
  --iti-flag-offset: -3360px;
}

.iti__tg {
  --iti-flag-offset: -3376px;
}

.iti__th {
  --iti-flag-offset: -3392px;
}

.iti__tj {
  --iti-flag-offset: -3408px;
}

.iti__tk {
  --iti-flag-offset: -3424px;
}

.iti__tl {
  --iti-flag-offset: -3440px;
}

.iti__tm {
  --iti-flag-offset: -3456px;
}

.iti__tn {
  --iti-flag-offset: -3472px;
}

.iti__to {
  --iti-flag-offset: -3488px;
}

.iti__tr {
  --iti-flag-offset: -3504px;
}

.iti__tt {
  --iti-flag-offset: -3520px;
}

.iti__tv {
  --iti-flag-offset: -3536px;
}

.iti__tw {
  --iti-flag-offset: -3552px;
}

.iti__tz {
  --iti-flag-offset: -3568px;
}

.iti__ua {
  --iti-flag-offset: -3584px;
}

.iti__ug {
  --iti-flag-offset: -3600px;
}

.iti__us {
  --iti-flag-offset: -3616px;
}

.iti__uy {
  --iti-flag-offset: -3632px;
}

.iti__uz {
  --iti-flag-offset: -3648px;
}

.iti__va {
  --iti-flag-offset: -3664px;
}

.iti__vc {
  --iti-flag-offset: -3680px;
}

.iti__ve {
  --iti-flag-offset: -3696px;
}

.iti__vg {
  --iti-flag-offset: -3712px;
}

.iti__vi {
  --iti-flag-offset: -3728px;
}

.iti__vn {
  --iti-flag-offset: -3744px;
}

.iti__vu {
  --iti-flag-offset: -3760px;
}

.iti__wf {
  --iti-flag-offset: -3776px;
}

.iti__ws {
  --iti-flag-offset: -3792px;
}

.iti__xk {
  --iti-flag-offset: -3808px;
}

.iti__ye {
  --iti-flag-offset: -3824px;
}

.iti__yt {
  --iti-flag-offset: -3840px;
}

.iti__za {
  --iti-flag-offset: -3856px;
}

.iti__zm {
  --iti-flag-offset: -3872px;
}

.iti__zw {
  --iti-flag-offset: -3888px;
}

.iti__globe {
  background-image: var(--iti-path-globe-1x);
  background-size: contain;
  background-position: right;
  box-shadow: none;
  height: 19px;
}

@media (min-resolution: 2x) {
  .iti__flag {
    background-image: var(--iti-path-flags-2x);
  }
  .iti__globe {
    background-image: var(--iti-path-globe-2x);
  }
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 11 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 12 */
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ddfa4155922198c5305f.webp";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "11151219817c4593cbfa.webp";

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7fb216c936a98b90918e.webp";

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5dc7e51d6b5d42fc2be4.webp";

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.togglePasswordVisibility = togglePasswordVisibility;
exports.validatePasswordEqualsConfirmPassword = validatePasswordEqualsConfirmPassword;
// Imports
var intl_tel_input_1 = __webpack_require__(1);
__webpack_require__(2);
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
    var toggleIcon = document.getElementById("toggle-icon");
    if (passwordInput && toggleIcon) {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            confirmPasswordInput.type = "text";
            toggleIcon.textContent = "visibility";
        }
        else {
            passwordInput.type = "password";
            confirmPasswordInput.type = "password";
            toggleIcon.textContent = "visibility_off";
        }
    }
}
function addHyphentoPhoneNumber() {
    var _a;
    (_a = document.getElementById("phone-number")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", function (event) {
        var phoneNumber = event.target.value.replace(/-/g, '').replace(/\D/g, '');
        // Remove existing hyphens and non-numeric characters
        // Add hyphens every 3 characters
        var formattedPhoneNumber = "";
        for (var i = 0; i < phoneNumber.length; ++i) {
            if (i === 3 || i === 6) {
                formattedPhoneNumber += "-";
            }
            formattedPhoneNumber += phoneNumber[i];
        }
        event.target.value = formattedPhoneNumber;
    });
}
function validatePasswordEqualsConfirmPassword() {
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
    var passwordValidationWarning = document.getElementById("password-matching-warning");
    if ((passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.value) === (confirmPasswordInput === null || confirmPasswordInput === void 0 ? void 0 : confirmPasswordInput.value)) {
        passwordValidationWarning.textContent = "";
    }
    else {
        passwordValidationWarning.textContent = "*Passwords do not match";
    }
}
// Main
addHyphentoPhoneNumber();
document.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelector("#phone-number");
    if (input) {
        (0, intl_tel_input_1.default)(input, {
            initialCountry: "us",
            loadUtilsOnInit: "./node_modules/intl-tel-input/build/js/utils.js" // Correct path for utils.js
        });
    }
});

})();

/******/ })()
;